
import {
  Controller, Http, Route,
} from '@dazejs/framework';

@Route()
export default class extends Controller {
  @Http.Get()
  index() {
    return this.render('hello', {
      name: 'Daze.js',
    });
  }
}
