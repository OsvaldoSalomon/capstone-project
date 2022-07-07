from ast import BinOp
from flask import Blueprint, jsonify, request
from app.models import comment

commentRoutes = Blueprint('comments', __name__)


@commentRoutes.route('/comments')
def getAllComments():
    comments = comment.query.all()
    return { comment.id: comment.to_dict() for comment in comments }

@commentRoutes.route('/<int:id>')
def getSingleComment(id):
    singleComment = comment.query.get(id)
    if singleComment:
        return singleComment.to_dict()
    else:
        return 'Comment not found.'