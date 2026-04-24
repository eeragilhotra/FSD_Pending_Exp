A simple backend server built using Flask with Blueprint architecture.
This project provides REST API endpoints for managing student-related operations.

🚀 Features

Flask-based backend server

Blueprint-based modular routing

Clean project structure

Ready for middleware integration

Debug mode enabled for development

🏗️ Project Structure
project/
│── app.py
│── routes/
│     └── student_routes.py
│── middleware/
│     └── logger.py (optional)
│── requirements.txt
│── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone <your-repository-url>
cd project-folder
2️⃣ Create Virtual Environment (Recommended)
python -m venv venv

Activate it:

Windows

venv\Scripts\activate

Mac/Linux

source venv/bin/activate
3️⃣ Install Dependencies
pip install -r requirements.txt

If you don’t have a requirements file, install Flask manually:

pip install flask
▶️ Running the Server
python app.py

Server will start at:

http://0.0.0.0:5000/

Or locally:

http://127.0.0.1:5000/
📌 Available Routes
🏠 Home Route

GET /

{
  "message": "Backend Server is running"
}
🧠 Code Explanation
create_app() Function

Initializes Flask app

Registers Blueprints (student_bp)

Allows middleware integration

Root Route
@app.route("/")
def home():
    return {"message": "Backend Server is running"}
🛠️ Technologies Used

Python

Flask

📌 Development Notes

Debug mode is enabled:

app.run(host="0.0.0.0", port=5000, debug=True)

Blueprint architecture improves scalability.

Middleware support is ready (currently commented).