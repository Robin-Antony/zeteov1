from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import mixins
from rest_framework import generics

from. serializers import UserSerializer, ChangePasswordSerializer, UserUpdateSerializer
from.models import User
from.mails import send_email_confirmation,send_recovery_mail
from.managetoken import decodeToken
from.forms import PasswordResetForm
from django.contrib.auth.hashers import make_password

from django.views.generic.edit import UpdateView
from django.http import HttpResponse

import json



# api routs
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'register/user': reverse('user-register', request=request),
        'account/recovery': reverse('account-recovery', request=request),
        'email/verification': reverse('email-verification', request=request),
        'change/password/<str:pk>': reverse('change-password', request=request,kwargs={'pk':"user id"}),
        'update/user/<str:pk>': reverse('update-user', request=request,kwargs={'pk':"user id"}),
    })

class UserRegisterView(mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            send_email_confirmation(email=serializer.data['email'],user_id=user.id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def verifyEmail(request):
    try:
        token = request.GET.get('token')
        payload = decodeToken(token)
        user_id = payload['user_id']
    except:
        return HttpResponse('sorry something went wrong')
    
    try:
        user = User.objects.get(id=user_id)
    except:
        user = False
        return HttpResponse('sorry something went wrong')
    if user:
        user.is_verified=True
        user.save()
        return HttpResponse('e-mail verification successfull')
    
        
class RecoverAccount(APIView):
   
    def get_object(self,request):
        data = request.data
        email = data['email']
        try:
            user = User.objects.get(email=email)
            return user.email, user.id
        except User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self,request):
        email, user_id = self.get_object(request)
        send_recovery_mail(email=email,user_id=user_id)
        return Response(status= status.HTTP_202_ACCEPTED)

#not an api view, for resetting password via email
def change_password(request):
    form = PasswordResetForm()
    if request.method == 'GET':
        context= {'form':form}
        return render(request,'base/forms.html',context=context)

    if request.method == 'POST':
        token = request.GET.get('token')
        payload = decodeToken(token)
        user_id = payload['user_id']
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        try:
            user = User.objects.get(id=user_id)
        except:
            return HttpResponse('something went wrong')
        if password == confirm_password:
            user.password = make_password(password)
            user.save()
            return HttpResponse('password chang success')


class ChangePasswordView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = ChangePasswordSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
class UpdateUserView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)