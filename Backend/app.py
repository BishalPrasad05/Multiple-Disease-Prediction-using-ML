# # # # # from flask import Flask, request, jsonify
# # # # # import joblib
# # # # # import numpy as np
# # # # # from flask_cors import CORS

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # Load your pre-trained CAD model (ensure it's in the same directory or give full path)
# # # # # cad_model = joblib.load("models/cad.pkl")


# # # # # @app.route("/predict/cad", methods=["POST"])
# # # # # def predict_cad():
# # # # #     data = request.get_json()
# # # # #     try:
# # # # #         features = [
# # # # #             data["age"], data["sex"], data["cp"], data["trestbps"], data["chol"],
# # # # #             data["fbs"], data["restecg"], data["thalach"], data["exang"],
# # # # #             data["oldpeak"], data["slope"], data["ca"], data["thal"]
# # # # #         ]
# # # # #         prediction = cad_model.predict([features])[0]
# # # # #         return jsonify({"success": True, "prediction": int(prediction)})
# # # # #     except Exception as e:
# # # # #         return jsonify({"success": False, "error": str(e)})
# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # import joblib
# # # # import numpy as np
# # # # from sklearn.metrics import classification_report


# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # Load models
# # # # cad_model = joblib.load("models/cad.pkl")
# # # # arrhythmia_model = joblib.load("models/rf.pkl")


# # # # @app.route("/")
# # # # def home():
# # # #     return "Heart Disease Prediction API is running"


# # # # @app.route("/predict/cad", methods=["POST"])
# # # # def predict_cad():
# # # #     data = request.get_json()

# # # #     try:
# # # #         features = [
# # # #             data["age"], data["sex"], data["cp"], data["trestbps"], data["chol"],
# # # #             data["fbs"], data["restecg"], data["thalach"], data["exang"],
# # # #             data["oldpeak"], data["slope"], data["ca"], data["thal"]
# # # #         ]
# # # #         prediction = cad_model.predict([features])[0]
# # # #         return jsonify({"success": True, "prediction": int(prediction)})
# # # #     except Exception as e:
# # # #         return jsonify({"success": False, "error": str(e)}), 400


# # # # @app.route("/predict/arrhythmia", methods=["POST"])
# # # # def predict_arrhythmia():
# # # #     data = request.get_json()

# # # #     try:
# # # #         # Assumes 279 features for arrhythmia model
# # # #         features = np.array(data["features"]).reshape(1, -1)
# # # #         prediction = arrhythmia_model.predict(features)[0]
# # # #         return jsonify({"success": True, "prediction": int(prediction)})
# # # #     except Exception as e:
# # # #         return jsonify({"success": False, "error": str(e)}), 400


# # # # if __name__ == "__main__":
# # # #     app.run(debug=True)
# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # import joblib

# # # app = Flask(__name__)
# # # CORS(app)  # Allow requests from your React app

# # # # Load the heart disease model
# # # model = joblib.load("models/heart.pkl")


# # # @app.route("/predict/cad", methods=["POST"])
# # # def predict_cad():
# # #     try:
# # #         data = request.get_json()

# # #         features = [
# # #             data["age"],
# # #             data["sex"],
# # #             data["cp"],
# # #             data["trestbps"],
# # #             data["chol"],
# # #             data["fbs"],
# # #             data["restecg"],
# # #             data["thalach"],
# # #             data["exang"],
# # #             data["oldpeak"],
# # #             data["slope"],
# # #             data["ca"],
# # #             data["thal"]
# # #         ]

# # #         prediction = model.predict([features])[0]
# # #         return jsonify({"success": True, "prediction": int(prediction)})

# # #     except Exception as e:
# # #         return jsonify({"success": False, "error": str(e)}), 400


# # # if __name__ == "__main__":
# # #     app.run(debug=True)


# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # import joblib

# # app = Flask(__name__)
# # CORS(app)  # Allow requests from your React app

# # # Load both models
# # cad_model = joblib.load("models/heart.pkl")
# # arrhythmia_model = joblib.load(
# #     "models/arrhythmia.pkl")  # <-- Your arrhythmia model

# # # 🚑 Route for CAD Prediction


# # @app.route("/predict/cad", methods=["POST"])
# # def predict_cad():
# #     try:
# #         data = request.get_json()
# #         features = [
# #             data["age"], data["sex"], data["cp"], data["trestbps"], data["chol"],
# #             data["fbs"], data["restecg"], data["thalach"], data["exang"],
# #             data["oldpeak"], data["slope"], data["ca"], data["thal"]
# #         ]
# #         prediction = cad_model.predict([features])[0]
# #         return jsonify({"success": True, "prediction": int(prediction)})
# #     except Exception as e:
# #         return jsonify({"success": False, "error": str(e)}), 400

# # # ❤️ Route for Arrhythmia Prediction


# # @app.route("/predict/arrhythmia", methods=["POST"])
# # def predict_arrhythmia():
# #     try:
# #         data = request.get_json()

# #         # Make sure you send all 20 features from frontend
# #         features = [
# #             data["QRS_Dur"], data["R_Wave"], data["V103"], data["V200"], data["V300"],
# #             data["V302"], data["V400"], data["V501"], data["V601"], data["T_Wave"],
# #             data["AVR197"], data["V1220"], data["V1228"], data["V2230"], data["V2238"],
# #             data["V3240"], data["V3241"], data["V3248"], data["V4251"], data["V6277"]
# #         ]

# #         prediction = arrhythmia_model.predict([features])[0]
# #         return jsonify({"success": True, "prediction": float(prediction)})
# #     except Exception as e:
# #         return jsonify({"success": False, "error": str(e)}), 400


# # if __name__ == "__main__":
# #     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib

# app = Flask(__name__)
# CORS(app)

# # Load models
# cad_model = joblib.load("models/heart.pkl")
# arrhythmia_model = joblib.load("models/arrhythmia.pkl")
# selected_features = joblib.load(
#     "models/selected_features.pkl")  # ✅ Load selected features


# @app.route("/predict/cad", methods=["POST"])
# def predict_cad():
#     try:
#         data = request.get_json()
#         features = [
#             data["age"], data["sex"], data["cp"], data["trestbps"], data["chol"],
#             data["fbs"], data["restecg"], data["thalach"], data["exang"],
#             data["oldpeak"], data["slope"], data["ca"], data["thal"]
#         ]
#         prediction = cad_model.predict([features])[0]
#         return jsonify({"success": True, "prediction": int(prediction)})
#     except Exception as e:
#         return jsonify({"success": False, "error": str(e)}), 400


# @app.route("/predict/arrhythmia", methods=["POST"])
# def predict_arrhythmia():
#     try:
#         data = request.get_json()

#         # ✅ Dynamically fetch required features
#         features = [data[feature] for feature in selected_features]

#         prediction = arrhythmia_model.predict([features])[0]
#         return jsonify({"success": True, "prediction": float(prediction)})
#     except Exception as e:
#         return jsonify({"success": False, "error": str(e)}), 400


# if __name__ == "__main__":
#     app.run(debug=True)


# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import numpy as np

# app = Flask(__name__)
# CORS(app)

# # Load models
# cad_model = joblib.load("models/heart.pkl")
# arrhythmia_model = joblib.load("models/arrhythmia2.pkl")
# arrhythmia_features = joblib.load(
#     "models/selected_features2.pkl")  # list of 20 features


# @app.route("/predict/cad", methods=["POST"])
# def predict_cad():
#     try:
#         data = request.get_json()
#         features = [
#             data["age"], data["sex"], data["cp"], data["trestbps"],
#             data["chol"], data["fbs"], data["restecg"], data["thalach"],
#             data["exang"], data["oldpeak"], data["slope"], data["ca"],
#             data["thal"]
#         ]
#         prediction = cad_model.predict([features])[0]
#         return jsonify({"success": True, "prediction": int(prediction)})
#     except Exception as e:
#         return jsonify({"success": False, "error": str(e)}), 400


# @app.route("/predict/arrhythmia", methods=["POST"])
# def predict_arrhythmia():
#     try:
#         data = request.get_json()
#         # <-- Add this line to print incoming data
#         print("🔍 Received arrhythmia input:", data)

#         features = [data[feature] for feature in arrhythmia_features]
#         # Optional: show feature list in correct order
#         print("✅ Final features used for prediction:", features)

#         prediction = arrhythmia_model.predict([features])[0]
#         return jsonify({"success": True, "prediction": prediction})
#     except Exception as e:
#         return jsonify({"success": False, "error": str(e)}), 400


# if __name__ == "__main__":
#     app.run(debug=True)
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
