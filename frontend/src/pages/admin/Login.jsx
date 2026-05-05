import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();

        if (user === "admin" && pass === "1234") {
            localStorage.setItem("auth", "true");
            navigate("/admin/dashboard");
        } else {
            alert("Credenciais inválidas");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleLogin}
                className="bg-base-100 p-8 rounded-2xl shadow-md w-80 space-y-4"
            >
                <h2 className="text-xl font-bold text-center">Admin Login</h2>

                <input
                    type="text"
                    placeholder="Usuário"
                    className="input input-bordered w-full"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    className="input input-bordered w-full"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

                <button className="btn btn-primary w-full">
                    Entrar
                </button>
            </form>
        </div>
    );
}