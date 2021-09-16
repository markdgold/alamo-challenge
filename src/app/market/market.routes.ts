import { MarketContainer } from './containers/market/market.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('cinema', {
      url: '^/:id',
      parent: 'app',
      component: MarketContainer.selector
    });
};
