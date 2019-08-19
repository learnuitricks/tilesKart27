import { Component, OnInit } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { TilesService } from '../services/tiles.service';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  

  filterText:string = "";
  selectedFilter:string = "price";
  filterOptions: Array<string> = ["name", "model", "price"];
  imagePath:string = "/assets/images/";
  filteredTiles: Array<ITile> =[];
  tiles:Array<ITile> =[]
    
 
  constructor(private tilesService:TilesService) { 
    this.filteredTiles = this.tiles;
  }

  ngOnInit(): void {
    this.tilesService.getTiles().subscribe(
      (tiles)=>{
        this.tiles = tiles;
        this.filteredTiles = this.tiles;
      }
    );
    console.log('just a print statement');
    this.filteredTiles = this.tiles;
  }

  filter(){
    console.log(this.selectedFilter);
    console.log(this.filterText);
    this.filteredTiles = this.performFilter(this.filterText, this.selectedFilter,this.tiles);
    console.log(this.filteredTiles);

  }

  performFilter(filterText: string,filterOption: string,arrayToFilter: ITile[]){
       let filteredTiles = arrayToFilter.filter((tile)=>{
        if(filterOption == "price"){
          return tile.price > +filterText;
        }
       })

       return filteredTiles;
  }


}
