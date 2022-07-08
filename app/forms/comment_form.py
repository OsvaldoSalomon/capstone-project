from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def validate_content(form, field):
        if len(field.data) < 1:
            raise ValidationError("Comment must have content!")

class CommentForm(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    tweetId = IntegerField("Tweet", validators=[DataRequired()])
    content = StringField("Content", validators=[DataRequired()])

