# TwittR

TwittR is a clone of Twitter, this application allows you to keep in touch with your friends and family, users are able
to post tweets and share them with their community.

Live Link: https://tweet-r.herokuapp.com/

### Technologies used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Python](https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?&style=for-the-badge&logo=flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/SQLALCHEMY-800020?style=for-the-badge&logo=sqlalchemy&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## To use this application

1. Clone this repository

   ```bash
   git clone https://github.com/OsvaldoSalomon/capstone-project.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***

## Splash Page
![SplashPage](https://user-images.githubusercontent.com/28879757/179535707-199f6efa-055b-4cd4-b9e7-0a5007eba91b.png)

## Login
![Login](https://user-images.githubusercontent.com/28879757/179535731-5b781d2b-f0b3-4625-8f67-daa859dd8154.png)

## Sign up
![Signup](https://user-images.githubusercontent.com/28879757/179535763-75983378-80cb-47fd-ae62-c980db8523d5.png)

## Home page
![TweetList](https://user-images.githubusercontent.com/28879757/179535782-2812d963-9373-4120-ba81-cf764f741d27.png)

## Tweet view
![SingleTweet](https://user-images.githubusercontent.com/28879757/179535829-0e1eeff8-7aef-41a5-9f26-384aad7919c6.png)

## Profile Page
![ProfilePage](https://user-images.githubusercontent.com/28879757/179535864-d7dbf0ce-5275-4265-aef3-1d88a4b39aa6.png)



