  import './header-phone.css';
  import arrowBack from '/src/assets/icons/Mobile/header/arrow-left.png';
  import alignIcon from '/src/assets/icons/Mobile/header/align-bottom.png';
  import profileFoto from '/src/assets/images/header-phone/profile-photo.png';
  import searchIcon from '/src/assets/icons/Search.png';
  
  
  export const createHeaderPhone = (title: string, showBack: boolean = false): Element | null => {

    const headerPhone = document.createElement('div');

    headerPhone.innerHTML = `<header class ="global-container">

    <section class="title-profile">
      ${showBack ? `<a data-page="home" class="back-button"><img src="${arrowBack}" alt="Volver atrás"></a>` : '<div></div>'}
      <h1>${title}</h1>
      <div class="options-profile">
        <img src="${alignIcon}" alt="Botón para cambiar alineación">
        <img src="${profileFoto}" alt="Foto de perfil">
      </div>
    </section>

    <section class="search-box">
      <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="search" type="search" placeholder="Cercar alumni..."></label>
    </section>
    
  </header>
  `;
    
    return headerPhone.firstElementChild
  }
  
  
  
  