import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  data: Array<Map<string, string>>;
  headers: Array<string>;
  filters: Array<Ifilter>;

  constructor(){}
  

  ngOnInit(){
    this.data = new Array(
      new Map([["Book ID", "1"], ["Book Title", "Champak"], ["Book Author", "unknown author"], ["Book Year of Publish", "1992"]]),
      new Map([["Book ID", "2"], ["Book Title", "Rich Dad Poor Dad"], ["Book Author", "Robert Kiyoski and Sharon Lechter"], ["Book Year of Publish", "1997"]]),
      new Map([["Book ID", "3"], ["Book Title", "Hamlet"], ["Book Author", "William Shakespeare"], ["Book Year of Publish", "1600"]]),
      new Map([["Book ID", "4"], ["Book Title", "2 States"], ["Book Author", "Chetan Bhagat"], ["Book Year of Publish", "2009"]])
    );
    this.headers = Array.from((this.data[0]).keys());
    this.filters = new Array({ header: "Book ID", filter: "" }, { header: "Book Title", filter: "" }, { header: "Book Author", filter: "" }, { header: "Book Year of Publish", filter: "" })
  }
}
export interface Ifilter {
  header: string;
  filter: string;
}
