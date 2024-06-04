import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Product } from '../products/models/product';
import { Observable } from 'rxjs';
import { QuantityProductsByCategory } from './models/quantityProductsByCategory';
import { QuantityProductsByRegion } from './models/quantityProductsByRegion';
import { QuantityProductsByAverageRating } from './models/QuantityProductsByAverageRating';
import { PercentageCommentsByRegion } from './models/percentageCommentsByRegion';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

  getProductsByAverageRating(): Observable<QuantityProductsByAverageRating[]> {
    return this.httpClient.get<QuantityProductsByAverageRating[]>(`${environment.apiURL}productsByAverageRating`);
  }

  getProductsQuantityByCategory(): Observable<QuantityProductsByCategory[]> {
    return this.httpClient.get<QuantityProductsByCategory[]>(`${environment.apiURL}productsQuantityByCategory`);
  }

  getCommentsQuantityByRegion(): Observable<PercentageCommentsByRegion[]> {
    return this.httpClient.get<PercentageCommentsByRegion[]>(`${environment.apiURL}commentsQuantityByRegion`);
  }

  getProductsQuantityByRegion(): Observable<QuantityProductsByRegion[]> {
    return this.httpClient.get<QuantityProductsByRegion[]>(`${environment.apiURL}productsQuantityByRegion`);
  }
}