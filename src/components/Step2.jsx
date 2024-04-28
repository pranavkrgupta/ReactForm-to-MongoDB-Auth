// for product/service satisfaction

// Step2.js

import React from 'react';

const Step2 = ({ formData, onChange, onNext, onPrevious }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ [name]: value });
    };

    const handleNextClick = () => {
        onNext();
    };

    const handlePreviousClick = () => {
        onPrevious();
    };

    return (
        <div>
            <h2>Step 2: Product/Service Satisfaction</h2>
            <form>
                <div>
                    <label htmlFor="satisfaction">Overall satisfaction rating:</label>
                    <select id="satisfaction" name="satisfaction" value={formData.satisfaction} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="very-dissatisfied">Very Dissatisfied</option>
                        <option value="dissatisfied">Dissatisfied</option>
                        <option value="neutral">Neutral</option>
                        <option value="satisfied">Satisfied</option>
                        <option value="very-satisfied">Very Satisfied</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="likes">What do you like most about our product/service?</label>
                    <textarea id="likes" name="likes" value={formData.likes} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label htmlFor="suggestions">Suggestions for improvement:</label>
                    <textarea id="suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange}></textarea>
                </div>
            </form>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Step2;
