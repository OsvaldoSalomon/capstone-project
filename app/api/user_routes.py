from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:followerId>/follow', methods=['POST'])
def followUnfollowUser(followerId):
    userToFollow = User.query.get(followerId)

    if userToFollow in current_user.follower:
        current_user.follower.remove(userToFollow)
        db.session.add(current_user)
        db.session.commit()

        return current_user.to_dict()

    current_user.follower.append(userToFollow)

    db.session.add(current_user)
    db.session.commit()


    return current_user.to_dict()
