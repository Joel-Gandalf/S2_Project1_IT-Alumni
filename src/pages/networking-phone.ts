import { createHeaderPhone } from '../components/header-phone/header-phone';
import { createMainNetworking } from '../components/main-networking/main-networking';
import { createTabBar } from '../components/tab-bar-phone/tab-bar-phone';

export const createNetworkingPhonePage = () => {
    
    const app = document.getElementById('insertApp');

    if (app) {
        
        const headerPhone = createHeaderPhone('Xarxa', true);
        if (headerPhone) app.appendChild(headerPhone);

        const mainNetworkingLaptop = createMainNetworking(true);
        if (mainNetworkingLaptop) app.appendChild(mainNetworkingLaptop);

        const tabBar = createTabBar();
        if (tabBar) app.appendChild(tabBar);
    }
}