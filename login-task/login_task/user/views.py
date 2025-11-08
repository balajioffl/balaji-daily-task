# views.py
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required


# login user

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            messages.error(request, "Invalid Username or Password!")
    return render(request, "login.html")


# register user

def create_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        confirm = request.POST['confirm_password']

        if password == confirm:

            if User.objects.filter(username=username).exists():
                messages.error(request, "Username already exists!")

            elif User.objects.filter(email=email).exists():
                messages.error(request, "Email already exists!")
                
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                login(request, user)
                messages.success(request, "User registered successfully!")
                return redirect('home')
        else:
            messages.error(request, "Passwords do not match!")

    return render(request, 'register.html')

# logout user

def logout_user(request):
    logout(request)
    return redirect("login")

# homepage

@login_required(login_url='login')
def home(request):
    return render(request, "home.html")
