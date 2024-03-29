import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() page: number = 0;
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Input() pageNumber!: number;
  @Output() pageChange = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event: any) {
    this.pageChange.emit(event);
  }

}
