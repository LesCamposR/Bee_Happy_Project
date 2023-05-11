from flask_sqlalchemy import SQLAlchemy
from .db import db
#from .user import User

class Shoppingcart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    order_id = db.relationship('Order', backref='shoppingcart', lazy=True)
    def __repr__(self):
        return f'<Shoppingcart {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "user_name": User.query.get(self.user_id).serialize()["name"],
            "product_id": self.product_id,
            "product_name": Product.query.get(self.product_id).serialize()["Product_name"],
            "order_id": self.order_id,
            # do not serialize the password, its a security breach
        }
