from flask import Flask
from views import home, dashboard

app = Flask(__name__)
app.register_blueprint(home, url_prefix="/home", name="home")
app.register_blueprint(dashboard, url_prefix="/dashboard", name="dashboard")


if __name__ == '__main__':
    app.run(debug=True, port=8000) 