/**
 * The interface defines the options object that can be passed to AngularCesiumModule on initialization.
 */
import { PipesConfig } from 'ngx-cesium-parser';

export interface ModuleConfiguration {
  fixEntitiesShadows?: boolean;
  customPipes: PipesConfig[];
}
