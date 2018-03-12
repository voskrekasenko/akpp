class LinkCtrl {
  /* @ngInject */
  constructor($window, carsResource, gearboxResource, tableLinks, Filter) {
    this._carsResource = carsResource;
    this._gearboxResource = gearboxResource;
    this._tableLinks = tableLinks;
    this.filter = new Filter('links');
    this.dataLink = {};
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
    this.dataLink.gearboxModel = model.id;
    this.filter.setParam('gearboxModel', model.id);
    this._tableLinks.query(this.filter.filters.links).$promise.then((res) => {
      this.links = res;
      // console.log(res);
    });
  }
  addAutoYearToInput(year, modelId) {
    this.dataLink.carModification = year.id;
    this.dataLink.carModel = modelId;
    this.filter.setParam('carModification', year.id);
    this._tableLinks.query(this.filter.filters.links).$promise.then((res) => {
      this.links = res;
      // console.log(res);
    });
  }

  createLink(data) {
    console.log(data);
    this._tableLinks.save(data).$promise.then((res) => {
      console.log(res);
    });
  }

  resetFilters() {
    this.filter.resetParams();
    this.links = {};
  }
}

export default LinkCtrl;
