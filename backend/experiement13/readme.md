# Student CRUD API

## Overview

This is a simple backend project using Flask and MySQL to perform CRUD operations on student data.

---

## Features

* Add student
* View students
* Update student
* Delete student

---

## Technologies

* Python (Flask)
* MySQL
* Postman

---

## Setup

1. Install dependencies:

```
pip install flask flask-mysqldb
```

2. Create database:

```
CREATE DATABASE college;
USE college;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);
```

3. Run the app:

```
python app.py
```

---

## API Endpoints

* POST `/students` → Add student
* GET `/students` → Get all students
* PUT `/students/<id>` → Update student
* DELETE `/students/<id>` → Delete student

---

## Testing

Use Postman to test the APIs.

---

## Note

* Update MySQL password in `app.py`
* Do not include `venv` folder in submission

---

## Author

Aahan Srivastava
