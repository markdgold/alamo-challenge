// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */
import { CinemaList } from './components/cinema-list/cinema-list.component';

/**
 * Import Module Containers
 */
import { CinemasContainer } from './containers/cinemas/cinemas.container';

/**
 * Import Module Services
 */
import { CinemasService } from './services/cinemas.service';

/**
 * Import Module Routing
 */
import { routing } from './cinemas.routes';

export const moduleName =
  angular.module('application.cinemas', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */
  .component(CinemaList.selector, CinemaList)

  /**
   * Register Module Containers
   */
  .component(CinemasContainer.selector, CinemasContainer)

  /**
   * Register Module Services
   */
  .service(CinemasService.selector, CinemasService)
  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
