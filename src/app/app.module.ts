import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {DataService} from './data.service';
import {IqSelect2Module} from 'ng2-iq-select2';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        IqSelect2Module
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
