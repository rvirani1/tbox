var app = angular.module("tboxApp", ['ngResource', 'ngClipboard']);

app.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath("zeroclipboard/zeroclipboard.swf");
}]);