import angular = require('angular');
import { CinemasService } from '../../services/cinemas.service';
import './market.container.scss';

class MarketController {
  cinemas: any[];
  films: any[];
  location: string;
  selectedCinemaId: string;
  constructor(
    private cinemasService: CinemasService,
    $stateParams: any
  ) {
    'ngInject';
    this.location = $stateParams.id;
  }

  $onInit() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemasService.getCinemasByCity(this.location)
      .then(
        resp => {
          this.cinemas = resp.data;
        }
      )
      .catch(
        err => {
          alert('Could not get cinemas');
        }
      );
  }

  getFilms(cinemaId: string) {
    this.cinemasService.getFilms(this.location, cinemaId)
      .then(resp => {
          this.films = resp.data;
        })
      .catch(err => {
        alert('Couuld not get films');
      });
  }

  onSelectCinema(event: { cinemaId: string }) {
    this.selectedCinemaId = event.cinemaId;
    this.getFilms(event.cinemaId);
  }
}

export class MarketContainer implements angular.IComponentOptions {
  static selector = 'market';
  static controller = MarketController;
  static template = require('./market.container.html');
}
