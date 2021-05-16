import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {

  }


  darkModeToggle() : void{
    this.isDarkMode = !this.isDarkMode;
    if(this.isDarkMode){
      this.document.body.parentElement?.classList.add('dark');
    } else{
      this.document.body.parentElement?.classList.remove('dark');
    }
  }

}
