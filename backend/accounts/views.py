from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.generics import GenericAPIView

from accounts.serializers import RegisterSerializer, LoginSerializer
from accounts.models import User, AccessToken

import json


class RegisterView(APIView):
    @staticmethod
    def post(request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            try:
                serializer.save()  # データベースへの保存
            except:
                # データベースエラー
                return Response(
                    {"error": 11}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(GenericAPIView):
    permission_classes = [AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)  # 新しいインスタンスを作成

        if serializer.is_valid(raise_exception=True):
            user = User.objects.get(username=serializer.validated_data["username"])
            username = serializer.validated_data["username"]
            token = AccessToken.create(user)
            return Response(
                {
                    "detail": "ログインが成功しました。",
                    "error": 0,
                    "token": token.token,
                    "username": username,
                }
            )
        return Response({"error": 1}, status=status.HTTP_400_BAD_REQUEST)
