from flask import Blueprint, request
from app.models import Comment, db, tweet
from flask_login import login_required, current_user
from app.forms import CommentForm
import datetime
from .error_helper import validationErrorsList

commentRoutes = Blueprint('comments', __name__)


@commentRoutes.route('/')
def getAllComments():
    comments = Comment.query.all()
    return { comment.id: comment.to_dict() for comment in comments }

@commentRoutes.route('/<int:id>')
@login_required
def getSingleComment(id):
    singleComment = Comment.query.get(id)
    if singleComment:
        return singleComment.to_dict()
    else:
        return 'Comment not found.'

@commentRoutes.route('/<int:tweetId>/new', methods=['POST'])
@login_required
def createComment(tweetId):
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            userId = current_user.to_dict()['id'],
            tweetId = tweetId,
            content = data['content']
        )

        db.session.add(comment)
        db.session.commit()

        return comment.to_dict()
    return {'errors': validationErrorsList(form.errors)}, 401
    
@commentRoutes.route('/<int:commentId>', methods=['PUT'])
@login_required
def updateComment(commentId):
    comment = Comment.query.get(commentId)
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment.content = data['content']
        comment.updateAt = datetime.datetime.now()

        db.session.commit()

        return comment.to_dict()
    return {'errors': validationErrorsList(form.errors)}, 401

@commentRoutes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteComment(id):
    comment = Comment.query.get(id)
    if comment: 
        db.session.delete(comment)
        db.session.commit()
        return 'Comment deleted successfully.'
    return {'errors': 'Comment not found.'}, 404