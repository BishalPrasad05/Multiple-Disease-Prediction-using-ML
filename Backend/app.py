from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load models
cad_model = joblib.load("models/heart.pkl")
arrhythmia_model = joblib.load("models/arrhythmia20-f.pkl")

# Directly define the 20 arrhythmia features (same as in the React form)
arrhythmia_features = [
    "V6279", "AVR199", "V2237", "V302", "V2233", "T_Wave", "V3243",
    "V3242", "AVF00", "QRS_Dur", "DII177", "V4257", "Q-T_Int", "V105",
    "V5267", "V1224", "AVR197", "V1228", "V6277", "V103"
]


@app.route("/predict/cad", methods=["POST"])
def predict_cad():
    try:
        data = request.get_json()
        features = [
            data["age"], data["sex"], data["cp"], data["trestbps"],
            data["chol"], data["fbs"], data["restecg"], data["thalach"],
            data["exang"], data["oldpeak"], data["slope"], data["ca"],
            data["thal"]
        ]
        prediction = cad_model.predict([features])[0]
        return jsonify({"success": True, "prediction": int(prediction)})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 400


@app.route("/predict/arrhythmia", methods=["POST"])
def predict_arrhythmia():
    try:
        data = request.get_json()
        print("🔍 Received arrhythmia input:", data)

        # Extract and convert features in order
        features = [float(data[f]) for f in arrhythmia_features]
        print("✅ Features used:", features)

        prediction = arrhythmia_model.predict([features])[0]
        return jsonify({"success": True, "prediction": int(prediction)})

    except Exception as e:
        print("❌ Prediction error:", e)
        return jsonify({"success": False, "error": str(e)}), 400


if __name__ == "__main__":
    app.run(debug=True)
