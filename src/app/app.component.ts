import { Component } from '@angular/core';
import { FetchDataService } from "./services/fetch-data.service";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DatlinqAssignment';
  metaData: any;
  finalData: any;
  searchitem = '';
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  constructor(private fetchDataService: FetchDataService) {
  }
  ngOnInit() {
    // ----------------------getting data from json------------
    this.fetchDataService.readJsonData().subscribe(res => {
      this.metaData = res;
      this.genarateTemplate('all');
// ---------------setup for rating filter----------------------
      this.dropdownList = [
        { item_id: 'averageRating', item_text: 'Rating>4' },
      ];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
// ---------x------setup for rating filter---------x-------------

    });
  }
  // -----------------method to retive data need for the HTML display------------
  genarateTemplate(filter) {
    this.finalData = this.metaData;
  }
  // ----------------------search functionality----------------------------------
  search() {
    if (this.searchitem == "") {
      this.genarateTemplate('all');
    } else {
      this.finalData = this.finalData.filter(res => {
        return res.name.toLocaleLowerCase().match(this.searchitem.toLocaleLowerCase());
      });
    }
  }
  // ---------------------- rating filter  functionality----------------------------------
  onItemSelect(item: any) {
    if (item.item_id = 'averageRating') {
      this.finalData = this.finalData.filter(res => {
        return res.averageRating >= (4);
      });
    }

  }

  onDeSelect() {
    this.genarateTemplate('all');
  }
}
