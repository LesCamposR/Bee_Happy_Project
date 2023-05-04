from flask_sqlalchemy import SQLAlchemy
from .db import db
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Product_name = db.Column(db.String(120), unique=True, nullable=False)
    #Shoppingcart_id = db.Column(db.Integer, db.ForeignKey('shoppingcart.id'), nullable= False)
    Price = db.Column(db.Float, unique=False, nullable=False)
    Description = db.Column(db.String(200), unique=False, nullable=False)
    Rating = db.Column(db.Float, unique=False, nullable=False)
    Reviews = db.Column(db.Integer, unique=False, nullable=False)
    Stock = db.Column(db.Integer, unique=False, nullable=False)
    order_id= db.relationship('Order', backref='product',lazy=True)
    def __repr__(self):
        return f'<ClassProduct {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }