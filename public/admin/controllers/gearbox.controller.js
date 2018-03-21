class GearboxCtrl {
  /* @ngInject */
  constructor($window, gearboxResource, Filter) {
    this._gearboxResource = gearboxResource;
    this.filter = new Filter('gearboxes');
    this.getGearboxes();
  }

  getGearboxes() {
    this._gearboxResource.query(this.filter.data).$promise.then((res) => {
      this.gearbox = res;
    });
  }
}

export default GearboxCtrl;
