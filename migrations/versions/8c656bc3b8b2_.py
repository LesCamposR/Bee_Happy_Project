"""empty message

Revision ID: 8c656bc3b8b2
Revises: 
Create Date: 2023-05-04 01:53:29.750242

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8c656bc3b8b2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('Product_name', sa.String(length=120), nullable=False),
    sa.Column('Price', sa.Float(), nullable=False),
    sa.Column('Description', sa.String(length=200), nullable=False),
    sa.Column('Rating', sa.Float(), nullable=False),
    sa.Column('Reviews', sa.Integer(), nullable=False),
    sa.Column('Stock', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Product_name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('Name', sa.String(length=120), nullable=False),
    sa.Column('lastname', sa.String(length=120), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=False),
    sa.Column('phonenumber', sa.String(length=120), nullable=False),
    sa.Column('birth_date', sa.Date(), nullable=False),
    sa.Column('address', sa.String(length=200), nullable=False),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('last_login', sa.Date(), nullable=False),
    sa.Column('email_recover', sa.String(length=120), nullable=False),
    sa.Column('securityQA1', sa.String(length=120), nullable=False),
    sa.Column('securityQA2', sa.String(length=120), nullable=False),
    sa.Column('user_creation_date', sa.Date(), nullable=False),
    sa.Column('role', sa.String(length=120), nullable=False),
    sa.Column('status', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('favorite_product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shoppingcart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('Products_status', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Products_status')
    )
    op.create_table('order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('shoppingcart_id', sa.Integer(), nullable=False),
    sa.Column('Products_id', sa.Integer(), nullable=False),
    sa.Column('Order_Date', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['Products_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['shoppingcart_id'], ['shoppingcart.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_history',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('User_id', sa.Integer(), nullable=False),
    sa.Column('Order_id', sa.Integer(), nullable=False),
    sa.Column('Products_id', sa.Integer(), nullable=False),
    sa.Column('Invoice_Number', sa.Float(), nullable=False),
    sa.Column('Status', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['Order_id'], ['order.id'], ),
    sa.ForeignKeyConstraint(['Products_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['User_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Status')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('shopping_history')
    op.drop_table('order')
    op.drop_table('shoppingcart')
    op.drop_table('favorite_product')
    op.drop_table('user')
    op.drop_table('product')
    # ### end Alembic commands ###