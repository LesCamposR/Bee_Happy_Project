from flask_sqlalchemy import SQLAlchemy
from .db import db
from .user import User
from .products import Product

class Shoppingcart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    def __repr__(self):
        return f'<Shoppingcart {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.product_id,
            "product_name": Product.query.get(self.product_id).serialize()["name"],
            "user_name": User.query.get(self.user_id).serialize()["name"],
            "user":User.query.get(self.user_id).serialize(),
            "product":Product.query.get(self.product_id).serialize()
            # do not serialize the password, its a security breach
        }
