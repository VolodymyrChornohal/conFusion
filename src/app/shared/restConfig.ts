/**
 * Created by Vladimir on 1/9/18.
 */
import { baseURL } from './baseurl';

export function RestangularConfigFactory(RestangularProvider){
  RestangularProvider.setBaseUrl(baseURL);
}
