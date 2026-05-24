import './style.css';
import { createWelcomePage } from './welcome';
import { createNavBar } from './nav-bar';
import { createMainHomeLaptop } from "./main-home-laptop";
import { createFooter } from "./footer";

// 1. Creamos el objeto de la Media Query a nivel global del archivo
const mediaQuery = window.matchMedia('(max-width: 767px)');

const app = document.getElementById('insertApp');
// Si app no es null:
if (app) {
    const renderMobile = () => {
        const welcomePage = createWelcomePage();
        // Si welcomePage no es null, es un Element:
        if (welcomePage) app.appendChild(welcomePage);
    }

    const renderDesktop = () => {
        const navBar = createNavBar();
        const mainHomeLaptop = createMainHomeLaptop();
        const footer = createFooter();

        if(navBar) app.appendChild(navBar);
        if(mainHomeLaptop) app.appendChild(mainHomeLaptop);
        if(footer) app.appendChild(footer);
    }

    const renderApp = () => {
        // Limpiar el HTML para que no se sumen los componentes una y otra vez.
        app.innerHTML = '';
        // 2. Evaluamos si en este instante preciso coincide con un móvil
        if (mediaQuery.matches) {
            renderMobile();
        } else {
            renderDesktop();
        }
    };

    // 3. SEÑAL EN VIVO: Escucha constantemente si la pantalla cruza el límite de tamaño
    // Usamos .addEventListener('change', ...) que es el estándar moderno
    mediaQuery.addEventListener('change', () => {
        renderApp();
    });

    // 4. Carga inicial segura cuando el usuario abre(carga) la web por primera vez
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderApp);
    } else {
        renderApp();
    }
}
