  import './header-phone.css';
  import arrowBack from '/src/assets/icons/Mobile/header/arrow-left.png';
  import alignIcon from '/src/assets/icons/Mobile/header/align-bottom.png';
  import profileFoto from '/src/assets/images/header-phone/profile-photo.png';
  import { navigateTo, type Page } from '../../router';
  
  export const createHeaderPhone = (title: string, showBack: boolean = false): Element | null => {

    const headerPhone = document.createElement('div');

    headerPhone.innerHTML = `
    <header class ="global-container">

      <section class="title-profile">
        ${showBack ? `<a data-page="home" class="back-button"><img src="${arrowBack}" alt="Volver atrás"></a>` : '<div></div>'}
        <h1>${title}</h1>
        <div class="options-profile">
          <img src="${alignIcon}" alt="Botón para cambiar alineación">
          <img src="${profileFoto}" alt="Foto de perfil">
        </div>
      </section>
      
    </header>
    `;
  
    const headerPhoneElement = headerPhone.firstElementChild;

    if (headerPhoneElement) {
      const links = headerPhoneElement.querySelectorAll('[data-page]');

      links.forEach(link => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const linkto = (link as HTMLElement).dataset.page;
          if (linkto) navigateTo(linkto as Page);
        });
      });
    }  

    return headerPhoneElement;
  }
  
  
  
  