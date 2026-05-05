import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import MessagesTable from "../../components/admin/MessagesTable";

export default function Dashboard() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const isAuth = localStorage.getItem("auth");

        if (!isAuth) {
            navigate("/admin/login");
            return;
        }

        fetch("https://my-landing-page-backend.onrender.com/messages")
            .then((res) => res.json())
            .then((data) => setMessages(data.data))
            .catch(() => console.error("Erro ao buscar dados"));

    }, []);

    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 p-6">
                <h1 className="text-2xl text-gradient font-bold mb-4">
                    Leads recebidos
                </h1>

                <MessagesTable messages={messages} />
            </div>
        </div>
    );
}