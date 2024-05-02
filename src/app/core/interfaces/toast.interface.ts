export interface IToast {
  show(message: string): void;
  showInfo(message: string): void;
  showSuccess(message: string): void;
  showWarning(message: string): void;
  showError(message: string): void;
}
