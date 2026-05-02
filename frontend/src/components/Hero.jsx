import Container from "./Container";
import useReveal from "../hooks/useReveal";


export default function Hero() {
    const [ref, isVisible] = useReveal();


    return (
        <section ref={ref} className={`py-16 md:py-24 ${isVisible ? "reveal show" : "reveal"} relative w-full min-h-screen md:h-screen 
        flex items-end md:items-start md:justify-start justify-center
         overflow-hidden pt-0 pb-12 md:pb-0`}>

            {/* IMAGEM DE FUNDO */}


            <div className="absolute inset-0">
                <img
                    src="/bg-mobile.png"
                    alt="Dashboard ou projeto web"
                    className="block sm:hidden w-full h-full object-cover object-left-top"
                />
                <img
                    src="/bg_Portfolio.png"
                    alt="Dashboard ou projeto web"
                    className="hidden sm:block w-full h-full object-cover"
                />

                {/* Efeito de fade no lado esquerdo - mais sutil para mostrar rosto */}
                <div className="absolute inset-0 bg-gradient-to-r from-base-100/70 via-base-100/30 to-transparent opacity-70 md:opacity-60"></div>

                {/* Efeito leve - menor em mobile */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full"></div>
                <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-accent/20 blur-2xl rounded-full"></div>
            </div>

            {/* TEXTO POR CIMA */}
            <div className="relative z-10 w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-0">
                <div className="space-y-4 md:absolute md:top-10 sm:absolute sm:top-10 sm:space-y-6">
                    {/* HEADLINE */}
                    <h1 className="text-2xl text-gray-950 md:mt-10 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        Crio <span className="text-blue-950 font-bold text-gradient">websites e sistemas</span> que
                        realmente geram clientes
                    </h1>

                    {/* SUBHEADLINE */}
                    <p className="text-gray-50 sm:text-gradient font-semibold text-sm  md:text-lg ">
                        Desenvolvimento web + tráfego pago focado em resultado real.
                        Menos estética inútil, mais conversão e vendas.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-0">

                        <a
                            href="#contato"
                            className="btn line-gradient text-white border-none btn-sm sm:btn-md px-4 sm:px-6 rounded-xl hover:scale-105 transition duration-300 w-full sm:w-auto"
                        >
                            Solicitar orçamento
                        </a>

                        <a
                            href="#portfolio"
                            className="btn btn-outline btn-sm sm:btn-md px-4 sm:px-6 rounded-xl hover:scale-105 transition duration-300 w-full sm:w-auto"
                        >
                            Ver projetos
                        </a>

                    </div>

                    {/* PROVA RÁPIDA */}
                    <div ref={ref} className={`text-gray-950 font-semibold flex  sm:flex-row sm:gap-6 gap-2 pt-6 sm:pt-8 text-xs sm:text-sm ${isVisible ? "reveal show" : "reveal"}`}>
                        <span>+20 projetos</span>
                        <span>Foco em ROI</span>
                        <span>Entrega rápida</span>
                    </div>
                </div>
            </div>
        </section>
    );
}