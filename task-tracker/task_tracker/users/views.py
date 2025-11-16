
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

# Create your views here.


def user_register(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirm = request.POST.get("confirm_password")

        if password != confirm:
            return redirect("register")

        if User.objects.filter(username=username).exists():
            return redirect("register")

        user = User.objects.create_user(username=username, password=password)
        login(request, user)
        return redirect("task_list")

    return render(request, "users/register.html")


def user_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user) 
            return redirect("task_list")

    return render(request, "users/login.html")


def user_logout(request):
    logout(request)
    return redirect("login")
