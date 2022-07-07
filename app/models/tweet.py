from .db import db


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    createdAt = db.Column(db.Date, nullable=False)
    updatedAt = db.Column(db.Date, nullable=False)

    users = db.relationship('User', back_populates='tweets')
    comments = db.relationship("Comment", back_populates="tweets", cascade="all, delete")
    images = db.relationship("Image", back_populates="tweets", cascade="all, delete")
    likes = db.relationship("Like", back_populates="tweets", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'userId': self.userId,
            'comments': [comment.to_dict() for comment in self.comments],
            'images': [ image.to_dict() for image in self.images],
            'likes': [like.to_dict() for like in self.likes],
            'user': self.user.to_dict(),
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }