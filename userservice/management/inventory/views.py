from django.shortcuts import render

from rest_framework import generics
from rest_framework import mixins
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.permissions import IsAdminUser 

from.serializers import CollegeSerializer,CollegeCourseSerializer, CollegeImageSerializer
from.models import College,CollegeCourse,CollegeImage
from.permissions import IsAdminOrReadOnly
# Create your views here.

class CollegeList(generics.ListCreateAPIView):
    queryset= College.objects.all()
    serializer_class = CollegeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsAdminOrReadOnly,IsAdminUser]

    def get_queryset(self):
        query = self.request.query_params.get('keyword')
        print("query", query)
        if query != 'undefined':
            colleges = College.objects.filter(name__icontains=query)
        else:
            colleges = College.objects.all()
        return colleges

    # def get(self, request, format=None):
        
    #     snippets = Snippet.objects.all()
    #     # serializer = SnippetSerializer(snippets, many=True)
    #     return Response(serializer.data)
    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CollegeSerializer(queryset, many=True)
        return Response(serializer.data)


class CollegeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= College.objects.all()
    serializer_class = CollegeSerializer



class CourseList(generics.ListCreateAPIView):
    queryset= CollegeCourse.objects.all()
    serializer_class = CollegeCourseSerializer


class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= CollegeCourse.objects.all()
    serializer_class = CollegeCourseSerializer


class CollegeImageList(generics.ListCreateAPIView):
    queryset= CollegeImage.objects.all()
    serializer_class = CollegeImageSerializer


class CollegeImageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= CollegeImage.objects.all()
    serializer_class = CollegeImageSerializer

class GetCollegeImageList(APIView):
    # queryset = College.objects.all()
    # serializer_class= CollegeImage

    def get_object(self, pk):
        try:
            return College.objects.get(pk=pk)
        except Snippet.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        college = self.get_object(pk)
        images = college.collegeimage_set.all()
        serializer = CollegeImageSerializer(images, many=True)
        return Response(serializer.data)

class GetCollegeCourseList(APIView):

    def get_object(self, pk):
        try:
            return College.objects.get(pk=pk)

        except Snippet.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        college = self.get_object(pk)
        try:
            course = college.course.all()
            serializer = CollegeCourseSerializer(course, many=True)
        except:
            pass
        return Response(serializer.data)