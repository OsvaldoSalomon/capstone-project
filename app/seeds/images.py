from app.models import db, Image

def seedImages():
    images = [
        Image(tweetId=1, url='https://www.pngkey.com/maxpic/u2q8q8o0r5i1r5t4/'),
        Image(tweetId=2, url='https://www.kindpng.com/imgv/hhiwTxh_second-place-check-first-second-third-prize-hd/'),
        Image(tweetId=3, url='https://www.shutterstock.com/image-vector/3rd-place-ribbon-vector-design-web-356601005')
    ]
    
    for image in images:
        db.session.add(image)

    db.session.commit()


def undoImages():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()