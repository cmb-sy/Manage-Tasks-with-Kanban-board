from django.urls import path
from accounts.views import RegisterView, LoginView

urlpatterns = [
    path("signup/", RegisterView.as_view(), name="user-signup"),  # 新規登録処理'
    path("login/", LoginView.as_view(), name="user-signup"),  # ログイン処理'
]
