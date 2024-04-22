import jwt, math, random
from django.conf import settings

def generateToken(payload):
    # payload ={"some": "payload"}
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
    return token

def decodeToken(token):
    return jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])


