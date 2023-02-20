from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer

# Create your views here.

@api_view(["GET"])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/product/<str:id>/',
        '/api/product-add/',
        '/api/product-update/<str:id>/',
        '/api/product-archive/<str:id>/',
        '/api/product-delete/<str:id>/',
    ]
    return Response(routes)

@api_view(["GET"])
def getProducts(request):
    products = Product.objects.filter(archived=False)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(["POST"])
def addProduct(request):
    serializer = ProductSerializer(data=request.POST)
    if serializer.is_valid():
        serializer.save()
    else:
        print("error")
    return Response(serializer.data)

@api_view(["POST"])
def updateProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def archiveProduct(request, id):
    product = Product.objects.get(id=id)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        Product.objects.filter(id=id).update(archived=True)
    return Response("archived")

@api_view(["DELETE"])
def deleteProduct(request, id):
    product = Product.objects.get(id=id)
    product.delete()
    return Response("item deleted")