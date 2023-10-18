from django.urls import path
from accounts.views import SampleAPIView
from accounts.views import LoginView

urlpatterns = [
    path("sample/", SampleAPIView.as_view(), name="sample"),
    path("login/", LoginView.as_view(), name="login"),
]
