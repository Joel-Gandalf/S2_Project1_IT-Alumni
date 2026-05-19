import './nav-bar.css';
import logoNavUrl from '/src/assets/icons/Header.svg';
import iconRegisterUrl from "/src/assets/icons/Navbar/register.svg";
import iconProfileUrl from "/src/assets/icons/Navbar/profile.svg";

export const showNavBar = () => {
  const navBar = document.getElementById('insertNavBar');

  if (navBar) {
    navBar.innerHTML = ` <header class="container-nav-bar">
      <img src="${logoNavUrl}" alt="nombre de la aplicación: alumni" class="logo-nav-bar">
      <ul class="navigation-menu" aria-label="Menú de navegación">
        <li><a href="#" aria-label="Ir a inicio">Inici</a></li>
        <li><a href="#" aria-label="Ir a red de exalumnos">Xarxa</a></li>
        <li><a href="#" aria-label="Ir a ofertas laborales">Oportunitas de feina</a></li>
      </ul>
      <div class="navigation-buttons" aria-label="Botones de navegación">
        <a href="#" class="register-button"><img src="${iconRegisterUrl}" alt="Icono suscribirse">Apunta't</a>
        <a href="#" class="profile-button"><img src="${iconProfileUrl}" alt="Icono editar perfil">Com et veuen?</a>
      </div>
    </header>
`;
  }
}