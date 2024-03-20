from menu.models import Category, ingredients


from rest_framework.response import Response
from rest_framework.views import APIView

class CategoryingredientsView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        ingredients = ingredients.objects.all()
        # Serialize the data if needed
        category_data = [{'id': c.id, 'name': c.name} for c in categories]
        ingredients_data = [{'id': i.id, 'name': i.name} for i in ingredients]
        return Response({'categories': category_data, 'ingredients': ingredients_data})