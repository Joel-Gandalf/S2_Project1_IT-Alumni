import { createNavBar } from '../components/nav-bar-laptop/nav-bar';
import { createProfileOptions } from "../components/nav-bar-laptop/profile-options";
import { createMainJob } from "../components/main-job/main-job";
import { createFooter } from "../components/footer-laptop/footer";

export const createJobOpportunitiesLaptopPage = () => {

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

        const mainJob = createMainJob();
        if (mainJob) app.appendChild(mainJob);

        const footer = createFooter();
        if (footer) app.appendChild(footer);
    }
}