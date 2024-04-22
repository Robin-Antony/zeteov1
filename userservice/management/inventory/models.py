from django.db import models



# Create your models here.
class College(models.Model):
    name = models.CharField(max_length=100,null=True,blank=True)
    thumbnail = models.ImageField(null=True,blank=True)
    banner = models.ImageField(null=True,blank=True)
    district = models.CharField(max_length=50,null=True,blank=True)
    state = models.CharField(max_length=100,null=True,blank=True)
    place = models.CharField(max_length=100,null=True,blank=True)
    rating = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)

    def __str__(self):
        return self.name



class CollegeImage(models.Model):
    college = models.ForeignKey(College,on_delete=models.CASCADE,null=True)
    image = models.ImageField(null=True,blank=True)
    description = models.CharField(max_length=200,null=True,blank=True)

    def __str__(self):
        return self.description[:10]

class CollegeCourse(models.Model):
    college = models.ForeignKey(College,on_delete=models.CASCADE,null=True, related_name='course')
    name = models.CharField(max_length=100,null=True,blank=True)
    thumbnail = models.ImageField(null=True,blank=True)
    no_years = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    total_fee = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    yearly_fee = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    discount = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    certifications = models.CharField(max_length=150,null=True,blank=True)
    total_seats = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    available_seats = models.CharField(max_length=100,null=True,blank=True)
    addmission_fee = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)

    def __str__(self):
        return self.name

    