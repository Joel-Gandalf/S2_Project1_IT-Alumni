import './footer.css';


export const createTabBar = (): Element | null => {

    const tabBar = document.createElement('div');

    tabBar.innerHTML = `  <nav class="tab-bar-container" aria-label="Menú principal">
    <ul>
      <li>
        <button aria-label="Ir a inicio">
          <img src="/src/assets/icons/Mobile_Home/nav/Home.png" alt="">
          <p>Inici</p>
        </button>
      </li>
      <li>
        <button aria-label="Ir a la red de exalumnos">
          <img src="/src/assets/icons/Mobile_Home/nav/Network.png" alt="">
          <p>Xarxa</p>
        </button>
      </li>
      <li>
        <button aria-label="Ir al portal laboral">
          <img src="/src/assets/icons/Mobile_Home/nav/Briefcase 24.png" alt="">
          <p>Portal de feina</p>
        </button>
      </li>
      <li>
        <button aria-label="Ir a perfil">
          <img src="/src/assets/icons/Mobile_Home/nav/Profile.png" alt="">
          <p>Perfil</p>
        </button>
      </li>
    </ul>
  </nav>
  `;

    return tabBar.firstElementChild
}