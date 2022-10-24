from flask import Blueprint,  session, request
from app.models import db, Like
from flask_login import login_required, current_user

from app.models.tweet import Tweet
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

@likeRoutes.route('/<int:tweetId>', methods=['POST'])
def addRemoveLike(photo_id):
    photo = Photo.query.get(photo_id)

    # This checks to see if the user already liked the photo
    if current_user in photo.photo_users:
        photo.photo_users.remove(current_user)
        db.session.add(photo)
        db.session.commit()
        return photo.to_dict()
    # If it's not in the list, then it'll add it to the list and return that photo
    photo.photo_users.append(current_user)

    db.session.add(photo)
    db.session.commit()

    return photo.to_dict()
  
@likeRoutes.route('/<int:tweetId>', methods=["DELETE"])
@login_required
def removeLike(tweetId):
  tweet = Tweet.query.get(tweetId)

  if current_user in tweet.tweet_users:
    tweet.tweet_users.remove(current_user)
    db.session.add(tweet)
    db.session.commit()
    return tweet.to_dict()
  
  tweet.tweet_users.append(current_user)
  db.session.add(tweet)
  db.session.commit()
  return tweet.to_dict()