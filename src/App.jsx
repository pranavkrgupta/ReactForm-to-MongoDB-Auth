import React, { useState } from 'react';
import './App.css';
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';


const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    satisfaction: '',
  });
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <div className="App">
      {step === 1 && <Step1 formData={formData} onChange={handleFormDataChange} onNext={handleNext} />}
      {step === 2 && <Step2 formData={formData} onChange={handleFormDataChange} onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 3 && <Step3 formData={formData} onChange={handleFormDataChange} onNext={handleNext} onPrevious={handlePrevious} />}
      {/* Render other step components based on the current step */}
    </div>
  );
}

export default App
