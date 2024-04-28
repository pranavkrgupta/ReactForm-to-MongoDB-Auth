// for user experience feedback

// Step3.js

import React from 'react';

const Step3 = ({ formData, onChange, onNext, onPrevious }) => {
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
            <h2>Step 3: User Experience Feedback</h2>
            <form>
                <div>
                    <label htmlFor="navigationEase">Navigation ease rating:</label>
                    <select id="navigationEase" name="navigationEase" value={formData.navigationEase} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="very-easy">Very Easy</option>
                        <option value="easy">Easy</option>
                        <option value="neutral">Neutral</option>
                        <option value="difficult">Difficult</option>
                        <option value="very-difficult">Very Difficult</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="informationSearch">Did you find the information you were looking for?</label>
                    <input type="radio" id="informationSearchYes" name="informationSearch" value="yes" checked={formData.informationSearch === 'yes'} onChange={handleChange} />
                    <label htmlFor="informationSearchYes">Yes</label>
                    <input type="radio" id="informationSearchNo" name="informationSearch" value="no" checked={formData.informationSearch === 'no'} onChange={handleChange} />
                    <label htmlFor="informationSearchNo">No</label>
                </div>
                <div>
                    <label htmlFor="suggestions">Suggestions for improving user experience:</label>
                    <textarea id="suggestions" name="suggestions" value={formData.suggestions} onChange={handleChange}></textarea>
                </div>
            </form>
            <button onClick={handlePreviousClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default Step3;
