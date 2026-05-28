import './style.css';
import { createWelcomePage } from './pages/welcome-phone/welcome';
import { createNavBar } from './components/nav-bar-laptop/nav-bar';
import { createMainHomeLaptop } from "./components/main-home-laptop/main-home-laptop";
import { createFooter } from "./components/footer-laptop/footer";
import { createHeaderPhone } from './components/header-phone/header-phone';
import { createTabBar } from './components/tab-bar-phone/tab-bar-phone';
import { createMainHomePhone } from "./components/main-home-phone/main-home-phone";
import { creteSignUp } from "./pages/sign-up-phone-laptop/sign-up";

// 1. Creamos el objeto de la Media Query a nivel global del archivo
const mediaQuery = window.matchMedia('(max-width: 767px)');

const app = document.getElementById('insertApp');
// Si app no es null:
if (app) {
    const renderMobile = () => {
        // const welcomePage = createWelcomePage();
        // Si welcomePage no es null, es un Element:
        // if (welcomePage) app.appendChild(welcomePage);

        // const headerPhone = createHeaderPhone('Inici');
        // const tabBar = createTabBar();
        // const mainHomePhone = createMainHomePhone();

        // if (headerPhone) app.appendChild(headerPhone);
        // if (mainHomePhone) app.appendChild(mainHomePhone);
        // if (tabBar) app.appendChild(tabBar);

        const signUp = creteSignUp();
        if (signUp) app.appendChild(signUp);
    }

    // const renderDesktop = () => {
    //     const navBar = createNavBar();
    //     const mainHomeLaptop = createMainHomeLaptop();
    //     const footer = createFooter();

    //     if(navBar) app.appendChild(navBar);
    //     if(mainHomeLaptop) app.appendChild(mainHomeLaptop);
    //     if(footer) app.appendChild(footer);
    // }

    // const renderApp = () => {
        // Limpiar el HTML para que no se sumen los componentes una y otra vez.
        // app.innerHTML = '';
        // 2. Evaluamos si en este instante preciso coincide con un móvil
    //     if (mediaQuery.matches) {
    //         renderMobile();
    //     } else {
    //         renderDesktop();
    //     }
    // };

    // 3. SEÑAL EN VIVO: Escucha constantemente si la pantalla cruza el límite de tamaño
    // Usamos .addEventListener('change', ...) que es el estándar moderno
    // mediaQuery.addEventListener('change', () => {
    //     renderApp();
    // });

    // 4. Carga inicial segura cuando el usuario abre(carga) la web por primera vez
    // if (document.readyState === 'loading') {
    //     document.addEventListener('DOMContentLoaded', renderApp);
    // } else {
    //     renderApp();
    // }


     if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderMobile);
    } else {
        renderMobile();
    }
}
