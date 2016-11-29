miAp.controller('EditarProductoController', function($scope, ProductosService, $routeParams, $location) {
    
	$scope.loadProducto = function(){
    	if ($routeParams.id === 'new') {
            $scope.producto = {};
        } else {
        	ProductosService.getProducto($routeParams.id)
            .then(
                function(producto) {
                    $scope.producto = producto.product;
                }
            );
        }
    };

    $scope.loadProducto();

    $scope.guardar = function() {
        if ($routeParams.id === 'new') {
            ProductosService.addProducto($scope.producto)
                .then(
                    $location.path("/lista-productos"),
                    function(errorMessage) {
                        console.warn(errorMessage);
                    }
                );
            $scope.producto = {};
        } else {
        	console.log('$scope.producto', $scope.producto);
        	var id_aux = $scope.producto._id;
        	delete $scope.producto._id;
        	ProductosService.updateProducto($scope.producto, id_aux)
                .then(
                    $location.path("/lista-productos"),
                    function(errorMessage) {
                        console.warn(errorMessage);
                    }
                );
            $scope.producto = {};
        }
    };

    $scope.volver = function(){
    	$location.path("/lista-productos");
    };
});
