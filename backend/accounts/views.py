from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
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
            # return JsonResponse(response_data)
        else:
            return JsonResponse({"message": "POSTリクエストのみ受け付けています"})
