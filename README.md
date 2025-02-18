# TaskFlow
# Kanban Task Manager

## 📌 Overview
TaskFlow is a lightweight, intuitive, and real-time Kanban style task management tool designed to enhance productivity and streamline workflows for teams and individuals. With a drag-and-drop Kanban board, real-time collaboration, and AI-powered task recommendations, it simplifies task tracking and project management.

## 🚀 Features
- **Drag-and-Drop Interface** – Easily move tasks between columns.
- **Task Assignment & Deadlines** – Assign tasks with due dates.
- **Real-Time Collaboration** – Live updates for team members.
- **AI-Powered Task Prioritization** *(Future Scope)* – Smart suggestions based on workload and deadlines.
- **Third-Party Integrations** – Connect with tools like Slack and Google Calendar.
- **Responsive UI** – Works on both web and mobile devices.

## 🛠️ Tech Stack
- **Frontend:** React.js / Vue.js
- **Backend:** Node.js (Express) / Django
- **Database:** PostgreSQL / Firebase
- **Authentication:** Firebase Auth / OAuth
- **Real-Time Updates:** WebSockets / Firebase Realtime Database
- **Deployment:** AWS / Vercel

## 🎨 UI/UX Design
- **Wireframes & Mockups:** Designed using Figma
- **User Journey:**
  1. User logs in or signs up.
  2. Creates a Kanban board and customizes columns.
  3. Adds and assigns tasks with due dates.
  4. Moves tasks between statuses (To-Do → In Progress → Completed).
  5. Receives notifications and updates in real-time.

## 📌 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/your-username/kanban-task-manager.git
cd kanban-task-manager

# Install dependencies
npm install  # For Node.js backend
yarn install  # If using Yarn

# Run the development server
npm start  # For frontend
npm run server  # For backend
```

## 🚧 Challenges & Solutions
- **Ensuring real-time updates without lag** → Implemented WebSockets for instant data synchronization.
- **Balancing simplicity with functionality** → Iterative UI design and user testing.
- **Security & Authentication** → Used Firebase Auth/OAuth for secure login.

## 📖 References & Research
- [Kanban Methodology - Atlassian](https://www.atlassian.com/agile/kanban)
- [WebSockets for Real-Time Apps - MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Kanban UX Best Practices - Nielsen Norman Group](https://www.nngroup.com/articles/kanban-ux/)

## 📌 Future Enhancements
- **AI-driven analytics for task insights**
- **Mobile app version with offline task management**
- **Advanced filtering and search functionalities**

## 🤝 Contributors
- **Ayush K Tripathi** – [tripathiayush431@gmail.com](mailto:tripathiayush431@gmail.com)
- **Abhijit Bag** – [abhijitbag31@gmail.com](mailto:abhijitbag31@gmail.com)
- **Ayusman Das** – [ayusmandas2020@gmail.com](mailto:ayusmandas2020@gmail.com)

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
