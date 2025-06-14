import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CADForm = () => {
  const [formData, setFormData] = useState({
    age: 50,
    sex: 1,
    cp: 0,
    trestbps: 120,
    chol: 220,
    fbs: 0,
    restecg: 0,
    thalach: 150,
    exang: 0,
    oldpeak: 1.5,
    slope: 1,
    ca: 0,
    thal: 2,
  });

  const navigate = useNavigate();

  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" || type === "range" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/predict/cad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      navigate("/result", {
        state: { prediction: data.prediction, type: "cad" },
      });
    } catch (err) {
      console.error("Prediction error:", err);
      alert("Failed to get prediction. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full relative py-12 px-4 flex items-center justify-center overflow-hidden bg-white">
      {/* Background Blobs Only - no gradient */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div
        className="absolute top-[40px] right-[-80px] w-[250px] h-[250px] bg-purple-400 rounded-full filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-[-100px] left-[60%] w-[350px] h-[350px] bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white shadow-xl rounded-3xl p-10 w-full max-w-4xl space-y-8 border border-gray-100"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          🫀 Coronary Artery Disease Risk Predictor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSlider
            label="🧓 Age"
            name="age"
            min={10}
            max={100}
            value={formData.age}
            onChange={handleChange}
          />
          <FormToggle
            label="Sex"
            name="sex"
            options={[
              { label: "Male", value: 1 },
              { label: "Female", value: 0 },
            ]}
            selected={formData.sex}
            onChange={setField}
          />
          <FormButtons
            label="Chest Pain Type"
            name="cp"
            options={[
              { label: "Typical Angina", value: 0 },
              { label: "Atypical Angina", value: 1 },
              { label: "Non-anginal Pain", value: 2 },
              { label: "Asymptomatic", value: 3 },
            ]}
            selected={formData.cp}
            onChange={setField}
          />
          <FormSlider
            label="🩸 Resting BP"
            name="trestbps"
            min={80}
            max={200}
            value={formData.trestbps}
            onChange={handleChange}
          />
          <FormSlider
            label="🧬 Cholesterol"
            name="chol"
            min={100}
            max={600}
            value={formData.chol}
            onChange={handleChange}
          />
          <FormToggle
            label="Fasting Blood Sugar > 120 mg/dl"
            name="fbs"
            options={[
              { label: "True", value: 1 },
              { label: "False", value: 0 },
            ]}
            selected={formData.fbs}
            onChange={setField}
          />
          <FormButtons
            label="Resting ECG"
            name="restecg"
            options={[
              { label: "Normal", value: 0 },
              { label: "ST-T Abnormality", value: 1 },
              { label: "LV Hypertrophy", value: 2 },
            ]}
            selected={formData.restecg}
            onChange={setField}
          />
          <FormSlider
            label="💓 Max Heart Rate"
            name="thalach"
            min={60}
            max={220}
            value={formData.thalach}
            onChange={handleChange}
          />
          <FormToggle
            label="Exercise Induced Angina"
            name="exang"
            options={[
              { label: "Yes", value: 1 },
              { label: "No", value: 0 },
            ]}
            selected={formData.exang}
            onChange={setField}
          />
          <FormSlider
            label="📉 ST Depression (oldpeak)"
            name="oldpeak"
            min={0}
            max={6}
            step={0.1}
            value={formData.oldpeak}
            onChange={handleChange}
          />
          <FormButtons
            label="Slope"
            name="slope"
            options={[
              { label: "Upsloping", value: 0 },
              { label: "Flat", value: 1 },
              { label: "Downsloping", value: 2 },
            ]}
            selected={formData.slope}
            onChange={setField}
          />
          <FormSlider
            label="🫁 Major Vessels"
            name="ca"
            min={0}
            max={4}
            value={formData.ca}
            onChange={handleChange}
          />
          <FormButtons
            label="Thalassemia"
            name="thal"
            options={[
              { label: "Normal", value: 0 },
              { label: "Fixed Defect", value: 1 },
              { label: "Reversible", value: 2 },
            ]}
            selected={formData.thal}
            onChange={setField}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-600 hover:to-fuchsia-600 text-white font-semibold px-10 py-3 rounded-full shadow-md transform transition-transform hover:scale-105"
          >
            🔍 Predict Now
          </button>
        </div>
      </form>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
      `}</style>
    </div>
  );
};

// Reusable Inputs
const FormSlider = ({ label, name, min, max, step = 1, value, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <div className="flex items-center gap-4">
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="accent-blue-500 flex-grow"
      />
      <input
        type="number"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-20 p-1 border rounded-xl text-center"
      />
    </div>
  </div>
);

const FormToggle = ({ label, name, options, selected, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <div className="flex gap-3">
      {options.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={`px-3 py-1.5 rounded-lg font-semibold text-sm min-w-[80px] ${
            selected === value
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 hover:bg-indigo-100"
          }`}
          onClick={() => onChange(name, value)}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

const FormButtons = ({ label, name, options, selected, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-700">{label}</label>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={`p-2 rounded-xl border font-semibold text-sm min-w-[90px] ${
            selected === value
              ? "bg-indigo-600 text-white border-indigo-700"
              : "bg-white border-gray-300 hover:bg-indigo-100"
          }`}
          onClick={() => onChange(name, value)}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default CADForm;

