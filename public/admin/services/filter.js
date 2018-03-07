export default function filter($window) {
  return class Filter {
    constructor(filterName) {
      this.filterName = filterName;
      this.getFiltersFromLocalStorage();
      this.getData(filterName);
    }

    getData(key) {
      this.data = this.filters[key] || {};
    }

    getFiltersFromLocalStorage() {
      this.filters = JSON.parse($window.localStorage.getItem('filters')) || {};
    }

    setFiltersToLocalStorage() {
      $window.localStorage.setItem('filters', JSON.stringify(this.filters));
    }

    setFilter(key, value) {
      this.filters[key] = value;
      this.setFiltersToLocalStorage();
    }

    setParam(key, value) {
      this.data[key] = value;
      this.setFilter(this.filterName, this.data);
    }

    resetParams() {
      this.data = {};
      this.setFilter(this.filterName, this.data);
    }
  };
}
