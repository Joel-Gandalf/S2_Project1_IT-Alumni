import { createNavBar } from '../components/nav-bar-laptop/nav-bar';
import { createMainHomeLaptop } from "../components/main-home-laptop/main-home-laptop";
import { createFooter } from "../components/footer-laptop/footer";

export const createHomeLaptopPage = () => {

    const app = document.getElementById('insertApp');

    if (app) {
        // meto la llamada a la función en una const pq sino en appendChild estaría añadiendo un resultado diferente al comprobado en el if.
        // Si navBar no es null, es un Element:
        const navBar = createNavBar();
        if (navBar) app.appendChild(navBar);

        const mainHomeLaptop = createMainHomeLaptop();
        if (mainHomeLaptop) app.appendChild(mainHomeLaptop);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}