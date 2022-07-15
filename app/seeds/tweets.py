import datetime
from app.models import db, Tweet


def seedTweets():
    tweet1 = Tweet(content='Are you ready?! Marvel Studios #ThorLoveAndThunder is now playing only in theaters! Get tickets now!', userId=2, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet2 = Tweet(content='Star Wars: The Clone Wars concept art by Pat Presley', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet3 = Tweet(content='See the global phenomenon critics can’t stop talking about! #DoctorStrangeInTheMultiverseOfMadness is now playing in theaters! Get tickets now!', userId=2, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet4 = Tweet(content='Rogue One: A Star Wars Story concept art by Brett Northcutt', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet5 = Tweet(content='It all comes down to this. #Moonknight All episodes are now streaming on DisneyPlus!', userId=2, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet6 = Tweet(content='The Mandalorian: Chapter 3 concept art by Doug Chiang and John Park', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet7 = Tweet(content='Roads at night', userId=4, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet8 = Tweet(content='Chart your own course, stick to it, no matter the squalls', userId=1, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())


    db.session.add(tweet1)
    db.session.add(tweet2)
    db.session.add(tweet3)
    db.session.add(tweet4)
    db.session.add(tweet5)
    db.session.add(tweet6)
    db.session.add(tweet7)
    db.session.add(tweet8)

    db.session.commit()


def undoTweets():
    db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE;')
    db.session.commit()