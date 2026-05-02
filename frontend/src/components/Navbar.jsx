import { Menu, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-md fixed py-6 top-0 z-50 px-4 md:px-8">

            {/* LEFT */}
            <div className="flex-1">
                <Link to="/" className="text-xl flex items-center  font-bold text-gradient">
                    <Monitor />
                    DevMuca
                </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden text-xl md:flex gap-6">
                <a href="#sobre" className="hover:text-blue-900 transition">
                    Sobre
                </a>
                <a href="#servicos" className="hover:text-blue-900 transition">
                    Serviços
                </a>
                <a href="#portfolio" className="hover:text-blue-900 transition">
                    Portfólio
                </a>
                <a href="#contato" className="hover:text-blue-900 transition">
                    Contato
                </a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex ml-6">
                <a
                    href="#contato"
                    className="btn line-gradient text-white border-none rounded-md px-5 hover:scale-105 transition duration-300"
                >
                    Falar comigo
                </a>
            </div>

            {/* MOBILE MENU */}
            <div className="dropdown dropdown-end md:hidden">
                <label tabIndex={0} className="btn btn-ghost">
                    <Menu className="text-blue-950" />
                </label>

                <ul
                    tabIndex={0}
                    className="menu dropdown-content text-[18px] mt-3 z-50 p-4 shadow bg-base-100 rounded-box w-52"
                >
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contato">Contato</a></li>

                    <li className="mt-2">
                        <a className="btn text-white line-gradient hover:bg-blue-800 w-full border-none rounded-md">
                            Falar comigo
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}