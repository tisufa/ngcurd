import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VariantEnum } from 'src/app/core/enum';
import { IModal } from 'src/app/core/interfaces/modal.interface';
import { VariantType } from 'src/app/core/types';
import { IModalOptions } from '../../../../core/interfaces';
import { PopupService } from '../popup';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService implements IModal {
  constructor(private _popupService: PopupService) {}

  public saveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'Save confirmation',
      message: message || 'Are you sure to save changes?',
    };
    return this.open({
      ...defaultConfig,
      ...configProps,
    });
  }

  public updateConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'Update confirmation',
      message: message || 'Are you sure to update changes?',
      positiveButton: 'Update',
    };
    return this.open({
      ...defaultConfig,
      ...configProps,
    });
  }

  public deleteConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const { message, ...configProps } = config;
    const defaultConfig: IModalOptions = {
      header: 'Delete Confirmation',
      message: message || 'Are you sure to delete?',
      positiveButton: 'Delete',
    };

    return this.open(
      {
        ...defaultConfig,
        ...configProps,
      },
      VariantEnum.DANGER
    );
  }

  public leaveConfirmation(config: IModalOptions = {}): Observable<boolean> {
    const defaultConfig: IModalOptions = {
      header: 'Leave Confirmation',
      message: 'Are you sure to leave this page?',
      negativeButton: 'Leave This Page',
      positiveButton: 'Stay On This Page',
    };
    return this.open(
      {
        ...defaultConfig,
        ...config,
      },
      VariantEnum.INFO
    );
  }

  private open(
    config: IModalOptions = {},
    variant?: VariantType
  ): Observable<boolean> {
    return this._popupService.open(
      ModalComponent,
      {
        ...config,
        variant,
      },
      {
        backdrop: 'static',
      }
    );
  }
}
