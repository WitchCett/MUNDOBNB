class SiteHeader extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active');
        this.innerHTML = `
            <nav class="navbar">
                <div class="container">
                    <div class="logo" style="display: flex; align-items: center; height: 100%;">
                        <a href="index.html#hero-section" style="display: flex; align-items: center;">
                            <img src="favicon.png" alt="Mundo BNB" style="height: 50px; object-fit: contain; mix-blend-mode: multiply;">
                        </a>
                    </div>
                    <ul class="nav-links">
                        <li><a href="servicios.html" class="nav-link ${activePage === 'servicios' ? 'active' : ''}">Servicios</a></li>
                        <li><a href="resultados.html" class="nav-link ${activePage === 'resultados' ? 'active' : ''}">Resultados</a></li>
                        <li><a href="nosotros.html" class="nav-link ${activePage === 'nosotros' ? 'active' : ''}">Nosotros</a></li>
                        <li><a href="comunidad.html" class="nav-link ${activePage === 'comunidad' ? 'active' : ''}">Comunidad</a></li>
                        <li><a href="contacto.html" class="nav-link ${activePage === 'contacto' ? 'active' : ''}">Contacto</a></li>
                    </ul>
                    <div class="nav-actions">
                        <!-- <a href="login.html" class="nav-link" style="font-weight: 700;">Login</a> -->
                        <a href="agenda.html" class="btn btn-primary btn-header-nav">Inicia tu Aplicación</a>
                    </div>
                </div>
            </nav>

            <!-- Bottom Navigation Bar for Mobile viewports -->
            <div class="bottom-nav">
                <a href="index.html#hero-section" class="bottom-nav-item ${activePage === 'inicio' ? 'active' : ''}">
                    <span class="material-symbols-outlined">home</span>
                    <span>Inicio</span>
                </a>
                <a href="servicios.html" class="bottom-nav-item ${activePage === 'servicios' ? 'active' : ''}">
                    <span class="material-symbols-outlined">room_service</span>
                    <span>Servicios</span>
                </a>
                <a href="resultados.html" class="bottom-nav-item ${activePage === 'resultados' ? 'active' : ''}">
                    <span class="material-symbols-outlined">trending_up</span>
                    <span>Resultados</span>
                </a>
                <a href="comunidad.html" class="bottom-nav-item ${activePage === 'comunidad' ? 'active' : ''}">
                    <span class="material-symbols-outlined">groups</span>
                    <span>Comunidad</span>
                </a>
                <a href="contacto.html" class="bottom-nav-item ${activePage === 'contacto' ? 'active' : ''}">
                    <span class="material-symbols-outlined">chat</span>
                    <span>Contacto</span>
                </a>
            </div>
        `;
    }
}

customElements.define('site-header', SiteHeader);

