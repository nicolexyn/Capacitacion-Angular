angular.module('directivaSimple', [])
    .controller('Controlador', function($scope) {
        $scope.texto1 = { titulo: 'Directiva', subtitulo: 'AngularJS' };
        $scope.texto2 = { titulo: 'Otro Objeto', subtitulo: 'como parametro' };
    })
    .directive('miEncabezado', function() {
        return {
            restrict: 'E',
            scope: {
                textoVariable: '=texto'
            },
            templateUrl: 'mi-encabezado.html'
        }
    })
