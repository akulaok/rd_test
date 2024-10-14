import { ApiRoute, requestBody } from '../consts';
import Loader from './loader';

export default class CheckListApi {
  async GetCheckList() {
    const loader = new Loader(ApiRoute.Checklist);
    const response = await loader.post(requestBody);
    return response;
  }
}
