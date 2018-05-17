(function () {
    'use strict';

    angular
        .module('webSocketAngularJsApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
