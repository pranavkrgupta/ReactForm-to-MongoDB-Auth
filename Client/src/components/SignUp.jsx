import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
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
            const response = await axios.post('http://localhost:5000/api/signup', formData);
            if(response.status == 201){
                // Redirect to login page or show success message
                window.location.href = '/signin';
            }
            else{
                alert('Signup failed. Please try again');
            }
        } catch (error) {
            console.error('Signup error :', error);
            alert('Signup failed. Please try again');
        }
    };

    return (
        <section className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <h2 className="fs-6 text-center text-secondary mb-4">Enter your details to register</h2>
                                <form onSubmit={handleSubmit}>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="" value={formData.name} onChange={handleChange} required />
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="" value={formData.email} onChange={handleChange} required />
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                                        <label htmlFor="password" className="form-label">Password</label>
                                    </div>

                                    <div className="d-grid my-3">
                                        <button className="btn btn-primary btn-lg" type="submit">Sign up</button>
                                    </div>

                                    <p className="m-0 text-secondary text-center">Already have an account? <Link to="/signin" className="link-primary text-decoration-none">Sign in</Link></p>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default SignUp;