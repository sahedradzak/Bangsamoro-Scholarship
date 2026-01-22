# Bangsamoro Scholarship - Development Server Script (Windows/PowerShell)
# Backend: Django on port 8620
# Frontend: Next.js on port 2620

Write-Host "Starting Bangsamoro Scholarship Development Servers..." -ForegroundColor Cyan

# Kill existing processes if any (optional but helpful)
# Get-Process -Name "python", "node" | Stop-Process -Force -ErrorAction SilentlyContinue

# Start Django backend server
Write-Host "Starting Django backend on port 8620..." -ForegroundColor Green
$backendJob = Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd backend; .\venv\Scripts\activate; python manage.py runserver 8620" -PassThru

# Start Next.js frontend server
Write-Host "Starting Next.js frontend on port 2620..." -ForegroundColor Green
$frontendJob = Start-Process -FilePath "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd frontend; npm run dev -- -p 2620" -PassThru

Write-Host "`nServers started in new windows!" -ForegroundColor Green
Write-Host "Backend:  http://localhost:8620"
Write-Host "Frontend: http://localhost:2620"
Write-Host "`nYou can close this terminal if the other windows are running."
