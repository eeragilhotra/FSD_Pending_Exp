# CI/CD Pipeline for Application Deployment

## 📌 Experiment No. 20

## 🎯 Objective

To implement a CI/CD pipeline for application deployment using Docker and GitHub Actions.

---

## 🛠️ Tools & Technologies Used

* Python (Flask)
* Docker
* GitHub Actions
* Git & GitHub

---

## 📂 Project Structure

```
FSD-2/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── testing2/
│   ├── run.py
│   ├── requirements.txt
│   └── Dockerfile
│
├── README.md
```

---

## ⚙️ Steps Performed

### 1. Created Backend Application

* Developed a simple Flask application (`run.py`)
* Added dependencies in `requirements.txt`

---

### 2. Dockerization

* Created a Dockerfile
* Built Docker image:

```
docker build -t backend-app .
```

* Ran Docker container:

```
docker run -p 5000:5000 backend-app
```

---

### 3. CI/CD Pipeline Setup

* Created workflow file in:

```
.github/workflows/ci.yml
```

* Configured pipeline to:

  * Install dependencies
  * Build Docker image
  * Run container

---

### 4. GitHub Integration

* Pushed project to GitHub
* Triggered pipeline using GitHub Actions

---

## 📸 Output

* Docker image successfully created
* Container running successfully
* CI/CD pipeline executed successfully (GitHub Actions)

---

## ✅ Result

The CI/CD pipeline was successfully implemented, and the application was deployed using Docker and GitHub Actions.

---

## 📎 Screenshots Included

* Docker images (`docker images`)
* Running containers (`docker ps`)
* GitHub Actions workflow execution
