# EMS Web Application Components: Pipes

The Pipes Angular.io module is authored for use within web applications developed by [Educational Media Solutions](https://educationalmediasolutions.com).

Find the [web application template source code on GitHub](https://github.com/spencech/ems-web-app-template) to review implementation in context.

Find a [working example of this component here](https://ems-web-app.educationalmediasolutions.com).

This component includes three frequently used pipes in our web applications.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.


## Usage: Module Import

** Module Implementation **

	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { AppComponent } from './app.component';
	import { PipesModule } from "ems-web-app-pipes";

	@NgModule({
	  declarations: [
	    AppComponent 
	  ],
	  imports: [
	    BrowserModule,
	    PipesModule 
	  ],
	  providers: [],
	  bootstrap: [ AppComponent ]
	})
	export class AppModule { }

## Usage: Safe

The SafePipe bypasses sanitization of trusted template strings using Angular.io's Dom Sanitizer. We'll typically use this to import HTML formatted content from a protected content management system.

**Component Implementation**

	import { Component } from '@angular/core';
	import { SanitizerType } from "ems-web-app-pipes";
	@Component({
	  selector: 'some-app-component',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.less']
	})
	export class SomeAppComponent {
		public SanitizerType = SanitizerType;
		public exampleUnsanitizedResourceUrl: string = "/docs/example/index.html";
		constructor() {}
	}

**Template Implementation**

	<iframe [src]="exampleUnsanitizedResourceUrl|safe:SanitizerType.ResourceUrl"></iframe>

**Options**

The following enum options can be supplied to the safe pipe, choose the value that corresponds to your incoming content.

	SanitizerType.ResourceUrl
	SanitizerType.Url
	SanitizerType.Style
	SanitizerType.Script
	SanitizerType.Html

## Usage: Props

The PropsPipe filters a list based on the supplied comparison information

**Component Implementation**

	import { Component } from '@angular/core';
	@Component({
	  selector: 'some-app-component',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.less']
	})
	export class SomeAppComponent {
		public dates: any[] = [{ id: 1, year: 2011, label: "hello", nested: { value: 100} }, { id: 2, year: 2012, label: "world", nested: { value: 200} }, { id: 3, year: 2012, label: "world", nested: { value: 300} }]
		constructor() {}
	}


**Template Implementation**

	<ul class="ul">
		<li class="li" *ngFor="let item of dates|props:'id':'>=':2">{{ item.id }} {{ item.label }}</li>
	</ul>
	<ul class="ul">
		<li class="li" *ngFor="let item of dates|props:'label':'===':'world'">{{ item.id }} {{ item.label }}</li>
	</ul>
	<ul class="ul">
		<li class="li" *ngFor="let item of dates|props:'nested.value':'>':100">{{ item.id }} {{ item.value }}</li>
	</ul>

**Options**

You can use the following operators for the second argument in the pipe

	=== // (= and == are accepted, but are converted to the strict equality operator)
	>
	>=
	<
	<=
	!== /// (!= is accepted, but is converted to the strict inequality operator)

## Usage: Tokens

The TokensPipe mutates a string to find and repace token values that use the `${token}` format.

**Component Implementation**

	import { Component } from '@angular/core';
	@Component({
	  selector: 'some-app-component',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.less']
	})
	export class SomeAppComponent {
		public user: any = { id: 1, fname: "Chris", lname: "Spence" };

		constructor() {}
	}


**Template Implementation**

Both scenarios below return the same output string. You can pass either an explicit replacement string or a key/value hash where keys correspond to the tokens in the string (e.g., "fname" on the user object in this scenario)

	<p [innerHtml]="'Hello ${firstname}'|tokens:'firstname':user.fname"></p> <!-- Hello Chris -->
	<p [innerHtml]="'Hello ${fname}'|tokens:'fname':user"></p> <!-- Hello Chris -->


## Code scaffolding

Run `ng generate component component-name --project pipes` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project pipes`.
> Note: Don't forget to add `--project pipes` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build pipes` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build pipes`, go to the dist folder `cd dist/pipes` and run `npm publish`.

## Running unit tests

Run `ng test pipes` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
