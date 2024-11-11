# OS System Information App

This app provides real-time system information of your machine, including memory usage, CPU details, uptime, load averages, and more. The data is continuously updated using WebSockets for a seamless and real-time experience.

## Features:

- Displays memory information (total, free, used memory percentage)
- Shows CPU details (model, speed)
- Displays system uptime and load average
- Real-time updates via WebSockets
- Platform and architecture info
- Hostname, OS type, and OS release details
- User information (username, home directory)

## Prerequisites:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

## Setup and Installation:

### 1. Clone the repository

To get started, clone this repository to your local machine.

```bash
git clone https://github.com/dd3vahmad/os.git
cd os
```

### 2. Install dependencies

Run the following command to install all necessary packages:

```bash
npm install
```

### 3. Build the CSS (if you made changes to the styles)

If you made changes to the `styles.css` file, run the following command to rebuild the CSS:

```bash
npm run build:css
```

### 4. Start the app

To run the app in **production** mode (with real-time updates):

```bash
npm run start
```

This will start the app and you can access it in your browser at `http://localhost:3000`.

### 5. Development Mode

If you're making changes and would like to preview them in real-time, run the app in **development** mode:

```bash
npm run dev
```

This will start the app with live-reloading enabled, so any changes you make will automatically refresh the page.

## How it works:

- The server fetches system data (like memory usage, CPU info, uptime, etc.) using Node.js built-in `os` module.
- The data is served via an Express server and rendered using Pug templates.
- Real-time updates are achieved using WebSockets (`Socket.io`), allowing the frontend to stay in sync with the server without needing to reload the page.

## Files Overview:

- **index.js**: The Express server that serves the system information and handles real-time communication via Socket.io.
- **views/i.pug**: The Pug template that renders the system information in the browser.
- **public/styles.css**: The styles for the app (you can modify this to customize the look and feel).

## Common Commands:

- `npm run start`: Starts the app in production mode.
- `npm run dev`: Starts the app in development mode (with live-reloading).
- `npm run build:css`: Rebuilds the `styles.css` file if changes were made.

## Troubleshooting:

- If you encounter any issues with dependencies, make sure you have Node.js and npm installed correctly.
- If you are not seeing real-time updates, ensure that the server is running and the WebSocket connection is successful.

---

### Enjoy using the OS System Information App!

This app is built with Node.js, Express, Pug, and Socket.io to provide you with a smooth, real-time system monitoring experience.
