from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='demo-lition', firstName='Demo', lastName='Lition', bio='Passion for trying new things', email='demo@tweetr.io', password='pbkdf2:sha256:260000$ZIsDfQK1x1adpIos$6ccba63d7d16b3e42c3e57221c60f12c377fba2e49a9f9d0fad2888eba8cb11d')
    jimHawkins = User(username='jhawk', firstName='Jim', lastName='Hawkins', bio="Testing the cut of my sails and rattling the stars", email='jhawk@tweetr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15')

    db.session.add(demo)
    db.session.add(jimHawkins)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
