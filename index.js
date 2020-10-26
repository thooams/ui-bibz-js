//  import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"
// Fix bootstrap error: Cannot read property 'hasAttribute' of null
import "./vendor/js/bootstrap.bundle"
import UiBibzInterfaces from './js/interfaces'
import UiBibzForms from './js/forms'
import UiBibzTables from './js/tables'

export default class UiBibzJs {

  constructor(){}

  start(){
    document.addEventListener("turbolinks:load", this.init)
  }

  init(){
    new UiBibzTables()
    new UiBibzForms()
    new UiBibzInterfaces()
  }
}
export function start(){
  let uiBibzJs = new UiBibzJs
  uiBibzJs.start()
}
