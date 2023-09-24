import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const JobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const JobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    JobsApplied.push(job)
                }
            }
            setAppliedJobs(JobsApplied)
            // console.log(jobs, storedJobIds, JobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <div className="bg-violet-50">
                <div className="flex gap-56">
                    <img src="/src/assets/images/bg1.png" alt="" />
                    <h2 className="text-3xl font-semibold mt-8">Applied Jobs</h2>
                </div>
            </div>
                <details className="dropdown mb-32">
                    <summary className="m-1 btn normal-case">Filter By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            
            <ul className="space-y-7 mb-6">
                {
                    displayJobs.map(job => <li key={job.id}>
                        {/* <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span> */}
                        <div className="card card-compact bg-base-100 mx-20">
                            <div className="flex max-w-6xl">
                                <div className="box-content bg-gray-100 w-52 px-10"><img className="mt-20" src={job.logo} alt="Shoes" /></div>
                                <div className="card-body">
                                    <h2 className="card-title">{job.job_title}</h2>
                                    <p>{job.company_name}</p>
                                    <div>
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job.remote_or_onsite}</button>
                                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job.job_type}</button>
                                    </div>
                                    <div className="mt-4 flex">
                                        <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{job.location}</h2>
                                        <h2 className="flex"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{job.salary}</h2>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <Link to={`/job/${job.id}`}>
                                        <button className="btn text-white rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};



export default AppliedJobs;