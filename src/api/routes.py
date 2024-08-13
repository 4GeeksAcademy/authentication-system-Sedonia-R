"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/users', methods=['GET', 'POST'])
def handle_users():
    if request.method == 'POST':
        username = request.json.get('username')
        password = request.json.get('password')
        is_active = request.json.get('is_active')
        user = User(
            username = username,
            password = password,
            is_active = is_active,
        )
        db.session.add(user)
        db.session.commit()
        return jsonify(username, is_active), 201
    users = User.query.all()
    user_dictionaries = []
    for user in users:
        user_dictionaries.append(
            user.username
        )
    return jsonify(user_dictionaries), 200

@api.route('/signup', methods=['POST'])
def create_user():
    username = request.json.get('username')
    password = request.json.get('password')
    is_active = request.json.get('is_active')
    user = User(
        username = username,
        password = password,
        is_active = is_active,
    )
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize()), 201
    

@api.route('/login', methods=['POST'])
def handle_login():
    body = request.json
    username = body.get('username', None)
    password = body.get('password', None)
    if username is None or password is None:
        return jsonify({
            "message": "Hmm... looks like your body did not include username and password."
        }), 400
    # find the user in our database
    user = User.query.filter_by(username=username).one_or_none()
    if user is None:
        return jsonify({
            "message": "Sorry, that user doesn't exist."
        }), 404
    # compare what the user knows with what we know. the user knows the password. we know user.password
    if password != user.password:
        return jsonify({
            "message": "We don't recognize that password. Try again?"
        }), 400
    # if everything checks out, we need to issue a token
    token = create_access_token(identity=user.id)
    # then we need to send it to the user
    return jsonify({
        "token": token
    }), 200

@api.route('/private', methods=['GET'])
@jwt_required()
def handle_private_request():
    # check who is making the request
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
#     user_id = get_jwt_identity()
#     user = User.query.get(user_id)
#     headers = {
#         Authorization: `Bearer ${jwt}`
#     }
#    # get that user's email and return
#     return jsonify({
#         "private_data": user.username
#     }), 200
