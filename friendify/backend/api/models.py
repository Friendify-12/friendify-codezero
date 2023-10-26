from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class Profile(models.Model):
    GENDER_MALE = 'M'
    GENDER_FEMALE = 'F'
    GENDER_CHOICES = (
        (GENDER_MALE, 'Male', ),
        (GENDER_FEMALE, 'Female', ),
    )

    def upload_to(instance, filename):
        return 'images/{filename}'.format(filename=filename)

    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="userprofile")
    location_zip = models.CharField(max_length=255, null=True)
    age = models.PositiveIntegerField(null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    bio = models.TextField(null=True, blank=True)
    image = models.ImageField(default="noAvatar.png",
                              upload_to=upload_to, blank=True, null=True)

    @receiver(post_save, sender=User)
    def create_profile_for_user(sender, instance=None, created=False, **kwargs):
        if created:
            Profile.objects.get_or_create(user=instance)

    def __str__(self):
        return f'{self.user} userprofile'
