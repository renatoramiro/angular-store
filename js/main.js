(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		// var store = this;
		var gems = [
			{name: 'Product 1', price: 10.10},
			{name: 'Product 2', price: 10.10},
			{name: 'Product 3', price: 10.10},
			{name: 'Product 4', price: 10.10}
		]

		this.products = gems;
	});

	app.controller('ProductsController', ['$scope', function($scope){
			this.product = {};
	
			this.addProduct = function (store) {
				this.product = {name: this.name, price: this.price};
				store.products.push(this.product);
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
		}]);
})();