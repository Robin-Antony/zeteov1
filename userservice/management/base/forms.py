from django.forms import ModelForm
from.models import User

class PasswordResetForm(ModelForm):

    class Meta:
        model = User 
        fields = ['password']