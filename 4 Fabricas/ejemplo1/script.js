var miAp = angular.module('miAp', []);

miAp.factory('Dato', function() {
    return { mensaje: 'Saludos desde la Fabrica!' };
});

miAp.controller('ControladorUno', function($scope, Dato) {
    $scope.dato = Dato;
});

miAp.controller('ControladorDos', function($scope, Dato) {
    $scope.dato = Dato;
});
