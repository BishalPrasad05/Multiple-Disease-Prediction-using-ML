import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  Heart,
  BrainCircuit,
  Pill,
} from "lucide-react";

const backgroundIcons = [
  { Icon: HeartPulse, top: "10%", left: "20%" },
  { Icon: Activity, top: "25%", left: "80%" },
  { Icon: BrainCircuit, top: "70%", left: "30%" },
  { Icon: Stethoscope, top: "85%", left: "85%" },
  { Icon: Pill, top: "40%", left: "60%" },
  { Icon: Heart, top: "15%", left: "55%" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Medical Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {backgroundIcons.map(({ Icon, top, left }, idx) => (
          <Icon
            key={idx}
            className="absolute w-16 h-16 text-blue-300 opacity-10"
            style={{ top, left, transform: "translate(-50%, -50%)" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 animate-fade-in">
          CAD Risk & ECG Arrhythmia Classifier
        </h1>
        <p className="text-lg text-gray-700 mb-10 animate-fade-in delay-200">
          Advanced cardiovascular tools to assess your heart's condition using
          intelligent prediction and analysis.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full animate-fade-in delay-300">
        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all border border-blue-200 hover:border-blue-400">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            🫀 CAD Risk Assessment
          </h2>
          <p className="text-gray-600 mb-6">
            Use your demographic and clinical data to estimate your risk for
            Coronary Artery Disease.
          </p>
          <button
            onClick={() => navigate("/cad")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition"
          >
            Start CAD Assessment
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all border border-blue-200 hover:border-blue-400">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            🧠 Arrhythmia Classifier
          </h2>
          <p className="text-gray-600 mb-6">
            Analyze ECG features to determine the probability of cardiac
            arrhythmias.
          </p>
          <button
            onClick={() => navigate("/arrhythmia")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full transition"
          >
            Start Arrhythmia Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
