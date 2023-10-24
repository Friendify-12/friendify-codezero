from rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers
from .models import *
from rest_framework.authtoken.models import Token
from rest_auth.registration.serializers import RegisterSerializer
from rest_auth.models import TokenModel




class UserRegistrationSerializer(RegisterSerializer):
    first_name = serializers.CharField(write_only=False)
    last_name = serializers.CharField(write_only=False)

    def custom_signup(self, request, user):
        user.first_name = self.validated_data.get("first_name", "")
        user.last_name = self.validated_data.get("last_name", "")
        user.save(update_fields=["first_name", "last_name"])



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk', 'first_name', 'last_name', 'username', 'email'
                  # 'is_superuser', 'is_staff', 'is_active',
                  ]
        read_only_fields = ('email', 'is_superuser', 'is_staff', 'is_staff')


class UserProfileSerializer(UserSerializer):
    location_zip = serializers.CharField(source="userprofile.location_zip")
    bio = serializers.CharField(source="userprofile.bio")
    gender = serializers.CharField(source="userprofile.gender")
    age = serializers.IntegerField(source="userprofile.age")
    image = serializers.ImageField(
        source="userprofile.image", max_length=None, use_url=True, allow_null=True, required=False)

    class Meta(UserDetailsSerializer.Meta):
        fields = UserSerializer.Meta.fields + \
            ['location_zip', 'age', 'gender', 'bio', 'image']

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('userprofile', {})
        location_zip = profile_data.get('location_zip')
        age = profile_data.get('age')
        gender = profile_data.get('gender')
        bio = profile_data.get('location_zip')
        image = profile_data.get('image')

        instance = super(UserSerializer, self).update(instance, validated_data)
        profile = instance.userprofile
        if profile_data is not None:
            profile.location_zip = location_zip
            profile.age = age
            profile.gender = gender
            profile.bio = bio
            profile.image = image
            profile.save()
        return instance


class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)  
    class Meta:
        model = TokenModel
        fields = ('key', 'user')   
