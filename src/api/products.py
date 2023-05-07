from flask_sqlalchemy import SQLAlchemy
from .db import db
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Product_name = db.Column(db.String(120), unique=True, nullable=False)
    #Shoppingcart_id = db.Column(db.Integer, db.ForeignKey('shoppingcart.id'), nullable= False)
    Price = db.Column(db.Float, unique=False, nullable=False)
    Description = db.Column(db.String(200), unique=False, nullable=False)
    Rating = db.Column(db.Float, unique=False, nullable=False)
    Reviews = db.Column(db.String, unique=False, nullable=False)
    Stock = db.Column(db.Integer, unique=False, nullable=False)
    order_id= db.relationship('Order', backref='product',lazy=True)
    def __repr__(self):
        return f'<Product {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "Product_name": self.Product_name,
            "Price": self.Price,
            "Stock": self.Stock,
            "Rating": self.Rating,
            "Reviews": self.Reviews,
            "Description": self.Description,
            # do not serialize the password, its a security breach
        }