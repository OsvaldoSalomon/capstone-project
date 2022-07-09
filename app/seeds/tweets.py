import datetime
from app.models import db, Tweet


def seedTweets():
    tweet1 = Tweet(content='Are you ready?! Marvel Studios #ThorLoveAndThunder is now playing only in theaters! Get tickets now!', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet2 = Tweet(content='See the global phenomenon critics can’t stop talking about! #DoctorStrangeInTheMultiverseOfMadness is now playing in theaters! Get tickets now!', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet3 = Tweet(content='It all comes down to this. #Moonknight All episodes are now streaming on DisneyPlus!', userId=3, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet4 = Tweet(content='Star Wars: The Clone Wars concept art by Pat Presley', userId=4, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())
    tweet5 = Tweet(content='Rogue One: A Star Wars Story concept art by Brett Northcutt', userId=4, createdAt=datetime.datetime.now(), updatedAt=datetime.datetime.now())

    db.session.add(tweet1)
    db.session.add(tweet2)
    db.session.add(tweet3)
    db.session.add(tweet4)
    db.session.add(tweet5)

    db.session.commit()


def undoTweets():
    db.session.execute('TRUNCATE tweets RESTART IDENTITY CASCADE;')
    db.session.commit()