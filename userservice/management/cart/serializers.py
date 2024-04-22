from rest_framework import serializers
from cart.models import Cart
from inventory.models import CollegeCourse
from inventory.serializers import CollegeCourseSerializer
from base.models import User

class CartSerializer(serializers.ModelSerializer):
    course = CollegeCourseSerializer(many=False, read_only=True)

    class Meta: 
        model = Cart 
        fields = ['id','course','courseid']

    def create(self, validated_data):
        courseid = validated_data['courseid']
        course = CollegeCourse.objects.get(id=courseid)
        return Cart.objects.create(courseid=validated_data['courseid'],
                                    course=course,payed=False,completed=False)

class OrderSerializer(serializers.ModelSerializer):
    payed = serializers.BooleanField( read_only=True)
    class Meta:
        model = Cart
        fields = ['payed']


class OrderCompleteSerializer(serializers.ModelSerializer):
    # payed = serializers.BooleanField( read_only=True)
    class Meta:
        model = Cart
        fields = ['payed','completed','canceled','refunded','razorpay_order_id','razorpay_payment_id','razorpay_signature',]