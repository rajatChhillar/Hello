app.controller('MainController', ['$scope',function($scope) { 
  $scope.title = 'FIRST ANGULAR APP'; 
  $scope.promo='GO GO GO';
  $scope.checked=false;
  $scope.persons= 
  [{ 
    name: 'Gaurav Gera', 
    OracleID: 117401, 
    Designation: 'AL1'
  },
  { 
    name: 'ArpitJain', 
    OracleID: 117402, 
    Designation: 'AL2'
  },
  { 
    name: 'Ankur Poria', 
    OracleID: 117403, 
    Designation: 'AL3'
  },
  { 
    name: 'Rajat Chhillar', 
    OracleID: 117404, 
    Designation: 'AL4'
  },
  { 
    name: 'Angular JS', 
    OracleID: 117405, 
    Designation: 'AL5'
  }
]
$scope.add=function(index) { 
  
};
  $scope.remove=function(index) { 
  
};
}]);