import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoService } from './todo/todo.service';
import { TodoFilter } from './todo/todo-filter.pipe';
import { TodoItemComponent } from './todo/todo-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoFilter,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
