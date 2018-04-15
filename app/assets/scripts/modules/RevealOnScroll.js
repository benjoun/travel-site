import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints' ;

class RevealOnScroll {
  constructor( els, offset ) {
    this.elsToReveal = els;
    // The order of those lines matter!!! offsetPercentage 
    // has to be set before this.createWayPoints() is called !!!
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially() {
    this.elsToReveal.addClass("reveal-item");
  }

  createWayPoints() {
    var that = this;
    // each function from jQuery to loop on each item of the collection itemsToReveal
    // jquery makes "this" in the function the element process by each
    this.elsToReveal.each(function() {
      // this won't be the element we want to process in Waypoint (this will refer to the Waypoint object created)
      var currentEl = this;
      new Waypoint( {
        element: currentEl,
        handler: function() {
          // we use the jquery selector $ to apply jquery function
          $(currentEl).addClass("reveal-item--is-visible");
        },
        // by default the offset is at 0 ... so the event is fired only when the element to display 
        // is at the top of the viewport .. and it is nicer if it is fired before for example 
        // when at 75% of the heigth of the viewport
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;