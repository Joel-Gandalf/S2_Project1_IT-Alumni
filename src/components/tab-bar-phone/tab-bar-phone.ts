import './tab-bar-phone.css';
import { navigateTo, currentPage, type Page } from '../../router';

export const createTabBar = (): Element | null => {

  const tabBar = document.createElement('div');

  tabBar.innerHTML = `  <nav class="tab-bar-container" aria-label="Menú principal">
    <ul>
      <li>
        <button data-page="home" class="button-link active" aria-label="Ir a inicio">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9999 6.75085L4.28564 13.0629L4.28564 20.5714C4.28564 21.0446 4.66964 21.4286 5.14279 21.4286H10.2856V16.7143C10.2856 16.4777 10.4776 16.2857 10.7142 16.2857H13.2856C13.5222 16.2857 13.7142 16.4777 13.7142 16.7143L13.7142 21.4286L18.8571 21.4286C19.3302 21.4286 19.7142 21.0446 19.7142 20.5714L19.7142 13.0629L11.9999 6.75085Z" fill="currentColor"/>
            <path d="M21.4284 12C21.2372 12 21.0452 11.9366 20.8858 11.8063L11.9998 4.53598L3.1138 11.8063C2.74694 12.1054 2.2078 12.0523 1.9078 11.6854C1.6078 11.3186 1.6618 10.7786 2.02865 10.4794L11.4572 2.76513C11.7727 2.50627 12.2269 2.50627 12.5432 2.76513L21.9718 10.4794C22.3378 10.7794 22.3918 11.3186 22.0927 11.6854C21.9229 11.8928 21.6761 12 21.4284 12Z" fill="currentColor"/>
          </svg>
          <p>Inici</p>
        </button>
      </li>
      <li>
        <button data-page="networking" class="button-link" aria-label="Ir a la red de exalumnos">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.81857 17.2166L7.03886 18.4114C6.40886 18.6823 6 19.302 6 19.9877V21.4286L18 21.4286V19.9877C18 19.302 17.5911 18.6823 16.9611 18.4123L14.1746 17.2226" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10"/>
            <path d="M11.9999 5.99998C12.9467 5.99998 13.7142 5.23247 13.7142 4.2857C13.7142 3.33892 12.9467 2.57141 11.9999 2.57141C11.0532 2.57141 10.2856 3.33892 10.2856 4.2857C10.2856 5.23247 11.0532 5.99998 11.9999 5.99998Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M19.7143 10.2857C20.6611 10.2857 21.4286 9.51818 21.4286 8.5714C21.4286 7.62463 20.6611 6.85712 19.7143 6.85712C18.7675 6.85712 18 7.62463 18 8.5714C18 9.51818 18.7675 10.2857 19.7143 10.2857Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M4.28557 10.2857C5.23235 10.2857 5.99986 9.51818 5.99986 8.5714C5.99986 7.62463 5.23235 6.85712 4.28557 6.85712C3.3388 6.85712 2.57129 7.62463 2.57129 8.5714C2.57129 9.51818 3.3388 10.2857 4.28557 10.2857Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M11.9999 18C10.1064 18 8.57129 16.4648 8.57129 14.5714L8.57129 13.7143C8.57129 11.8208 10.1064 10.2857 11.9999 10.2857C13.8933 10.2857 15.4284 11.8208 15.4284 13.7143V14.5714C15.4284 16.4648 13.8933 18 11.9999 18Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
          </svg>
          <p>Xarxa</p>
        </button>
      </li>
      <li>
        <button data-page="job-opportunities" class="button-link" aria-label="Ir al portal laboral">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.57129 5.99998V2.57141L15.4284 2.57141V5.99998" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M9.42843 14.5714L2.57129 14.5714L2.57129 6L21.4284 6L21.4284 14.5714L14.5713 14.5714" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M20.5716 17.1429V21.4286L3.42871 21.4286L3.42871 17.1429" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M14.5716 12.8571L9.42871 12.8571V16.2857H14.5716V12.8571Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
          </svg>
          <p>Portal laboral</p>
        </button>
      </li>
      <li>
        <button data-page="profile" class="button-link" aria-label="Ir a perfil">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5714 14.5714H9.4285C6.58793 14.5714 4.28564 16.8737 4.28564 19.7143L4.28564 20.5714C4.28564 20.5714 6.96422 21.4286 11.9999 21.4286C17.0356 21.4286 19.7142 20.5714 19.7142 20.5714V19.7143C19.7142 16.8737 17.4119 14.5714 14.5714 14.5714Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M7.71436 6.85713C7.71436 4.49055 9.6335 2.57141 12.0001 2.57141C14.3666 2.57141 16.2858 4.49055 16.2858 6.85713C16.2858 9.2237 14.3666 12 12.0001 12C9.6335 12 7.71436 9.2237 7.71436 6.85713Z" stroke="currentColor" stroke-width="2.05714" stroke-miterlimit="10" stroke-linecap="square"/>
          </svg>
          <p>Perfil</p>
        </button>
      </li>
    </ul>
  </nav>
  `;

  const tabBarElement = tabBar.firstElementChild;

  if (tabBarElement) {

    const buttons = tabBarElement.querySelectorAll('.button-link');

    buttons.forEach(button => {
      const page = (button as HTMLElement).dataset.page;
      if (page === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }

      button.addEventListener('click', (e) => {
        e.preventDefault();

        const linkto = (button as HTMLElement).dataset.page;
        if (linkto) navigateTo(linkto as Page);
      });
    });
  }

  return tabBarElement;
}