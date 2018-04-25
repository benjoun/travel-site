import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    
    // to listen as soon as the page is loading
    this.events();
  }

  events() {
    // clicking the open modal button 
    this.openModalButton.click(this.openModal.bind(this)); // we set what the this keyword is set to with the bind method

    // clicking the x close modal button 
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes the escape key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();      
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    // to prevent the default behavior browser to scroll up, on clicking a link element with href #
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;