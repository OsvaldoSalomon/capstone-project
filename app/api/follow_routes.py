from flask import Blueprint
from app.models import db, Follow
from flask_login import login_required, current_user

followRoutes = Blueprint('follows', __name__)

@followRoutes.route('')
def getAllfollows():
  allFollows = Follow.query.all()
  return {follow.id: follow.to_dict() for follow in allFollows}


@followRoutes.route('/<int:followingId>', methods=["POST"])
@login_required
def follow(followingId):

    newFollow = Follow(
      followerId = current_user.to_dict()['id'],
      followingId = followingId,
    )

    db.session.add(newFollow)
    db.session.commit()
    return newFollow.to_dict()
 

@followRoutes.route('<int:followingId>', methods=["DELETE"])
@login_required
def unfollow(followingId):
  unfollowing = Follow.query.get(followingId)

  db.session.delete(unfollowing)
  db.session.commit()
  return 'Unfollowing made successfully.'