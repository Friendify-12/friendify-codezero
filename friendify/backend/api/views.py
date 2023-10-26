from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import views
from .models import *
from .serializers import *
from .serializers import UserDetailsSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.http import Http404
from rest_framework.parsers import MultiPartParser, FormParser
from rest_auth.registration.views import LoginView, RegisterView


# Create your views here.

# Register    http://localhost:8000/api/user/registration/
class UserRegistrationView(RegisterView):
    serializer_class = UserRegistrationSerializer


# Login http://localhost:8000/api/user/login/
class LoginViewCustom(LoginView):
    authentication_classes = [TokenAuthentication,]



# user profile page    http://localhost:8000/api/user/<int:user_id>/
class ProfileView(views.APIView):
    # permission_classes = [IsAuthenticated, ]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        try:
            user = self.get_object(pk)
            serializers = UserProfileSerializer(user)
            response_msg = {"error": False,
                            "data": serializers.data}
        except:
            response_msg = {"error": True, "message": "Somthing is Wrong!"}
        return Response(response_msg)


# profile edit page and update    http://localhost:8000/api/user/<user:id>/update/
class Updateuser(views.APIView):
    #     permission_classes = [IsAuthenticated, ]
    #     authentication_classes = [TokenAuthentication, ]

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        user = self.get_object(pk)
        serializers = UserProfileSerializer(user)
        print(serializers.data)
        return Response({"error": False, "user": serializers.data})

    def put(self, request, pk):
        user = self.get_object(pk)
        query = Profile.objects.get(user=user)
        serializers = UserProfileSerializer(
            user, data=request.data)
        profile_serializers = UserProfileSerializer(
            query, data=request.data, context={"request": request})
        serializers.is_valid(raise_exception=True)
        serializers.save()
        if serializers.is_valid():
            serializers.save()
            return Response({"error": False, "user": serializers.data})
        return Response({"error": serializers.errors, "message": "something is wrong."})
