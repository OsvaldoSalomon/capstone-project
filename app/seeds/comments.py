import datetime
from app.models import db, Comment


def seedComments():
    comment1 = Comment(content='Looks awesooome!', tweetId=1, userId=5, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    comment2 = Comment(content='This is great!', tweetId=1,  userId=6, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    comment3 = Comment(content="I can't wait!", tweetId=2,  userId=5, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


def undoComments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()