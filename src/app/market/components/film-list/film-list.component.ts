import './film-list.component.scss';
import angular = require('angular');

class FilmListController {
  films: [];
  location: string;
  cinema: string;
}

export class FilmList implements angular.IComponentOptions {
  static selector = 'filmList';
  static bindings = {
    films: '<',
    location: '<',
    cinema: '<'
  };
  static controller = FilmListController;
  static template = require('./film-list.component.html');
}
