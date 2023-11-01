from flask import Blueprint, render_template, request
from bardapi import Bard
import re

token = 'cgigCFGjepDRRbsfwbcRD9UMOrAGlyd4uXNXORvrXh9cb3Ax4po6E1khwGoO1HSmlN5OJQ.'
bard = Bard(token=token)

home = Blueprint(__name__,"home")
dashboard = Blueprint(__name__, "dashboard")


@home.route("/")
def index():
    return render_template("index.html")

@dashboard.route("/", methods =["GET", "POST"])
def dash():
    if request.method == "POST":
        x = bard.get_answer("What are the prices for this product: " + request.form.get("url") + " over the past year, please just give me the prices and no other explanation and provide the dates as yyyy-mm-dd and give the data in a table and include dollar signs on the prices and also no comma on the prices and you do not need to mention the store, just date and price. Also when is the next best time to purchase the product?")['content']
        x = re.sub('\n', ' ', x)
        x = re.sub(',', '', x)
        #x = '| Date | Price | |---|---| | 10/30/2022 | $3,539.99 | | 11/30/2022 | $3,419.99 | | 12/30/2022 | $3,399.99 | | 01/30/2023 | $3,299.99 | | 02/28/2023 | $3,199.99 | | 03/30/2023 | $3,099.99 | | 04/30/2023 | $2,999.99 | | 05/30/2023 | $2,899.99 | | 06/30/2023 | $2,799.99 | | 07/30/2023 | $2,699.99 | | 08/30/2023 | $2,599.99 | | 09/30/2023 | $2,499.99 | | 10/30/2023 | $2,399.99 |  **Summary:** The price of the Samsung 5.0 cu. ft. Extra Large Capacity Smart Front Load Washer with Super Speed Wash and Steam and 7.5 Cu. Ft. Stackable Smart Electric Dryer with Steam and Sensor Dry - Brushed Black has decreased over the past year. The best time to purchase the product is in November, when the price is typically lowest.'
        return render_template("dashboard.html", prices = x)
    else:
        return render_template("dashboard.html",prices="")
