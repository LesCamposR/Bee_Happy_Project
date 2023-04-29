from flask_sqlalchemy import SQLAlchemy
from .db import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    Name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    username = db.Column(db.String(120), unique=False, nullable=False)
    phonenumber = db.Column(db.String(120), unique=False, nullable=False)
    birth_date = db.Column(db.Date, unique=False, nullable=False)
    address = db.Column(db.String(200), unique=False, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=True)
    last_login = db.Column(db.Date, unique=False, nullable=False)
    email_recover = db.Column(db.String(120), unique=False, nullable=False)
    securityQA1 = db.Column(db.String(120), unique=False, nullable=False)
    securityQA2 = db.Column(db.String(120), unique=False, nullable=False)
    user_creation_date = db.Column(db.date, unique=False, nullable=False)
    role = db.Column(db.String(120), unique=False, nullable=False)
    status = db.Column(db.String(120), unique=False, nullable=False)
    shopping_cart = db.relationship('shoppingcart ', backref = 'user', lazy= True )
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Shoppingcart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Products_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable= False)
    Products_status = db.Column(db.String(120), unique=True, nullable=False)
    def __repr__(self):
        return f'<Shoppingcart {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class ClassProduct(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Product_name = db.Column(db.String(120), unique=True, nullable=False)
    Shoppingcart_id = db.Column(db.Integer, db.ForeignKey('Shoppingcart.id'), nullable= False)
    Price = db.Column(db.Float, unique=False, nullable=False)
    Description = db.Column(db.String(200), unique=False, nullable=False)
    Rating = db.Column(db.Float, unique=False, nullable=False)
    Reviews = db.Column(db.Integer, unique=False, nullable=False)
    Stock = db.Column(db.Integer, unique=False, nullable=False)
    def __repr__(self):
        return f'<ClassProduct {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class ShoppingHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    User_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Order_id = db.Column(db.Integer, db.ForeignKey('Order.id'), nullable= False)
    Products_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable= False)
    Invoice_Number = db.Column(db.Float, unique=False, nullable=False)
    Status = db.Column(db.String(120), unique=True, nullable=False)
    def __repr__(self):
        return f'<ShoppingHistory {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            #
        }

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    User_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Products_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Order_Date = = db.Column(db.Date, unique=False, nullable=False)
        def __repr__(self):
        return f'<Order {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            #
        }