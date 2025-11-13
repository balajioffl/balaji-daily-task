from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required

# Create your views here.

def register_user(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
       
    return render(request, 'users/register.html', {'form': form})
    

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user is not None:
            login(request,user)
            return redirect("home")    
        else:
            return redirect('login')   
    else:
        return render(request, "users/login.html")


def logout_user(request):
    logout(request)
    return render(request, 'users/login.html')


@login_required
def home(request):
    return render(request,'users/home.html')

