# 🏈 NFL Draft Prediction Challenge Web App

This is a full-stack web application for an NFL Draft Prediction Challenge, inspired by March Madness bracket challenges. Users can join or create groups, make draft pick predictions, and compete for the highest score based on draft accuracy.

---

## 🚀 Features

- **User Authentication (Firebase)**
- **Create & Join Groups**
- **Custom Scoring System**
- **Leaderboard for Each Group**
- **Live Draft Data via Sportradar API**
- **Responsive UI with Football Theme (Tailwind CSS)**

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/nfl-draft-prediction-challenge.git
cd nfl-draft-prediction-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root with the following:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_SPORTRADAR_API_KEY=your_sportradar_key
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 🧪 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a project
3. Enable **Authentication > Email/Password**
4. Enable **Cloud Firestore** in test mode
5. Copy your Firebase config to `.env`

---

## 📡 Draft Data (Sportradar)

This app uses [Sportradar's NFL Draft API](https://developer.sportradar.com/) for:
- Live draft order
- Top prospects and player data

> ⚠️ You must request a **trial or production API key** from Sportradar and add it to `.env`.

---

## 📦 Deployment

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import the project and set environment variables from `.env`

---

## 📸 Screenshots

- **Group Creation**
- **Draft Picks**
- **Leaderboard**
- **Team Needs + Draft Order**

---

## 📄 License

MIT

---

## 👨‍💻 Built With

- React + Vite
- Tailwind CSS
- Firebase
- Sportradar API