import { use, useEffect, useState } from "react";
import Job from "./Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    // console.log(jobs);

    return (
        <div className="my-10">

            <h1 className="text-3xl text-center mt-10">Featured Jobs</h1>
            <div className="grid grid-cols-2 gap-6 mt-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            {
                dataLength < jobs.length && <div className="flex justify-center mt-10">
                <button onClick={() => setDataLength(6)} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded py-2  text-center px-5">Load More</button>
            </div>
            }
        </div>
    );
};

export default FeaturedJobs;