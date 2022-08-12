import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["When it's late at night", "chill to the MAX!"],
      typeSpeed: 70,
      loop: true
    })
  }
}
