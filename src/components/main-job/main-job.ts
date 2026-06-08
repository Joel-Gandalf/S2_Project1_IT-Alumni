import './main-job.css';
import searchIcon from '/src/assets/icons/Search.png';
import type { RemoteFilter, SeniorityFilter, SectorFilter } from '../../services/main-jobs-service';
import { remoteFilterOption, seniorityFilterOption, laborSectorFilterOption } from '../../services/main-jobs-service';
import { getFilteredJobs, renderJobOffersGrid } from '../../services/main-jobs-service';

export const createMainJob = (isPhone: boolean = false): Element | null => {
    const mainJob = document.createElement('div');

    mainJob.innerHTML = `
    <main class="main-jobs-laptop-container">

        <section class="jobs-filters-container">
            <div class="jobs-search-box" aria-label="Busqueda de ofertas laborales por nombre">
                <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="jobs-search" type="search" placeholder="Cercar una oferta..."></label>
            </div>

            <div class="jobs-filters" aria-label="Filtros de búsqueda">
                <label>Remot/Presencial: <select data-filter-type="remote" name="remote-in-person" id="remote-in-person" aria-label="Filtro por modalidad de trabajo">
                    <option value="all">Tot</option>
                    <option value="remote">Remot</option>
                    <option value="in-person">Presencial</option>
                </select></label>

                <label>Nivell laboral: <select data-filter-type="seniority" name="seniority" id="seniority" aria-label="Filtro por nivel laboral">
                    <option value="all">Qualsevol</option>
                    <option value="junior">Junior</option>
                    <option value="semi-senior">Semi-senior</option>
                    <option value="senior">Senior</option>
                </select></label>

                <label>Sector: <select data-filter-type="sector" name="labor-sector" id="labor-sector" aria-label="Filtro por sector">
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
    const mainJobElement = mainJob.firstElementChild;

    if (mainJobElement) {
        const searchJobsInput = mainJobElement.querySelector('#jobs-search');
        const gridJobOffers = mainJobElement.querySelector('.grid-insert-jobs');
        const filtersJobOffers = mainJobElement.querySelectorAll('[data-filter-type]');

        if (!(searchJobsInput instanceof HTMLInputElement)) return null;
        
        const insertCardsJobOffers = () => {
            const remoteVal = (mainJobElement.querySelector('[data-filter-type="remote"]') as HTMLSelectElement).value ;
            const seniorityVal = (mainJobElement.querySelector('[data-filter-type="seniority"]') as HTMLSelectElement).value;
            const sectorVal = (mainJobElement.querySelector('[data-filter-type="sector"]') as HTMLSelectElement).value;

            const filtered = getFilteredJobs(
                remoteVal as RemoteFilter,
                seniorityVal as SeniorityFilter,
                sectorVal as SectorFilter,
                searchJobsInput.value
            );

            renderJobOffersGrid(filtered, gridJobOffers, isPhone);
        }

        filtersJobOffers.forEach(select => {
            const selectElemnt = select as HTMLSelectElement;
            const type = selectElemnt.dataset.filterType;

            if (type === 'remote') selectElemnt.value = remoteFilterOption;
            if (type === 'seniority') selectElemnt.value = seniorityFilterOption;
            if (type === 'sector') selectElemnt.value = laborSectorFilterOption;

            selectElemnt.addEventListener('change', () => {
                insertCardsJobOffers();
            });
        });

        searchJobsInput.addEventListener('input', () => {
            insertCardsJobOffers();
        });

        insertCardsJobOffers();
    }

    return mainJobElement;
}