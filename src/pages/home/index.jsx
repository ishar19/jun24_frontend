import { useState, useEffect } from "react"
import { getJobs } from "../../services"
import { useNavigate } from "react-router-dom"
export default function Home() {
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await getJobs()
                setJobs(response)
            } catch (error) {
                console.log(error)
            }
        }
        fetchJobs()
    }, [])
    return (
        <div>
            <h1>Home</h1>
            {jobs.map((job, index) => (
                <div key={index}>
                    <h2 onClick={() => navigate(`/job/${job._id}`)}>{job.title}</h2>
                    <p>{job.description}</p>
                </div>
            ))}
        </div>
    )
}