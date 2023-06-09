import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [PagerComponent, PagingHeaderComponent, OrderTotalsComponent, TextInputComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    NgbDropdownModule
  ],
  exports: [NgbPaginationModule, PagingHeaderComponent, PagerComponent, NgbCarouselModule, OrderTotalsComponent, ReactiveFormsModule, NgbDropdownModule, TextInputComponent]
})
export class SharedModule { }
