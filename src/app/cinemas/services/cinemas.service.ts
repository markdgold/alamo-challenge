import angular = require('angular');

export class CinemasService {
  static selector = 'cinemasService';

  constructor(
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }
  getAll() {
    return this.$http.get('https://drafthouse.com/s/mother/v1/page/market/main/austin');
  }
}
