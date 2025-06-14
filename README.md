
# 🫀 Coronary Artery Disease & Arrhythmia Classifier

This is a full-stack web application that predicts the risk of **Coronary Artery Disease (CAD)** and classifies **cardiac arrhythmias** based on patient health data and ECG features. Built using **React** for the frontend and **Flask** for the backend, the app integrates machine learning models trained on medical datasets to offer a seamless heart health prediction experience.

---

## 🧠 Project Highlights

- Predict CAD risk using clinical inputs (age, cholesterol, etc.)
- Classify arrhythmia types using selected ECG feature values
- Real-time predictions via REST API
- Clean, animated frontend UI with modern design
- Educational project showcasing practical machine learning and web development skills

---

## 🖼️ Screenshots

### 🔹 Home Page
![Home Page](screenshots/homepage.png)

### 🔹 CAD Prediction Form
![CAD Form](screenshots/cad_form.png)

### 🔹 Arrhythmia Classifier
![Arrhythmia Form](screenshots/arrhythmia_form.png)

### 🔹 Result Output
![Prediction Result](screenshots/prediction_result.png)

---

## 🏗️ Folder Structure

```
heart-health-app/
│
├── backend/
│   ├── app.py                         # Flask backend API
│   ├── models/
│   │   ├── heart.pkl                  # Trained CAD model
│   │   ├── arrhythmia20-f.pkl         # Trained Arrhythmia model
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CADForm.jsx
│   │   │   ├── CADResult.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Result.jsx
│   │   │   └── ArrhythmiaForm.jsx
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── screenshots/                    # Folder for project screenshots
├── data/ 
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/heart-health-app.git
cd heart-health-app
```

---

### 🔹 2. Run Flask Backend

```bash
cd backend
python -m venv venv
pip install flask,scikit-learn
python app.py
```

- Server runs at: `http://127.0.0.1:5000`

---

### 🔹 3. Run React Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

- Frontend runs at: `http://localhost:3000`

---

## 🧪 Model Details

### 🔸 Coronary Artery Disease (CAD) Prediction
- Features: age, sex, cholesterol, chest pain type, etc.
- Model: `RandomForestClassifier`
- Accuracy: ~85%
- Output: `"At Risk"` or `"Not at Risk"`

### 🔸 Arrhythmia Classification
- Features: 20 ECG-derived signals (e.g., `T_Wave`, `QRS_Dur`, etc.)
- Model: `RandomForest`
- Accuracy: ~%80
- Output Classes: `[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 14.0, 15.0, 16.0]`

---

## 💻 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React, Tailwind CSS  |
| Backend    | Flask, Python        |
| ML Models  | Scikit-learn         |
| Others     | Axios, Joblib, CORS  |

---

## 🌐 API Endpoints

- **POST** `/predict/cad` → CAD prediction  
- **POST** `/predict/arrhythmia` → Arrhythmia classification  

Send a JSON body of feature inputs and get a response like:
```json
{
  "prediction": "Class 1.0 (Normal)"
}
```

---

## 📂 Dataset Sources

- **Arrhythmia Dataset**:  
  https://archive.ics.uci.edu/ml/datasets/arrhythmia  
  https://www.kaggle.com/datasets/shayanfazeli/heartbeat

- **CAD Dataset**:  
  https://archive.ics.uci.edu/ml/datasets/heart+Disease  
  https://www.kaggle.com/datasets/ronitf/heart-disease-uci

---

## 📌 Disclaimer

This project is for **educational and research purposes only**. It is not intended to be used for actual medical diagnosis or decision-making. Please consult healthcare professionals for real-world medical advice.

---

## 📬 Contact

Developed by **[Bishal Prasad]**

---

## ⭐ If you find this project useful, consider giving it a star on GitHub!
