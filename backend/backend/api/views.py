from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import generics
from .serializer import UserSerializer, NoteSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note
from api.models import employers
from api.models import jobs

# Create your views here.
class NoteListCreate(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]


    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else:
            print(serializer.errors)

#def get_username(request):
 #   if request.user.is_authenticated:
  #      username = request.user.username
   # else:
     #   username = None
    #return JsonResponse({'username': username})


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author=user)




class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

def employers_list(request):
    employer = employers.objects.all()
    employer_data = [{'id': Employer.id, 'name': Employer.name, 'locations': Employer.locations, 'software': Employer.software, 'hardware': Employer.hardware, 'business': Employer.business, 'research': Employer.research, 'engineering': Employer.engineering, 'sales': Employer.sales, 'description': Employer.description} for Employer in employer]
    return JsonResponse(employer_data)

def job_list(request):
    job = jobs.objects.all()
    job_data = [{'id': Job.id, 'name': Job.name, 'locations': Job.locations, 'software': Job.software, 'hardware': Job.hardware, 'business': Job.business, 'research': Job.research, 'engineering': Job.engineering, 'sales': Job.sales, 'description': Job.description} for Job in job]
    return JsonResponse(job_data)
