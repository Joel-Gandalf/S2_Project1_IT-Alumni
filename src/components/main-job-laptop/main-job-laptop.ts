import './main-job-laptop.css';
import searchIcon from '/src/assets/icons/Search.png';

export const createMainJobLaptop = (): Element | null => {
    const mainJobLaptop = document.createElement('div');

    mainJobLaptop.innerHTML = `
    <main class="main-jobs-laptop-container">

        <section class="jobs-filters-container">
            <div class="jobs-search-box" aria-label="Busqueda de ofertas laborales por nombre">
                <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="jobs-search" type="search" placeholder="Cercar una oferta..."></label>
            </div>

            <div class="jobs-filters" aria-label="Filtros de búsqueda">
                <label>Remot/Presencial: <select name="remote-in-person" id="remote-in-person" aria-label="Filtro por modalidad de trabajo">
                    <option value="all">Tot</option>
                    <option value="remote">Remot</option>
                    <option value="in-person">Presencial</option>
                </select></label>

                <label>Nivell laboral: <select name="seniority" id="seniority" aria-label="Filtro por nivel laboral">
                    <option value="all">Qualsevol</option>
                    <option value="junior">Junior</option>
                    <option value="semi-senior">Semi-senior</option>
                    <option value="senior">Senior</option>
                </select></label>

                <label>Sector: <select name="labor-sector" id="labor-sector" aria-label="Filtro por sector">
                    <option value="all">Qualsevol</option>
                    <option value="software">Software</option>
                    <option value="design">Disseny</option>
                    <option value="marketing">Marketing</option>
                </select></label>
            </div>
        </section>

        <section class="grid-insert-jobs"></section>
    </main>
  `;

    return mainJobLaptop.firstElementChild;
}