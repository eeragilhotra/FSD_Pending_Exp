from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import re

app = Flask(__name__)

@app.route('/')
def home():
    return "Student API is running 🚀"

# ---------------- DATABASE CONFIG ----------------
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '@12Aahan'
app.config['MYSQL_DB'] = 'college'

mysql = MySQL(app)

# ---------------- VALIDATION ----------------
def validate_student(data):
    if not data.get('name') or not data.get('email') or not data.get('age'):
        return "All fields (name, email, age) are required"

    # email validation
    if not re.match(r"[^@]+@[^@]+\.[^@]+", data['email']):
        return "Invalid email format"

    # age validation
    if not isinstance(data['age'], int) or data['age'] <= 0:
        return "Age must be a positive number"

    return None


# ---------------- CREATE ----------------
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()

    error = validate_student(data)
    if error:
        return jsonify({"error": error}), 400

    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO student(name, email, age) VALUES (%s, %s, %s)",
        (data['name'], data['email'], data['age'])
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student added successfully"})


# ---------------- READ ----------------
@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student")
    rows = cur.fetchall()
    cur.close()

    students = []
    for row in rows:
        students.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "age": row[3]
        })

    return jsonify(students)


# ---------------- UPDATE ----------------
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()

    error = validate_student(data)
    if error:
        return jsonify({"error": error}), 400

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE student SET name=%s, email=%s, age=%s WHERE id=%s",
        (data['name'], data['email'], data['age'], id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student updated successfully"})


# ---------------- DELETE ----------------
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM student WHERE id=%s", (id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student deleted successfully"})


# ---------------- MAIN ----------------
if __name__ == '__main__':
    app.run(debug=True)