type RenderFn = () => void;

let renderFn: RenderFn;

export const initRouter = (render: RenderFn) => {
    renderFn = render;
}

export type Page = 'welcome' | 'home' | 'sign-up' | 'networking' | 'job-opportunities' | 'profile';

export let currentPage: Page = 'welcome';

export let isAuthentificated: boolean = false

export const navigateTo = (page: Page) => {
    if (currentPage === 'sign-up') isAuthentificated = true;
    currentPage = page;
    renderFn();
}