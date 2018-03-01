class LinkCtrl {
  /* @ngInject */
  constructor($window, carsResource, gearboxResource) {
    this._carsResource = carsResource;
    this._gearboxResource = gearboxResource;
    this.addGearboxToInput = function (type) {
      console.log('sey hi');
      this.typeKpp = type;
    };
    this.getCars();
    this.getGearboxes();
  }

  getCars() {
    this._carsResource.query().$promise.then((res) => {
      this.cars = res;
      console.log(res);
    });
  }
  getGearboxes() {
    this._gearboxResource.query().$promise.then((res) => {
      this.gearbox = res;
      console.log(res);
    });
  }
}

export default LinkCtrl;
