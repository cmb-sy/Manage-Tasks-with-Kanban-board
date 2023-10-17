from django.urls import path
from accounts.views import SampleAPIView

urlpatterns = [
    path("sample/", SampleAPIView.as_view(), name="sample"),
]
