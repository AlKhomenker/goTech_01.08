import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './Pagination.component.html',
  styleUrls: ['./Pagination.component.css']
})

export class Pagination{

  @Input() listLength: any;
  currentPage: number = 1;

  @Output() onDateChange = new EventEmitter<any>();

  public onPageChange(pageNum: number): void {
    this.onDateChange.emit(pageNum);
  }


}


