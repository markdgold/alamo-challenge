import angular = require('angular');
import { CinemasService } from '../../services/cinemas.service';
import './cinemas.container.scss';

class CinemasController {
  cinemas: any;
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
  }

  getCinemas() {
    this.cinemasService.getAll().then(
      resp => {
        console.log(resp);
        this.cinemas = resp;
      }
    );
  }
}

export class CinemasContainer implements angular.IComponentOptions {
  static selector = 'cinemas';
  static controller = CinemasController;
  static template = `
    <h1>hello {{$ctrl.location}} cinemas</h1>
    <cinema-list></cinema-list>
  `;
}
