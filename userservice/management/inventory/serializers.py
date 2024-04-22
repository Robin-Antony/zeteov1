
from rest_framework import serializers
from .models import College,CollegeCourse,CollegeImage



class CollegeSerializer(serializers.ModelSerializer):
    
    # user = serializers.ReadOnlyField(source='user.username')
    course = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = College
        fields = ['id','name','district','state','place','rating','course']

class CollegeCourseSerializer(serializers.ModelSerializer):
    college = serializers.StringRelatedField(many=False, read_only=True)
    class Meta:
        model = CollegeCourse
        fields = '__all__'

class CollegeImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollegeImage
        fields = '__all__'