angular.module('mainCtrl', [])
.controller( 'mainController', function ($rootScope, $location, Auth) {
    var vm = this;
    //vm.loggedIn = Auth.isLoggedIn();
    vm.loggedIn = false;


    $rootScope.$on( '$routeChangeStart', function () {
        vm.loggedIn = Auth.isLoggedIn();
        
        Auth.getUser()
            .success ( function(data) {
                vm.user = data;
            });
        vm.loggedIn = false;
    });


    vm.doLogin = function () {
        Auth.login( vm.loginData.username, vm.loginData,password)
            .success( function(data) {
                $location.path('/users');
            });

        
    };

    vm.doLogout = function() {
        Auth.logout();
        vm.user= {};
        $location.path('/login');
    
    };
        
}); 
