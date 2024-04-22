from django.contrib import admin
from .models import College, CollegeCourse, CollegeImage
# Register your models here.
admin.site.register(College)
admin.site.register(CollegeCourse)
admin.site.register(CollegeImage)