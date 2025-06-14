import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartPulse,
  ActivitySquare,
  Stethoscope,
  ScanEye,
  Thermometer,
  Syringe,
  Hospital,
  Heart,
} from "lucide-react";

const initialFormState = {
  V6279: 46.3,
  AVR199: -35.3,
  V2237: 2.8,
  V302: 44.0,
  V2233: -6.2,
  T_Wave: 0.9,
  V3243: -5.5,
  V3242: 6.8,
  AVF00: 0.0,
  QRS_Dur: 82.0,
  DII177: 3.4,
  V4257: 4.0,
  "Q-T_Int": 381.0,
  V105: 20.0,
  V5267: 3.4,
  V1224: 0.0,
  AVR197: -2.1,
  V1228: -26.4,
  V6277: 2.8,
  V103: 0.0,
};

const ArrhythmiaForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/predict/arrhythmia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      navigate("/result", {
        state: { prediction: data.prediction, type: "arrhythmia" },
      });
    } catch (err) {
      console.error("Prediction error:", err);
      alert("Failed to get prediction. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full relative py-16 px-6 flex items-center justify-center bg-gradient-to-br from-pink-100 via-indigo-100 to-blue-100 overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-rose-300 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-[60px] right-[-60px] w-[280px] h-[280px] bg-blue-300 rounded-full filter blur-3xl opacity-40 animate-blob delay-2000"></div>
      <div className="absolute bottom-[-100px] left-[60%] w-[320px] h-[320px] bg-purple-300 rounded-full filter blur-3xl opacity-40 animate-blob delay-4000"></div>

      {/* Medical icons */}
      <HeartPulse className="absolute top-[10%] left-[10%] text-red-400 opacity-20 w-16 h-16 animate-pulse" />
      <Stethoscope className="absolute bottom-[20%] right-[8%] text-indigo-400 opacity-20 w-16 h-16 animate-pulse" />
      <ScanEye className="absolute bottom-[30%] left-[6%] text-green-400 opacity-20 w-16 h-16 animate-pulse" />
      <ActivitySquare className="absolute top-[30%] right-[12%] text-blue-400 opacity-20 w-16 h-16 animate-pulse" />
      <Syringe className="absolute top-[20%] right-[30%] text-pink-400 opacity-20 w-14 h-14 animate-pulse" />
      <Thermometer className="absolute bottom-[10%] left-[30%] text-teal-400 opacity-20 w-14 h-14 animate-pulse" />
      <Hospital className="absolute top-[50%] left-[50%] text-purple-400 opacity-20 w-14 h-14 animate-pulse" />
      <Heart className="absolute bottom-[25%] right-[25%] text-red-300 opacity-20 w-14 h-14 animate-pulse" />
      <Heart className="absolute top-[15%] right-[10%] text-red-200 opacity-10 w-12 h-12 animate-pulse" />
      <Heart className="absolute bottom-[15%] left-[15%] text-pink-300 opacity-20 w-12 h-12 animate-pulse" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/40 shadow-xl rounded-3xl p-10 w-full max-w-6xl space-y-10 border border-gray-200 backdrop-blur-2xl"
      >
        <h2 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-md">
          🧬 Arrhythmia Classifier
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto">
          Enter ECG and signal data to classify potential arrhythmia types.
          These inputs reflect ECG wave components and segment characteristics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(initialFormState).map((feature) => (
            <FormInput
              key={feature}
              label={feature}
              name={feature}
              value={formData[feature]}
              onChange={handleChange}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
          >
            🚑 Classify Arrhythmia
          </button>
        </div>
      </form>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
        .delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

const FormInput = ({ label, name, value, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-gray-800">{label}</label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="p-3 border border-gray-400 rounded-xl shadow-inner bg-white/60 focus:ring-2 focus:ring-indigo-400 transition duration-200"
      step="0.1"
    />
  </div>
);

export default ArrhythmiaForm;
