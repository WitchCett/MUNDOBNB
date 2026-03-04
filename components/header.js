class SiteHeader extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active');
        this.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <div class="logo">
                        <a href="index.html">
                            <img src="https://lh3.googleusercontent.com/aida/AOfcidVNqyD8PYtuTj5P4wH2S16KbO5_ghz-isCMj4TPfl3GunbkFvpeEs8vfchrpdYl7soY5HSlmYtuw76Y4l1_JIIYCybMSU8AxPAP6Pc2kgNrQXlI5o1tyKIashsERFu7cY5WdtRYLgqLEUs36geTSqmM5EZqPyFJ0yaTnyNo3N9cAvH_I_lII2HjG585xTTKM0M4sZWcFT1NBdeMi0wDjy4RSiftfqYRdioVpfLTcudiPuu-o8uB5QDxMpAj" alt="Mundo BNB" style="height: 50px;">
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="index.html" class="nav-link ${activePage === 'inicio' ? 'active' : ''}">Inicio</a></li>
                        <li><a href="servicios.html" class="nav-link ${activePage === 'servicios' ? 'active' : ''}">Servicios</a></li>
                        <li><a href="resultados.html" class="nav-link ${activePage === 'resultados' ? 'active' : ''}">Resultados</a></li>
                        <li><a href="nosotros.html" class="nav-link ${activePage === 'nosotros' ? 'active' : ''}">Nosotros</a></li>
                        <li><a href="contacto.html" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a></li>
                    </ul>
                    <div class="nav-actions">
                        <a href="login.html" class="nav-link" style="font-weight: 700;">Login</a>
                        <a href="agenda.html" class="btn btn-primary">Inicia tu Aplicación</a>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('site-header', SiteHeader);
