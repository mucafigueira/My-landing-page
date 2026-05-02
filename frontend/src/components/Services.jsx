import Container from "./Container";
import useReveal from "../hooks/useReveal";

const services = [
    {
        title: "Desenvolvimento Web",
        description:
            "Criação de sites rápidos, modernos e focados em conversão de clientes.",
        icon: "💻",
    },
    {
        title: "Tráfego Pago",
        description:
            "Campanhas estratégicas para gerar leads qualificados e vendas.",
        icon: "📈",
    },
    {
        title: "Sistemas e Automação",
        description:
            "Soluções personalizadas para automatizar processos e escalar seu negócio.",
        icon: "⚙️",
    },
];

export default function Services() {
    //animação
    const [ref, isVisible] = useReveal();



    return (
        <section ref={ref} className={`py-16 md:py-24 ${isVisible ? "reveal show" : "reveal"} bg-base-200`} id="servicos">
            <Container>

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                        Serviços que geram resultado
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Não é só sobre tecnologia. É sobre aumentar faturamento e eficiência.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-base-100 hover:scale-105"
                        >
                            {/* ICON */}
                            <div className="text-4xl mb-4">
                                {service.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-xl font-semibold mb-2">
                                {service.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-gray-600">
                                {service.description}
                            </p>

                            {/* CTA */}
                            <a
                                href="#contato"
                                className="inline-block mt-4 text-primary font-medium hover:underline"
                            >
                                Solicitar →
                            </a>
                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}