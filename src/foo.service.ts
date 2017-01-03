import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Foo {
    constructor(public name: string){}
}

@Injectable()
export class FooService {
    constructor(@Inject(Http) private http: Http) { }
    getFoos() {
        return this.http
            .get('foos.json')
            .map((response: Response) => <Foo[]>response.json());
    }
}