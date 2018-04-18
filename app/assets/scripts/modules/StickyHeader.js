import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWayPoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWayPoint() {
    var that = this;
    new Waypoint({
      // element property, waypoints is expecting a javascript native dom element 
      // so need to use [0] ... ok because the firts object of 
      // a jquery object is a pointer to the native dom
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if ( direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else { // can only be up
          that.siteHeader.removeClass("site-header--dark");
        }
      }     
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each( function () {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");  
          }
        },
        offset: "20%"
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");  
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;