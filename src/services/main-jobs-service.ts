import jobOffers from '../data-base/job-opportunities.json';
import { createJobCard, type JobData  } from '../components/job-card/job-card';

export type RemoteFilter = 'all' | 'remote' | 'in-person';
export type SeniorityFilter = 'all' | 'junior' | 'semi-senior' | 'senior';
export type SectorFilter = 'all' | 'software' | 'design' | 'marketing';

export let remoteFilterOption: RemoteFilter = "all";
export let seniorityFilterOption: SeniorityFilter = "all";
export let laborSectorFilterOption: SectorFilter = "all";

export const getFilteredJobs = (remote: RemoteFilter, seniority: SeniorityFilter, sector: SectorFilter, searchJobs: string = ""): JobData[] => {
    remoteFilterOption = remote;
    seniorityFilterOption = seniority;
    laborSectorFilterOption = sector;

    let jobOffersFiltered = (jobOffers as JobData[]).slice();

    if (remote !== "all") {
        jobOffersFiltered = jobOffersFiltered.filter(job => {
            if (remote === "remote") return job.remote === true;
            return job.remote === false;
        });
    }

    if (seniority !== "all") {
        jobOffersFiltered = jobOffersFiltered.filter(job => job.jobLevel.toLowerCase() === seniority);
    }

    if (sector !== "all") {
        jobOffersFiltered = jobOffersFiltered.filter(job => {
            if (sector === 'design') return job.sector === 'Disseny'; 
            return job.sector.toLowerCase() === sector;
        });
    }

    jobOffersFiltered = jobOffersFiltered.filter(job => {
        const jobPositionName = job.jobPosition.toLocaleLowerCase();
        const companyName = job.company.toLocaleLowerCase();
        const searchText = searchJobs.toLocaleLowerCase();

        return (jobPositionName.includes(searchText) || companyName.includes(searchText));
    });

    return jobOffersFiltered;
}

export const renderJobOffersGrid = ( jobOffersToRender:JobData[], jobsGridContainer: Element | null, isPhone:boolean = false) => {
    if (!jobsGridContainer) return;
    jobsGridContainer.innerHTML = "";

    jobOffersToRender.forEach(jobOffer => {
        const card = createJobCard(jobOffer, isPhone);
        if (card) jobsGridContainer.appendChild(card);
    });
}