from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Ingredient


class CategoryIngredientView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        ingredients = Ingredient.objects.all()
        # Serialize the data if needed
        category_data = [{'id': c.id, 'name': c.name} for c in categories]
        ingredient_data = [{'id': i.id, 'name': i.name} for i in ingredients]
        return Response({'categories': category_data, 'ingredients': ingredient_data})
