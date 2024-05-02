import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lazy-load',
  templateUrl: './lazy-load.component.html',
})
export class LazyLoadComponent {
  @Input() isLoading: boolean;
  @Output() onLoadMore: EventEmitter<void>;
  constructor() {
    this.onLoadMore = new EventEmitter();
  }
}
