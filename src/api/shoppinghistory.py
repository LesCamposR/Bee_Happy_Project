from flask_sqlalchemy import SQLAlchemy
from .db import db

class ShoppingHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable= False)
    products_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    invoice_number = db.Column(db.Float, unique=False, nullable=False)
    status = db.Column(db.String(120), unique=True, nullable=False)
    def __repr__(self):
        return f'<ShoppingHistory {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "order_id": self.order_id,
            "products_id": self.products_id,
            "invoice_number": self.invoice_number,
            "status": self.status,
            #
        }