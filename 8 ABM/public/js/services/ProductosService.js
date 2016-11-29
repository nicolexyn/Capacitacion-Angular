miAp.service(
    "ProductosService",
    function($http, $q) {
        // Return public API.
        return ({
            addProducto: addProducto,
            getProducto: getProducto,
            getProductos: getProductos,
            updateProducto: updateProducto,
            removeProducto: removeProducto
        });

        function addProducto(data) {
            var request = $http({
                method: "post",
                url: "api/product",
                params: {
                    action: "add"
                },
                data: {
                    product: data
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function getProducto(id) {
            var request = $http({
                method: "get",
                url: "api/product/" + id
            });
            return (request.then(handleSuccess, handleError));
        }

        function getProductos() {
            var request = $http({
                method: "get",
                url: "api/product",
                params: {
                    action: "get"
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function updateProducto(data, id) {
            var request = $http({
                method: "put",
                url: "api/product/" + id,
                data: {
                    product: data
                }
            });
            return (request.then(handleSuccess, handleError));
        }

        function removeProducto(id) {
            var request = $http({
                method: "delete",
                url: "api/product/" + id
            });
            return (request.then(handleSuccess, handleError));
        }

        function handleError(response) {

            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject("An unknown error occurred."));
            }

            return ($q.reject(response.data.message));
        }

        function handleSuccess(response) {
            return (response.data);
        }
    }
);
