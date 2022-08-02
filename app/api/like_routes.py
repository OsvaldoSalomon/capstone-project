from flask import Blueprint,  session, request
from app.models import db, Like
from flask_login import login_required, current_user
from .error_helper import validationErrorsList

likeRoutes = Blueprint('likes', __name__)

@likeRoutes.route('')
def getAllLikes():
  likes = Like.query.all()
  return { like.id: like.to_dict() for like in likes }


@likeRoutes.route('/<int:tweetId>', methods=["POST"])
@login_required
def addLike(tweetId):
  newLike = Like(
      userId = current_user.to_dict()['id'],
      tweetId = tweetId
  )

  db.session.add(newLike)
  db.session.commit()
  return newLike.to_dict()
  
@likeRoutes.route('/<int:likeId>', methods=["DELETE"])
@login_required
def removeLike(likeId):
  liked = Like.query.get(likeId)

  db.session.delete(liked)
  db.session.commit()
  return 'Like deleted successfully.'