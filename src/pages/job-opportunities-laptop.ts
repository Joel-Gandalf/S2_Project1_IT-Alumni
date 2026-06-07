import { createNavBar } from '../components/nav-bar-laptop/nav-bar';
import { createProfileOptions } from "../components/nav-bar-laptop/profile-options";
// cambiar main
import { createMainJob } from "../components/main-job/main-job";
import { createFooter } from "../components/footer-laptop/footer";

export const createJobOpportunitiesLaptopPage = () => {

    const app = document.getElementById('insertApp');

    if (app) {
        // meto la llamada a la función en una const pq sino en appendChild estaría añadiendo un resultado diferente al comprobado en el if.
        // Si navBar no es null, es un Element:
        const navBar = createNavBar();
        if (navBar) {
            // Uso querySelector pq getElementByClassName devuelve un HTMLCollection no Element. Y HTMLCollection NO TIENE el método replaceWith. 
            // a demás getElementByClassName nunca devuelve null, si no hay nada devuelve HTMLCollection vacío. El if de comprobación no valdría para nada. 
            const navigationButtons = navBar.querySelector('.navigation-buttons');
            const profileOptions = createProfileOptions();
            if (navigationButtons && profileOptions) {
                navigationButtons.replaceWith(profileOptions);
            }

            app.appendChild(navBar);
        }

        const mainJob = createMainJob();
        if (mainJob) app.appendChild(mainJob);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}