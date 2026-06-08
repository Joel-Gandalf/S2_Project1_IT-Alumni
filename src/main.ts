import './style.css';
import { createHomeLaptopPage } from "./pages/home-laptop";
import { createWelcomePage } from './pages/welcome-phone/welcome';
import { creteSignUp } from "./pages/sign-up-phone-laptop/sign-up";
import { createHomePhonePage } from './pages/home-phone';

import { createNetworkingLaptopPage } from './pages/networking-laptop';
import { createNetworkingPhonePage } from "./pages/networking-phone";

import { createJobOpportunitiesLaptopPage } from './pages/job-opportunities-laptop';
import { createJobOpportunitiesPhonePage } from "./pages/job-opportunities-phone";

import { initRouter } from "./router";
import { currentPage } from "./router";
import { isAuthentificated } from './router';

const mediaQuery = window.matchMedia('(max-width: 767px)');

const app = document.getElementById('insertApp');

if (app) {

    const renderMobile = () => {
        switch (currentPage) {
            case 'welcome': 
                const welcomePage = createWelcomePage();    
                if (welcomePage) app.appendChild(welcomePage);
                break;
            case 'sign-up':
                const signUp = creteSignUp();
                if (signUp) app.appendChild(signUp);
                break;
            case 'home': createHomePhonePage();
                break;
            case 'networking':
                if (!isAuthentificated) {
                    alert('Has de registrar-te primer!');
                    createHomePhonePage();
                    return;
                }
                createNetworkingPhonePage();                
                break;
            case 'job-opportunities':
                if(!isAuthentificated) {
                    alert('Has de registrar-te primer!');
                    createHomePhonePage();
                    return;
                }
                createJobOpportunitiesPhonePage();                
                break;
        }
    }

    const renderDesktop = () => {
        switch (currentPage) {
            case 'welcome' : createHomeLaptopPage();
                break;
            case 'home': createHomeLaptopPage();  
                break;
            case 'sign-up':
                const signUp = creteSignUp();
                if (signUp) app.appendChild(signUp);
                break;
            case 'networking': 
                if (!isAuthentificated) {
                    alert('Has de registrar-te primer!');
                    createHomeLaptopPage();
                    return;
                }
                createNetworkingLaptopPage();
                break;
            case 'job-opportunities': 
                if(!isAuthentificated) {
                    alert('Has de registrar-te primer!');
                    createHomeLaptopPage();
                    return;
                }
                createJobOpportunitiesLaptopPage();
                break;
        }
    }

    const renderApp = () => {
        app.innerHTML = '';

        if (mediaQuery.matches) {
            renderMobile();
        } else {
            renderDesktop();
        }
    };

    initRouter(renderApp);

    mediaQuery.addEventListener('change', () => {
        renderApp();
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderApp);
    } else {
        renderApp();
    }
}
