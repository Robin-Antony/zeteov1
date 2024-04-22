from django.contrib import admin
from django.urls import path
from. import views

urlpatterns = [
    path('',views.CartList.as_view(), name='create-cart'),
    path('details/admin/<str:pk>',views.CartDetailsAdmin.as_view(), name='cart-details-admin'),
    path('details/<str:pk>',views.CartDetailsUser.as_view(), name='cart-details-user'),
    path('pay/<str:pk>', views.CreateOrderView.as_view(),name='pay'),
    path('complete/payment/<str:pk>',views.CompleteOrederView.as_view(),name='payment-complete')

]