import { ConfigModel } from '../models';
import { InitializationService } from '../services';

export const initializationFactory =
  (config: ConfigModel) => (initializationService: InitializationService) => {
    return () => initializationService.init(config);
  };
