class GearboxCtrl {
  /* @ngInject */
  constructor($window, gearboxResource, gearboxManufacturer, Filter) {
    this._gearboxResource = gearboxResource;
    this._gearboxManufacturer = gearboxManufacturer;
    this.filter = new Filter('gearboxes');
    this.kppTypes = [{ id: '1', name: 'АКПП' }, { id: '2', name: 'МКПП' }, { id: '3', name: 'DSG' }, { id: '4', name: 'CVT' }, { id: '5', name: 'Роботы' }];
    this.categories = { selected: 1, values: [{ id: 1, name: 'Производитель' }, { id: 2, name: 'Модель' }] };
    this.getGearboxes();
    this.reset();
  }

  getGearboxes() {
    this._gearboxResource.query(this.filter.data).$promise.then((res) => {
      this.gearbox = res;
    });
  }

  createGearboxManufacturer(gearbox, types) {
    this._gearboxManufacturer.save({ name: gearbox.name, gearboxTypes: types }).$promise.then(() => {
      this.reset();
      this.getGearboxes();
    });
  }

  editGearboxManufacturer(gearbox) {
    this.reset();
    this.editingManufacturerForm();
    this._gearboxManufacturer.get({ id: gearbox.id }).$promise.then((res) => {
      this.gearboxManufacturer = res;
      this.gearboxManufacturer.gearboxTypes.forEach((elem) => {
        this.gearboxTypes.push(elem.id.toString());
      });
    });
  }
  
  editGearboxModel(model) {
    this.reset();
    this.editingModelForm();
    // to be continue..
  }

  additionElement(type) {
    this.reset();
    switch (type) {
    case 1:
      this.creatingManufacturerForm();
      break;
    case 2:
      this.creatingModelForm();
      break;
    default:
      alert('Значение обязательно');
    }
  }

  updateGearboxManufacturer(gearbox, types) {
    this._gearboxManufacturer.update({ id: gearbox.id }, { name: gearbox.name, gearboxTypes: types }).$promise.then(() => {
      this.reset();
      this.getGearboxes();
    });
  }

  deleteGearboxManufacturer(gearbox) {
    this._gearboxManufacturer.remove({ id: gearbox.id }).$promise.then(() => {
      this.reset();
      this.getGearboxes();
    });
  }

  cancel() {
    this.reset();
  }

  reset() {
    this.gearboxManufacturer = {};
    this.gearboxTypes = [];
    this.editingManufacturer = false;
    this.editingModel = false;
    this.creatingManufacturer = false;
    this.creatingModel = false;
  }

  // forms for visible
  creatingManufacturerForm() {
    this.creatingManufacturer = true;
    this.formEventText = 'Добавление производителя';
  }

  editingManufacturerForm() {
    this.editingManufacturer = true;
    this.formEventText = 'Редактирование производителя';
  }

  creatingModelForm() {
    this.creatingModel = true;
    this.formEventText = 'Добавление модели КПП';
  }

  editingModelForm() {
    this.editingModel = true;
    this.formEventText = 'Редактирование модели КПП';
  }
}

export default GearboxCtrl;
