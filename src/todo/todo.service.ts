import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Inject, Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    constructor(@Inject(Http) private http: Http) { }

    getTodos() {
        return this.http.get('todos.json')
            .map((response: Response) => <Todo[]>response.json());
    }
}