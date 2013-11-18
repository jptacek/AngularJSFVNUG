'use strict';

chemistryApp.controller('chemistryController7',
    function chemistryController3($scope, $log, chemistryData, chemistryDataP)
    {


        $scope.protons = function(element) {
            return element.atomicNumber;
        };
        $scope.electrons = function(element) {
            return element.atomicNumber;
        };
        $scope.neutrons = function(element) {
            //$log.info(element.atomicWeight);
            return Math.ceil(element.atomicWeight) -element.atomicNumber ;
        };

        $scope.filterSolids = function(element) {
            if (element.phase == 'Solid' && element.melting >500) {
                return element;
            }
        }

        //$scope.periodic = chemistryData.getChemistryData();

        chemistryDataP.getChemistryDataP().then(function(data) {
            $scope.periodic = data;
        });
    });
