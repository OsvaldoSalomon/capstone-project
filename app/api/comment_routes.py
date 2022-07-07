from ast import BinOp
from flask import Blueprint, jsonify, request
from app.models import db, Comment 

commentRoutes = Blueprint('comments', __name__)


@commentRoutes.route('/comments')
def getAllComments():
    comments = Comment.query.all()
    return { comment.id: comment.to_dict() for comment in comments }

@commentRoutes.route('/<int:id>')
def getSingleComment(id):
    comment = Comment.query.get(id)
    if comment:
        return comment.to_dict()
    else:
        return 'Comment not found.'