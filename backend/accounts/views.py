from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny

from accounts.serializers import UserSerializer

from django.http import JsonResponse
import json


class SampleAPIView(APIView):
    def post(self, request):
        tmp = json.loads(request.body)
        print("jsonの中身 : ", tmp)
        print("requestのメソッド確認 : ", request.method)
        if request.method == "POST":  # 大文字であること
            # リクエストデータの取得
            data = json.loads(request.body)
            # データの処理
            # 例: データをデータベースに保存
            # 例: データを加工してレスポンスを作成
            response_data = {"message": "データを受け取りました", "data": data}
            return Response(response_data, status=status.HTTP_200_OK)
        else:
            return JsonResponse({"message": "POSTリクエストのみ受け付けています"})


class LoginView(ObtainAuthToken):
    # ログインに成功した際のレスポンスをカスタマイズ
    def post(self, request, *args, **kwargs):
        # tmp = json.loads(request.body)
        print("jsonの中身 : ", request.data)
        username = request.data.get("_value")
        print(username["username"])
        serializer = UserSerializer(data=request.data, context={"request": request})

        if serializer.is_valid():
            user = serializer.validated_data["user"]
            token, created = Token.objects.get_or_create(user=user)
            return Response(
                {"token": token.key, "user_id": user.pk, "email": user.email}
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
