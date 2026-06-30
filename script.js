document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formContato");
    const feedbackDiv = document.getElementById("feedbackForm");

    if (form) {
        form.addEventListener("submit", function (event) {
        
            event.preventDefault();

            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
p
            feedbackDiv.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Obrigado, ${nome}!</strong> Sua solicitação de orçamento foi recebida com sucesso. Responderemos em até 24h no e-mail: ${email}.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;

            form.reset();
        });
    }

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const menuToggle = document.getElementById("navbarNav");
    
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            if (menuToggle.classList.contains("show")) {
                const bSCollapse = new bootstrap.Collapse(menuToggle);
                bSCollapse.toggle();
            }
        });
    });
});