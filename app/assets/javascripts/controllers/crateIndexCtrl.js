app.controller("crateIndexCtrl", ["$scope", "$http", "crateResource", function($scope, $http, crateResource) {
  $scope.crates = gon.crates;
  $scope.showNewCrateModal = function() {
    $('.new-crate-modal').modal('show')
  };

  $scope.formTitleInput = "";
  $scope.newCrateSubmit = function() {
    data = {
      title: $scope.formTitleInput
    };
    crateResource.create({}, data, function(response) {
        $scope.crates = response;
        $('.new-crate-modal').modal('hide');
        $scope.formTitleInput = "";
    });
  };

  $scope.deleteCrate = function(id) {
    crateResource.destroy({id: id}, {}, function(response) {
      $scope.crates = response;
    })
  }
}]);