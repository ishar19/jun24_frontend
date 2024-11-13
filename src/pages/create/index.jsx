import { createJob } from "../../services"
import toast from "react-hot-toast"
import { useState } from "react"
export default function Create() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
    })
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(() => true)
            const response = await createJob(formData)
            toast.success(response.message)
            setFormData({
                title: "",
                description: "",
                location: "",
                salary: "",
            })
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        finally {
            setLoading(() => false)
        }
    }
    return (
        <div>
            <header>
                <h1>Create a job</h1>
                <h3>Your personal job finder is here</h3>
                <form onSubmit={handleSubmit}>
                    <input value={formData.title} type="text" placeholder="Title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                    <input value={formData.description} type="text" placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    <input value={formData.location} type="text" placeholder="Location" onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                    <input value={formData.salary} type="text" placeholder="Salary" onChange={(e) => setFormData({ ...formData, salary: e.target.value })} />
                    <button disabled={loading} type="submit">Submit</button>
                </form>
            </header>
        </div>
    )
}