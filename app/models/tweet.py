from .db import db
import datetime

tweet_likes = db.Table(
    "tweet_likes",
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey('users.id'), primary_key=True, nullable=False),
    db.Column('tweets', db.Integer, db.ForeignKey('tweets.id'), primary_key=True, nullable=False)
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
    # likes = db.relationship("Like", back_populates="tweets", cascade="all, delete")
    tweet_users = db.relationship('User', secondary=tweet_likes, back_populates='user_photos')

    def to_dict_all(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'user': self.users.to_info(),
            # 'comments': [comment.to_dict() for comment in self.comments],
            'comments': len(self.comments),
            'images': [ image.to_dict() for image in self.images],
            # 'likes': [like.to_dict() for like in self.likes],
            'likes': len(self.likes),
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
            # 'comments': len(self.comments),
            'images': [ image.to_dict() for image in self.images],
            'likes': [like.to_dict() for like in self.tweet_users],
            # 'likes': len(self.likes),
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }