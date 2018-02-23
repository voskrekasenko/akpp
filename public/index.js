import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import  LinkCtrl from './admin/controllers/link.controller';
import linkResource from './admin/services/link.factory';
import { theComponent } from './superAwesomeComponent/theComponent.js';
import './admin/styles/main.sass';

/**
 * @class Has fields addValue and fancyValue. Manages state between superAwesomeComponents
 */
class IndexController {
  constructor() {
    this.addValue = 3;
    this.fancyValue = 1337;
  }
}

angular.module('app', [uiRouter, ngResource])
  .component('superAwesomeComponent', theComponent)
  .controller('IndexController', IndexController)
  .controller('LinkCtrl', LinkCtrl)
  .factory('linkResource', linkResource)
  .config(function($stateProvider) {
  var managementKppState = {
    name: 'management-kpp',
    url: '/management-kpp',
    template: '<h3>management of kpp page!</h3>'
  }

  var managementAutoState = {
    name: 'management-auto',
    url: '/management-auto',
    template: '<h3>management of auto page!</h3>'
  }

  var managementLinksState = {
    name: 'management-links',
    url: '/management-links',
    controller: 'LinkCtrl',
    templateUrl: 'admin/templates/management-links.html'
  }

  $stateProvider.state(managementKppState);
  $stateProvider.state(managementAutoState);
  $stateProvider.state(managementLinksState);
  });
