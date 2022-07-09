from app.models import db, Image

def seedImages():
    images = [
        Image(tweetId=1, url='https://pbs.twimg.com/media/FXG5kfHUIAAlnWn?format=jpg&name=medium'),
        Image(tweetId=2, url='https://cdn.mos.cms.futurecdn.net/NJXQ8h3mUd9mhsh2m8xpba-1200-80.jpg'),
        Image(tweetId=3, url='https://pbs.twimg.com/media/FSA1pYQVgAMlIAP?format=jpg&name=4096x4096'),
        Image(tweetId=4, url='https://pbs.twimg.com/media/FWXUIHPXkAACDQP?format=jpg&name=4096x4096'),
        Image(tweetId=5, url='https://pbs.twimg.com/media/FVkh5YtWUAknkG8?format=jpg&name=large')
    ]
    
    for image in images:
        db.session.add(image)

    db.session.commit()


def undoImages():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()