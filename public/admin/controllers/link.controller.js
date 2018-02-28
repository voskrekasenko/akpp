class LinkCtrl {
  /* @ngInject */
  constructor($window, linkResource) {
    this._linkResource = linkResource;
    this.getCars();
  }

  getCars() {
    this._linkResource.query().$promise.then((res) => {
      this.cars = res;
      console.log(res);
    });
  }
}

export default LinkCtrl;
