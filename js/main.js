(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		var gems = [{name: 'Product 1', price: 10.10},
		{name: 'Product 2', price: 10.10},
		{name: 'Product 3', price: 10.10},
		{name: 'Product 4', price: 10.10}]

		this.products = gems;
	});
})();