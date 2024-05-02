import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective implements OnInit {
  @Output() onScrollStart: EventEmitter<HTMLElement>;
  @Output() onScrollEnd: EventEmitter<HTMLElement>;
  @Output() onScroll: EventEmitter<HTMLElement>;
  @Output() onScrollToTop: EventEmitter<HTMLElement>;
  @Output() onScrollToBottom: EventEmitter<HTMLElement>;

  private currentScrollTop: number;

  constructor() {
    this.onScrollStart = new EventEmitter();
    this.onScrollEnd = new EventEmitter();
    this.onScroll = new EventEmitter();
    this.onScrollToTop = new EventEmitter();
    this.onScrollToBottom = new EventEmitter();
    this.currentScrollTop = 0;
  }

  ngOnInit(): void {
    this.listenScrollEvent();
  }

  private listenScrollEvent(): void {
    document.addEventListener('scroll', () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      this.onScroll.emit(document.documentElement);

      if (scrollTop === 0) {
        this.onScrollStart.emit(document.documentElement);
      } else if (Math.ceil(scrollTop + clientHeight) === scrollHeight) {
        this.onScrollEnd.emit(document.documentElement);
      } else if (scrollTop > this.currentScrollTop) {
        this.onScrollToBottom.emit(document.documentElement);
      } else if (scrollTop < this.currentScrollTop) {
        this.onScrollToTop.emit(document.documentElement);
      }

      this.currentScrollTop = scrollTop;
    });
  }
}
