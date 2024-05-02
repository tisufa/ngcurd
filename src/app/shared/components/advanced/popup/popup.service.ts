import { Injectable, Type } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IObject } from 'src/app/core/interfaces';

@Injectable()
export class PopupService {
  constructor(private _ngbModal: NgbModal) {}
  public open(
    component: Type<any>,
    model?: IObject,
    options?: NgbModalOptions
  ): Observable<any> {
    return new Observable((observer) => {
      const modalRef = this._ngbModal.open(component, options);
      if (model) {
        Object.assign(modalRef.componentInstance, { ...model });
      }

      if (modalRef.componentInstance.onClose) {
        modalRef.componentInstance.onClose.subscribe(() => {
          modalRef.close();
          observer.complete();
        });
      }

      if (modalRef.componentInstance.onChange) {
        modalRef.componentInstance.onChange.subscribe((result: boolean) => {
          modalRef.close();
          observer.next(result);
          observer.complete();
        });
      }

      if (modalRef.dismissed) {
        modalRef.dismissed.subscribe(() => {
          observer.next(false);
          observer.complete();
        });
      }
    });
  }
}
