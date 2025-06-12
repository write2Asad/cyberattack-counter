## Requirements

Before running the application, make sure you have the following installed:

- Node.js (v14+ recommended)
- npm (comes with Node.js)

---

## Installation

1. Unzip the project folder (if it's in a `.zip` file).

2. Open a terminal/command prompt in the project directory.

3. Install dependencies:

npm install

---

## How to Start the Application

In the same terminal, run:

node server.js

This will start the application at:

http://localhost:3000

---

## How to View the Live Counter

Open your browser and go to:

http://localhost:3000/index.html

You’ll see a live counter that increases every time a cyberattack event is received from the CheckPoint stream.

---

## Note

- The counter starts at 0 when the app is launched.
- It resets to 0 automatically at midnight.
- It does not use a database or store previous attack data. If you want a full-day total from midnight, you would need to integrate a storage solution.

---

## Folder Structure

├── server.js         # Node.js backend to proxy the event stream  
├── package.json  
└── public/  
    └── index.html    # Frontend with live counter

---