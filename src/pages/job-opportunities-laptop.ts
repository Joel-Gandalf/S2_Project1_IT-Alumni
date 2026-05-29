import { createNavBarProfile } from '../components/nav-bar-profile-laptop/nav-bar-profile-laptop';
// cambiar main
import { createMainHomeLaptop } from "../components/main-home-laptop/main-home-laptop";
import { createFooter } from "../components/footer-laptop/footer";

export const createJobOpportunitiesLaptopPage = () => {

    const app = document.getElementById('insertApp');

    if (app) {
        // meto la llamada a la función en una const pq sino en appendChild estaría añadiendo un resultado diferente al comprobado en el if.
        // Si navBar no es null, es un Element:
        const navBarProfile = createNavBarProfile();
        if (navBarProfile) app.appendChild(navBarProfile);

        const mainHomeLaptop = createMainHomeLaptop();
        if (mainHomeLaptop) app.appendChild(mainHomeLaptop);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}