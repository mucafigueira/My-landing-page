import Container from "./Container";
import { Phone, Mail, Monitor } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="radial-gradient text-white py-12">
            <Container>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* BRAND */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary flex gap-0.8 items-center">
                            <Monitor />
                            DevMuca
                        </h3>
                        <p className="text-sm text-gray-300 text-[1rem]">
                            Desenvolvimento web e soluções digitais focadas em gerar clientes e aumentar faturamento.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div >
                        <h4 className="font-semibold mb-4">Navegação</h4>
                        <ul className="space-y-2 text-sm text-gray-300 text-[1rem]">
                            <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
                            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
                            <li><a href="#portfolio" className="hover:text-primary">Portfólio</a></li>
                            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div classNaame="text-[1rem]">
                        <h4 className="font-semibold mb-4">Contato</h4>

                        <div className="space-y-3 text-sm text-gray-300">

                            <div className="flex items-center gap-2">
                                <Mail size={20} />
                                <span>aguinaldomuca@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone size={20} />
                                <span>+244 934 815 201</span>
                            </div>

                            {/* SOCIALS */}
                            <div className="flex gap-4 pt-2">
                                <a href="#" className="hover:text-primary">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" className="hover:text-primary">
                                    <FaGithub size={20} />
                                </a>
                                <a href="#" className="hover:text-green-600">
                                    <FaWhatsapp size={20} />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} DevMuca. Todos os direitos reservados.
                </div>

            </Container>
        </footer>
    );
}