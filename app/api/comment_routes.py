from ast import BinOp
from flask import Blueprint, jsonify, request
from app.models import Comment

commentRoutes = Blueprint('comments', __name__)


@commentRoutes.route('/comments')
def getAllComments():
    comments = Comment.query.all()
    return { comment.id: comment.to_dict() for comment in comments }

@commentRoutes.route('/<int:id>')
def getSingleComment(id):
    singleComment = Comment.query.get(id)
    if singleComment:
        return singleComment.to_dict()
    else:
        return 'Comment not found.'