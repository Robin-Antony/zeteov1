from django.core.mail import send_mail
import random

from rest_framework import status
from rest_framework.response import Response

from datetime import datetime, timezone, timedelta

from django.conf import settings
from .models import User
from .managetoken import generateToken

def send_email_confirmation(email,user_id):
    subject = 'your accound verification email'
    payload = {'user_id':user_id,'email':email,"exp": datetime.now(timezone.utc) + timedelta(seconds=300)}
    token = generateToken(payload=payload)
    absurl = 'http://127.0.0.1:8000/account/email/verification'+'?token='+token
    message = f'click the link to verify your email {absurl}'
    email_from = settings.EMAIL_HOST
    try:
        send_mail(subject,message,email_from, [email])
    except:
        pass
        # return Response(data={message:'unexcepted event occured'},status=status.HTTP_417_EXPECTATION_FAILED)

def send_recovery_mail(email,user_id):
    subject = 'your accound recovery email'
    payload = {'user_id':user_id,'email':email,"exp": datetime.now(timezone.utc) + timedelta(seconds=300)}
    token = generateToken(payload=payload)
    absurl = 'http://127.0.0.1:8000/password/reset'+'?token='+token
    message = f'click the link to change your password {absurl}'
    email_from = settings.EMAIL_HOST
    try:
        send_mail(subject,message,email_from, [email])
    except:
        pass
        # return Response(data={message:'unexcepted event occured'},status=status.HTTP_417_EXPECTATION_FAILED)
    

    
