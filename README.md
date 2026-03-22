UserStats: FullStackEvent FeedbackManagementSystem
📌 Project Overview
UserStats is a specialized full-stack application engineered to capture, manage, and analyze user engagement metrics through event feedback. Developed during my internship at Sysslan IT Solutions, the project demonstrates a complete data lifecycle—from responsive UI data entry to persistent NoSQL storage.

Key Objectives
Analytical Feedback: Provide a platform for users to submit structured data regarding corporate events.

Data Persistence: Utilize MongoDB to store user statistics and feedback securely.

End-to-End Connectivity: Bridge a React-based frontend with a modular Node.js REST API.

🛠️ Technical Architecture
Frontend (The Interface)
React.js (Vite): Powering a high-performance, component-based Single Page Application (SPA).

Tailwind CSS: Implementation of a utility-first, fully responsive design system.

Axios: Handling asynchronous HTTP requests for seamless data flow.

Backend (The Logic)
Node.js & Express: A modular server architecture with specialized routing for UserStats data.

Mongoose (ODM): Enforcing strict data schemas to ensure database integrity.

Dotenv: Managing sensitive environment variables like MONGO_URI and PORT.

Database (The Storage)
MongoDB: A scalable NoSQL database used to store and retrieve user-submitted statistics.

📂 Modular File Structure
In adherence to "Clean Code" standards, UserStats is organized into logical directories:

Plaintext
/UserStats-Root
├── /backend
│   ├── /models         # Data Schemas (Feedback.js)
│   ├── /routes         # Modular API Endpoints (FeedbackRoutes.js)
│   ├── .env            # Secure configuration (Port, Mongo_URI)
│   └── Server.js       # Express Application Entry Point
└── /frontend
    ├── /src
    │   ├── /components # Reusable UI components (Navbar)
    │   ├── /pages      # Level 1 Core Views (Home, Events, Feedback)
    │   └── App.jsx     # Client-side routing logic
    └── tailwind.config.js
🚀 Development Milestones
Level 1-2: Foundation & API Setup
Built a professional 3-page frontend (Home, Events, Feedback).

Configured a Node.js environment with specialized routes for the UserStats API.

Level 3-4: Database Integration & Data Flow
Integrated MongoDB to handle complex feedback objects and user statistics.

Connected the React FeedbackForm to the /api/feedback endpoint with robust error handling and success notifications.

Level 5: Refinement & Testing
Performed comprehensive end-to-end testing of the feedback submission and retrieval process.

Verified that all navigation links and data-fetching hooks operate at peak efficiency.

🔧 Installation & Setup
Clone the Repository:

Bash
git clone https://github.com/JanardhanPavan/UserStats.git
Configure Backend:

Bash
cd backend
npm install
# Ensure your .env file contains a valid MONGO_URI
node Server.js
Configure Frontend:

Bash
cd frontend
npm install
npm run dev
👨‍💻 Author
Janardhan Pavan

Role: Full Stack Web Development Intern

Organization: Sysslan IT Solutions

Batch: 2026 Cohort

Disclaimer: UserStats is an original project developed as part of the Sysslan IT Solutions internship program. It adheres to all professional standards and curriculum requirements.

#SysslanITSolutions #UserStats #FullStackDevelopment #SysslanExperience
