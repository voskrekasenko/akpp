class LinkCtrl {
  /* @ngInject */
  constructor($window, carsResource, gearboxResource, tableLinks, Filter) {
    this._carsResource = carsResource;
    this._gearboxResource = gearboxResource;
    this._tableLinks = tableLinks;
    this.filter = new Filter('links');
    this.fullLink = {};
    this.fullLink.sendData = {};
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
    this.fullLink.gearboxModel = model.name;
    this.fullLink.sendData.gearboxModel = model.id;
    this.filter.setParam('gearboxModel', model.id);
    this.queryLinks();
  }
  addAutoYearToInput(year, modelId) {
    this.fullLink.carModification = year.name;
    this.fullLink.sendData.carModification = year.id;
    this.fullLink.sendData.carModel = modelId;
    this.filter.setParam('carModification', year.id);
    this.queryLinks();
  }
  queryLinks() {
    this._tableLinks.query(this.filter.filters.links).$promise.then((res) => {
      this.links = res;
    });
  }
  createLink(data) {
    this._tableLinks.save(data).$promise.then((res) => {
      this.queryLinks();
      this.resetFullLink();
    });
  }
  updateLink(data) {
    this._tableLinks.update({ id: data.id }, data.sendData).$promise.then((res) => {
      this.resetFullLink();
      this.queryLinks();
    });
  }
  removeLink(id) {
    this._tableLinks.remove({ id }).$promise.then((res) => {
      this.resetFullLink();
      this.queryLinks();
    });
  }
  getLink(data) {
    this.fullLink.id = data.id;
    this._tableLinks.get({ id: data.id }).$promise.then((res) => {
      this.fullLink.sendData.gearboxModel = res.gearboxModel.id;
      this.fullLink.sendData.carModification = res.carModification.id;
      this.fullLink.sendData.carModel = res.carModel.id;
      this.fullLink.sendData.driveUnit = res.driveUnit;
      this.fullLink.sendData.engine = res.engine;
    });
  }
  resetFilters() {
    this.filter.resetParams();
    this.links = {};
    this.resetFullLink();
  }
  resetFullLink() {
    this.fullLink = {};
    this.fullLink.sendData = {};
  }
}

export default LinkCtrl;
