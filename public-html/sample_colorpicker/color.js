var app = angular.module('app', []);

app.directive('imageCheckbox', function() {
  return {
    restrict: 'A',
    link: function(scope, el, attr) {
      scope.isSelected = el.find('input').val() == 'false';
      scope.bgCol = '#ccc ! important';
      el.on('click', function() {
        scope.isSelected = !scope.isSelected;
        if (scope.isSelected) scope.bgCol = '#ccc!important';
        else scope.bgCol = '#000';
        scope.$apply();
      });
    }
  }
})
