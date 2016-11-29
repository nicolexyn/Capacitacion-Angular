var miAp = angular.module('miAp', ['ngRoute']);//dependencias(modulo del cdn)

miAp.config(function($routeProvider) { // se ejecuta antes de cargar la aplicacion
    $routeProvider
        .when('/', {
            templateUrl: 'vistas/inicio.html'
        })
        .when('/tareas', {
            controller: 'ControladorTareas',
            templateUrl: 'vistas/tareas.html'
        })
        .when('/empleados', {
            controller: 'ControladorEmpleados',
            templateUrl: 'vistas/empleados.html'
        })
        .otherwise({
            redirectTo: '/'
        });
})

miAp.factory('Empleados', function() {
    return [{
        nombre: 'Ana',
        paterno: 'Guzman',
        materno: 'Guzman',
        primerDia: new Date(),
        salario: 12000,
        telefono: '5587687687',
        bono: 1.456789
    }, {
        nombre: 'Adrian',
        paterno: 'Romero',
        materno: 'Paez',
        primerDia: new Date(),
        salario: 12000,
        telefono: '5512345678',
        bono: 9.654321
    }, {
        nombre: 'Rodolfo',
        paterno: 'Solares',
        materno: 'Madero',
        primerDia: new Date(),
        salario: 14000,
        telefono: '5587654321',
        bono: 7.333333
    }, {
        nombre: 'Manuel',
        paterno: 'Perez',
        materno: 'Solin',
        primerDia: new Date(),
        salario: 11000,
        telefono: '5518273645',
        bono: 5.272727
    }, {
        nombre: 'Dana',
        paterno: 'Roman',
        materno: 'Herrera',
        primerDia: new Date(),
        salario: 20000,
        telefono: '5581726354',
        bono: 1.444444
    }, {
        nombre: 'Alejandro',
        paterno: 'Mena',
        materno: 'Morales',
        primerDia: new Date(),
        salario: 5000,
        telefono: '5512312312',
        bono: 12.989898
    }];
})

miAp.factory('Tareas', function() {
    return [{ texto: 'Ser Super Heroico con AngularJS', hecho: true },
        { texto: 'Crear una ap con angular', hecho: false }
    ];
})

miAp.controller('ControladorTareas', function($scope, Tareas) {
    $scope.tareas = Tareas;

    $scope.agregarTarea = function() {
        $scope.tareas.push({ texto: $scope.textoNuevaTarea, hecho: false });
        $scope.textoNuevaTarea = '';
    };

    $scope.restantes = function() {
        var cuenta = 0;
        angular.forEach($scope.tareas, function(tarea) {
            cuenta += tarea.hecho ? 0 : 1;
        });
        return cuenta;
    };

    $scope.eliminar = function() {
        var tareasViejas = $scope.tareas;
        $scope.tareas = [];
        angular.forEach(tareasViejas, function(tarea) {
            if (!tarea.hecho) $scope.tareas.push(tarea);
        });
    };
})

miAp.controller('ControladorEmpleados', function($scope, Empleados) {
    $scope.empleados = Empleados;

    $scope.ordenarPor = function(orden) {
        $scope.ordenSeleccionado = orden;
    };
});
