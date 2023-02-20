from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("products", views.getProducts, name="products"),
    path("product/<str:id>", views.getProduct, name="product"),
    path("product-add", views.addProduct, name="addProduct"),
    path("product-update/<str:id>", views.updateProduct, name="updateProduct"),
    path("product-archive/<str:id>", views.archiveProduct, name="archiveProduct"),
    path("product-delete/<str:id>", views.deleteProduct, name="deleteProduct"),
]