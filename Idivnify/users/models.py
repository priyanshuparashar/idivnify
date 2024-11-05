from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError(('super user must have is_staff true'))

        return self.create_user(email, password, **extra_fields)


class IdivnifyUsers(AbstractUser):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other")
    ]
    username = None
    Phone_number = models.CharField(max_length=15, unique=True)
    email = models.EmailField(unique=True)
    Country = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=20,
                              null=True, blank=False, verbose_name="Gender")
    USERNAME_FIELD = 'email'
    objects = UserManager()
    REQUIRED_FIELDS = []
