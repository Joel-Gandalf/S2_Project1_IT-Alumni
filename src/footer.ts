import './footer.css';
import iconRegisterfooter from '/src/assets/icons/Footer/Mail.png';
import basicLogo from "/src/assets/icons/Footer/simple-logo.png";
import lettersLogo from "/src/assets/icons/Footer/lumni.png";
import iconFacebook from "/src/assets/icons/Footer/SocialNetwork/LogoFacebook.png";
import iconLinkedin from "/src/assets/icons/Footer/SocialNetwork/LogoLinkedin.png";
import iconYoutube from "/src/assets/icons/Footer/SocialNetwork/LogoYoutube.png";

export const createFooter = (): Element | null => {
  const footer = document.createElement('div');

  footer.innerHTML = ` <footer>
    <section class="subscription-newsletter">
      <p>"No et perdis res, subscriu-te!"</p>
      <form class="form-footer" method="post">
        <div class="input-email">
            <img src="${iconRegisterfooter}" alt="Icono de mensajería">
            <label for="email"><input id="email" type="email" placeholder="El teu email" aria-label="Escribe aquí tú email"></label>
        </div>
        <input type="submit" value="Subscriu-te" aria-label="Botón para suscribirse">
      </form>
    </section>

    <section class="nav-footer">
      <div class="logo-footer">
        <img src="${basicLogo}" alt="Logo del proyecto Alumni">
        <img src="${lettersLogo}" alt="Letras del logo del proyecto Alumni">
      </div>
      <ul>
        <li><a href="#" aria-label="Link a información sobre nosotros">Sobre nosaltres</a></li>
        <li><a href="#" aria-label="Link a información sobre funcionalidades">Funcionalitats</a></li>
        <li><a href="#" aria-label="Link a el centro de ayuda">Centre d'ajuda</a></li>
        <li><a href="#" aria-label="Link para contactar con nosotros">Contacta'ns</a></li>
        <li><a href="#" aria-label="Link a FAQs">FAQs</a></li>
        <li><a href="#" aria-label="Link a oportunidades laborales">Oportunitats laborals</a></li>
      </ul>
    </section>

    <hr>

    <section class="extras-footer">
      <select name="language" id="language" aria-label="Selecciona un lenguaje para la página" >
        <option value="catalain" selected hidden>Català</option>
        <option value="spanish">Castellano</option>
        
      </select>
      <div class="brand-text">
        <ul>
          <li>© 2024 Brand, Inc.</li>
          <li><a href="#" aria-label="Link a terminos de privacidad">Privadesa</a></li>
          <li><a href="#" aria-label="Link a terminos de uso">Termes d'ús</a></li>
          <li><a href="#" aria-label="Link a mapa del sitio">Mapa del lloc</a></li>
        </ul>
      </div>
      <div class="social-networks" aria-label="links a nuestras redes sociales">
        <a href="#"><img src="${iconFacebook}" alt="link a nuestro perfil de facebook"></a>
        <a href="#"><img src="${iconLinkedin}" alt="link a nuestro perfil de linkedin"></a>
        <a href="#"><img src="${iconYoutube}" alt="link a nuestro perfil de youtube"></a>
      </div>
    </section>

  </footer>
`;

  const footerElement = footer.firstElementChild

  if (footerElement) {
    // const selectLang = footerElement.getElementById('language') as HTMLSelectElement;

    // NO se puede USAR getElementById es un MÉTODO de DOCUMENT, NO de un ELEMENTO. Para buscar dentro de un elemento usas querySelector

    const selectLang = footerElement.querySelector('#language') as HTMLSelectElement;

    if (selectLang) {
      selectLang.addEventListener('change', () => {
        // 1. Volvemos a mostrar todas las opciones primero
        Array.from(selectLang.options).forEach(opt => opt.removeAttribute('hidden'));

        // 2. Ocultamos únicamente la opción que el usuario acaba de seleccionar
        const selectedOption = selectLang.options[selectLang.selectedIndex];
        selectedOption.setAttribute('hidden', 'true');
      });
    }

  }

  return footerElement;
}