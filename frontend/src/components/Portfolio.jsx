import Container from "./Container";
import useReveal from "../hooks/useReveal";

const projects = [
    {
        title: "Sistema integrado Cometic",
        description: "Página otimizada para conversão com foco em geração de leads.",
        image: "/comitec.png"
    },
    {
        title: "Sistema de Finanças",
        description: "Dashboard completo para gestão de pedidos e clientes.",
        image: "/sistemaWeb.png"
    },
    {
        title: "E-commerce",
        description: "Loja online com checkout otimizado e integração de pagamentos.",
        image: "/ecomerce.png"
    },
];

export default function Portfolio() {
    //animaçaão
    const [ref, isVisible] = useReveal({ threshold: 0.3 });


    return (
        <section ref={ref} className={`py-16 md:py-24 ${isVisible ? "reveal show" : "reveal"} bg-base-100`} id="portfolio">
            <Container>

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                        Projetos que entregam resultado
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Alguns trabalhos desenvolvidos com foco em performance e conversão.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-base-100 hover:scale-[1.02]"
                        >
                            {/* IMAGE */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {project.description}
                                </p>

                                <a
                                    href="#contato"
                                    className="inline-block mt-4 text-primary font-medium hover:underline"
                                >
                                    Quero algo assim →
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}