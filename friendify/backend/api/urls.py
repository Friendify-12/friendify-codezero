from django.urls import path, include
from .views import *
from rest_framework import routers


urlpatterns = [
    path('user/registration/', UserRegistrationView.as_view()),
    path("user/login/", LoginViewCustom.as_view()),
    path("user/<int:pk>/", ProfileView.as_view()),
    path("user/<int:pk>/update/", Updateuser.as_view()),
]


# # logout
# http://localhost:8000/rest_auth/logout/


# # user info
# http://localhost:8000/rest_auth/user/
