app.factory('crateResource', ["$resource", function($resource) {
  return $resource('/crates/:id.json', { id: '@id' },
    {
      'create':     { method: 'POST', isArray: true },
      'index':      { method: 'GET', isArray: true },
      'show':       { method: 'GET' },
      'update':     { method: 'PUT', isArray: true },
      'destroy':    { method: 'DELETE', isArray: true }
    });
}]);