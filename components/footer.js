class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <img src="https://lh3.googleusercontent.com/aida/AOfcidVNqyD8PYtuTj5P4wH2S16KbO5_ghz-isCMj4TPfl3GunbkFvpeEs8vfchrpdYl7soY5HSlmYtuw76Y4l1_JIIYCybMSU8AxPAP6Pc2kgNrQXlI5o1tyKIashsERFu7cY5WdtRYLgqLEUs36geTSqmM5EZqPyFJ0yaTnyNo3N9cAvH_I_lII2HjG585xTTKM0M4sZWcFT1NBdeMi0wDjy4RSiftfqYRdioVpfLTcudiPuu-o8uB5QDxMpAj" alt="Mundo BNB" style="height: 40px; margin-bottom: 1.5rem;">
                            <p style="color: var(--text-slate); font-size: 0.875rem;">
                                Líderes en gestión tecnológica de alojamientos vacacionales de alto impacto. Elevamos el estándar del hospitality.
                            </p>
                        </div>
                        <div>
                            <h5 class="footer-heading">Empresa</h5>
                            <div class="footer-links">
                                <a href="nosotros.html" class="footer-link">Nosotros</a>
                                <a href="servicios.html" class="footer-link">Servicios</a>
                                <a href="resultados.html" class="footer-link">Resultados</a>
                                <a href="contacto.html" class="footer-link">Contacto</a>
                            </div>
                        </div>
                        <div>
                            <h5 class="footer-heading">Legal</h5>
                            <div class="footer-links">
                                <a href="#" class="footer-link">Términos de Servicio</a>
                                <a href="#" class="footer-link">Política de Privacidad</a>
                                <a href="#" class="footer-link">Cookies</a>
                                <a href="#" class="footer-link">Seguridad</a>
                            </div>
                        </div>
                        <div>
                            <h5 class="footer-heading">Contacto</h5>
                            <div class="footer-links">
                                <a href="mailto:hola@mundobnb.com" class="footer-link">hola@mundobnb.com</a>
                                <span class="footer-link">Madrid, España</span>
                            </div>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #f1f5f9; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center;">
                        <p style="font-size: 0.75rem; color: #94a3b8;">© 2024 Mundo BNB. Todos los derechos reservados.</p>
                        <div style="display: flex; gap: 1rem; color: #cbd5e1;">
                            <span class="material-symbols-outlined">shield</span>
                            <span class="material-symbols-outlined">lock</span>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
