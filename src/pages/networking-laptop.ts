import { createNavBar } from '../components/nav-bar-laptop/nav-bar';
import { createProfileOptions } from "../components/nav-bar-laptop/profile-options";
import { createMainNetworking } from '../components/main-networking/main-networking';
import { createFooter } from "../components/footer-laptop/footer";

export const createNetworkingLaptopPage = () => {

    const app = document.getElementById('insertApp');

    if (app) {

        const navBar = createNavBar();

        if (navBar) {

            const navigationButtons = navBar.querySelector('.navigation-buttons');
            const profileOptions = createProfileOptions();
            if (navigationButtons && profileOptions) {
                navigationButtons.replaceWith(profileOptions);
            }

            app.appendChild(navBar);
        }

        const mainNetworking = createMainNetworking();
        if (mainNetworking) app.appendChild(mainNetworking);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}