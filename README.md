
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
![Screenshot 2025-06-11 232533](https://github.com/user-attachments/assets/16d560ab-9631-4d2e-847c-9fba7ba9e9e2)

### 🔹 CAD Prediction Form
![Screenshot 2025-06-11 231710](https://github.com/user-attachments/assets/86d6a701-c541-4527-85ea-27ee5562beb0)

### 🔹 Arrhythmia Classifier Form
![Screenshot 2025-06-11 232559](https://github.com/user-attachments/assets/06558bc9-8a28-44fb-8af1-152ceeab3f34)

### 🔹 Result Output

![Screenshot 2025-06-11 231643](https://github.com/user-attachments/assets/704a1df6-d235-4cb7-9a1b-a0e77ca85168)
![Screenshot 2025-06-11 231746](https://github.com/user-attachments/assets/e9928ab5-5afc-4c6f-959a-c58857d5d1f0)
![Screenshot 2025-06-11 233015](https://github.com/user-attachments/assets/896ca084-fe25-4373-8519-86575a051fe8)
![Screenshot 2025-06-11 233559](https://github.com/user-attachments/assets/91a1b69e-ef62-477c-a466-52d89be5a4da)


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
git clone https://github.com/BishalPrasad05/Multiple-heart-disease-prediction-using-ML.git
cd Multiple-heart-disease-prediction-using-ML
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
- Model: `RandomForest`
- Accuracy: ~95%
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
