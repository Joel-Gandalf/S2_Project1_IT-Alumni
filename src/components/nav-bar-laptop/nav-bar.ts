import './nav-bar.css';
import logoUrl from '/src/assets/icons/Header.svg';
import iconRegisterUrl from "/src/assets/icons/Navbar/register.svg";
import iconProfileUrl from "/src/assets/icons/Navbar/profile.svg";
import { navigateTo, type Page } from '../../router';

export const createNavBar = (): null | Element => {
  const navBar = document.createElement('div');

  navBar.innerHTML = ` <header class="container-header">
      <img src="${logoUrl}" alt="nombre de la aplicación: alumni" class="logo-nav-bar">
      <nav class="container-nav-bar">
        <ul class="navigation-menu" aria-label="Menú de navegación">
          <li><a data-page="home" href="#" aria-label="Ir a inicio">Inici</a></li>
          <li><a data-page="networking" href="#" aria-label="Ir a red de exalumnos">Xarxa</a></li>
          <li><a data-page="job-opportunities" href="#" aria-label="Ir a ofertas laborales">Oportunitas de feina</a></li>
        </ul>
        <div class="navigation-buttons" aria-label="Botones de navegación">
          <a data-page="sign-up" href="#" class="register-button button"><img src="${iconRegisterUrl}" alt="Icono suscribirse">Apunta't</a>
          <a data-page="profile" href="#" class="profile-button button"><img src="${iconProfileUrl}" alt="Icono editar perfil">Com et veuen?</a>
        </div>
      </nav>
    </header>
`;

  const navBarElement = navBar.firstElementChild;

  if (navBarElement) {
    const links = navBarElement.querySelectorAll('[data-page]');

    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const linkto = (link as HTMLElement).dataset.page;
        if (linkto) navigateTo(linkto as Page);
      });
    });
  }

  return navBarElement;
}