app.controller("cratesShowCtrl", ["$scope", "$http", "crateResource", function($scope, $http, crateResource) {
  filepicker.setKey(gon.filepicker_api_key);
  $scope.filepickerURL = "";
  $scope.uploads = gon.uploads;
  $scope.crate = gon.crate;

  $scope.updateCrate = function(newTitle) {
    crateResource.update({id: $scope.crate.id }, {title: newTitle}, function(response) {
      $scope.crate = response;
      return true
    });
  };

  $scope.deleteUpload = function(upload_id) {
    $http.delete("/crates/" + $scope.crate.id + "/delete_upload/" + upload_id +".json", {})
      .success(function(response) {
        $scope.uploads = response;
      })
      .error(function(response) {
        console.log("Error for upload file ", response)
      });
  };

  $scope.sendBlob = function() {
    data = {
      url: event.fpfile.url,
      filename: event.fpfile.filename,
      mimetype: event.fpfile.mimetype,
      size: event.fpfile.size,
      isWriteable: event.fpfile.isWriteable
    };

    $http.post("/crates/" + $scope.crate.id + "/upload_file.json", data)
      .success(function(response) {
        $scope.uploads = response;
      })
      .error(function(response) {
        console.log("Error for upload file ", response)
      });
  };

  $scope.showPasswordEditModalStatus = false;

  $scope.showPasswordEditModal = function() {
    $scope.showPasswordEditModalStatus = true;
    $scope.bPopup = $('.passwordEditModal').bPopup({
      speed: 650,
      transition: 'slideIn',
      transitionClose: 'slideBack'
    });
  };

  $scope.passwordUpdateSubmit = function() {
    data = {
      password: $scope.crate.password
    };
    crateResource.update({id: $scope.crate.id}, data, function(response) {
      $scope.crate = response;
    });
    $scope.bPopup.close();
  };

  $scope.showTitleEditModalStatus = false;

  $scope.showTitleEditModal = function() {
    $scope.showTitleEditModalStatus = true;
    $scope.bPopup = $('.titleEditModal').bPopup({
      speed: 650,
      transition: 'slideIn',
      transitionClose: 'slideBack'
    });
  };

  $scope.titleUpdateSubmit = function() {
    data = {
      title: $scope.crate.title
    };
    crateResource.update({id: $scope.crate.id}, data, function(response) {
      $scope.crate = response;
    });
    $scope.bPopup.close();
  };
}]);