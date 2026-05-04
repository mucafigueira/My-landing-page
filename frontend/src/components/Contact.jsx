import { useState } from "react";
import Container from "./Container";
import { Mail } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // success | error

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Erro ao enviar");

            setStatus("success");
            setForm({ nome: "", email: "", telefone: "", mensagem: "" });

        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contato" className="contactBg py-16 md:py-24 bg-base-200">
            <Container>

                {/* CTA TEXT */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                        Vamos transformar sua ideia em clientes reais
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Preencha o formulário e receba uma resposta com estratégia personalizada.
                    </p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-base-100 rounded-xl shadow-xl  p-8  space-y-4"
                >

                    <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={handleChange}
                        className="input input-bordered border-blue-800 focus:outline-blue-800 w-full"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={form.email}
                        onChange={handleChange}
                        className="input input-bordered border-blue-800 focus:outline-blue-800 w-full"
                        required
                    />

                    <input
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        className="input input-bordered  border-blue-800 focus:outline-blue-800 w-full"
                        required
                    />

                    <textarea
                        name="mensagem"
                        placeholder="Descreva seu projeto"
                        value={form.mensagem}
                        onChange={handleChange}
                        className="textarea textarea-bordered border-blue-800 focus:outline-blue-800 w-full"
                        rows="4"
                        required
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn line-gradient text-white border-none w-full rounded-md hover:scale-105 transition duration-300"
                    >
                        {loading ? "Enviando..." : "Quero uma proposta"}
                    </button>

                    {/* FEEDBACK */}
                    {status === "success" && (
                        <p className="text-green-600 text-sm text-center">
                            Mensagem enviada com sucesso!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-600 text-sm text-center">
                            Erro ao enviar. Tenta novamente.
                        </p>
                    )}

                </form>

            </Container>
        </section>
    );
}