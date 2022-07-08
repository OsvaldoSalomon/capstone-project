from .db import db
import datetime


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    tweetId = db.Column(db.Integer, db.ForeignKey('tweets.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)

    users = db.relationship('User', back_populates='comments')
    tweets = db.relationship('Tweet', back_populates='comments')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user': self.users.to_info(),
            'userId': self.userId,
            'tweetId': self.tweetId,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt,
        }