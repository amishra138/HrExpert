import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettingsConfig } from 'src/app/configs/app-settings.config';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    apiUrl: string = AppSettingsConfig.API_URL;

    constructor(private httpClient: HttpClient, private baseUrl: string) {

    }

    get<T>(url?: string): Observable<T> {
        return this.httpClient.get<T>(this.requestUrl(url));
    }

    post<T, V>(body?: T, url?: string): Observable<V> {
        return this.httpClient.post<V>(this.requestUrl(url), body);
    }

    put<T, V>(body?: T, url?: string): Observable<V> {
        return this.httpClient.put<V>(this.requestUrl(url), body);
    }

    patch<T, V>(body?: T, url?: string): Observable<V> {
        return this.httpClient.patch<V>(this.requestUrl(url), body);
    }

    delete<T>(url?: string): Observable<T> {
        return this.httpClient.delete<T>(this.requestUrl(url));
    }

    private requestUrl(url: string): string {
        return `${this.apiUrl}/${this.baseUrl}${url ? `/${url}` : ``}`;
    }
}