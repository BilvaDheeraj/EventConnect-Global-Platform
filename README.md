# EventConnect (event-pbl)

![EventConnect](https://via.placeholder.com/1200x400?text=EventConnect+-+Event+Management+Platform)

EventConnect is a modern, responsive frontend application built for event creation, management, and RSVPs. Designed with inspiration from top platforms like Meetup and RSVPify, it caters specifically to tech meetups, college events, workshops, and vibrant communities.

## 🚀 Features

- **Stunning Landing Page**: Includes dedicated sections for Hero, Features, How It Works, Testimonials, and Pricing.
- **User Authentication**: Clean and intuitive Login and Signup interfaces.
- **User Dashboard**: A comprehensive dashboard for users to manage their events, RSVPs, and profile settings.
- **Event Creation Flow**: A streamlined, multi-step process for creating and configuring new events.
- **Dark/Light Theme Support**: Built-in context provider for seamless theme switching.
- **Smooth Animations**: Powered by Framer Motion for a dynamic and engaging user experience.
- **Responsive Design**: Fully mobile-responsive, ensuring a great experience across all devices.

## 🛠️ Tech Stack

This project is built using modern web development tools:

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/) & [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with structured modules and global theme variables.

## 📁 Project Structure

```text
event-pbl/
├── src/
│   ├── assets/        # Static assets like images and generic SVGs
│   ├── components/    # Reusable UI components (Navbar, Footer, Hero, CTA, etc.)
│   ├── context/       # React Context (e.g., ThemeContext for dark/light mode)
│   ├── pages/         # Page components (Dashboard, Login, CreateEvent, About, etc.)
│   ├── App.jsx        # Main application component and routing configuration
│   ├── main.jsx       # Entry point for the React application
│   ├── index.css      # Global CSS variables and base styles
│   ├── App.css        # Application-level styling
│   └── pages.css      # Shared styling for various pages
├── index.html         # Main HTML template
├── package.json       # Project metadata and dependencies
└── vite.config.js     # Vite configuration
```

## 💻 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16.x or newer) and npm installed.

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-repository-url>
   cd event-pbl
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Open your browser and navigate to the URL provided in your terminal (usually `http://localhost:5173/`).

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the app in development mode using Vite.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to find and fix code style issues.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/BilvaDheeraj/Reliability-Aware-Human-AI-Collaborative-Framework/issues) if you want to contribute.

## 📄 License

This project is intended for educational and portfolio purposes. Feel free to fork and modify it for your own use cases!
