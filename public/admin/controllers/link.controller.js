class LinkCtrl {
  /* @ngInject */
  constructor($window, linkResource) {
    this._linkResource = linkResource;

    this.getCars();
  }

  getCars() {
    return this._linkResource.query().$promise.then(res => console.log('res', res));
  }
}

export default LinkCtrl;