import './cinema-list.component.scss';
import angular = require('angular');
import { ICinemaMin } from '../../models/cinema';

class CinemaListController {
  cinemas: ICinemaMin[];
  selectedCinema: ICinemaMin;
  cinemaSelected: ($event: {$event: {cinema: ICinemaMin}}) => void;
  selectCinema(cinema: ICinemaMin) {
    this.selectedCinema = cinema;
    this.cinemaSelected({
      $event: {
        cinema
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
