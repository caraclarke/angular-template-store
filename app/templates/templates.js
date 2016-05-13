angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    })
    .when('/templates/:templateId', {
      templateUrl: 'templates/template-details.html',
			controller: 'TemplateDetailsCtrl'
    })
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('json/templates.json').success(function(res) {
    $scope.templates = res;
  });
}])

.controller('TemplateDetailsCtrl', ['$scope', '$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
  var templateId = $routeParams.templateId;
  $http.get('json/templates.json').success(function(res) {
    $scope.template = $filter('filter')(res, function(r) {
      return r.id == templateId;
    })[0];

    $scope.mainImage = $scope.template.images[0].name;
	});

	$scope.setImage = function(image){
		$scope.mainImage = image.name;
	}
}]);