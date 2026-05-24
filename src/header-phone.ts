  import './header-phone.css';
  import alignIcon from '/src/assets/icons/Mobile_Home/header/align-bottom.png';
  import profileFoto from '/src/assets/images/header-phone/profile-photo.png';
  import searchIcon from '/src/assets/icons/Search.png';
  
  export const createHeaderPhone = (title: string): Element | null => {

    const headerPhone = document.createElement('div');

    headerPhone.innerHTML = `<header>

    <section class="title-profile">
      <h1>${title}</h1>
      <div class="options-profile">
        <img src="${alignIcon}" alt="Botón para cambiar alineación">
        <img src="${profileFoto}" alt="Foto de perfil">
      </div>
    </section>

    <section class="search-box">
      <label for="search"><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="search" type="search" placeholder="Cercar alumni..."></label>
    </section>
    
  </header>
  `;
    
    return headerPhone.firstElementChild
  }
  
  
  
  