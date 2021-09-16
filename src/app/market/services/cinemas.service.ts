import { IHttpResponse } from 'angular';
import angular = require('angular');

export class CinemasService {
  static selector = 'cinemasService';
  private baseUrl = 'https://drafthouse.com/s/mother/v1/page/market/main';
  constructor(
    private $http: angular.IHttpService
  ) {
    'ngInject';
  }
  getAll(): angular.IHttpPromise<any> {
    return this.$http.get<any>(this.baseUrl + '/austin');
  }

  getCinemasByCity(citySlug: string): angular.IHttpPromise<any>  {
    return this.$http.get<any>(`${this.baseUrl}/${citySlug}`, {
      transformResponse: (data) => {
        if (!!JSON.parse(data).error) {
          throw data;
        }
        return JSON.parse(data).data.market.cinemas;
      }
    });
  }

  getFilms(citySlug: string, cinemaId: string): angular.IHttpPromise<any>  {
    return this.$http.get(`${this.baseUrl}/${citySlug}`, {
      transformResponse: (data) => {
        if (!!JSON.parse(data).error) {
          throw data;
        }
        const filteredByCinemaList: any[] = JSON.parse(data).data.sessions
          .filter((session: { [key: string]: any }) => {
            return session.cinemaId === cinemaId;
          });
        return [...new Map(filteredByCinemaList.map(item =>
            [item.filmHeadOfficeCode, item])).values()];
      }
    });
  }
}
