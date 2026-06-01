import './sign-up.css';
import userIcon from '/src/assets/icons/Sign-up/User.svg';
import mailIcon from '/src/assets/icons/Sign-up/Mail.svg';
import frameIcon from '/src/assets/icons/Sign-up/Frame.svg';
import appleIcon from '/src/assets/icons/Sign-up/Apple.svg';
import googleIcon from '/src/assets/icons/Sign-up/Google.svg';
import fecebookIcon from '/src/assets/icons/Sign-up/Facebook.svg';
import { navigateTo, type Page } from '../../router';
// import type { Page } from '../../router';

export const creteSignUp = (): Element | null => {

  const signUp = document.createElement('div');

  signUp.innerHTML = ` <div class="sign-up-page">
  <div class="general-container">
    <header>
      <h1>Crea un compte</h1>
      <p>Uneix-te a nosaltres per connectar-te i compartir oportunitats!</p>
    </header>
    
    <main>
      <form aria-label="Formulario de registro" action="#" method="post">
        <label><img src="${userIcon}" alt=""><input type="text" name="name" id="name" placeholder="Posa el teu nom" required
            aria-required="true"></label>
        <label><img src="${userIcon}" alt=""><input type="text" name="surname" id="surname" placeholder="Posa el teu cognom"
            required aria-required="true"></label>
        <label><img src="${mailIcon}" alt=""><input type="email" name="email" id="email" placeholder="El teu correu electrònic"
            required aria-required="true"></label>
        <label><img src="${frameIcon}" alt=""><input type="password" name="password" id="password"
            placeholder="Crea una contrasenya" required aria-required="true"></label>
        <label><input type="checkbox" name="acceptTermsConditions" id="check" required aria-required="true">Accepto els
          Termes i Condicions</label>

        <input data-page="home" type="submit" value="Registra’t">
      </form>

      <div class="divider">
        <hr><span>O</span><hr>
      </div>

      <section class="sign-up-with">
        <button data-page="home" type="button"><img src="${appleIcon}" alt="Icono Apple">Continua amb Apple</button>
        <button data-page="home" type="button"><img src="${googleIcon}" alt="Icono Google">Continua amb Google</button>
        <button data-page="home" type="button"><img src="${fecebookIcon}" alt="Icono Facebook">Continua amb Facebook</button>
      </section>

    </main>

    <footer class="sign-up-footer">
      <p>Ja t'has registrat?</p>
      <button data-page="home" type="button" id="logIn">Inicia sessió</button>
    </footer>

  </div>
  </div>`;

  const signUpPageElement = signUp.firstElementChild;

  if (signUpPageElement) {
    const links = signUpPageElement.querySelectorAll('[data-page]');

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const linkto = (link as HTMLElement).dataset.page;
        if (linkto) navigateTo(linkto as Page);
      });
    });
  }

  return signUpPageElement;
}