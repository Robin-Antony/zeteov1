from django.db import models
from base.models import User
from inventory.models import CollegeCourse

# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    courseid=models.IntegerField(null=True, blank=True)
    course = models.ForeignKey(CollegeCourse,related_name='cart',on_delete=models.CASCADE,null=True,)
    order_id = models.CharField(unique=True, max_length=100,null=True, blank=True, default= None)
    total_amound = models.FloatField(null=True, blank=True)
    Date_of_payment = models.DateTimeField(auto_now=True,null=True, blank=True)
    payed = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    canceled = models.BooleanField(default=False)
    refunded = models.BooleanField(default=False)
    
    razorpay_order_id = models.CharField(max_length=500,null=True,blank=True)
    razorpay_payment_id = models.CharField(max_length=500,null=True,blank=True)
    razorpay_signature = models.CharField(max_length=500,null=True,blank=True)

    def __str__(self):
        return self.course.name