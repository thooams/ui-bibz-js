import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"
//import "awesome-bootstrap-checkbox"
//import { Popover, Tooltip, Toast, Dropdown } from "bootstrap"

export default class UiBibzInterface {

  constructor() {
    // //this.nav()
    this.tooltip()
    // this.dropdown()
    // //this.checkbox()
    this.popover()
    this.notify()
    // this.fileInputBrowser()
    // this.toast()
  }

  nav(){
    document.querySelectorAll('.nav-tabs .nav-item .nav-link').forEach(function(el){
      let tabTrigger = new bootstrap.Tab(el)
      el.addEventListener('click', function (e) {
        e.preventDefault()
        tabTrigger.show()
      })
    })
  }

  fileInputBrowser() {
    //bsCustomFileInput.init()
  }

  popover() {
    document.querySelectorAll('[data-toggle="popover"]').forEach(x => new bootstrap.Popover(x))
  }

  tooltip() {
    document.querySelectorAll('[data-toggle="tooltip"]').forEach(x => new bootstrap.Tooltip(x))
  }

  dropdown() {
    document.querySelectorAll('[data-toggle="dropdown"]').forEach(x => new bootstrap.Dropdown(x))
  }

  toast() {
    document.querySelectorAll('.toast').forEach(x => new bootstrap.Toast(x))
  }

  notify() {
    document.querySelectorAll('.alert[data-timeout]').forEach(function(alertElement) {
      setTimeout(function() {
        alertElement.classList.add('fade')
      }, alertElement.getAttribute("data-timeout") )
    })
  }

  // checkbox() {
  //   $('.abc-checkbox.indeterminate input[type=checkbox]').on('click', function() {
  //     let el = $(this)
  //     if (el.attr('readonly') === 'readonly') {
  //       el.prop('checked', false)
  //       el.prop('readonly', false)
  //     } else if (!el.is(':checked')) {
  //       el.prop('readonly', true)
  //       el.prop('indeterminate', true)
  //     }
  //   })
  // }
}
