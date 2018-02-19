import angular from 'angular'
import uiRouter from 'angular-ui-router'
import {theComponent} from './superAwesomeComponent/theComponent.js'

/**
 * @class Has fields addValue and fancyValue. Manages state between superAwesomeComponents
 */
class IndexController {
  constructor () {
    this.addValue = 3
    this.fancyValue = 1337
  }
}


angular.module('theWholeApp', ['ui.router'])
.component('superAwesomeComponent', theComponent)
.controller('IndexController', IndexController)
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
    templateUrl: 'admin/templates/management-links.html'
  }

  $stateProvider.state(managementKppState);
  $stateProvider.state(managementAutoState);
  $stateProvider.state(managementLinksState);
});