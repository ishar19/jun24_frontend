import { useState, useEffect } from "react"
import { getJobs, deleteJob } from "../../services"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
export default function Home() {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    const fetchJobs = async () => {
        try {
            const response = await getJobs()
            setJobs(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchJobs()
    }, [])
    const isEditable = (job) => {
        if (localStorage.getItem("userId") === job.userId) {
            return true
        }
        else {
            return false
        }
    }
    const handleDelete = async (id) => {
        try {
            const response = await deleteJob(id)
            toast.success(response.message)
            fetchJobs()
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    return (
        <div>
            <h1>Home</h1>
            {jobs.map((job, index) => (
                <div key={index}>
                    <h2 onClick={() => navigate(`/job/${job._id}`)}>{job.title}</h2>
                    <p>{job.description}</p>
                    {isEditable(job) && <button onClick={() => navigate(`/edit/${job._id}`)}>Edit</button>}
                    {isEditable(job) && <button onClick={() => handleDelete(job._id)}>Delete</button>}
                </div>
            ))}
        </div>
    )
}