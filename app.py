from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import mysql.connector
import bcrypt

app = Flask(__name__)
CORS(app)

def get_connection():
    return mysql.connector.connect(
        host="10.2.4.70",
        user="jonas",
        password="Jonas1337.",
        database="game"
    )

@app.route("/")
@app.route("/index")
def index_page():
    return render_template("index.html")

@app.route("/shop")
def shop_page():
    return render_template("shop.html")

@app.route("/credits")
def credits_page():
    return render_template("credits.html")

@app.route("/test")
def test_page():
    return render_template("test.html")

@app.route("/login")
def login_page():
    return render_template("login.html")

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"status": "error", "message": "Missing username or password"}), 400

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT password_hash FROM users WHERE username = %s", (username,))
    row = cursor.fetchone()

    if row:
        stored_hash = row[0]
        if bcrypt.checkpw(password.encode(), stored_hash.encode()):
            result = {"status": "login_successful", "username": username}
        else:
            result = {"status": "wrong_password"}
    else:
        result = {"status": "user_not_found"}

    cursor.close()
    conn.close()
    return jsonify(result)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"status": "error", "message": "Missing username, email, or password"}), 400

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM users WHERE username = %s", (username,))
    if cursor.fetchone():
        result = {"status": "user_exists"}
    else:
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        cursor.execute(
            "INSERT INTO users (username, email, password_hash) VALUES (%s, %s, %s)",
            (username, email, hashed)
        )
        conn.commit()
        result = {"status": "signup_successful", "username": username}

    cursor.close()
    conn.close()
    return jsonify(result)

@app.route('/delete_all_users', methods=['DELETE'])
def delete_all_users():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM users")
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"status": "all_users_deleted"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=True)