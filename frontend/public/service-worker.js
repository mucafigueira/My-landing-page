const CACHE_NAME = 'agemuca-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-192.png',
  '/icon-maskable-512.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Arquivos armazenados em cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker ativado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Cache antigo removido:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch - Estratégia: Network First, Fall back to Cache
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignora requisições não-GET
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Clona a resposta para usar no cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Se falhar, tenta do cache
        return caches.match(request).then((cachedResponse) => {
          return cachedResponse || caches.match('/index.html');
        });
      })
  );
});

// Background Sync (opcional - para sincronizar dados offline)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-dados') {
    event.waitUntil(sincronizarDados());
  }
});

async function sincronizarDados() {
  try {
    // Adicione sua lógica de sincronização aqui
    console.log('Dados sincronizados');
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
}
