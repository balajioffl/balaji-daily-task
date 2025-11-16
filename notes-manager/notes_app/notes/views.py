from django.shortcuts import render, get_object_or_404, redirect
from .models import Note
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User


@login_required
def note_list(request):
    notes = Note.objects.filter(user=request.user)
    return render(request, "notes/note_list.html", {'notes': notes})


@login_required
def note_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        notes = request.POST.get('notes')
        author = request.POST.get('author')

        Note.objects.create(
            title=title,
            notes=notes,
            author=author,
            user=request.user
        )
        return redirect('note_list')


@login_required
def note_update(request, pk):
    note = get_object_or_404(Note, pk=pk, user=request.user)

    if request.method == 'POST':
        note.title = request.POST.get('title')
        note.notes = request.POST.get('notes')
        note.author = request.POST.get('author')
        note.save()
        return redirect('note_list')


@login_required
def note_delete(request, pk):
    note = get_object_or_404(Note, pk=pk, user=request.user)

    if request.method == 'POST':
        note.delete()
        return redirect('note_list')


from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate
from django.contrib import messages

def user_register(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        if User.objects.filter(username=username).exists():
            return render(request, "notes/register.html", {"error": "Username already exists!"})

        user = User.objects.create_user(username=username, password=password)

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome, {username}! Your account has been created.")
            return redirect("note_list")
        
    return render(request, "notes/register.html")



def user_login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return redirect("note_list")
        else:
            return render(request, 'notes/login.html', {'error': 'Invalid credentials'})
    return render(request, 'notes/login.html')


def user_logout(request):
    logout(request)
    return redirect("login")
