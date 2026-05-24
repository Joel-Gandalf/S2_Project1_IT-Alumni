import "./main-home-laptop.css";
import videoHero from "/src/assets/video/6761146-uhd_3840_2160_25fps.mp4";
import iconHat from "/src/assets/icons/Benefits/Card_1/Hat.svg";
import iconBabbling from "/src/assets/icons/Benefits/Card_2/Babbling.svg";
import iconPerson from "/src/assets/icons/Benefits/Card_3/person.svg";
import imgJhoni from "/src/assets/images/Opinions/Card_1_3/JhoniTechnoSka.png";
import imgEmma from "/src/assets/images/Opinions/Card_2/Emma.png";
import iconStar from "/src/assets/icons/Opinions/Frame.svg";
import iconBack from "/src/assets/icons/Opinions/Buttons/Back.png";
import iconNext from "/src/assets/icons/Opinions/Buttons/Next.png";

export const createMainHomeLaptop = (): Element | null => {

  const mainHomeLaptop = document.createElement('div');

  mainHomeLaptop.innerHTML = ` <main>
    <section class="hero">
      <h1>Benvingut, Alumni</h1>
      <p>Connectant i empoderant a la nostra comunitat global d’alumnes</p>
      <div class="buttons-hero">
        <a class="button-register-hero" href="#" aria-label="link a registro">Uneix-te</a>
        <a class="button-info-hero" href="#" aria-label="link a información sobre el proyecto">Mira que fem</a>
      </div>
      <video class= "video-box" autoplay muted loop playsinline controls aria-label="Video de una reunión de exalumnos">
        <source src="${videoHero}" type="video/mp4">
        Tu navegador no soporta la etiqueta de video.
      </video>
      
    </section>

    <section class="benefits">
      <h2>Què guanyes en formar-ne part?</h2>

      <div class="benefits-cards">

        <div class="benefit-card">
          <img src="${iconHat}" alt="Icono red social de excompañeros">
          <p>Comparteix i no perdis el contacte: Puja els teus moments importants, explica com va tot i queda amb els
            companys. Una xarxa per estar més a prop.</p>
          <a class="button-register-benefits" href="#" aria-label="link a registro">Apunta't ja</a>
        </div>

        <div class="benefit-card">
          <img src="${iconBabbling}" alt="Icono discusiones">
          <p>Participa en discussions: Intercanvia coneixements, punts de vista i opinions sobre temes que t'interessen.
          </p>
          <a class="button-register-benefits" href="#" aria-label="link a registro">Apunta't ja</a>
        </div>

        <div class="benefit-card">
          <img src="${iconPerson}" alt="Icono conexiones personales">
          <p>Xarxa Alumni: Connecta amb companys de promoció, fes noves amistats i crea records per durar tota la vida.
          </p>
          <a class="button-register-benefits" href="#" aria-label="link a registro">Apunta't ja</a>
        </div>

      </div>
    </section>

    <section class="opinions">
      <h2>"T'ensenyem el que opinen els nostres súper-usuaris!”</h2>

      <div class="opinions-cards" aria-label="Carrusel con tarjetas de opinion y valoración de exalumnos>

        <div class="opinion-card">
          <div class="flex-card">
              <img class="foto-opinion-card-1" src="${imgJhoni}" alt="Foto perfil Mikel">
              <div class="flex-rating">
                  <p>Mikel</p>
                  <div class="rating">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                  </div>
              </div>
          </div>
          <p class="user-card-paragraph">"Gràcies a IT Alumni vaig aconseguir la feina dels meus somnis en el món tech amb
            el seu increïble programa de mentoria."</p>
        </div>

        <div class="opinion-card">
          <div class="flex-card">
              <img class="foto-opinion-card-2" src="${imgEmma}" alt="Foto perfil Emma">
              <div class="flex-rating">
                  <p>Emma</p>
                  <div class="rating">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                  </div>
              </div>
          </div>
          <p class="user-card-paragraph">Participa en discussions: Intercanvia coneixements, punts de vista i opinions
            sobre
            temes que t'interessen.</p>
        </div>

        <div class="opinion-card">
          <div class="flex-card">
              <img class="foto-opinion-card-3" src="${imgJhoni}" alt="Foto perfil Laia">
              <div class="flex-rating">
                  <p>Laia</p>
                  <div class="rating">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                    <img src="${iconStar}" alt="Estrella de valoración">
                  </div>
              </div>
          </div>
          <p class="user-card-paragraph">"IT Alumni em va donar les eines i l’autoestima per fer realitat el meu somni
            d’emprendre."</p>
        </div>
      </div>

      <div class="opinion-buttons" aria-label="Botones desplazamiento horizontal del carrusel>
        <img src="${iconBack}" alt="Botón atrás carrusel opiniones">
        <img src="${iconNext}" alt="Botón adelante carrusel opiniones">
      </div>

    </section>
  </main>
`;

  return mainHomeLaptop.firstElementChild
}


