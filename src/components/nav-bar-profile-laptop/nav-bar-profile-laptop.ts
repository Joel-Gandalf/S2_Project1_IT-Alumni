import './nav-bar-profile-laptop.css';
import logoUrl from '/src/assets/icons/Header.svg';

import searchIcon from "/src/assets/icons/Search.png";
import bellIcon from "/src/assets/icons/NavBar-profile/bell.png";
import gearIcon from "/src/assets/icons/NavBar-profile/settings-gear.png";
import profilePhoto from "/src/assets/images/nav-bar-profile/profile-photo-4.png";

export const createNavBar = (): null | Element => {
  const navBar = document.createElement('div');

  navBar.innerHTML = ` <header class="container-header">
      <img src="${logoUrl}" alt="nombre de la aplicación: alumni" class="logo-nav-bar">
      <nav class="container-nav-bar">
        <ul class="navigation-menu" aria-label="Menú de navegación">
          <li><a href="#" aria-label="Ir a inicio">Inici</a></li>
          <li><a href="#" aria-label="Ir a red de exalumnos">Xarxa</a></li>
          <li><a href="#" aria-label="Ir a ofertas laborales">Oportunitas de feina</a></li>
        </ul>
        <div class="profile-options" aria-label="Opciones del perfil">
          <a href="#"><img src="${searchIcon}" alt="Ir a busqueda"></a>
          <a href="#"><img src="${bellIcon}" alt="Ir a notificaciones"></a>
          <a href="#"><img src="${gearIcon}" alt="Ir a configuración"></a>
          <a href="#" aria-label="Ir a editar perfil"><img src="${profilePhoto}" alt="Tú foto de perfil"></a>
        </div>
      </nav>
    </header>
`;

  return navBar.firstElementChild;
}