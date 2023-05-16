from flask_sqlalchemy import SQLAlchemy
from .db import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False, nullable=False)
    rating = db.Column(db.Float, unique=False, nullable=False)
    reviews = db.Column(db.String(200), unique=False, nullable=False)
    stock = db.Column(db.Integer, unique=False, nullable=False)
    #shoppingcart = db.relationship('shoppingcart', backref='product', lazy=True) 
    #order_id = db.relationship('order', backref='product', lazy=True)
    def __repr__(self):
        return f'<Product {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "stock": self.stock,
            "rating": self.rating,
            "reviews": self.reviews,
            "description": self.description,
            # do not serialize the password, its a security breach
        }