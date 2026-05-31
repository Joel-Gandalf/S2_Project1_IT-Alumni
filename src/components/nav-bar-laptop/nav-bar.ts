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
  // }

  // AÑADO firstElementChild SOLO para hacer desaparecer el div envolvente, así al insertarlo div desaparece y header es lo que queda.
  return navBar.firstElementChild;
}

// DATA-* :   son atributos personalizados de HTML que te permiten guardar información extra en un elemento sin afectar su comportamiento. El * puede ser cualquier nombre que elijas, en este caso page.

// NO SE USA ID : porque si hay muchos id que dirigen al mismo sitio y cada id ha de ser único, el querySelector o el getElemtById se tendrían que repetir mucho y generar mucho código innecesario o hacer un querySelectorAll ('#miId1, #miId2, #miId3'); que genera un nodelist. o querySelectorAll('.clase'), pero es más limpio usar DATA-* PQ SOLO ESTA PENSADO PARA JAVASCRIPT NO PARA CSS.


// Se podría usar una clase como class="nav-link-networking" y en JavaScript hacer querySelector('.nav-link-networking'). Funciona pero tiene dos problemas:

// Las clases son para CSS, mezclar responsabilidades confunde el código.
// Si el link tiene ya otras clases por estilos, la clase de navegación queda enterrada entre las demás.

// data-page es más limpio porque su único propósito es guardar el dato para JavaScript.