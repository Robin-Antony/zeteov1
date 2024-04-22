from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin

# Register your models here.

class CustomUserAdmin(UserAdmin):
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (                      # new fieldset added on to the bottom
            'Custom Fields',  # group heading of your choice; set to None for a blank space instead of a header
            {
                'fields': (
                    'is_verified','otp',
                ),
            },
        ),
    )


admin.site.register(User, CustomUserAdmin)