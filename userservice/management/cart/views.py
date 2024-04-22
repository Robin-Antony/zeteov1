# imports form djnago.
from django.shortcuts import render
import razorpay

# imports from custom files
from. serializers import CartSerializer,OrderSerializer,OrderCompleteSerializer
from. models import Cart

# imports form django rest frameworks.
from rest_framework.response import Response
# from rest_framework import Request
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser
from .permissions import isOwnerOrReadOnly


class CartList(generics.ListCreateAPIView):
# class CartList(viewsets.ModelViewSet):

    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [isOwnerOrReadOnly]
    
    def get_queryset(self):
        user = self.request.user
        print(user)
        return Cart.objects.filter(user=user)
    
    def perform_create(self,serializer):
        serializer.save(user=self.request.user)


    


class CartDetailsUser(mixins.RetrieveModelMixin, mixins.DestroyModelMixin,generics.GenericAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
        
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CartDetailsAdmin(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CreateOrderView(mixins.RetrieveModelMixin,mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = Cart.objects.all()
    serializer_class = OrderSerializer

    def get_total_amound(self,pk):
        cart = Cart.objects.get(id=pk)
        return cart.course.addmission_fee

    def create_razorpay_order(self,amount):
        int_amount = int(amount)
        client = razorpay.Client(auth=("rzp_test_SgJj9vvUNWJn8g", "K8i7Hx0f2HYpZAAgfZulTEkU"))

        DATA = {
        "amount": int_amount,
        "currency": "INR",
        "receipt": "receipt#1",
        "notes": {
            "key1": "value3",
            "key2": "value2"
        }
        }
        return client.order.create(data=DATA)

    

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    
    # def perform_update(self, serializer):
    #     serializer.save(completed=True)

    def put(self, request, pk, *args, **kwargs):
        total_price = self.get_total_amound(pk)
        razorpay_response = self.create_razorpay_order(total_price)
        return Response(razorpay_response, status=status.HTTP_201_CREATED)
        # return self.update(request, *args, **kwargs)

class CompleteOrederView(APIView):
    def get_object(self,pk):
        try:
            return Cart.objects.get(id=pk)
        except Cart.DoesNotExist:
            raise Http404

    def perform_update(self, serializer):
        serializer.save(completed=True,payed=True,canceled=True,refunded=True)

    def verifyPayment(self,razorpay_order_id, razorpay_payment_id, razorpay_signature):
        
        client = razorpay.Client(auth=("rzp_test_SgJj9vvUNWJn8g", "K8i7Hx0f2HYpZAAgfZulTEkU"))
        try:
            return client.utility.verify_payment_signature({
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id':razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            })
        except Exception as e:
            raise ValidationError.e(
                {
                    'status_code':status.HTTP_400_BAD_REQUEST,
                    'message': e
                }
            )

    
    def put(self, request, pk):
        Cart = self.get_object(pk)
        serializer = OrderCompleteSerializer(Cart, data=request.data)
        if serializer.is_valid():
            self.verifyPayment(
                razorpay_order_id =serializer.validated_data.get('razorpay_order_id'),
                razorpay_payment_id =serializer.validated_data.get('razorpay_payment_id'),
                razorpay_signature =serializer.validated_data.get('razorpay_signature')
            )
            serializer.save()
            self.perform_update(serializer)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        