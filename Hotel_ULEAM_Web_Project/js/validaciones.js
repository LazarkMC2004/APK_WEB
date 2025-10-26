document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que se recargue la página por defecto
            let valid = true;

            form.querySelectorAll('input[required], select[required]').forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '1px solid #ccc';
                }
            });

            // Validación general
            if (!valid) {
                alert('Por favor, complete todos los campos obligatorios.');
                return;
            }

            // --- Validación de inicio de sesión ---
            if (form.id === "loginForm") {
                const usuario = document.getElementById("usuario").value;
                const password = document.getElementById("password").value;

                // Puedes cambiar estos valores por los que tú quieras
                if (usuario === "admin" && password === "1234") {
                    alert("Bienvenido al sistema Hotel ULEAM");
                    window.location.href = "dashboard.html"; // Redirige al panel principal
                } else {
                    alert("Usuario o contraseña incorrectos");
                }
                return;
            }

            // Para otros formularios (habitaciones, reservas, etc.)
            alert("Formulario enviado correctamente ✅");
            form.reset();
        });
    });
});
