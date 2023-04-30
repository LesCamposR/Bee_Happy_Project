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