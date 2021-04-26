import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import { Enlace } from '../enlace';
 import { EnlaceService } from '../enlace.service';

 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements OnInit {
  enlaces$: Observable<Enlace[]>;
  private searchTerms = new Subject<string>();
  value="";
  toggle:boolean = false;

  
  constructor(private enlaceService: EnlaceService) {}
 
 search(term: string): void {
    this.searchTerms.next(term);
  }
 
 agregar(enlace: Enlace){
   this.enlaceService.addEnlace(enlace);
 }

 doToggle(): void{
   this.toggle = !this.toggle;
 }

  ngOnInit(): void {

    this.enlaces$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.enlaceService.searchEnlaces(term)),
    );

  }

}