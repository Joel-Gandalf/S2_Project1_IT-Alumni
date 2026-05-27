import './sign-up.css';
import userIcon from './assets/icons/Sign-up/User.svg';
import mailIcon from './assets/icons/Sign-up/Mail.svg';
import frameIcon from './assets/icons/Sign-up/Frame.svg';
import appleIcon from './assets/icons/Sign-up/Apple.svg';
import googleIcon from './assets/icons/Sign-up/Google.svg';
import fecebookIcon from './assets/icons/Sign-up/Facebook.svg';
import backgroundPhoto from './assets/images/sign-up-laptop/rsz_background-sign-up.png';

const creteSignUp = (): Element | null => {

    const signUp = document.createElement('div');

    signUp.innerHTML = `<div class="general-container">
    <header>
      <h1>Crea un compte</h1>
      <p>Uneix-te a nosaltres per connectar-te i compartir oportunitats!</p>
    </header>
    
    <main>
      <form aria-label="Formulario de registro" action="#" method="post">
        <label><img src="" alt=""><input type="text" name="name" id="name" placeholder="Posa el teu nom" required
            aria-required="true"></label>
        <label><img src="" alt=""><input type="text" name="surname" id="surname" placeholder="Posa el teu cognom"
            required aria-required="true"></label>
        <label><img src="" alt=""><input type="email" name="email" id="email" placeholder="El teu correu electrònic"
            required aria-required="true"></label>
        <label><img src="" alt=""><input type="password" name="password" id="password"
            placeholder="Crea una contrasenya" required aria-required="true"></label>
        <label><input type="checkbox" name="acceptTermsConditions" id="check" required aria-required="true">Accepto els
          Termes i Condicions</label>

        <input type="submit" value="Registra’t">
      </form>

      <div class="divider"><span role="separator">o</span></div>

      <section class="sign-up-with">
        <button type="button"><img src="" alt="Icono Apple">Continua amb Apple</button>
        <button type="button"><img src="" alt="Icono Google">Continua amb Google</button>
        <button type="button"><img src="" alt="Icono Facebook">Continua amb Facebook</button>
      </section>

    </main>

    <footer>
      <p>Ja t'has registrat?</p>
      <button type="button" id="logIn">Inicia sessió</button>
    </footer>

  </div>`;

    return signUp.firstElementChild;
}