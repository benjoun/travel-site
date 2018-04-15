import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader= $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  // pas mettre () à la fonction passée sinon elle est appelée directement 
  // (et ne sera pas redéclenchée)
  events() {
    // Warning: if we don't bind "this" 
    // "this" in the toggleTheMenu method will be the event that triggered the element
    this.menuIcon.click( this.toggleTheMenu.bind(this) );
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");    
  }
}

export default MobileMenu;