import { IHttpResponse } from 'angular';
import angular = require('angular');
import { ICinemaMin } from '../models/cinema';
import { ISessionMin } from '../models/session';

export class CinemasService {
  static selector = 'cinemasService';
  private baseUrl = 'https://drafthouse.com/s/mother/v1/page/market/main';
  constructor(
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }

  getCinemasByCity(citySlug: string): angular.IHttpPromise<ICinemaMin[]>  {
    return this.$http.get(`${this.baseUrl}/${citySlug}`, {
      transformResponse: (data) => {
        if (!!JSON.parse(data).error) {
          throw data;
        }
        return JSON.parse(data).data.market.cinemas;
      }
    });
  }

  getFilms(citySlug: string, cinemaId: string): angular.IHttpPromise<ISessionMin[]>  {
    return this.$http.get(`${this.baseUrl}/${citySlug}`, {
      transformResponse: (data) => {
        if (!!JSON.parse(data).error) {
          throw data;
        }
        const filteredByCinemaList: ISessionMin[] = JSON.parse(data).data.sessions
          .filter((session: ISessionMin) => {
            return session.cinemaId === cinemaId;
          });
        return [...new Map(filteredByCinemaList.map(item =>
            [item.filmHeadOfficeCode, item])).values()];
      }
    });
  }
}
