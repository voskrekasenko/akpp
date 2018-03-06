class LinkCtrl {
  /* @ngInject */
  constructor($window, carsResource, gearboxResource, tableLinks, Filter) {
    this._carsResource = carsResource;
    this._gearboxResource = gearboxResource;
    this._tableLinks = tableLinks;
    this.filter = new Filter('links');
    this.filter.setParam('limit', 23);

    console.log('f', this.filter.filters);
    this.getCars();
    this.getGearboxes();
  }

  getCars() {
    this._carsResource.query().$promise.then((res) => {
      this.cars = res;
    });
  }
  getGearboxes() {
    this._gearboxResource.query(this.filter.data).$promise.then((res) => {
      this.gearbox = res;
    });
  }

  addGearboxToInput(model) {
    this.typeKpp = model.name;
    this._tableLinks.get({ id: model.id }).$promise.then((res) => {
      this.links = res;
      console.log(res);
    });
  }
  addAutoYearToInput(year) {
    this.autoYear = year;
  }
}

export default LinkCtrl;
