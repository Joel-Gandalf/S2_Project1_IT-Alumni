import { createNavBar } from '../components/nav-bar-laptop/nav-bar';
import { createProfileOptions } from "../components/nav-bar-laptop/profile-options";
import { createMainHomeLaptop } from "../components/main-home-laptop/main-home-laptop";
import { createFooter } from "../components/footer-laptop/footer";
import { isAuthentificated } from '../router';

export const createHomeLaptopPage = () => {

    const app = document.getElementById('insertApp');

    if (app) {

        const navBar = createNavBar();
        if (navBar) {
            if (isAuthentificated) {
                const navigationButtons = navBar.querySelector('.navigation-buttons');
                const profileOptions = createProfileOptions();
                if (navigationButtons && profileOptions) {
                    navigationButtons.replaceWith(profileOptions);
                }
            }
            app.appendChild(navBar);
        }

        const mainHomeLaptop = createMainHomeLaptop();
        if (mainHomeLaptop) app.appendChild(mainHomeLaptop);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}