"""
Author: Maneesh Divana <maneeshd7&@gmail.com>

Server for expensifier using Flask + Flask-Compress middleware
"""
from os import urandom
from os.path import join, realpath, dirname
from flask import Flask, send_file
from flask_compress import Compress


# Directories for the app
CUR_DIR = realpath(dirname(__file__))
HOME = join(CUR_DIR, "dist")


# App creation & configuration
app = Flask(__name__, static_folder=HOME, static_url_path="")
app.config["SECRET_KEY"] = urandom(16).hex()
app.config["COMPRESS_MIMETYPES"] = [
    "text/html",
    "text/css",
    "text/xml",
    "application/json",
    "application/javascript",
    "image/jpg",
    "image/png",
    "image/x-icon"
]
Compress(app)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    print(path)
    return send_file(join(HOME, "index.html"), mimetype="text/html")


if __name__ == "__main__":
    # Development Server, Run using Gunicorn in production
    app.run("127.0.0.1", 8080, debug=True)
