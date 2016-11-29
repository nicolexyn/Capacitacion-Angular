miAp.controller('EditarProductoController', function($scope, Empleados) {
    $scope.empleados = Empleados;

    $scope.ordenarPor = function(orden) {
        $scope.ordenSeleccionado = orden;
    };
});