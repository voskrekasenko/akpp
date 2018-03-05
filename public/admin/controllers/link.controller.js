class LinkCtrl {
  /* @ngInject */
  constructor($window, carsResource, gearboxResource, tableLinks) {
    this._carsResource = carsResource;
    this._gearboxResource = gearboxResource;
    this._tableLinks = tableLinks;
    this.getCars();
    this.getGearboxes();
    this.addGearboxToInput();
    this.addAutoYearToInput();
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
  addGearboxToInput(type, id) {
    this.typeKpp = type;
    this._tableLinks.get({ id }).$promise.then((res) => {
      this.links = res;
      console.log(res);
    });
  }
  addAutoYearToInput(year) {
    this.autoYear = year;
  }
}

export default LinkCtrl;
