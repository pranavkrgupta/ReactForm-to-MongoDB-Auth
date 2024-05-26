import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/signin', formData);
            if(res.status == 201){
                // Redirect to Homepage or show success message
                window.location.href = '/feedback';
            }
            else{
                alert('failed. Please try again');
            }
        } catch (error) {
            console.error("Login Error :", error);
            alert('Login failed. Please try again');
        }
    }

    return (
        <section className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h2 className="fs-6 text-center text-secondary mb-4">Sign in to your account</h2>
                                <form onSubmit={handleSubmit}>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="" value={formData.email} onChange={handleChange} required />
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="" value={formData.password} onChange={handleChange} required />
                                        <label htmlFor="password" className="form-label">Password</label>
                                    </div>

                                    <div className="d-grid my-3">
                                        <button className="btn btn-primary btn-lg" type="submit">Log in</button>
                                    </div>

                                    <p className="m-0 text-secondary text-center">Don't have an account? <Link to="/signup" className="link-primary text-decoration-none">Sign up</Link></p>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default SignIn;