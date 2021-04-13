## Getting Started

# Setting up database
1. Create Database User: "heru" with passport: "password"
2. Load data to database;
   ./backend/leaderboard.sql;

   mysql -u heru -p dbname < leaderboard.sql

# Install packages for both backend and frontend

```bash
# to install necessary packages.
# backend
cd backend

npm install

cd ..

# frontend
cd frontend

npm install
```

# Start service using commands below
First, run the backend server:

```bash
# to start backend service
cd backend

# then 
npm run start
# or
yarn dev
```

Then, run the development server:

```bash
# to start frontend service
cd frontend

# then 
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
