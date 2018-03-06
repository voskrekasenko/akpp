export default function filter($window) {
  return class Filter {
    constructor(filterName) {
      this.getFiltersFromLocalStorage();
      this.getData(filterName);
    }

    getData(key) {
      this.data = this.filters[key] || {};
    }

    getFiltersFromLocalStorage() {
      this.filters = $window.localStorage.getItem('filters') || {};
    }

    setParam(key, value) {
      this.data[key] = value;
    }

    resetParams() {
      this.data = {};
    }
  };
}
