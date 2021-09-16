import './cinema-list.component.scss';
import angular = require('angular');

class CinemaListController {
  cinemas: [];
}


export class CinemaList implements angular.IComponentOptions {
  static selector = 'cinemaList';
  static bindings = {
    cinemas: '<'
  };
  static controller = CinemaListController;
  static template = require('./cinema-list.component.html');
}
