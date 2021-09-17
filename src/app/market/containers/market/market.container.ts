import angular = require('angular');
import { ICinemaMin } from '../../models/cinema';
import { ISessionMin } from '../../models/session';
import { CinemasService } from '../../services/cinemas.service';
import './market.container.scss';

class MarketController {
  cinemas: ICinemaMin[];
  films: ISessionMin[];
  location: string;
  selectedCinema: ICinemaMin;
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
          const error = JSON.parse(err).error;
          alert(`${error.errorCode.code}: ${error.description}`);
        }
      );
  }

  getFilms(cinemaId: string) {
    this.cinemasService.getFilms(this.location, cinemaId)
      .then(resp => {
          this.films = resp.data;
        })
      .catch(err => {
        const error = JSON.parse(err).error;
          alert(`${error.errorCode.code}: ${error.description}`);
      });
  }

  onSelectCinema(event: { cinema: ICinemaMin}) {
    this.selectedCinema = event.cinema;
    this.getFilms(event.cinema.id);
  }
}

export class MarketContainer implements angular.IComponentOptions {
  static selector = 'market';
  static controller = MarketController;
  static template = require('./market.container.html');
}
