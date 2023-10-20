from django.contrib import admin
from accounts.models import User

# admin画面で表示する
admin.site.register(User)
