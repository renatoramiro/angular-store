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
		
				this.submitProduct = function (store) {
					this.product = {name: this.name, price: this.price};
					if ($document[0].forms.productForm[2].value) {
						var key = $document[0].forms.productForm[2].value;
						$.each(store.products, function(i){
					    if(store.products[i].$$hashKey === key) {
				        store.products[i].name = $document[0].forms.productForm[0].value;
				        store.products[i].price = $document[0].forms.productForm[1].value;
				        return false;
					    }
						});
					} else {
						//Adicionar produto no array de produtos
						store.products.push(this.product);
					}
					//Limpar o formulário
					this.reset();
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
					$document[0].forms.productForm[2].value = '';
					$scope.productForm.$setPristine();
				};

				this.fillForm = function($event, product) {
					$event.preventDefault();
					this.name = product.name;
					this.price = product.price;
					$document[0].forms.productForm[0].value = product.name;
					$document[0].forms.productForm[1].value = product.price;
					$document[0].forms.productForm[2].value = product.$$hashKey;
				}
			}]);
})();