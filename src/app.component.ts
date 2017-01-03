import { Foo, FooService } from './foo.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `<div *ngFor="let foo of foos">{{foo.name}}</div>`,
})
export class AppComponent implements OnInit {
    foos: Foo[];
    constructor(@Inject(FooService) private fooService: FooService){}

    ngOnInit() {
        this.foos = this.fooService.getFoos();
    }
}
