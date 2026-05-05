import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 min-h-screen radial-gradient  text-white p-6">
            <h2 className="text-xl font-bold mb-6">Admin</h2>

            <ul className="space-y-3">
                <li>
                    <Link to="/admin/dashboard" className="hover:text-primary">
                        Dashboard
                    </Link>
                </li>
            </ul>
        </div>
    );
}