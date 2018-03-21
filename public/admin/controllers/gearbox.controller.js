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

  editGearboxType(gearbox) {
    this.gearboxName = gearbox.name;
    this._gearboxResource.get({ id: gearbox.id }).$promise.then((res) => {
      this.gearboxType = res;
      console.log(res);
    });
  }
}

export default GearboxCtrl;
