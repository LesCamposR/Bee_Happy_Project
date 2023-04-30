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