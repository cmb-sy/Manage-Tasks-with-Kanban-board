from rest_framework import serializers
from accounts.models import User


# アカウント登録
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("password", "username", "email")  # 登録するもの。idは自動付与するため省く。

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user


# ログイン
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255, write_only=True)
    password = serializers.CharField(write_only=True, style={"input_type": "password"})

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")
        user_name = User.objects.get(username=username)
        re_password = User.objects.get(password=password)
        if username == user_name.username:
            if password == re_password.password:
                return data

            else:
                raise serializers.ValidationError("ログイン失敗")
