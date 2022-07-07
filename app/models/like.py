from .db import db


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    tweetId = db.Column(db.Integer, db.ForeignKey('tweets.id'), nullable=False)

    user = db.relationship('User', back_populates='likes')
    tweets = db.relationship('Tweet', back_populates='likes')