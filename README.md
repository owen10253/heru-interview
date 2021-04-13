# Getting Started

## Setting up database
1. Create MySql Database User: "heru" with passport: "password"
2. Load data to database;
   ./backend/leaderboard.sql;
```bash
   mysql -u heru -p dbname < leaderboard.sql
```

## Install packages for both backend and frontend

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

## Start service using commands below
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



# Project Approach

### Front End
In this project. I used Next.js as frontend framework for server-side rendering utilities. And to style the project, I utilized TailwindCSS. This allow me to reduce the styling time and also have the ability to have Responsive web design adventage. 

### Back End
For backend of the project, I chose to use MVC model for the API call. And use MySQL database to store the players data. 

### Project Challenges...
1. Analyzing the requirement: While developing the project, I need to decided where to put the calculation intensive process. One of the requirement is that "Generating leaderboard on the server is expensive". That's why I decided to put the sorting logic on the client side. This may reduce the server to deal with sorting, but on the other hand, this increase the data transfer time for the entire processes. 
2. During developments: When developing the project, I decided to change some of the design. That actually significantly change some of the code. By putting the sorting logic differently, I had to move a lot of code. 

### Improvement needed and Unfinished part... 
1. 