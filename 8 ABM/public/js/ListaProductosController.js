miAp.controller('ListaProductosController', function($scope) {
    $scope.productos = [];

    $scope.agregarProducto = function() {
        $scope.productos.push({ texto: $scope.textoNuevaTarea, hecho: false });
        $scope.textoNuevaTarea = '';
    };

    $scope.editarProducto = function() {
        var cuenta = 0;
        angular.forEach($scope.productos, function(producto) {
            cuenta += producto.hecho ? 0 : 1;
        });
        return cuenta;
    };

    $scope.eliminarProducto = function() {
        var productosViejas = $scope.productos;
        $scope.productos = [];
        angular.forEach(productosViejas, function(producto) {
            if (!producto.hecho) $scope.productos.push(producto);
        });
    };
})