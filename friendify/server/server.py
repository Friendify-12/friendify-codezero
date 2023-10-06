# write flask code in this file
from flask import Flask, jsonify # import flask and jsonify to create an API route
from flask_cors import CORS

# create flask app instance (used to create a flask app)
app = Flask(__name__)
# add app instance to cors
CORS(app)

# have a app route to use api call
# TODO: display hello world to front end
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': 'Welcome to the team:',
        'teamMembers': ['Abrar', 'Daniel', 'Logan', 'Darren', 'Zoe', 'Braxton', 'Xiangen', 'chengchw']
})

# run flask app
if __name__ == "__main__":
    app.run(debug=True, port=8080) # remove the inside of parenthese when in production/deploying. used for bugs
