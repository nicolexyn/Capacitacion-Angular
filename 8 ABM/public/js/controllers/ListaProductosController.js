miAp.controller('ListaProductosController', function($scope, ProductosService, $location) {

    $scope.productos = [];

    $scope.agregarProducto = function() {
        $location.path("/editar-producto/new");
    };

    $scope.editarProducto = function(producto) {
         $location.path("/editar-producto/" + producto._id);
    };

    $scope.eliminarProducto = function(producto) {
        ProductosService.removeProducto(producto._id)
            .then(loadData);
    };

    function loadData() {
        ProductosService.getProductos()
            .then(
                function(productos) {
                    console.log('productos', productos.products);
                    $scope.productos = productos.products;
                }
            );
    }

    loadData();

})
