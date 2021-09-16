import './film-list.component.scss';
import angular = require('angular');

class FilmListController {
  cinemas: [];
}

export class FilmList implements angular.IComponentOptions {
  static selector = 'filmList';
  static bindings = {
    films: '<'
  };
  static controller = FilmListController;
  static template = require('./film-list.component.html');
}
