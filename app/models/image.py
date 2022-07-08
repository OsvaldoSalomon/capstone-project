from .db import db

class Image(db.Model):
  __tablename__ = 'images'

  id = db.Column(db.Integer, primary_key=True)
  tweetId = db.Column(db.Integer, db.ForeignKey('tweets.id'), nullable=False)
  url = db.Column(db.String(255), nullable=False)

  tweets = db.relationship('Tweet', back_populates='images')

  def to_dict(self):
    return {
       'url': self.url
    }
