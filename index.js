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
