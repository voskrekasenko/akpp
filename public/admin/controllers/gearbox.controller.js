class GearboxCtrl {
  /* @ngInject */
  constructor($window, gearboxResource, gearboxManufacturer, Filter) {
    this._gearboxResource = gearboxResource;
    this._gearboxManufacturer = gearboxManufacturer;
    this.filter = new Filter('gearboxes');
    this.kppTypes = [{ id: 1, name: 'АКПП' }, { id: 2, name: 'МКПП' }, { id: 3, name: 'DSG' }, { id: 4, name: 'CVT' }, { id: 5, name: 'Роботы' }];
    this.getGearboxes();
  }

  getGearboxes() {
    this._gearboxResource.query(this.filter.data).$promise.then((res) => {
      this.gearbox = res;
    });
  }

  editGearboxType(gearbox) {
    this.gearboxName = gearbox.name;
    this.gearboxTypes = [];
    this._gearboxManufacturer.get({ id: gearbox.id }).$promise.then((res) => {
      this.gearboxManufacturer = res;
      this.gearboxManufacturer.gearboxTypes.forEach((elem) => {
        console.log(elem);
        this.gearboxTypes.push(elem.id);
      });
      console.log(this.gearboxTypes);
    });
  }
  updateGearboxType(data) {
    this._gearboxResource.update({ id: data.id }, data.sendData).$promise.then((res) => {
      this.resetFullLink();
      this.queryLinks();
    });
  }
}

export default GearboxCtrl;
