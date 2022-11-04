import datetime
from app.models import db, User

def seed_users():
#     demo = User(username='demo-lition', firstName='Demo', lastName='Lition', bio='Passion for trying new things', email='demo@twittr.io', password='pbkdf2:sha256:260000$ZIsDfQK1x1adpIos$6ccba63d7d16b3e42c3e57221c60f12c377fba2e49a9f9d0fad2888eba8cb11d')
    jimHawkins = User(username='jhawk', firstName='Jim', lastName='Hawkins', bio="Testing the cut of my sails and rattling the stars", email='jhawk@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://cdnb.artstation.com/p/assets/images/images/051/533/929/large/leo-rezende-close.jpg?1657550072')
    marvelStudios = User(username='marvelStudios', firstName='Marvel', lastName='Studios', bio="American film and television production company that is a subsidiary of Walt Disney Studios", email='marvelStudios@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://i.pinimg.com/originals/a9/16/de/a916debd06e0c209af9bc6e34cf6af28.jpg')
    starWars = User(username='starWars', firstName='Star', lastName='Wars', bio="American film and television production company that is a subsidiary of Walt Disney Studios", email='starwars@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://cdn.shopify.com/s/files/1/1002/7150/products/OD_LA001049.jpg?v=1634818722')
    places = User(username='beautifulPlaces', firstName='Beautiful', lastName='Places', bio="We capture the beauty of places everywhere", email='beautyplaces@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://images.unsplash.com/photo-1656938006963-298420108df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')
    random1 = User(username='kyletheman', firstName='Kyle', lastName='Smith', bio="Comics and movies fanatic", email='kylesmith@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://images.unsplash.com/photo-1654787193446-434ac0108426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80')
    random2 = User(username='SandyValen', firstName='Sandra', lastName='Valencia', bio="Love learning about new things", email='sandyval@twittr.io', password='pbkdf2:sha256:260000$xTihSZmJI0H5piZ3$6faae5279f5cd45d484d1883f870346e00a639fac7b024650c65e0a7a5e90f15', profilePic='https://images.unsplash.com/photo-1650756697432-98d1a1448cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80')

#     db.session.add(demo)
    db.session.add(jimHawkins)
    db.session.add(marvelStudios)
    db.session.add(starWars)
    db.session.add(places)
    db.session.add(random1)
    db.session.add(random2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
