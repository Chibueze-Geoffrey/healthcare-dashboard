# Healthcare Appointment Dashboard

A **Healthcare Appointment Dashboard** built with **React.js** (Web) and **React Native** (Mobile). The app fetches and displays patient appointment data, allowing users to filter, view details, and manage appointments seamlessly.

---

## 📌 Features

✅ Fetch and display appointments from API  
✅ Filter by **Date, Doctor, Specialty, Clinic Location, and Status**  
✅ View detailed appointment information  
✅ Handle loading and error states gracefully  
✅ Mobile-responsive UI for **React.js**  
✅ **React Native** version for iOS & Android  

---

## 📌 Technologies Used

- **Frontend:** React.js (for Web), React Native (for Mobile)
- **State Management:** React Hooks
- **API Calls:** Axios
- **Navigation:** React Router (Web) & React Navigation (Mobile)
- **Styling:** CSS (Web) & React Native Styles (Mobile)

---

## 📌 API Endpoints

The app fetches data from the following endpoints:

🔹 **Get all appointments:**  
```http
GET https://your-api-domain.com/api/appointments
```
🔹 **Get appointment details by ID:**  
```http
GET https://your-api-domain.com/api/appointments/{id}
```

---

## 📌 Installation & Setup

### 🛠 Setup for React.js (Web)
1. Clone the repository:
   ```sh
   git clone <your-github-repo-url>
   cd healthcare-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open **http://localhost:3000** in your browser.

---

### 📱 Setup for React Native (Mobile)
1. Clone the repository:
   ```sh
   git clone <your-github-repo-url>
   cd healthcare-mobile
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo server:
   ```sh
   npm start
   ```
4. Scan the QR code in **Expo Go** (iOS/Android) to run the app.

---

## 📌 Deployment

### 🌍 Deploy React.js (Web) on Vercel/Netlify
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy to **Vercel**:
   ```sh
   npm install -g vercel
   vercel
   ```
   OR deploy to **Netlify**:
   ```sh
   npm install -g netlify-cli
   netlify deploy
   ```

### 📱 Deploy React Native (Mobile) on Expo
1. Install Expo CLI:
   ```sh
   npm install -g expo-cli
   ```
2. Publish the app:
   ```sh
   expo publish
   ```
3. Share the Expo link for testing.


---

## 📌 Contact
For any questions or support, feel free to reach out!


