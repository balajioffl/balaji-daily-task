from django.shortcuts import render, redirect, get_object_or_404
from . models import Task

# Create your views here.

def task_list(request):
    tasks = Task.objects.all()
    return render(request,'tasks/task_list.html',{'tasks' : tasks})

def task_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        status = request.POST.get('status')
        Task.objects.create(title=title,status=status)
        return redirect('task_list')
    return render(request,'tasks/task_form.html')

def task_update(request,id):
    task = get_object_or_404(Task,id=id)
    if request.method == 'POST':
        task.title = request.POST.get('title')
        task.status = request.POST.get('status')
        task.save()
        return redirect('task_list')
    return render(request, 'tasks/task_form.html', {'task': task})

def task_delete(request,id):
    task = get_object_or_404(Task,id=id)
    if request.method == 'POST':
        task.delete()
        return redirect('task_list')
    return render(request, 'tasks/task_confirm_delete.html', {'task': task})

