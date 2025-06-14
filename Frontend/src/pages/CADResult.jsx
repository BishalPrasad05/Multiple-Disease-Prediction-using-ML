import React from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const CADResult = () => {
  const location = useLocation();
  const { prediction } = location.state || {};

  const isHighRisk = prediction === 1;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-white text-center ${
          isHighRisk ? "border-red-400" : "border-green-400"
        } border-t-8`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="flex justify-center mb-6"
        >
          {isHighRisk ? (
            <AlertTriangle className="text-red-500" size={64} />
          ) : (
            <CheckCircle className="text-green-500" size={64} />
          )}
        </motion.div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          {isHighRisk ? "High Risk Detected" : "You're All Clear!"}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {isHighRisk
            ? "This person is at high risk of Coronary Artery Disease (CAD). Please consult a medical professional immediately."
            : "This person currently shows no signs of Coronary Artery Disease. Keep maintaining a healthy lifestyle!"}
        </p>

        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition shadow-md"
        >
          Go Back
        </button>
      </motion.div>
    </div>
  );
};

export default CADResult;
