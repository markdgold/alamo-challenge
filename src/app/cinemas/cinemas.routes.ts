import { CinemasContainer } from './containers/cinemas/cinemas.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('cinema', {
      url: '/:id',
      parent: 'app',
      component: CinemasContainer.selector
    });
};
