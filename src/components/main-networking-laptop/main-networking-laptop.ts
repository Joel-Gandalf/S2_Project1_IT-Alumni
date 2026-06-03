import './main-networking-laptop.css';
import searchIcon from '/src/assets/icons/Search.png';

export const createMainNetworkingLaptop = (): Element | null => {
    const mainNetworkingLaptop = document.createElement('div');
    
    mainNetworkingLaptop.innerHTML = `
    <main class="main-networking-laptop-container">
        <section class="networking-filters-container">
            <div class="networking-search-box" aria-label="Busqueda de alumnis por nombe">
                <label><img src="${searchIcon}" alt="Icono lupa busqueda"><input id="networking-search" type="search" placeholder="Cercar alumni..."></label>
            </div>
            <div class="networking-filters">
                <p>Filtres:</p>
                <div class="networking-filters-box" aria-label="Filtros de búsqueda">
                    <button data-filter="recent-activity" class="active" type="button">Activitat recent</button>
                    <button data-filter="popular" type="button">Popularitat</button>
                    <button data-filter="most-connected" type="button">Alta freqüència de connexió</button>
                </div>
            </div>
        </section>

        <section class="grid-insert-users"></section>
    </main>
    `;

    const mainNetworkingLaptopElement = mainNetworkingLaptop.firstElementChild;

    return mainNetworkingLaptopElement;
}


