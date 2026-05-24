import './nav-bar.css';
import logoUrl from '/src/assets/icons/Header.svg';
import iconRegisterUrl from "/src/assets/icons/Navbar/register.svg";
import iconProfileUrl from "/src/assets/icons/Navbar/profile.svg";

export const createNavBar = (): null | Element => {
  const navBar = document.createElement('div');
  // const navBar = document.getElementById('insertApp');

  // if (navBar) {
  // QUITO el IF porque CREATEELEMENT siempre devuelve un HTMLElement vacío
  // getElementById sí puede devolver null si el elemento no existe en el DOM

  navBar.innerHTML = ` <header class="container-nav-bar">
      <img src="${logoUrl}" alt="nombre de la aplicación: alumni" class="logo-nav-bar">
      <nav class="container-nav-bar">
        <ul class="navigation-menu" aria-label="Menú de navegación">
          <li><a href="#" aria-label="Ir a inicio">Inici</a></li>
          <li><a href="#" aria-label="Ir a red de exalumnos">Xarxa</a></li>
          <li><a href="#" aria-label="Ir a ofertas laborales">Oportunitas de feina</a></li>
        </ul>
        <div class="navigation-buttons" aria-label="Botones de navegación">
          <a href="#" class="register-button button"><img src="${iconRegisterUrl}" alt="Icono suscribirse">Apunta't</a>
          <a href="#" class="profile-button button"><img src="${iconProfileUrl}" alt="Icono editar perfil">Com et veuen?</a>
        </div>
      </nav>
    </header>
`;
  // }
  return navBar.firstElementChild;
}