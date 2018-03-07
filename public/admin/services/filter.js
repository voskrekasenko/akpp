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
      this.filters = JSON.parse($window.localStorage.getItem('filters')) || {};
    }

    setFiltersFromLocalStorage() {
      $window.localStorage.setItem('filters', JSON.stringify(this.filters));
    }

    addToFilters(key, value) {
      this.filters[key] = value;
      this.setFiltersFromLocalStorage();
    }

    setParam(key, value) {
      this.data[key] = value;
    }

    resetParams() {
      this.data = {};
    }
  };
}
