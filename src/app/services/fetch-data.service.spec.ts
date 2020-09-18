import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";


import { FetchDataService } from './fetch-data.service';
import { resturants } from '../resturant.model';

describe('FetchDataService', () => {
  let service: FetchDataService;
  let  httpMock:HttpTestingController;
  beforeEach(() => {TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[FetchDataService]
  });

service=TestBed.get(FetchDataService);
httpMock =TestBed.get(HttpTestingController);

afterEach(() =>{
  httpMock.verify();
});
it('should be created', () => {
const dummyPosts:resturants[] =[
  {address: "Binnenrotte 105",averageRating: 3.9166666666666665,categories: ["Restaurant"],city: "Rotterdam",cuisines: ["Fish"],latitude: "51.92254",longitude: "4.48470",name: "The Fish Market",phones: ["0103130947"],postalCode: "3011HB",websites: ["http://www.thefishmarket-rotterdam.nl"]},
  {address: "Mariniersweg 18",averageRating: 3.0555555555555554,categories: ["Restaurant", "Curry order takeaway food"],city: "Rotterdam",cuisines: ["Indian"],latitude: "51.92386",longitude: "4.48922",name: "Taj Mahal",phones:  ["0104120812"],postalCode: "3011NN",websites:["http://www.tajmahal-rotterdam.nl"]}
];
service.readJsonData().subscribe(posts =>{
  expect(posts.length).toBe(2);
  expect(posts).toEqual(dummyPosts);
});
const request = httpMock.expectOne('${service.URL}');
expect(request.request.method).toBe('GET');
request.flush(dummyPosts);
});

  // it('should be created', () => {
  //   const service: FetchDataService = TestBed.get(FetchDataService);
  //   expect(service).toBeTruthy();
  // });

});
});
