import Container from "./Container";
import Stars from "./Stars";
import useReveal from "../hooks/useReveal";

const testimonials = [
    {
        name: "Arão Cangunga",
        role: "loja Online",
        message:
            "Depois do site e das campanhas, comecei a receber clientes todos os dias. Resultado absurdo.",
        image: "/arao.jpg",
    },
    {
        name: "Justino Adolfo Muqueienga",
        role: "Secretário",
        message:
            "O sistema facilitou totalmente minha operação. Hoje consigo vender muito mais com menos esforço.",
        image: "/muqueienga.jpg",
    },
    {
        name: "West Bernardo",
        role: "Consultor",
        message:
            "Profissional direto ao ponto. Entregou rápido e com foco total em resultado.",
        image: "/west.jpg",
    },
];

export default function Testimonials() {
    //animação
    const [ref, isVisible] = useReveal();


    return (
        <section ref={ref} className={`py-16 md:py-24 ${isVisible ? "reveal show" : "reveal"} bg-base-200`}>
            <Container>

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                        Clientes que já tiveram resultados reais
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Feedbacks de pessoas que aplicaram soluções digitais no negócio.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-base-100"
                        >

                            {/* USER */}
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-primary">{item.name}</h4>
                                    <span className="text-sm text-gray-500">
                                        {item.role}
                                    </span>
                                </div>
                            </div>

                            {/* STARS */}
                            <Stars />

                            {/* MESSAGE */}
                            <p className="text-gray-600 text-sm">
                                “{item.message}”
                            </p>

                        </div>
                    ))}

                </div>

            </Container>
        </section>
    );
}