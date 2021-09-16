import './cinema-list.component.scss';
import angular = require('angular');

class CinemaListController {
  cinemas: [];
  cinemaSelected: ($event: {$event: {cinemaId: string}}) => void;
  selectCinema(cinemaId: string) {
    this.cinemaSelected({
      $event: {
        cinemaId
      }
    });
  }
}


export class CinemaList implements angular.IComponentOptions {
  static selector = 'cinemaList';
  static bindings = {
    cinemas: '<',
    cinemaSelected: '&'
  };
  static controller = CinemaListController;
  static template = require('./cinema-list.component.html');
}
