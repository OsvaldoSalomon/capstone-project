# from .db import db
#
# class Follow(db.Model):
#   __tablename__ = 'followers'
#
#   id = db.Column(db.Integer, primary_key=True)
#   followerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   followingId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#
#   users = db.relationship("User", foreign_keys=[followerId], back_populates="userFollowings")
#   following = db.relationship("User", foreign_keys=[followingId], back_populates="userFollowers")
#
#   def to_dict(self):
#     return {
#       "id": self.id,
#       "followerId": self.followerId,
#       "followingId": self.followingId
#     }