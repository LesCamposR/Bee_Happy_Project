"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db
from api.user import User
from api.products import Product
from api.shoppingcart import Shoppingcart
from api.shoppinghistory import ShoppingHistory
from api.order import Order
from api.utils import generate_sitemap, APIException


from api.extensions import jwt, bcrypt
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from datetime import datetime, timezone, time
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

api = Blueprint('api', __name__)

# Email*************************
# Email*************************

EMAIL = os.environ.get('EMAIL')
PASSWORD = os.environ.get('PASSWORD')

def sendEmail(message, to, subject):
    smtp_address = 'smtpout.secureserver.net'
    smtp_port = 465 #ssl

    print(message, to, subject)

    messageMime = MIMEMultipart('alternative') #json, #text, #application/pdf
    messageMime['Subject'] = subject
    messageMime['To'] = to
    messageMime['From'] = EMAIL


    html = ''' 
    <html>
    <body>
    <h1> Thank You for visiting, '''  + to + '''  </h1>
    <p>BeHapppy</p>
    </br>
    <p>Enjoy our products and everything this space has to offer</p>
    </body>
    </html>
    '''
    
    #Crear elementos MIMEText
    text_mime = MIMEText(subject, 'plain')
    html_mime = MIMEText(html, 'html')

    #adjuntar los MIMEText al MIMEMultipart
    messageMime.attach(text_mime)
    messageMime.attach(html_mime)

    #conectarnos al puerto 465  para el enviar el correo
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_address, smtp_port, context=context) as server:
        server.login(EMAIL, PASSWORD)
        sever.sendmail(EMAIL, to, message.as_string())

    return jsonify({"message":"email sent"}), 200

@api.route('/email', methods=['POST'])
def handle_email():
    body = request.get_json()
    message = body['message']
    to = body['to']
    subject = body['subject']

    sendEmail(message, to, subject)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    password_encrypted = bcrypt.generate_password_hash("123",10).decode("utf-8")
    response_body = {
        "message": password_encrypted
    }

    return jsonify(response_body), 200

@api.route('/hola', methods=['POST', 'GET'])
def handle_hola():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


# Handle/serialize errors like a JSON object
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@api.route('/')
def sitemap():
    return generate_sitemap(app)

# Register*************************
# Register*************************

@api.route('/register', methods=['POST'])
def register_user():
    #recibir el body en json, des-jsonificarlo y almacenarlo en la variable body
    body = request.get_json() #request.json() pero hay que importar request y json

    #ordernar cada uno de los campos recibidos
    email = body["email"]
    name = body["name"]
    password = body["password"]
    is_active = body["is_active"]

    #validaciones
    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=400)
    if "email" not in body:
        raise APIException("You need to specify the email", status_code=400)
    #encriptamos el password en la base de datos
    password_encrypted = bcrypt.generate_password_hash(password, 10).decode('utf-8')
    #datetim="1980-12-24"
    datetim= datetime.now(timezone.utc)
    #creada la clase User en la variable new_user
    new_user = User(email=email, name=name, password=password_encrypted, is_active=is_active, lastname="null", phonenumber="null", birthdate=datetim,address="null",country="null",last_login=datetim,email_recover="null",securityQA1="null",securityQA2="null",user_creation_date=datetim,role="null", status="active")

    #comitear la sesión
    db.session.add(new_user) #agregamos el nuevo usuario a la base de datos
    db.session.commit() #guardamos los cambios en la base de datos

    return jsonify({"mensaje":"NewUser Register Correctly"}), 201


# User*************************
# User*************************
# User*************************

@api.route('/user', methods=['GET'])
def get_users():
    users = User.query.all()  #<User Antonio>
    users = list(map(lambda item: item.serialize(), users)) #{name:Antonio, password:123, ....} {name:Usuario2, password:123.... }
    print(users)
  
    return jsonify(users), 200

@api.route('/get-user/<int:id>', methods=['GET'])
def get_specific_user(id):
    user = User.query.get(id)    
  
    return jsonify(user.serialize()), 200

@api.route('/get-user', methods=['POST'])
def get_specific_user2():
    body = request.get_json()   
    id = body["id"]

    user = User.query.get(id)   
  
    return jsonify(user.serialize()), 200

@api.route('/get-user', methods=['DELETE'])
def delete_specific_user():
    body = request.get_json()   
    id = body["id"]

    user = User.query.get(id) 

    db.session.delete(user)
    db.session.commit()  
  
    return jsonify("Usuario borrado"), 200

@api.route('/get-user', methods=['PUT'])
def edit_user():
    body = request.get_json()   
    id = body["id"]
    name = body["name"]

    user = User.query.get(id)   
    user.name = name #modifique el nombre del usuario

    db.session.commit()
  
    return jsonify(user.serialize()), 200


# Login*************************
# Login*************************


@api.route("/login", methods=["POST"])
def login():
    email = request.get_json()["email"]
    password = request.get_json()["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"message":"Login failed"}), 401

 #Esta veificaicon es para el inicio de la aplicacion Go all the way Up
    """ if password != user.password:
        return jsonify({"message":"Login failed"}), 401 """
        
 #validar el password encriptado / esto devuelve True si hay coincidencia 
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"message":"Login failed"}), 401

# create_access_token() function is used to actually generate the JWT.
    access_token = create_access_token(identity=user.id)
    return jsonify({"token":access_token}), 200


# Logout*************************
# Logout*************************


@api.route("/logout", methods=["GET"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"] #Identificador del JWT (es más corto)
    #now = datetime.now(timezone.utc) 

    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.get(current_user)

    tokenBlocked = TokenBlockedList(token=jti , created_at=now, email=user.email)
    db.session.add(tokenBlocked)
    db.session.commit()

    return jsonify({"message":"successfully loggedout "})


#API Product_______________________________
#API Product_______________________________
#API Product_______________________________

@api.route('/product', methods=['GET'])
def get_product():
    product = product.query.all()  #<User Les>
    product = list(map(lambda item: item.serialize(), product)) #{name:Antonio, password:123, ....} {name:Usuario2, password:123.... }
    print(product)
  
    #return jsonify(product), 200
    Productbody = {
        "msg": "Ok",
        "product": product
    }

    return jsonify(Productbody)

@api.route('/get-product/<int:id>', methods=['GET'])
def get_specific_product(id):
    product = product.query.get(id)    
  
    return jsonify(product.serialize()), 200


@api.route('/post-product', methods=['POST'])
def post_specific_product():
    body = request.get_json()   
    id = body["id"]
    name = body["name"]
    price = body["price"]
    

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=404)
    if "name" not in body:
        raise APIException("You need to specify the name", status_code=404)
    if "gender" not in body:
        raise APIException("You need to specify the birthdate", status_code=404)
    if "eyes_color" not in body:
        raise APIException("You need to specify the eyes", status_code=404)
    if "height" not in body:
        raise APIException("You need to specify the height", status_code=404)

    product = product.query.get(id)   
    newCharacter = product(name=name, gender=gender, eyes_color=eyes_color, height=height)

    db.session.add(newCharacter)
    db.session.commit()

    return jsonify(product.serialize()), 200

@api.route('/delete-product', methods=['DELETE'])
def delete_specific_product():
    body = request.get_json()   
    id = body["id"]

    product = product.query.get(id) 

    db.session.delete(product)
    db.session.commit()  
  
    return jsonify("StartWars Character Deleted"), 200

@api.route('/put-product', methods=['PUT'])
def edit_product():
    body = request.get_json()   
    id = body["id"]
    name = body["name"]
    gender = body["gender"]
    eyes_color = body["eyes_color"]
    height = body["height"]

    if body is None:
        raise APIException("You need to specify the request body as json object", status_code=404)
    if "name" not in body:
        raise APIException("You need to specify the name", status_code=404)
    if "gender" not in body:
        raise APIException("You need to specify the birthdate", status_code=404)
    if "eyes_color" not in body:
        raise APIException("You need to specify the eyes", status_code=404)
    if "height" not in body:
        raise APIException("You need to specify the height", status_code=404)

    product = product.query.get(id)   
    product.name = name #modifique el nombre del usuario
    product.gender = gender
    product.eyes_color = eyes_color
    product.height = height

    db.session.commit()
  
    return jsonify(product.serialize()), 200


@api.route('/favoriteproduct', methods=['POST'])
def add_favorite_pleope():
    body = request.get_json()
    user_id =["user_id"]
    product_id = ["product_id"]

    character = product.query.get(product_id)
    if not character:
        raise APIException('Character Not Found', status_code=404)
    
    user = User.query.get(user_id).first()
    if not user:
        raise APIException('User Not Found', status_code=404)

    fav_exist = favoriteproduct.query.filter_by(user_id = user.id, product_id = character.id).first() is not None

    if fav_exist:
        raise APIException('Favorite already exists ', status_code=404)
    
    favorite_product = favoriteproduct(user_id = user.id, product_id = character.id)
    db.session.add(favorite_product) #agregamos el nuevo usuario a la base de datos
    db.session.commit()

    return jsonify({
        "product_name":favorite_product.serialize()["product_name"],
        "user": favorite_product.serialize()["user_name"]
    }), 200

@api.route('/removefavoriteproduct', methods=['DELETE'])
def remove_favorite_product():
    body = request.get_json()
    user_id = body["user_id"]
    product_id = body["product_id"]

    favorite_product = Favoriteproduct.query.filter_by(user_id=user_id, product_id=product_id).first()

    if not favorite_product:
        raise APIException('Favorite product not found', status_code=404)

    db.session.delete(favorite_product)
    db.session.commit()

    return jsonify({"msg":"Favorite product removed "}), 200


# ShoppingCart*************************
# ShoppingCart*************************

@api.route('/ShoppingCart/<int:user_id>', methods=['GET'])
@jwt_required()
def get_favorites(user_id):
    user = User.query.get(user_id)
    if not user:
        raise APIException('User not found', status_code=404)

    favorite_product = list(map(lambda item: item.serialize()["product_name"], Favoriteproduct.query.filter_by(user_id=user.id)))
    favorite_planets = list(map(lambda item: item.serialize()["planet_name"], FavoritePlanets.query.filter_by(user_id=user.id)))
    favorite_vehicles = list(map(lambda item: item.serialize()["vehicle_name"], FavoriteVehicles.query.filter_by(user_id=user.id)))

    return jsonify({
        "msg":"ok",
        "all_ShoppingCart": favorite_product + favorite_planets + favorite_vehicles,
        "favorite_product": favorite_product,
        "favorite_planets": favorite_planets,
        "favorite_vehicles": favorite_vehicles
    }), 200


# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.get(current_user)
    print("UserName:", user.name)
    return jsonify({"Msg":"This is a protected route"}), 200


# this only runs if `$ python src/app.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=False)