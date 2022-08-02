from .db import db
from sqlalchemy.sql import func


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    followerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    followingId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    following = db.relationship("User", foreign_keys=[followingId], back_populates="userFollowers")

    def to_dict(self):
        return {
            "id": self.id,
            "follower_id": self.followerId,
            "following_id": self.followingId,
        }