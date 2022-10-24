from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .tweet import tweet_likes


followers = db.Table(
    'followers',
    db.Column('followerId', db.Integer, db.ForeignKey('users.id')),
    db.Column('followedId', db.Integer, db.ForeignKey('users.id'))
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(40), nullable=False)
    bio = db.Column(db.String(255), nullable=False)
    profilePic = db.Column(db.String(255), default='https://images.unsplash.com/photo-1641423914598-288fee6cecf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    tweets = db.relationship('Tweet', back_populates='users')
    comments = db.relationship('Comment', back_populates='users')

    user_tweets = db.relationship('Tweet', secondary=tweet_likes, back_populates='tweet_users', cascade='all,delete')
    
    follower = db.relationship(
        'User', secondary=followers, 
        primaryjoin=(followers.c.followerId == id), 
        secondaryjoin = (followers.c.followedId == id), 
        backref = db.backref('followers', lazy = 'dynamic'), 
        lazy = 'dynamic')
    # likes = db.relationship('Like', back_populates='user', cascade="all, delete")


    # userFollowings = db.relationship("Follow", foreign_keys="Follow.followingId",
    #                     back_populates="users", lazy="dynamic")
    # userFollowers = db.relationship("Follow", foreign_keys="Follow.followerId",
    #                     back_populates="following", lazy="dynamic")




    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_follow_info(self):
        return {
            'id': self.id,
            'username': self.username,
            'profilePic': self.profilePic
        }

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'bio': self.bio,
            'email': self.email,
            'profilePic': self.profilePic,
            "following": [following.to_follow_info() for following in self.follower],
            "followers":[followers.to_follow_info() for followers in self.followers]
        }

    def to_info(self):
        return {
            'id': self.id,
            'username': self.username,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'bio': self.bio,
            'profilePic': self.profilePic
        }

