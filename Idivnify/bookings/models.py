from django.db import models
from users.models import *
from django.utils import timezone

# Model for different categories of Pujas


class PujaCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def __str__(self):
        return self.name

# Model for Pujas


class Puja(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(
        PujaCategory, on_delete=models.CASCADE, related_name="pujas")
    description = models.TextField()
    # If Puja is online or offline
    is_online = models.BooleanField(default=False)
    location = models.CharField(
        max_length=200, blank=True, null=True)  # Only for offline Pujas
    max_attendees = models.PositiveIntegerField(
        default=1)  # Max number of people who can attend

    def __str__(self):
        return self.name

# Model for Puja Plans (different pricing or service levels)


class PujaPlan(models.Model):
    puja = models.ForeignKey(
        Puja, on_delete=models.CASCADE, related_name="plans")
    # Plan name, e.g., Basic, Premium, etc.
    plan_name = models.CharField(max_length=100)
    description = models.TextField()  # Description of what the plan includes
    price = models.DecimalField(
        max_digits=10, decimal_places=2)  # Price for the plan
    duration = models.DurationField()  # Duration of the Puja under this plan
    # Extra benefits offered by this plan
    benefits = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.plan_name} - {self.puja.name}"

# Model for Puja bookings


class Booking(models.Model):
    user = models.ForeignKey(
        IdivnifyUsers, on_delete=models.CASCADE, related_name="bookings")
    puja = models.ForeignKey(
        Puja, on_delete=models.CASCADE, related_name="bookings")
    plan = models.ForeignKey(PujaPlan, on_delete=models.CASCADE,
                             related_name="bookings")  # Selected Puja plan
    booking_date = models.DateTimeField(default=timezone.now)
    scheduled_date = models.DateTimeField()  # Date when the Puja is scheduled
    attendees = models.PositiveIntegerField(
        default=1)  # Number of attendees for the Puja
    special_requests = models.TextField(blank=True, null=True)

    # Status of the booking
    PENDING = 'Pending'
    CONFIRMED = 'Confirmed'
    CANCELLED = 'Cancelled'
    COMPLETED = 'Completed'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (CONFIRMED, 'Confirmed'),
        (CANCELLED, 'Cancelled'),
        (COMPLETED, 'Completed'),
    ]
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default=PENDING)

    def __str__(self):
        return f"{self.user.username} - {self.puja.name} on {self.scheduled_date}"

# Model for feedback after the Puja


class PujaFeedback(models.Model):
    user = models.ForeignKey(
        IdivnifyUsers, on_delete=models.CASCADE, related_name="feedbacks")
    puja = models.ForeignKey(
        Puja, on_delete=models.CASCADE, related_name="feedbacks")
    rating = models.PositiveIntegerField()  # Ratings between 1 and 5
    comments = models.TextField(blank=True, null=True)
    feedback_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Feedback by {self.user.username} for {self.puja.name}"

# Payment model for Razorpay integration


class Payment(models.Model):
    booking = models.OneToOneField(
        Booking, on_delete=models.CASCADE, related_name="payment")
    razorpay_payment_id = models.CharField(
        max_length=100)  # Razorpay payment ID
    amount = models.DecimalField(
        max_digits=10, decimal_places=2)  # Amount paid
    payment_date = models.DateTimeField(default=timezone.now)

    # Payment statuses
    PENDING = 'Pending'
    SUCCESS = 'Success'
    FAILED = 'Failed'
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (SUCCESS, 'Success'),
        (FAILED, 'Failed'),
    ]
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default=PENDING)

    def __str__(self):
        return f"Payment {self.razorpay_payment_id} for Booking {self.booking.id}"
