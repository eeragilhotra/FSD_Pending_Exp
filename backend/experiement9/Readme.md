## 🔐 Implemented Authentication Methods

### 1️⃣ Basic Authentication
- Endpoint: `/basic-protected`
- Method: GET
- Uses Authorization Header (Basic Auth)
- Username and Password are verified from header

---

### 2️⃣ Custom Header Token Authentication
- Endpoint: `/token-login` (POST)
- Endpoint: `/token-protected`
- Uses custom header:

x-auth-token


---

### 3️⃣ JWT Authentication
- Endpoint: `/jwt-login` (POST)
- Endpoint: `/jwt-protected`
- Generates JWT token
- Uses:

Authorization: Bearer <token>


---

## 🧪 Testing

All APIs were tested using Postman:
- Successful authentication responses
- Invalid credential error responses
- JWT token generation and validation

Screenshots are included in the `screenshots` folder.

---

## 🚀 Deployment

The project is deployed on Render platform.