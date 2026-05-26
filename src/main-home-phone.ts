import './main-home-phone.css';
import networkingPhoto from '/src/assets/images/main-phone/redexalumnos.png';
import jobPortal from '/src/assets/images/main-phone/jobportal.png';

export const createMainHomePhone = (): Element | null => {

    const mainHomePhone = document.createElement('div');

    mainHomePhone.innerHTML = `    
    <main class="container-main">
      <div class="container-link">
        <img src="${networkingPhoto}" alt="Foto red de exalumnos">
        <h2>Xarxa</h2>
        <p>Connecta amb professionals del teu camp.</p>
        <a href="#" aria-label="Ir a red de exalumnos">Explora</a>
      </div>
      <div class="container-link">
        <img src="${jobPortal}" alt="Foto portal laboral">
        <h2>Oportunitats de feina</h2>
        <p>Descobreix ofertes de treball adaptades a les teves habilitats.</p>
        <a href="#" aria-label="Ir a búsqueda de empleo">Cerca Feines</a>
      </div>
    </main>
    `;

    return mainHomePhone.firstElementChild
}