from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_register, name='register'),

    path('notes/', views.note_list, name='note_list'),
    path('new/', views.note_create, name='note_create'),
    path('edit/<int:pk>', views.note_update, name='note_update'),
    path('delete/<int:pk>', views.note_delete, name='note_delete'),

    path('register/', views.user_register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
]
