from django.shortcuts import render


from django.shortcuts import render, redirect, get_object_or_404
from .models import Task

# Create your views here.


def task_list(request):
    if not request.user.is_authenticated:
        return redirect("login")

    tasks = Task.objects.filter(user=request.user)
    return render(request, 'tasks/task_list.html', {'tasks': tasks})


def task_create(request):
    if not request.user.is_authenticated:
        return redirect("login")

    if request.method == 'POST':
        Task.objects.create(
            user=request.user,
            title=request.POST.get('title'),
            status=request.POST.get('status')
        )
        return redirect('task_list')

    return render(request, 'tasks/task_form.html')


def task_update(request, id):
    if not request.user.is_authenticated:
        return redirect("login")

    task = get_object_or_404(Task, id=id, user=request.user)

    if request.method == 'POST':
        task.title = request.POST.get('title')
        task.status = request.POST.get('status')
        task.save()
        return redirect('task_list')

    return render(request, 'tasks/task_form.html', {'task': task})


def task_delete(request, id):
    if not request.user.is_authenticated:
        return redirect("login")

    task = get_object_or_404(Task, id=id, user=request.user)

    if request.method == 'POST':
        task.delete()
        return redirect('task_list')

    return render(request, 'tasks/task_confirm_delete.html', {'task': task})
