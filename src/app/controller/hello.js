
import {
  Controller, http, route,
} from '@dazejs/framework';

@route()
export default class extends Controller {
  @http.get()
  index() {
    return this.render('hello', {
      name: 'Daze.js',
    });
  }
}
