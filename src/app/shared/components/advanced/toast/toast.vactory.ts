import { ToastrService } from 'ngx-toastr';
import { Toast } from './toast';

export const toastFactory = (toastService: ToastrService) => {
  return new Toast(toastService);
};
