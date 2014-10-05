app.controller("crateIndexCtrl", ["$scope", "$http", "crateResource", function($scope, $http, crateResource) {
  $scope.crates = gon.crates;
  $scope.showingModal = false;
  $scope.bPopup = {};
  $scope.showNewCrateModal = function() {
    $scope.showingModal = true;
    $scope.bPopup = $('.newCrateCreator').bPopup({
      easing: 'easeOutBack', //uses jQuery easing plugin
      speed: 450,
      transition: 'slideDown'
    });
  };

  $scope.formTitleInput = "";
  $scope.newCrateSubmit = function() {
    data = {
      title: $scope.formTitleInput
    };
    crateResource.create({}, data, function(response) {
        $scope.crates = response;
        $scope.formTitleInput = "";
    });
    $scope.bPopup.close();
  };

  $scope.deleteCrate = function(id) {
    crateResource.destroy({id: id}, {}, function(response) {
      $scope.crates = response;
    })
  };

  $scope.build_crate_url = function(code) {
    return window.location.origin + '/' + code
  };

  $scope.getTextToCopy = function() {
    return
  };
}]);