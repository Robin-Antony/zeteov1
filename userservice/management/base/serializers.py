from .models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

#for authentication
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name','email', 'password']
        extra_kwargs = {
            'password':{'write_only':True},
            }

    def create(self, validated_data):
        return User.objects.create(username=validated_data["username"],first_name=validated_data['first_name'],
                                    last_name=validated_data['last_name'],email=validated_data['email'],
                                    password=make_password(validated_data['password']))

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.password = make_password(validated_data['password'])
        instance.save()
        return instance


class ChangePasswordSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(allow_blank=False, write_only=True)
    old_password = serializers.CharField(allow_blank=False, write_only=True)
    new_password = serializers.CharField(allow_blank=False, write_only=True)

    class Meta:
        model = User
        fields = ['username','id','old_password','new_password','confirm_password']
        extra_kwargs = {
            'username':{'read_only':True},
            'id':{'read_only':True},
        }
    
    def update(self, instance, validated_data):
        if check_password(validated_data['old_password'],instance.password ):
            if validated_data['new_password'] == validated_data['confirm_password']:
                instance.password = make_password(validated_data['new_password'])
                instance.save()
                return instance


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name']
        

