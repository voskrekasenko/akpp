import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import LinkCtrl from './admin/controllers/link.controller';
import GearboxCtrl from './admin/controllers/gearbox.controller';
import carsResource from './admin/services/cars.resource';
import gearboxResource from './admin/services/gearbox.resource';
import tableLinks from './admin/services/table.links.resource';
import filterService from './admin/services/filter';
import interceptorService from './admin/services/interceptor.service';
import './admin/styles/main.sass';

angular.module('app', [uiRouter, ngResource])
  .controller('LinkCtrl', LinkCtrl)
  .controller('GearboxCtrl', GearboxCtrl)
  .factory('carsResource', carsResource)
  .factory('gearboxResource', gearboxResource)
  .factory('tableLinks', tableLinks)
  .factory('Filter', filterService)
  .factory('Interceptor', interceptorService)
  .config(function ($stateProvider, $httpProvider) {
    $httpProvider.interceptors.push('Interceptor');
    var managementKppState = {
      name: 'management-kpp',
      url: '/management-kpp',
      controller: 'GearboxCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'admin/templates/management-gearboxes.html',
    }

    var managementAutoState = {
      name: 'management-auto',
      url: '/management-auto',
      template: '<h3>management of auto page!</h3>',
    }

    var managementLinksState = {
      name: 'management-links',
      url: '/management-links',
      controller: 'LinkCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'admin/templates/management-links.html',
    }

    $stateProvider.state(managementKppState);
    $stateProvider.state(managementAutoState);
    $stateProvider.state(managementLinksState);
  });
