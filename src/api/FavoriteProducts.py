from flask_sqlalchemy import SQLAlchemy
from .db import db

class FavoriteProduct (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable= False)
    
    def serialize(self):
        return {
            "id": self.id,
            "people_id" : self.people_id,
            "user_id" : self.user_id
        }