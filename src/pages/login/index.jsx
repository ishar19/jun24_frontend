import { useState } from "react"
import styles from "./login.module.css"
import { register } from "../../services"
export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        password: "",
    })
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await register(formData)
            console.log(response.message)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <header>
                <h1>Create an account</h1>
                <h3>Your personal job finder is here</h3>
            </header>
            <form className={styles.form} onSubmit={handleRegister}>
                <input value={formData.email} type="text" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input value={formData.name} type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input value={formData.phone} type="text" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                <input value={formData.password} type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <div>
                    <input type="checkbox" name="tos" id="tos" />
                    <label htmlFor="tos">I agree to the Terms and Conditions</label>
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}


// HOMEWORK
// 1. Add form validation (only submit if all fields are filled otherwise show error message below the input)
// 2. Add a loading state (show a spinner)
// 3. Add a success state (show a success message) (react-toastify) (hot-toast)
// 4. Add a error state (show an error message) (react-toastify) (hot-toast)
