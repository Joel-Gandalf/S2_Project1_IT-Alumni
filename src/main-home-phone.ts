import './main-home-phone.css';

export const createMainHomePhone = (): Element | null => {

    const mainHomePhone = document.createElement('div');

    mainHomePhone.innerHTML = `  <main class="container-main">
        <div class="container-link">
        <img src="src/assets/images/main-phone/redexalumnos.png" alt="Foto red de exalumnos">
        <h2>Xarxa</h2>
        <p>Connecta amb professionals del teu camp.</p>
        <button aria-label="Ir a red de exalumnos">Explora</button>
        </div>
        <div class="container-link">
        <img src="src/assets/images/main-phone/jobportal.png" alt="Foto portal laboral">
        <h2>Oportunitats de feina</h2>
        <p>Descobreix ofertes de treball adaptades a les teves habilitats.</p>
        <button aria-label="Ir a búsqueda de empleo">Cerca Feines</button>
        </div>
    </main>
    `;

    return mainHomePhone.firstElementChild
}