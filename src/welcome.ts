import './welcome.css'
import logoUrl from '/src/assets/icons/Header.svg';

export const showWelcomePage = () => {
    const welcomePage = document.getElementById('insertApp');

    if (welcomePage) {
        welcomePage.innerHTML = ` <div class="container-welcome">
      <header>
        <img src="${logoUrl}" alt="nombre de la aplicación: alumni" class="logo-welcome">
      </header>
      <section>
        <p class="paragraph-hero">Connectant i empoderant a la nostra comunitat global d’alumnes</p>
      </section>
      <section class="join-button-welcome">
        <a href="#" class="join-button">Uneix-te</a>
      </section>
    </div> 
`;
    }
}