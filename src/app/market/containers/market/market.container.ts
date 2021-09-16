import angular = require('angular');
import { CinemasService } from '../../services/cinemas.service';
import './market.container.scss';

class MarketController {
  cinemas: any[];
  location: string;
  constructor(
    private cinemasService: CinemasService,
    $stateParams: any
  ) {
    'ngInject';
    this.location = $stateParams.id;
  }

  $onInit() {
    this.getCinemas();
    this.getSessions();
  }

  getCinemas() {
    this.cinemasService.getCinemasByCity(this.location)
      .then(
        resp => {
          this.cinemas = resp.data;
        }
      );
  }

  getSessions() {
    this.cinemasService.getFilms(this.location, '0003')
      .then(
        resp => {
          console.log(resp.data);
        }
      );
  }
}

export class MarketContainer implements angular.IComponentOptions {
  static selector = 'market';
  static controller = MarketController;
  static template = require('./market.container.html');
}
