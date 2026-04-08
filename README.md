# 🚀 Three-Tier DevOps Project (React + Node.js + MongoDB + Docker)

## 📌 Project Overview
This project demonstrates a **production-ready three-tier architecture** using modern DevOps practices.  
It includes a React frontend, Node.js backend, and MongoDB database, all containerized using Docker.

---

## 🏗️ Architecture
- **UI Layer**: React.js
- **Backend Layer**: Node.js (Express APIs)
- **Database Layer**: MongoDB
- **Containerization**: Docker & Docker Compose

---

## ⚙️ Tech Stack
- React.js
- Node.js
- MongoDB
- Docker & Docker Compose
- Git & GitHub

---

## 📁 Project Structure
```
three-tier-aks-devops/
├── frontend/        # React application
├── backend/         # Node.js API
├── docker-compose.yml
└── README.md
```

---

## 🌐 Live Application

- **Frontend**: http://4.224.9.39:3000  
- **Backend**: http://4.224.185.10:5000  

---

## ☁️ Deployment (AKS)

- Azure Kubernetes Service (AKS)
- kubectl used for deployments
- Services exposed using LoadBalancer

---

## 🧠 Learnings

- Dockerizing frontend & backend
- Kubernetes deployments & services
- Debugging network issues (CORS, service communication)
- Azure AKS cluster setup

---

## 🚀 Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/prashantyadav8814/three-tier-aks-devops.git
cd three-tier-aks-devops
```

### 2. Run using Docker
```bash
docker compose up --build
```

### 3. Access application
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🐳 Docker Images
- Frontend: https://hub.docker.com/r/prashantyadav8814/frontend  
- Backend: https://hub.docker.com/r/prashantyadav8814/backend  

---

## 🚧 Future Improvements
- CI/CD pipeline using GitHub Actions  
- Ingress Controller for better routing  
- HTTPS using SSL certificates  
- Monitoring using Prometheus & Grafana   
