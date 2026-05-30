// declaro y asigno un tipo para una función sin parametros que no devuelve nada(que será renderApp())
type RenderFn = () => void;

let renderFn: RenderFn;

export const initRouter = (render: RenderFn) => {
    renderFn = render;
}

// Cuando en main.ts llamas a initRouter(renderApp), le estás pasando tu función renderApp como argumento. El router la guarda en renderFn y a partir de ese momento navigateTo puede llamar a renderFn() que es exactamente lo mismo que llamar a renderApp(), pero sin importarla directamente.

type Page = 'welcome' | 'home'| 'sign-up' | 'networking' | 'job-opportunities';

export let currentPage: Page = 'home';
// Al exportar navigateTo esta lleva "consigo" la referencia a currentPage.
// la función "recuerda" el entorno donde fue creada y puede acceder a variables del scope exterior, aunque este no se exporte como tal.

// En este caso la exportamos PQ además de esta función también la necesita el switch de main.ts.
// como let renderFn solo se usa en initRouter en router.ts??? y nadie más necesita acceder a ella no se exporta.
export const navigateTo = (page: Page) => {
    currentPage = page;
    renderFn();
}

// patrón que se llama inyección de dependencias — en vez de que router.ts importe renderApp directamente, main.ts se la "inyecta" como parámetro. Es una técnica común para evitar dependencias circulares

// renderApp sin paréntesis es la función en sí, y renderApp() es el resultado de ejecutarla.
// Si pusieras initRouter(renderApp()) estarías ejecutando renderApp en ese momento y pasando su resultado (void) al router. El router guardaría undefined, no la función.
// Con initRouter(renderApp) le pasas la función entera para que el router la ejecute cuando quiera, no ahora.