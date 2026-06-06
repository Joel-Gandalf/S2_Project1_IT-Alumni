import formerStudents from '../data-base/former-students.json';
import { createAlumniCard, type AlumniData } from '../components/alumni-card/alumni-card';

export type Filters = "recent-activity" | "popular" |"most-connected";

export let currentFilter: Filters = "recent-activity";

export const getSortedUsers = (filter: Filters, searchName: string = ""): AlumniData[] => {
    currentFilter = filter;

    const studentsToSort = (formerStudents as AlumniData[]).slice();
    
    switch (currentFilter) {
        case "recent-activity":
            studentsToSort.sort((a, b) => b.lastActivity - a.lastActivity);
            break;
        case "popular": 
            studentsToSort.sort((a, b) => b.followers - a.followers);
            break;
        case "most-connected":
            studentsToSort.sort((a, b) => b.NumberConnectionsLastMonth - a.NumberConnectionsLastMonth);
            break;
    }

    //  En programación, siempre es más eficiente filtrar primero y ordenar al final (para no perder tiempo ordenando elementos que luego vas a borrar).

    const studentsFiltered = studentsToSort.filter(student => {
        const fullName = (`${student.name} ${student.surname}`).toLowerCase();
        const search = searchName.toLocaleLowerCase();
        
        return fullName.includes(search);
    }); 

    return studentsFiltered;
}

export const renderAlumniGridUsers = (studentsToRender: AlumniData[], gridContainer: Element | null, isPhone: boolean = false) => {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    studentsToRender.forEach(student => {
        const card = createAlumniCard(student, isPhone);
        if (card) gridContainer.appendChild(card);
    });
}