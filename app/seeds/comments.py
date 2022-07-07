import datetime
from app.models import db, Comment


def seedTweets():
    comment1 = Comment(id=1, content='This is the first comment',  tweetId=1, userId=1, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    comment2 = Comment(id=2, content='This is the second comment', tweetId=1,  userId=1, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    comment3 = Comment(id=3, content='This is the third comment', tweetId=2,  userId=2, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


def undoTweets():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()