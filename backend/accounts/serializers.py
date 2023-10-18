from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    # パスワードフィールドに関する追加の設定
    password = serializers.CharField(
        write_only=True, style={"input_type": "password"}, trim_whitespace=False
    )
    username = serializers.CharField(max_length=255)

    class Meta:
        model = User
        fields = ("username", "password")


# class UserSerializer(serializers.ModelSerializer):
#     # パスワードフィールドに関する追加の設定
#     password = serializers.CharField(
#         write_only=True, style={"input_type": "password"}, trim_whitespace=False
#     )
#     name = serializers.CharField(required=False, max_length=255)
