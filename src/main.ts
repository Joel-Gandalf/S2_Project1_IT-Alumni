import './style.css';
import { showWelcomePage } from './welcome';
import { showNavBar } from './nav-bar';
import { showMainHomeLaptop } from "./main-home-laptop";
import { showFooter } from "./footer";

// 1. Creamos el objeto de la Media Query a nivel global del archivo
const mediaQuery = window.matchMedia('(max-width: 767px)');

const renderApp = () => {
    // 2. Evaluamos si en este instante preciso coincide con un móvil
    if (mediaQuery.matches) {
        showWelcomePage();
    } else {
        showNavBar();
        // showMainHomeLaptop();
        // showFooter();
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

