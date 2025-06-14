import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AlertCircle,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Syringe,
  Microscope,
  Activity,
  Pill,
  Thermometer,
  Heart,
  BrainCircuit,
} from "lucide-react";

const backgroundIcons = [
  { Icon: HeartPulse, top: "10%", left: "10%" },
  { Icon: Stethoscope, top: "25%", left: "80%" },
  { Icon: Syringe, top: "60%", left: "20%" },
  { Icon: Microscope, top: "75%", left: "85%" },
  { Icon: Activity, top: "35%", left: "40%" },
  { Icon: Pill, top: "50%", left: "65%" },
  { Icon: Thermometer, top: "80%", left: "50%" },
  { Icon: Heart, top: "15%", left: "55%" },
];

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { prediction = 0, type = "cad" } = location.state || {};

  const isCAD = type === "cad";
  const isHighRisk = isCAD ? prediction === 1 : parseInt(prediction) >= 4; // threshold for arrhythmia
  const resultLabel = isCAD
    ? isHighRisk
      ? "⚠️ High Risk Detected"
      : "✅ Low Risk"
    : `📊 Arrhythmia Class: ${prediction}`;

  const handleBack = () => navigate(isCAD ? "/cad" : "/arrhythmia");

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 overflow-hidden">
      {/* Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {backgroundIcons.map(({ Icon, top, left }, idx) => (
          <Icon
            key={idx}
            className="absolute w-20 h-20 text-blue-300 opacity-20"
            style={{
              top,
              left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center space-y-8 animate-fade-in">
        <div className="flex justify-center">
          {isHighRisk ? (
            <AlertCircle size={80} className="text-red-500 animate-pulse" />
          ) : (
            <ShieldCheck size={80} className="text-green-500 animate-bounce" />
          )}
        </div>

        <h1
          className={`text-4xl font-bold ${
            isHighRisk ? "text-red-600" : "text-green-600"
          }`}
        >
          {resultLabel}
        </h1>

        {/* CAD Message */}
        {isCAD ? (
          <p className="text-gray-700 text-lg leading-relaxed">
            {isHighRisk
              ? "Our analysis indicates a high likelihood of Coronary Artery Disease (CAD). We strongly recommend seeking immediate medical attention from a cardiologist."
              : "You're currently at low risk of CAD. Keep up the great work and maintain your healthy lifestyle to reduce future risks!"}
          </p>
        ) : (
          <p className="text-gray-700 text-lg leading-relaxed">
            Based on your ECG metrics, the model classifies your case as
            arrhythmia type <strong>{prediction}</strong>. Please consult with a
            specialist for clinical interpretation and next steps.
          </p>
        )}

        {/* Suggestions */}
        {isCAD ? (
          isHighRisk ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-left shadow-inner space-y-2">
              <h2 className="text-red-600 font-semibold flex items-center gap-2">
                <Stethoscope className="inline-block" /> What You Can Do Now:
              </h2>
              <ul className="list-disc list-inside text-sm text-red-700">
                <li>Book an appointment with a cardiologist ASAP.</li>
                <li>Monitor symptoms like chest pain or fatigue.</li>
                <li>Adopt a heart-healthy, low-fat diet.</li>
                <li>Quit smoking and reduce stress.</li>
                <li>
                  Get your blood pressure and cholesterol checked regularly.
                </li>
              </ul>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-left shadow-inner space-y-2">
              <h2 className="text-green-700 font-semibold flex items-center gap-2">
                <HeartPulse className="inline-block" /> Healthy Heart Tips:
              </h2>
              <ul className="list-disc list-inside text-sm text-green-700">
                <li>Stay physically active daily.</li>
                <li>Eat a balanced, low-sodium diet.</li>
                <li>Get enough sleep and hydration.</li>
                <li>Manage stress with mindfulness or hobbies.</li>
                <li>Attend regular medical check-ups.</li>
              </ul>
            </div>
          )
        ) : (
          <div
            className={`${
              isHighRisk
                ? "bg-red-50 border-red-200"
                : "bg-green-50 border-green-200"
            } border rounded-xl p-5 text-left shadow-inner space-y-2`}
          >
            <h2
              className={`${
                isHighRisk ? "text-red-600" : "text-green-700"
              } font-semibold flex items-center gap-2`}
            >
              <BrainCircuit className="inline-block" /> General Advice:
            </h2>
            <ul
              className={`list-disc list-inside text-sm ${
                isHighRisk ? "text-red-700" : "text-green-700"
              }`}
            >
              <li>Consult a cardiologist with your ECG .</li>
              <li>
                Don't rely solely on automated classification for diagnosis.
              </li>
              <li>
                Ensure regular monitoring and follow-up if symptoms occur.
              </li>
              <li>
                Maintain lifestyle adjustments recommended for heart rhythm
                health.
              </li>
            </ul>
          </div>
        )}

        {/* Back Button */}
        <div className="pt-4">
          <button
            onClick={handleBack}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            🔁 Go Back to {isCAD ? "CAD Form" : "Arrhythmia Form"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
