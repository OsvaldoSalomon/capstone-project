from flask import Blueprint, jsonify, request
from app.models import Tweet, db
# from app.models import tweet

tweetRoutes =  Blueprint('tweets', __name__)

@tweetRoutes.route('/')
def getAllTweets():
    tweets = Tweet.query.all()
    return { tweet.id: tweet.to_dict() for tweet in tweets }

@tweetRoutes.route('/<int:id>')
def getSingleTweet(id):
    singleTweet = Tweet.query.get(id)
    if singleTweet:
        return singleTweet.to_dict()
    else:
        return 'Tweet not found.'