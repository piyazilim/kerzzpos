import { Component, OnInit } from '@angular/core';
import { DummyData} from './DummyData';
import { JsonplaceholderService } from "./services/jsonplaceholder.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[JsonplaceholderService]
})
export class AppComponent implements OnInit {
  constructor(private jsonplaceholderService: JsonplaceholderService){
    
  }
  title = 'VeriYazilimSample';
  subTitle = "KerzzPos";
  description = "Daha iyisi için çalışıyoruz..";
  dummyData : DummyData[];

  ngOnInit(){
    this.jsonplaceholderService.getDummyData().subscribe(data=>{
      this.dummyData = data;
    });
  }
}
