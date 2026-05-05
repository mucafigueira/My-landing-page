export default function MessagesTable({ messages }) {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Mensagem</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {messages.map((msg) => (
                        <tr key={msg.id} className="hover:line-gradient">
                            <td>{msg.nome}</td>
                            <td>{msg.email}</td>
                            <td>{msg.telefone}</td>
                            <td>{msg.mensagem}</td>
                            <td>{new Date(msg.data).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}