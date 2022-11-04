from .db import db


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    followerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    followingId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)