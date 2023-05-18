from flask_sqlalchemy import SQLAlchemy
from .db import db
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    lastname = db.Column(db.String(120), unique=False, nullable=False)
    phonenumber = db.Column(db.String(120), unique=False, nullable=False)
    birthdate = db.Column(db.Date, unique=False, nullable=False)
    address = db.Column(db.String(200), unique=False, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)
    last_login = db.Column(db.Date, unique=False, nullable=True)
    email_recover = db.Column(db.String(120), unique=False, nullable=True)
    securityQA1 = db.Column(db.String(120), unique=False, nullable=True)
    securityQA2 = db.Column(db.String(120), unique=False, nullable=True)
    user_creation_date = db.Column(db.Date, unique=False, nullable=True)
    role = db.Column(db.String(120), unique=False, nullable=True)
    status = db.Column(db.String(120), unique=False, nullable=True)
    order_id = db.relationship('Order', backref='user', lazy=True)
    #shopping_cart = db.relationship('shoppingcart')
    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "phonenumber": self.phonenumber,
            "birthdate": self.birthdate,
            "address": self.address,
            "country": self.country,
            # do not serialize the password, its a security breach
        }