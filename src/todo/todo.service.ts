import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    constructor(@Inject(Http) private http: Http) { }

    getTodos() {
        return this.http.get('todos.json')
            .map((response: Response) => <Todo[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(`Error status code ${error.status} at ${error.url}`);
    }
}