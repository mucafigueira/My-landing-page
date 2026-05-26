// Registra o Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log(' Service Worker registrado com sucesso:', registration);

                // Verifica atualizações
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            console.log('⚡ Nova versão disponível!');
                            // Você pode notificar o usuário aqui
                        }
                    });
                });
            })
            .catch((error) => {
                console.error(' Erro ao registrar Service Worker:', error);
            });
    });
} else {
    console.warn(' Service Worker não suportado neste navegador');
}

// Instalação do PWA (Prompt de instalação)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log(' PWA pronto para instalar');

    // Você pode mostrar um botão "Instalar" aqui
    // Exemplo:
    // document.getElementById('install-button').style.display = 'block';
});

// Função para instalar o PWA (chame quando o usuário clicar no botão)
function instalarPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log(' Usuário aceitou instalar o PWA');
            } else {
                console.log('Usuário rejeitou instalar o PWA');
            }
            deferredPrompt = null;
        });
    }
}

// Detecta quando o PWA foi instalado
window.addEventListener('appinstalled', () => {
    console.log(' PWA foi instalado com sucesso!');
});

// Expõe a função globalmente para usar em botões HTML
window.instalarPWA = instalarPWA;
