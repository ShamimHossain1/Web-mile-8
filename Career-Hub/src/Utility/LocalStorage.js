
const getStoredJobApplications = () => {
    const storedJobs = localStorage.getItem('job-App');
    if (!storedJobs) {
        return [];
    }
    return JSON.parse(storedJobs);
};

const saveJobApplication = id => {
// console.log(id);
    const storedApplications = getStoredJobApplications();
    // console.log(storedApplications);
    const existingJob = storedApplications.find(job => job == id);
    if(!existingJob){
        storedApplications.push(id);
        localStorage.setItem('job-App', JSON.stringify(storedApplications));
    }

}
export { saveJobApplication,getStoredJobApplications };