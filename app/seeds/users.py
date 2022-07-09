import datetime
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username='demo-lition', firstName='Demo', lastName='Lition', birthday=datetime.datetime.now(), bio='Passion for trying new things', email='demo@twittr.io', password='pbkdf2:sha256:260000$ZIsDfQK1x1adpIos$6ccba63d7d16b3e42c3e57221c60f12c377fba2e49a9f9d0fad2888eba8cb11d')
    jimHawkins = User(username='jhawk', firstName='Jim', lastName='Hawkins', birthday=datetime.datetime.now(), bio="Testing the cut of my sails and rattling the stars", email='jhawk@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://i.pinimg.com/736x/cc/cf/87/cccf8702a82f607d98fab28f35278592.jpg')
    marvelStudios = User(username='marvelStudios', firstName='Marvel', lastName='Studios', birthday=datetime.datetime.now(), bio="American film and television production company that is a subsidiary of Walt Disney Studios", email='marvelStudios@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://i.pinimg.com/originals/a9/16/de/a916debd06e0c209af9bc6e34cf6af28.jpg')
    starWars = User(username='starWars', firstName='Star', lastName='Wars', birthday=datetime.datetime.now(), bio="American film and television production company that is a subsidiary of Walt Disney Studios", email='starwars@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://cdn.shopify.com/s/files/1/1002/7150/products/OD_LA001049.jpg?v=1634818722')

    db.session.add(demo)
    db.session.add(jimHawkins)
    db.session.add(marvelStudios)
    db.session.add(starWars)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
