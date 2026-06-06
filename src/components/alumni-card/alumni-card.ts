import './alumni-card.css';

export interface AlumniData {
        name: string;
        surname: string;
        jobPosition: string;
        company: string;
        city: string;
        internationalCountryCodes: string;
        classOf: number;
        followers: number;
        lastActivity: number;
        NumberConnectionsLastMonth: number;
}

const formatter = new Intl.DateTimeFormat('ca', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
});

export const createAlumniCard = (student: AlumniData, isPhone: boolean = false): Element | null => {
    const alumniCard = document.createElement('div');

    if (isPhone) {

        alumniCard.innerHTML = `
            <article class="alumni-card alumni-card-phone" aria-label="Tarjeta de perfil de Alumni">
                <div class="alumni-info">
                    <h3>${student.name} ${student.surname}</h3>
                    <p>Promoció ${student.classOf}</p>
                    <p>${student.jobPosition} a ${student.company}</p>
                    <p class="followers">Seguidors: ${student.followers}</p>
                </div>

                <div class="alumni-image-profile" role="img" aria-label="Imagen de perfil de ${student.name}"></div>
            </article>
        `;
        
        return alumniCard.firstElementChild;
    }

    const formatDate = formatter.format(student.lastActivity);

    alumniCard.innerHTML = `
        <article class="alumni-card alumni-card-laptop" aria-label="Tarjeta de perfil de Alumni">
            <div class="alumni-info">
                <h3>${student.name} ${student.surname}</h3>
                <p>Promoció ${student.classOf}</p>
                <p>${student.jobPosition} en ${student.company}</p>
                <p>${student.city}, ${student.internationalCountryCodes}</p>
                <p class="followers">Seguidors: ${student.followers}</p>
                <p>Última connexió: ${formatDate}</p>
            </div>

            <button class="button-message" type="button" aria-label="Enviar mensaje a ${student.name}">Missatge</button>
        </article>
    `;

    return alumniCard.firstElementChild;
}