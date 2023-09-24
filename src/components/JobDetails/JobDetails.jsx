import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";
import { AiOutlineDollar } from "react-icons/ai";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }
    return (
        <div>
            <div className="bg-violet-50">
                <div className="flex gap-56">
                    <img src="/src/assets/images/bg1.png" alt="" />
                    <h2 className="text-3xl font-semibold mt-8">Job Details</h2>
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-4 mx-20 my-10">
                <div className="box-content md:col-span-3">
                    <p><b>Job Description:</b>{job.job_description}</p>
                    <p><b>Job Responsibility:</b>{job.job_responsibility}</p>
                    <p><b>Educational Requirements:</b>
                        <br />
                        {job.educational_requirements}</p>
                    <p><b>Experiences:</b>
                        <br />
                        {job.experiences}
                    </p>
                </div>
                <div className="box-content">
                    <div className="bg-violet-50 rounded-lg p-6">
                        <h2 className="text-2xl">Job Details</h2>
                        <hr />
                        <h2 className="flex mt-3"><AiOutlineDollar className="text-2xl"></AiOutlineDollar><b>Salary:</b>{job.salary}</h2>
                        <p><b>Job title:</b> {job.job_title}</p>
                        <h2 className="mt-3 mb-2"><b>Contact Information</b></h2>
                        <hr />
                        <p className="mt-3"><b>Phone:</b> {job.contact_information.phone}</p>
                        <p><b>Email:</b> {job.contact_information.email}</p>
                        <p><b>Address:</b> {job.contact_information.address}</p>
                    </div>
                    <div className="my-3">
                        <button onClick={handleApplyJob} className="btn text-white rounded w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;