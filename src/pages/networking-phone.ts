import { createHeaderPhone } from '../components/header-phone/header-phone';

// cambiar main
import { createMainHomePhone } from "../components/main-home-phone/main-home-phone";
import { createTabBar } from '../components/tab-bar-phone/tab-bar-phone';

export const createNetworkingPhonePage = () => {
    
    const app = document.getElementById('insertApp');

    if (app) {
        
        const headerPhone = createHeaderPhone('Xarxa', true);
        if (headerPhone) app.appendChild(headerPhone);

        const mainHomePhone = createMainHomePhone();
        if (mainHomePhone) app.appendChild(mainHomePhone);

        const tabBar = createTabBar();
        if (tabBar) app.appendChild(tabBar);
    }
}