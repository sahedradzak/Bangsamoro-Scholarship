#!/bin/bash

# Bangsamoro Scholarship - Development Server Script
# Backend: Django on port 8620
# Frontend: Next.js on port 2620

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Bangsamoro Scholarship Development Servers...${NC}"

# Function to cleanup background processes on exit
cleanup() {
    echo -e "\n${BLUE}Shutting down servers...${NC}"
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Start Django backend server
echo -e "${GREEN}Starting Django backend on port 8620...${NC}"
cd backend
source venv/bin/activate
python manage.py runserver 8620 &
BACKEND_PID=$!
cd ..

# Start Next.js frontend server
echo -e "${GREEN}Starting Next.js frontend on port 2620...${NC}"
cd frontend
npm run dev -- -p 2620 &
FRONTEND_PID=$!
cd ..

echo -e "${GREEN}Servers started!${NC}"
echo -e "Backend:  http://localhost:8620"
echo -e "Frontend: http://localhost:2620"
echo -e "\nPress Ctrl+C to stop both servers"

# Wait for both processes
wait
