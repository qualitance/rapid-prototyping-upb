/**
 * Created by oxybogdan on 02/11/15.
 */

angular.module('LoginModule')
  .controller('LoginController', ['$scope', 'OpenFB', '$rootScope', '$state', 'appSettings',
    function($scope, OpenFB, $rootScope, $state, appSettings) {
      $scope.init = function () {

      };

      $scope.login = function () {
        OpenFB.login(appSettings.loginPermissions).then(
          function () {
            OpenFB.get('/me', {fields: appSettings.userFields})
              .success(function (user) {
                console.log(user);
                $rootScope.user = user;
                $state.go("tab.profile");
              });
          },
          function () {
            console.log("LOGIN ERROR");
          }
        )
      };

      $scope.init();
    }
  ]);
