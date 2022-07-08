from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

class TweetForm(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    content = StringField("Content", validators=[DataRequired()])

