from flask_sqlalchemy import SQLAlchemy
from .db import db
class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    shoppingcart_id = db.Column(db.Integer, db.ForeignKey('shoppingcart.id'), nullable= False)
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    order_Date = db.Column(db.Date, unique=False, nullable=False)
    def __repr__(self):
        return f'<Order {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "shoppingcart_id": self.shoppingcart_id,
            "products_id": self.products_id,
            "order_Date": self.order_Date,
            #
        }