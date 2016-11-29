var miAp = angular.module('miAp', ['ngRoute']);//dependencias(modulo del cdn)

miAp.config(function($routeProvider) { // se ejecuta antes de cargar la aplicacion
    $routeProvider
        .when('/', {
            templateUrl: 'public/vistas/inicio.html'
        })
        .when('/lista-productos', {
            controller: 'ListaProductosController',
            templateUrl: 'public/vistas/lista-productos.html'
        })
        .when('/editar-producto/:id', {
            controller: 'EditarProductoController',
            templateUrl: 'public/vistas/editar-producto.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
