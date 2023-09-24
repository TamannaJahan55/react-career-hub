import { useEffect, useState } from "react";
import Job from "../job/job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div className="max-w-6xl mx-auto my-10">
            <div className="text-center">
                <h2 className="text-5xl font-semibold">Featured Jobs: {jobs.length}</h2>
                <p className="text-base text-gray-500 text-center mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
               <button onClick={() => setDataLength(jobs.length)} className ="btn text-white rounded mt-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Show All Jobs</button>
            </div>
        </div>

    );
};

export default FeaturedJobs;