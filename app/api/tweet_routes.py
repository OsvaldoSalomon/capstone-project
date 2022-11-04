from flask import Blueprint, request
from app.models import Tweet, db
from flask_login import login_required, current_user
from app.forms import TweetForm
import datetime
from .error_helper import validationErrorsList

tweetRoutes =  Blueprint('tweets', __name__)

@tweetRoutes.route('')
def getAllTweets():
    tweets = Tweet.query.all()
    return { tweet.id: tweet.to_dict_all() for tweet in tweets }

@tweetRoutes.route('/<int:id>')
@login_required
def getSingleTweet(id):
    singleTweet = Tweet.query.get(id)
    if singleTweet:
        return singleTweet.to_dict_all()
    else:
        return 'Tweet not found.'

@tweetRoutes.route('/new', methods=['POST'])
@login_required
def createTweet():
    form = TweetForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        tweet = Tweet(
            userId = current_user.to_dict()['id'],
            content = data['content']
        )

        db.session.add(tweet)
        db.session.commit()

        return tweet.to_dict()
    return {'errors': validationErrorsList(form.errors)}, 401

@tweetRoutes.route('/<int:id>', methods=['PUT'])
@login_required
def updateTweet(id):
    tweet = Tweet.query.get(id)
    form = TweetForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        tweet.content = data['content']
        tweet.updatedAt = datetime.datetime.now()

        db.session.commit()
        return tweet.to_dict()
    return {'errors': validationErrorsList(form.errors)}, 401

@tweetRoutes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteTweet(id):
    tweet = Tweet.query.get(id)
    if tweet: 
        db.session.delete(tweet)
        db.session.commit()
        return 'Tweet deleted successfully.'
    return {'errors': 'Tweet not found.'}, 404