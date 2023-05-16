from flask_sqlalchemy import SQLAlchemy
from .db import db
from .user import User
from .products import Product

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= True)
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    order_Date = db.Column(db.Date, unique=False, nullable=False)
    def __repr__(self):
        return f'<Order {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "product_id": self.products_id,
            "order_Date": self.order_Date,
            "product_name": Product.query.get(self.products_id).serialize()["name"],                             
            "user_name": User.query.get(self.user_id).serialize()["name"],
            "user":User.query.get(self.user_id).serialize(),
            "product":Product.query.get(self.products_id).serialize()
    }