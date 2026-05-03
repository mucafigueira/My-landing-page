import Container from "./Container";
import useReveal from "../hooks/useReveal";

export default function About() {

    //Aplicação da animação 
    const [ref, isVisible] = useReveal();

    return (
        <section ref={ref} id="sobre" className={`py-16 md:py-24 ${isVisible ? "reveal show" : "reveal"} bg-base-100`}>
            <Container>

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* TEXTO */}
                    <div className="space-y-6">

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                            Mais do que código, foco em resultado
                        </h2>

                        <p className="text-gray-600">
                            Sou desenvolvedor full stack com foco em criação de sistemas,
                            websites e estratégias digitais que geram clientes e aumentam
                            faturamento.
                        </p>

                        <p className="text-gray-600">
                            Trabalho unindo desenvolvimento + tráfego pago, garantindo que
                            não seja apenas bonito, mas que realmente converta.
                        </p>

                        {/* DIFERENCIAIS */}
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                ✔ Foco em conversão e ROI</li>
                            <li>✔ Soluções personalizadas</li>
                            <li>✔ Entrega rápida e objetiva</li>
                            <li>✔ Mentalidade de negócio, não só código</li>
                        </ul>

                        <a
                            href="#contato"
                            className="btn line-gradient text-white border-none mt-4 rounded-md hover:scale-105 transition duration-300"
                        >
                            Falar comigo
                        </a>

                    </div>

                    {/* IMAGEM */}
                    <div>
                        <img
                            src="/preview.webp"
                            alt="Aguinaldo Muca  trabalhando"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>

                </div>

            </Container>
        </section>
    );
}