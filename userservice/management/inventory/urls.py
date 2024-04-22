
from django.urls import path

from. import views

urlpatterns = [
    path('/', views.CollegeList.as_view(),name='colleges'),
    path('detail/<str:pk>', views.CollegeDetail.as_view(),name='college-detail'),
    path('course', views.CourseList.as_view(),name='courses'),
    path('course/detail/<str:pk>', views.CourseDetail.as_view(),name='course-detail'),
    path('images', views.CollegeImageList.as_view(),name='images'),
    path('image/detail/<str:pk>', views.CollegeImageDetail.as_view(),name='image-detail'),

    path('image/college/<str:pk>',views.GetCollegeImageList.as_view(),name='college-image'),
    path('course/college/<str:pk>',views.GetCollegeCourseList.as_view(),name='college-course'),
]