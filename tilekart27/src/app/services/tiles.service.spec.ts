import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { TilesService } from './tiles.service';

fdescribe('TilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[TilesService]
  }));

  it('should be created', () => {
    const service: TilesService = TestBed.get(TilesService);
    expect(service).toBeTruthy();
  });

  it('should filter the array based on the input',()=>{

    const tiles=[
      {
        name: 'nitco',
        model: 'nit-01',
        price: 200,
        rating: 2,
        image: 'tile1.jpg',
        status: 1,
        Id: 1
      },
      {
        name: 'somany',
        model: 'nit-03',
        price: 150,
        rating: 1,
        image: 'tile3.jpg',
        status: 1,
        Id: 3
      }
    ];

    const tileService : TilesService = TestBed.get(TilesService);

    const filteredArray = tileService.performFilter('175','price',tiles);

    expect(filteredArray.length).toBe(1);
   
 
    // first i want to call the perfom filter 
  })

  it('if no mathing input returned array should be empty',()=>{

    const tiles=[
      {
        name: 'nitco',
        model: 'nit-01',
        price: 200,
        rating: 2,
        image: 'tile1.jpg',
        status: 1,
        Id: 1
      },
      {
        name: 'somany',
        model: 'nit-03',
        price: 150,
        rating: 1,
        image: 'tile3.jpg',
        status: 1,
        Id: 3
      }
    ];

    const tileService : TilesService = TestBed.get(TilesService);

    const filteredArray = tileService.performFilter('220','price',tiles);

    expect(filteredArray.length).toBe(0);
   
 
    // first i want to call the perfom filter 
  })

  it('if passed array is empty returned array should be empty',()=>{

    const tiles=[];


    const tileService : TilesService = TestBed.get(TilesService);

    const filteredArray = tileService.performFilter('220','price',tiles);

    expect(filteredArray.length).toBe(0);
   
 
    // first i want to call the perfom filter 
  })

  it('if passed array is not empty but i dont pass the filter text',()=>{

    const tiles=[
      {
        name: 'nitco',
        model: 'nit-01',
        price: 200,
        rating: 2,
        image: 'tile1.jpg',
        status: 1,
        Id: 1
      },
      {
        name: 'somany',
        model: 'nit-03',
        price: 150,
        rating: 1,
        image: 'tile3.jpg',
        status: 1,
        Id: 3
      }
    ];

    const tileService : TilesService = TestBed.get(TilesService);

    const filteredArray = tileService.performFilter('','price',tiles);

    expect(filteredArray.length).toBe(tiles.length);
   
 
    // first i want to call the perfom filter 
  })
});

