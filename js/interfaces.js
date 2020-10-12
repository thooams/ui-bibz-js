import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min"

export default class UiBibzInterface {

  constructor() {
    // //this.nav()
    this.tooltip()
    // this.dropdown()
    this.popover()
    this.notify()
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
}
