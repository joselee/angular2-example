import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Foo {
    constructor(public name: string){}
}

@Injectable()
export class FooService {

    getFoos() {
        return [new Foo('asdf'), new Foo('abc'), new Foo('foo')];
    }
    // constructor(private http: Http) { }
    // getFoos() {
    //     return this.http
    //         .get('api/foos.json')
    //         .map((response: Response) => <Foo[]>response.json());
    // }
}