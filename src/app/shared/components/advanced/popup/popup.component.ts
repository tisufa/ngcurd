import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Input() header: string;
  @ContentChild('footer') footerTmpl: TemplateRef<any>;
}
