function generarReporte(tipo) {
    const resultado = document.getElementById("resultado");
    let contenido = "";

    if (tipo === "habitaciones") {
        contenido = `
            <h3>🏨 Habitaciones Disponibles</h3>
            <table>
                <tr><th>N° Habitación</th><th>Tipo</th><th>Precio</th></tr>
                <tr><td>101</td><td>Simple</td><td>$40</td></tr>
                <tr><td>102</td><td>Doble</td><td>$60</td></tr>
                <tr><td>201</td><td>Suite</td><td>$120</td></tr>
            </table>
        `;
    } else if (tipo === "reservas") {
        contenido = `
            <h3>📅 Reservas Activas</h3>
            <table>
                <tr><th>Cliente</th><th>Habitación</th><th>Entrada</th><th>Salida</th></tr>
                <tr><td>Juan Pérez</td><td>102</td><td>2025-10-18</td><td>2025-10-22</td></tr>
                <tr><td>María Torres</td><td>201</td><td>2025-10-20</td><td>2025-10-25</td></tr>
            </table>
        `;
    } else if (tipo === "clientes") {
        contenido = `
            <h3>👥 Clientes Frecuentes</h3>
            <ul>
                <li>Juan Pérez (5 reservas)</li>
                <li>María Torres (4 reservas)</li>
                <li>Carlos Gómez (3 reservas)</li>
            </ul>
        `;
    }

    resultado.innerHTML = contenido;
}
