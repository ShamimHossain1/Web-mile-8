import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

    const { logo, company_name, job_title, salary, job_type, location,remote_or_onsite} = job;
    return (
       
            <div className="border rounded-xl p-6 space-y-4">
                {/* <h2 className="text-3xl font-semibold text-blue-600">Google</h2> */}
                <img src={logo} alt="" />
                <h3 className="text-xl font-semibold">{job_title}</h3>
                <p className="text-gray-600">{company_name}</p>

                <div className="flex gap-2">
                    <span   className=" bg-white text-purple-700 text-sm px-3 py-1 rounded-lg">
                   {remote_or_onsite}
                    </span>
                    <span  className=" bg-white text-purple-700 text-sm px-3 py-1 rounded-lg">
                   { job_type}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 12m0 0L9.172 7.757m4.242 4.243L12 3m0 9l-4.243 4.243M12 12l4.243-4.243"
                        />
                    </svg>
                    {location}
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-3.866 0-7 1.791-7 4s3.134 4 7 4 7-1.791 7-4-3.134-4-7-4z"
                        />
                    </svg>
                    {salary}
                </div>

                <Link to={`/job/${job.id}`}>  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded py-2  text-center px-5">
                  View Details
                </button></Link>
            </div>


    );
};

export default Job;