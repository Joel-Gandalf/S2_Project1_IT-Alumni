import './main-home-phone.css';
import networkingPhoto from '/src/assets/images/main-phone/redexalumnos.png';
import jobPortalPhoto from '/src/assets/images/main-phone/jobportal.png';
import { navigateTo, type Page } from '../../router';

export const createMainHomePhone = (): Element | null => {

  const mainHomePhone = document.createElement('div');

  mainHomePhone.innerHTML = `    
    <main class="container-main">
      <div class="container-link">
        <img src="${networkingPhoto}" alt="Foto red de exalumnos">
        <h2>Xarxa</h2>
        <p>Connecta amb professionals del teu camp.</p>
        <a data-page="networking" href="#" aria-label="Ir a red de exalumnos">Explora</a>
      </div>
      <div class="container-link">
        <img src="${jobPortalPhoto}" alt="Foto portal laboral">
        <h2>Oportunitats de feina</h2>
        <p>Descobreix ofertes de treball adaptades a les teves habilitats.</p>
        <a data-page="job-opportunities" href="#" aria-label="Ir a búsqueda de empleo">Cerca Feines</a>
      </div>
    </main>
    `;

  const mainHomePhoneElement = mainHomePhone.firstElementChild;

  if (mainHomePhoneElement) {
    const links = mainHomePhoneElement.querySelectorAll('[data-page]');

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const linkto = (link as HTMLElement).dataset.page;
        if (linkto) navigateTo(linkto as Page);
      });
    });
  }

  return mainHomePhoneElement;
}