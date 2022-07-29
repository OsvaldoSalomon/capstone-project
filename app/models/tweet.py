from .db import db
import datetime


likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False),
    db.Column('tweetId', db.Integer, db.ForeignKey('tweets.id'), primary_key=True, nullable=False)
)


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now(), nullable=False)

    users = db.relationship('User', back_populates='tweets')
    comments = db.relationship("Comment", back_populates="tweets", cascade="all, delete")
    images = db.relationship("Image", back_populates="tweets", cascade="all, delete")
    tweetLikes = db.relationship('User', secondary=likes, back_populates='userLikes')

    def to_dict_all(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'user': self.users.to_info(),
            'comments': len(self.comments),
            'images': [ image.to_dict() for image in self.images],
            'likes': [like.to_dict() for like in self.tweetLikes],
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'user': self.users.to_info(),
            'comments': [comment.to_dict() for comment in self.comments],
            'likes': [like.to_dict() for like in self.tweetLikes],
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }