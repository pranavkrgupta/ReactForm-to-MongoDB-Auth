import React, { useState } from 'react';
import StarRating from './StarRating';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        firstVisit: '',
        found: '',
        qualityRating: 0,
        recommendRating: 0,
        suggestions: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleQualityRatingChange = (rating) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            qualityRating: rating,
        }));
    };

    const handleRecommendRatingChange = (rating) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            recommendRating: rating,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here, such as sending data to a backend server
        console.log(formData);
    };

    return (
        <>
            <h2 className='text-center'>We Value Your Feedback</h2>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter Your Full Name:</label>
                        <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Is this your first time visiting the website?</label>
                        <div className="form-check">
                            <input type="radio" id="firstVisitYes" name="firstVisit" className="form-check-input" value="Yes" onChange={handleChange} />
                            <label htmlFor="firstVisitYes" className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="firstVisitNo" name="firstVisit" className="form-check-input" value="No" onChange={handleChange} />
                            <label htmlFor="firstVisitNo" className="form-check-label">No</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Did you find what you needed?</label>
                        <div className="form-check">
                            <input type="radio" id="foundAll" name="found" value="All" className="form-check-input" onChange={handleChange} />
                            <label htmlFor="foundAll" className="form-check-label">Yes, All of it.</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="foundSome" name="found" value="Some" className="form-check-input" onChange={handleChange} />
                            <label htmlFor="foundSome" className="form-check-label">Yes, Some of it.</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" id="foundNone" name="found" value="None" className="form-check-input" onChange={handleChange} />
                            <label htmlFor="foundNone" className="form-check-label">No, None of it.</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">Please rate the quality of our product/service</label>
                        <StarRating rating={formData.qualityRating} setRating={handleQualityRatingChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="">How likely are you to recommend us to a friend or colleague?</label>
                        <StarRating rating={formData.recommendRating} setRating={handleRecommendRatingChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Do you have any suggestions for how we can improve?</label>
                        <textarea className="form-control" name="suggestions" value={formData.suggestions} onChange={handleChange} placeholder="We'd love to hear your suggestions." />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Feedback;
