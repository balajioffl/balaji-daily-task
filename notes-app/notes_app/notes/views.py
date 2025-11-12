from django.shortcuts import render, get_object_or_404, redirect
from .models import Note

# Create your views here.

def note_list(request):
    notes = Note.objects.all()
    return render(request,'notes/note_list.html',{'notes': notes})

def note_create(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        notes = request.POST.get('notes')
        author = request.POST.get('author')
        Note.objects.create(title=title, notes=notes, author=author)
        return redirect('note_list')
    return render(request, 'notes/note_form.html')

def note_update(request,pk):
    note = get_object_or_404(Note,pk=pk)
    if request.method == 'POST':
        note.title = request.POST.get('title')
        note.notes = request.POST.get('notes')
        note.author = request.POST.get('author')
        note.save()
        return redirect('note_list')
    return render(request, 'notes/note_form.html', {'note': note})

def note_delete(request,pk):
    note = get_object_or_404(Note, pk=pk)
    if request.method == 'POST':
        note.delete()
        return redirect('note_list')
    return render(request, 'notes/note_delete_conform.html', {'note': note})


        





