import './main-networking.css';
import searchIcon from '/src/assets/icons/Search.png';
import { currentFilter, getSortedUsers, renderAlumniGridUsers } from '../../services/main-networking-service';
import type { Filters } from '../../services/main-networking-service';

export const createMainNetworking = (isPhone: boolean = false): Element | null => {
    const mainNetworking = document.createElement('div');

    mainNetworking.innerHTML = `
    <main class="main-networking-container">
        <section class="networking-filters-container">
            <div class="networking-search-box" aria-label="Busqueda de alumnis por nombe">
                <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="networking-search" type="search" placeholder="Cercar alumni..."></label>
            </div>
            <div class="networking-filters">
                <p>Filtres:</p>
                <div class="networking-filters-box" aria-label="Filtros de búsqueda">
                    <button data-filter="recent-activity" class="active" type="button">Activitat recent</button>
                    <button data-filter="popular" type="button">Popularitat</button>
                    <button data-filter="most-connected" type="button">Connexió freqüent</button>
                </div>
            </div>
        </section>

        <section class="grid-insert-users"></section>
    </main>
    `;

    const mainNetworkingElement = mainNetworking.firstElementChild;

        if (mainNetworkingElement) {
        const inputSearch = mainNetworkingElement.querySelector('#networking-search');
        const gridUsers = mainNetworkingElement.querySelector('.grid-insert-users');
        const filters = mainNetworkingElement.querySelectorAll('[data-filter]');
        
        const insertCards = (filterType: Filters, searchFullName: string = "") => {
            const studentsToInsert = getSortedUsers(filterType, searchFullName);
            renderAlumniGridUsers(studentsToInsert, gridUsers, isPhone);
        }

        if (!(inputSearch instanceof HTMLInputElement)) return null; 
        
        inputSearch.addEventListener('input', () => {
            const nameToFind = inputSearch.value;
            insertCards(currentFilter,nameToFind);
        });
        
        filters.forEach(filter => {
            const filterTo = (filter as HTMLElement).dataset.filter;
            
            if (filterTo === currentFilter) {
                filter.classList.add('active');
            } else {
                filter.classList.remove('active');
            }

            filter.addEventListener('click', (e) => {
                e.preventDefault();
                if (filterTo) {
                    filters.forEach(filter => {
                        filter.classList.remove('active');
                    });
                    filter.classList.add('active');
                    insertCards(filterTo as Filters, inputSearch.value);
                } 
            });
        });
        insertCards(currentFilter, inputSearch.value);
    }

    return mainNetworkingElement;
}


