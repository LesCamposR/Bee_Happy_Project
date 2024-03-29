import os
from flask_admin import Admin
from .models import db
from .FavoriteProducts import FavoriteProduct
from .order import Order
from .products import Product
from .shoppingcart import Shoppingcart
from .user import User
from .shoppinghistory import ShoppingHistory
from .tokenblocklist import TokenBlockedList


from flask_admin.contrib.sqla import ModelView


from flask_admin.menu import MenuCategory, MenuView, MenuLink

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Product, db.session))
    admin.add_view(ModelView(FavoriteProduct, db.session))
    admin.add_view(ModelView(Shoppingcart, db.session))
    admin.add_view(ModelView(ShoppingHistory, db.session))
    admin.add_view(ModelView(Order, db.session))
    admin.add_view(ModelView(TokenBlockedList, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
    admin.add_link(MenuLink(name='Home Page Backend', url='/'))