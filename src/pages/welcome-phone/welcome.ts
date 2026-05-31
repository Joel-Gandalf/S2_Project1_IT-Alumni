import './welcome.css'
import logoUrl from '/src/assets/icons/Header.svg';
import { navigateTo } from '../../router';
import type { Page } from '../../router';
// USAR import type para importar tipos
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
    welcomePageElement.addEventListener("click", (e) => {
      e.preventDefault();
      const link = welcomePageElement.querySelector('[data-page="sign-up"]');

      if (link) {
        const linkto = (link as HTMLElement).dataset.page;
        // if (linkto) navigateTo(linkto as any); más inseguro.
        if (linkto) navigateTo(linkto as Page);
      }
    });
  }

  return welcomePageElement;
}

// El as HTMLElement es necesario porque querySelector devuelve Element y dataset pertenece a HTMLElement

// El as HTMLElement es un casteo de tipo, le dice a TypeScript "confía en mí, esto es un HTMLElement". Pero no resuelve el problema de que link pueda ser null en tiempo de ejecución. Si querySelector no encuentra el elemento y link es null, link.dataset lanzaría un error en el navegador aunque TypeScript no se queje.
// El if (link) es la comprobación real en tiempo de ejecución para evitar ese error.

//AS PAGE y IMPORT TYPE {Pge}: Porque navigateTo espera un valor de tipo Page ('home' | 'sign-up' | 'networking' | 'job-opportunities'), pero link.dataset.page devuelve string | undefined.
// TypeScript no puede verificar que ese string sea exactamente uno de los valores del tipo Page, así que se queja.

// CASTEO (o CAST) es decirle a TypeScript "trata este valor como si fuera de este tipo concreto", aunque TypeScript no pueda verificarlo por sí solo.
// Con  AS  le dices "confía en mí, sé que este es un valor válido". TypeScript te cree y deja de quejarse, pero la responsabilidad de que sea correcto es tuya.