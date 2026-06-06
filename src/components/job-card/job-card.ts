import './job-card.css';

export interface JobData {
        jobPosition: string;
        employmentType: string;
        datePosted: number;
        company: string;
        remote: boolean;
        city: string;
        internationalCountryCodes: string;
        applicationDeadline: number;
        jobLevel: 'Junior' | 'Semi-senior' | 'Senior';
        sector: 'Software' | 'Disseny' | 'Marketing';
}

const formatterApplicationDeadline = new Intl.DateTimeFormat('ca', {
    month: 'short',
    day: 'numeric',
});

const formatterDatePosted = new Intl.RelativeTimeFormat('ca', {
    numeric: 'always',
    style: 'long'
})

const getRelativePostedTime = (timestampPosted: number): string => {

    const NOW = new Date().getTime(); 
    
    const differenceInMs = timestampPosted - NOW;
    
    // Convertimos los milisegundos de diferencia a días enteros
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // Si la diferencia es menor de 7 días, devolvemos el formato en días
    if (Math.abs(differenceInDays) < 7) {
        return formatterDatePosted.format(differenceInDays, 'day');
    }
    
    const differenceInWeeks = Math.round(differenceInDays / 7);
    return formatterDatePosted.format(differenceInWeeks, 'week');
};

export const createJobCard = (job: JobData, isPhone: boolean = false): Element | null => {
    const JobCard = document.createElement('div');

    if (isPhone) {
        const formatDateDeadLine = formatterApplicationDeadline.format(job.applicationDeadline);

        JobCard.innerHTML = `
            <article class="job-card job-card-phone" aria-label="Tarjeta informativa de oferta laboral">
                <div class="job-basic-container">
                    <div class="job-info">
                        <h3>${job.sector}</h3>
                        <p>${job.jobPosition} a ${job.company}</p>
                        ${job.remote ? `<p>Remote | Caduca ${formatDateDeadLine}</p>` : `<p>${job.city} | Caduca ${formatDateDeadLine}</p>`}
                    </div>

                    <button class="button-details" type="button" aria-label="Ver más información de la oferta de ${job.jobPosition}">Veure detalls</button>
                </div>
                
                <div class="job-image-company" role="img" aria-label="Imagen representativa de ${job.company}"></div>
            </article>
        `;
        
        return JobCard.firstElementChild;
    }

    const relativeTimeText = getRelativePostedTime(job.datePosted);

    JobCard.innerHTML = `
        <article class="job-card job-card-laptop" aria-label="Tarjeta informativa de oferta laboral">
            <div class="job-basic-container">
                <div class="job-info">
                    <h3>${job.sector}</h3>
                    <p>${job.jobPosition} a ${job.company}</p>                   
                    <p>${job.employmentType}</p>
                    ${job.remote ? `<p>Remote</p>` : `<p>${job.city} ${job.internationalCountryCodes}</p>`} 
                    <p>Publicat ${relativeTimeText}</p>
                </div>
                
                <button class="button-details" type="button" aria-label="Ver más información de la oferta de ${job.jobPosition}">Veure detalls</button>            
            </div>

            <div class="job-image-company" role="img" aria-label="Imagen representativa de ${job.company}"></div>
        </article>
    `;

    return JobCard.firstElementChild;
}