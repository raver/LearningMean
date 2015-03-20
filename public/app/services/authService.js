angular.module('authService', [])
.factory('Auth', function ($http, $q, AuthToken) {
    var authFactory = {};

    // handle login
    
    // handle logout

    //  check if a user is logged  in
    
    // get the user info
    
    // return auth factory object
    return authFactory;


})
.factory('AuthToken', function ($window) {
    var authTokenFactory = {};

    // get the token
    
    
    // set the token or clear the token
    
    return AuthTokenFactory;


})
.factory('AuthInterceptor', function ($q, AuthToken) {
    var interceptorFactory = {};

    // attach the token to every request
    
    
    // redirect if a token doesn't authenticate 
    
    
    return interceptorFactory;


});
