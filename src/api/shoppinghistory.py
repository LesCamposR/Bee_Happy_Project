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