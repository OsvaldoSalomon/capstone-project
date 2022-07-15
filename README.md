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
![SplashPage](https://user-images.githubusercontent.com/28879757/179323213-558e4314-9e87-465c-b7fa-fef1b8726b3e.png)

## Login
![Login](https://user-images.githubusercontent.com/28879757/179323261-760c7dc5-f397-409a-bb50-3ceae1db8a30.png)

## Sign up
![SignUp](https://user-images.githubusercontent.com/28879757/179323286-80956071-d4d8-4c85-972a-62b19174fa21.png)

## Home page
![HomePage1](https://user-images.githubusercontent.com/28879757/179323312-ca6f2de4-d4cd-414a-ab9d-d0ff0f472e6f.png)
![HomePage2](https://user-images.githubusercontent.com/28879757/179323327-05cd70f7-3ade-4f0d-8516-c6f28c7f76f0.png)

## Tweet view
![SingleTweet](https://user-images.githubusercontent.com/28879757/179323351-76cfcd8a-e5db-4f4f-8e57-9970ae56db65.png)



