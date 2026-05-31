import './style.css';
import { createHomeLaptopPage } from "./pages/home-laptop";
import { createWelcomePage } from './pages/welcome-phone/welcome';
import { creteSignUp } from "./pages/sign-up-phone-laptop/sign-up";
import { createHomePhonePage } from './pages/home-phone';

import { createNetworkingLaptopPage } from './pages/networking-laptop';
import { createNetworkingPhonePage } from "./pages/networking-phone";

import { createJobOpportunitiesLaptopPage } from './pages/job-opportunities-laptop';
import { createJobOpportunitiesPhonePage } from "./pages/job-opportunities-phone";

import { initRouter } from "./router";
import { currentPage } from "./router";

// 1. Creamos el objeto de la Media Query a nivel global del archivo
const mediaQuery = window.matchMedia('(max-width: 767px)');

const app = document.getElementById('insertApp');
// Si app no es null:
if (app) {

    const renderMobile = () => {
        switch (currentPage) {
            case 'welcome': 
                const welcomePage = createWelcomePage();    
                if (welcomePage) app.appendChild(welcomePage);
                break;
            case 'sign-up':
                const signUp = creteSignUp();
                if (signUp) app.appendChild(signUp);
                break;
            case 'home': createHomePhonePage();
                break;
            case 'networking': createNetworkingPhonePage();
                break;
            case 'job-opportunities': createJobOpportunitiesPhonePage();
                break;
        }
    }

    const renderDesktop = () => {
        switch (currentPage) {
            case 'welcome' : createHomeLaptopPage();
                break;
            case 'home': createHomeLaptopPage();  
                break;
            case 'sign-up':
                const signUp = creteSignUp();
                if (signUp) app.appendChild(signUp);
                break;
            case 'networking': createNetworkingLaptopPage();
                break;
            case 'job-opportunities': createJobOpportunitiesLaptopPage();
                break;
        }
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

    initRouter(renderApp);

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
