import { Component, Input, OnInit } from '@angular/core';
import { home, infoList } from './home';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data: any;
  selectedPrice: number | null = null;
  selectedOption: string | null = null;
  displayedPrice: number | null = null;
  percent: number | null = null;
  displayedPercent: number | null = null;

  constructor (private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData()
  }

  fetchData(){
    this.apiService.getData('').subscribe(
      response => {
        this.data = response; 
      },
      error => {  
        console.log('error while fetching data')
      }
    )
  }

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectOption(coin: any): void {
    this.selectedOption = coin.symbol;
    this.selectedPrice = coin.lastPrice;
    this.percent = coin.priceChangePercent;
    this.dropdownOpen = false;
  }

  checkPrice(): void {
    if (this.selectedPrice && this.percent !== null) {
      this.displayedPrice = this.selectedPrice;
      this.displayedPercent = this.percent;
      
    } else {
      console.log('Please select an option');
    }
  }

}
// res: String = 'BatMan';
  // hide:Boolean = false;

  // buttonclick(){
  //   console.log("Button Clicked")
  // }

  // rooms: home | null= {
  //   totalrooms: 20,
  //   available: 10,
  //   booked: 6
  // }

  // roomslist: infoList[] =[{
  //   type: 'Suite',
  //   price: 10000
  // }, 
  // {
  // type: 'Deluxe Suite',
  // price: 20000
  // }]

  // toggle(){
  //   this.hide = !this.hide;
  // }
  
  // buttonOnClick(){
  //   console.log("Nanda Nandana")
  // }

  // random:number = 10;

  // cars: string[] = ["Ferrari", "Mclaren", "Koenigsegg", "Porsche"]