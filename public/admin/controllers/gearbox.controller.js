class GearboxCtrl {
  /* @ngInject */
  constructor($window, gearboxResource, gearboxManufacturer, Filter) {
    this._gearboxResource = gearboxResource;
    this._gearboxManufacturer = gearboxManufacturer;
    this.filter = new Filter('gearboxes');
    this.kppTypes = [{ id: 1, name: 'АКПП' }, { id: 2, name: 'МКПП' }, { id: 3, name: 'DSG' }, { id: 4, name: 'CVT' }, { id: 5, name: 'Роботы' }];
    this.gearboxManufacturer = {};
    this.getGearboxes();
  }

  getGearboxes() {
    this._gearboxResource.query(this.filter.data).$promise.then((res) => {
      this.gearbox = res;
    });
  }

  editGearboxType(gearbox) {
    this.gearboxTypes = [];
    this._gearboxManufacturer.get({ id: gearbox.id }).$promise.then((res) => {
      this.gearboxManufacturer = res;
      this.gearboxManufacturer.gearboxTypes.forEach((elem) => {
        this.gearboxTypes.push(elem.id);
      });
    });
  }
  updateGearboxType(gearbox, types) {
    types.forEach((el, index) => {
      types[index] = el.toString();
    });
    this._gearboxManufacturer.update({ id: gearbox.id }, { name: gearbox.name, gearboxTypes: types }).$promise.then(() => {});
  }
  deleteGearboxType(gearbox) {
    this._gearboxManufacturer.remove({ id: gearbox.id }).$promise.then(() => {
      this.resetGearbox();
      this.getGearboxes();
    });
  }
  cancel() {
    this.resetGearbox();
  }
  resetGearbox() {
    this.gearboxManufacturer = {};
    this.gearboxTypes = [];
  }
  checkLength(obj) {
    return Object.keys(obj).length;
  }
}

export default GearboxCtrl;
