"""description

Revision ID: b74d5e1da3af
Revises: 4edab9586fd5
Create Date: 2022-12-01 13:29:41.490553

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b74d5e1da3af'
down_revision = '4edab9586fd5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('currencies', sa.Column('name', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('currencies', 'name')
    # ### end Alembic commands ###
