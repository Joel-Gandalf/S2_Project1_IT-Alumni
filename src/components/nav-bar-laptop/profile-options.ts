import './nav-bar.css';
import searchIcon from "/src/assets/icons/Search.png";
import bellIcon from "/src/assets/icons/NavBar-profile/bell.png";
import gearIcon from "/src/assets/icons/NavBar-profile/settings-gear.png";
import profilePhoto from "/src/assets/images/nav-bar-profile/profile-photo-4.png";

export const createProfileOptions = (): Element | null => {
  const profileOptions = document.createElement('div');

  profileOptions.innerHTML = ` <div class="profile-options" aria-label="Opciones del perfil">
          <a href="#"><img src="${searchIcon}" alt="Ir a busqueda"></a>
          <a href="#"><img src="${bellIcon}" alt="Ir a notificaciones"></a>
          <a href="#"><img src="${gearIcon}" alt="Ir a configuración"></a>
          <a data-page="profile" href="#" aria-label="Ir a editar perfil"><img src="${profilePhoto}" alt="Tú foto de perfil"></a>
        </div>
`;

  return profileOptions.firstElementChild;
}