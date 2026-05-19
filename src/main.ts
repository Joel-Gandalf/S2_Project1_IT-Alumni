import { showWelcomePage } from './welcome'; 

// Ejecutamos la función de bienvenida de manera segura al cargar la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showWelcomePage);
} else {
    showWelcomePage();
}
