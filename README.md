⭐ If you like this project, give it a star!

# 🚀 Three-Tier DevOps Project (AKS + Docker + CI/CD)

![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)
![Docker](https://img.shields.io/badge/Container-Docker-blue)
![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-blue)
![Azure](https://img.shields.io/badge/Cloud-Azure-blue)
![Status](https://img.shields.io/badge/Build-Passing-brightgreen)

---

## 📌 Project Overview

This project demonstrates a **production-ready three-tier architecture** deployed on **Azure Kubernetes Service (AKS)** using modern DevOps practices.

It includes a **React frontend**, **Flask backend**, and Kubernetes-based infrastructure, fully containerized using Docker and automated with CI/CD.

---

## 🎬 Demo (Live App)

👉 Frontend: http://4.247.192.166  
👉 Backend: http://20.219.240.243:5000  

### 📸 Demo Preview (Add your GIF here)
![App Demo](https://via.placeholder.com/800x400?text=Add+Your+Project+GIF+Here)

👉 Tip: Record using **ScreenToGif / OBS** and upload to repo

---

## 🏗️ Architecture Diagram

![Architecture](https://via.placeholder.com/900x500?text=Three+Tier+Architecture+AKS)

👉 You can create using:
- draw.io
- Excalidraw



## 🏗️ Architecture
- **Frontend (UI Layer)**: React.js (served via Nginx)
- **Backend (API Layer)**: Flask (Python REST API)
- **Infrastructure Layer**: Azure Kubernetes Service (AKS)
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

---

## ⚙️ Tech Stack
- React.js
- Flask (Python)
- Docker
- Kubernetes (AKS)
- GitHub Actions (CI/CD)
- Azure Cloud

---

## 📁 Project Structure
three-tier-aks-devops/
├── frontend/              # React application
├── backend/               # Flask API
├── k8s/                   # Kubernetes manifests
├── .github/workflows/     # CI/CD pipeline
└── README.md

---

## ☁️ Deployment (AKS)
- Created AKS cluster using Azure CLI
- Deployed applications using Kubernetes Deployments
- Exposed services using LoadBalancer
- Managed networking and service communication

---

## 🔄 CI/CD Pipeline
Implemented using **GitHub Actions**

Automatically:
- Builds Docker images
- Pushes to Docker Hub
- Deploys to AKS

---

## 🧠 Key Learnings
- Dockerizing frontend & backend
- Kubernetes deployments & services
- Debugging real-world issues:
    - Service port mismatch
    - CORS errors
    - Internal vs external networking
    - ImagePullBackOff
- Azure AKS cluster setup
- CI/CD pipeline automation

---

## 🚀 Run Locally

### Step 1: Clone repository
git clone https://github.com/prashantyadav8814/three-tier-aks-devops.git
cd three-tier-aks-devops

### Step 2: Run application
docker compose up --build

### Step 3: Access application
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🐳 Docker Images
- Frontend: https://hub.docker.com/r/prashantyadav8814/frontend
- Backend: https://hub.docker.com/r/prashantyadav8814/backend

---

## 🚧 Future Improvements
- Ingress Controller (single domain routing)
- HTTPS with SSL
- Azure Container Registry (ACR)
- Monitoring (Prometheus + Grafana)

---

## 👨‍💻 Author
Prashant Yadav
