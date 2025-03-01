import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../Utility/LocalStorage";
import Job from "../Home/FeaturedJobs/Job/Job";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const appliedJobId = getStoredJobApplications();
        // console.log(appliedJobId);
        if (jobs.length > 0) {
            const appliedJobs = jobs.filter(job => appliedJobId.includes(job.id));
            setAppliedJobs(appliedJobs);
        }

    }, []);

    return (
        <div>

            {
                appliedJobs.map(job => <Job job={job} key={job.id}></Job>)
            }

        </div>
    );
};

export default AppliedJobs;