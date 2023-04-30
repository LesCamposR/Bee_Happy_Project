class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    User_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Products_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable= False)
    Order_Date = db.Column(db.Date, unique=False, nullable=False)
    def __repr__(self):
        return f'<Order {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            #
        }