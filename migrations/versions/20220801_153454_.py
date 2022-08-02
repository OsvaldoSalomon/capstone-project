"""empty message

Revision ID: 64a749ad0c7b
Revises: 104298d65ce9
Create Date: 2022-08-01 15:34:54.409918

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64a749ad0c7b'
down_revision = '104298d65ce9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('followers',
    sa.Column('followerId', sa.Integer(), nullable=True),
    sa.Column('followedId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['followedId'], ['users.id'], ),
    sa.ForeignKeyConstraint(['followerId'], ['users.id'], )
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('followers')
    # ### end Alembic commands ###
