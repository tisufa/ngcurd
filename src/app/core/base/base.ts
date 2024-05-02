import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { GlobalService } from '../global';

@Component({
  template: '',
})
export abstract class Base implements OnInit, OnDestroy {
  protected isLoading: boolean;
  protected isProcessing: boolean;
  protected formGroup: FormGroup;
  protected globalService: GlobalService;
  protected formBuilder: FormBuilder;
  protected subject: Subject<void>;
  protected router: Router;
  protected onDestroy?(): void;

  protected abstract onBaseInit(): void;
  constructor(@Inject(String) protected moduleCode: string) {
    this.globalService = inject(GlobalService);
    this.router = inject(Router);
  }

  ngOnInit(): void {
    this.setBaseInitialization();
    this.setStateLoading();
    this.onBaseInit();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
    if (!this.onDestroy) return;
    this.onDestroy();
  }

  private setBaseInitialization(): void {
    this.formBuilder = new FormBuilder();
    this.subject = new Subject();
  }

  protected setStateLoading(): void {
    this.isLoading = true;
  }

  protected setStateProcessing(): void {
    this.isProcessing = true;
  }

  protected setStateReady(): void {
    this.isLoading = false;
    this.isProcessing = false;
  }

  public validate(): void {
    if (!this.formGroup) return;
    this.formGroup.markAllAsTouched();
  }
}
