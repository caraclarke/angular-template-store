angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    })
    .when('/templates/:templateId', {
      templateUrl: 'templates/template_details.html',
      controller: 'TemplateDetCtrl'
    })
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/templates.json').success(function(res) {
    $scope.templates = res;
  });
}])

.controller('TemplateDetCtrl', ['$scope', '$http', function($scope, $http) {

}]);