import { Component, OnInit } from '@angular/core';
import { ITile } from 'src/app/interfaces/itile';
import { ActivatedRoute, Router } from '@angular/router';
import { TilesService } from 'src/app/services/tiles.service';

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {

  tile:ITile;
  tileId:number;
  imagePath:string = "assets/images/"
  constructor(private activatedRoute:ActivatedRoute, private tileService:TilesService, private routerService:Router) { 
   this.tileId = +this.activatedRoute.snapshot.paramMap.get('Id');
   console.log(this.tileId);
  }

  ngOnInit() {
    this.tileService.getTileDetails(this.tileId).subscribe((tile)=>{
      this.tile = tile;
    })
  }

  navigateBack(){
    this.routerService.navigate(['/tiles']);
  }

}
