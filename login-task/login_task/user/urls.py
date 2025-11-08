from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_user, name='register'),
    path('home/', views.home, name='home'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
]