import './welcome.css'
import logoUrl from '/src/assets/icons/Header.svg';
import { navigateTo } from '../../router';
import type { Page } from '../../router';

export const createWelcomePage = (): Element | null => {

  const welcomePage = document.createElement('div');

  welcomePage.innerHTML = ` <div class="container-welcome">
      <header>
        <img src="${logoUrl}" alt="nombre de la aplicación: alumni" class="logo-welcome">
      </header>
      <section>
        <p class="paragraph-hero">Connectant i empoderant a la nostra comunitat global d’alumnes</p>
      </section>
      <section class="join-button-welcome">
        <a data-page="sign-up" href="#" class="join-button">Uneix-te</a>
      </section>
    </div> 
`;

  const welcomePageElement = welcomePage.firstElementChild;

  if (welcomePageElement) {
    const link = welcomePageElement.querySelector('[data-page="sign-up"]');

    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const linkto = (link as HTMLElement).dataset.page;
        if (linkto) navigateTo(linkto as Page);
      });
    }
  }

  return welcomePageElement;
}