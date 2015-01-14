(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		var store = this;
		var gems = [
			{name: 'Product 1', price: 10.10},
			{name: 'Product 2', price: 10.10},
			{name: 'Product 3', price: 10.10},
			{name: 'Product 4', price: 10.10}
		]

		this.products = gems;
	});
	app.controller('ProductsController', ['$scope', '$document', function($scope, $document){
				this.product = {};
		
				this.addProduct = function (store) {
					this.product = {name: this.name, price: this.price};
					//Adicionar produto no array de produtos
					store.products.push(this.product);
					//Limpar o formulário
					this.name = '';
					this.price = '';
					$scope.productForm.$setPristine();
					console.log($scope);
				};
	
				this.removeProduct = function($event, store, product){
					$event.preventDefault();
					$.each(store.products, function(i){
				    if(store.products[i].$$hashKey === product.$$hashKey) {
			        store.products.splice(i,1);
			        return false;
				    }
					});
				};

				this.reset = function () {
					this.name = '';
					this.price = '';
					$scope.productForm.$setPristine();
					$document[0].forms.productForm[0].value = '';
					$document[0].forms.productForm[1].value = '';
				};

				this.fillForm = function($event, store, product) {
					$event.preventDefault();
					$document[0].forms.productForm[0].value = product.name;
					$document[0].forms.productForm[1].value = product.price;
					$document[0].forms.productForm[2].value = product.$$hashKey;
				}
			}]);
})();