import datetime
from app.models import db, Tweet


def seedTweets():
    tweet1 = Tweet(id=1, content='This is the first tweet', userId=1, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet2 = Tweet(id=2, content='This is the second tweet', userId=1, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet3 = Tweet(id=3, content='This is the third tweet', userId=2, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())

    db.session.add(tweet1)
    db.session.add(tweet2)
    db.session.add(tweet3)

    db.session.commit()


def undoTweets():
    db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE;')
    db.session.commit()