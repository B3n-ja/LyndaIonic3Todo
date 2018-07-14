import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

/** Mes Pages */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArchivedTodosPage } from '../pages/archived-todos/archived-todos';

/** Mes providers */
import { TodoProvider } from '../providers/todo/todo';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchivedTodosPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchivedTodosPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider
  ]
})
export class AppModule {}
