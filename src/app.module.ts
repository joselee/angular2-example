import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { FooService } from './foo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [FooService],
    bootstrap: [AppComponent]
})
export class AppModule { }
