import { createHeaderPhone } from '../components/header-phone/header-phone';
import { createMainJob } from "../components/main-job/main-job";
import { createTabBar } from '../components/tab-bar-phone/tab-bar-phone';

export const createJobOpportunitiesPhonePage = () => {
    
    const app = document.getElementById('insertApp');

    if (app) {
        
        const headerPhone = createHeaderPhone('Portal de feina', true);
        if (headerPhone) app.appendChild(headerPhone);

        const mainJob = createMainJob(true);
        if (mainJob) app.appendChild(mainJob);

        const tabBar = createTabBar();
        if (tabBar) app.appendChild(tabBar);
    }
}