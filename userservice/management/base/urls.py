from django.urls import path
from. import views
#authentication
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('root', views.api_root),
    path('register/user',views.UserRegisterView.as_view(),name='user-register'),
    path('email/verification',views.verifyEmail, name='email-verification'),
    path('account/recovery', views.RecoverAccount.as_view(), name='account-recovery'),# r
    path('password/reset', views.change_password, name='password-reset'),# r
    path('change/password/<str:pk>', views.ChangePasswordView.as_view(), name='change-password'),# r
    
    path('update/user/<str:pk>', views.UpdateUserView.as_view(), name='update-user'),# r

    # for authentication 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #THIS ROUTE IS USED BY API GATEWAY TO VERIFY TOKEN
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
]

