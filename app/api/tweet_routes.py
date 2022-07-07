from flask import Blueprint, jsonify, request
from app.models import db, Tweet

tweetRoutes =  Blueprint('tweets', __name__)

@tweetRoutes.route('/')
def getAllTweets():
    tweets = Tweet.query.all()
    return {tweet.id: tweet.to_dict() for tweet in tweets}

@tweetRoutes.route('/<int:id>')
def getSingleTweet(id):
    tweet = Tweet.query.get(id)
    if tweet:
        return tweet.to_dict()
    else:
        return 'Tweet not found.'