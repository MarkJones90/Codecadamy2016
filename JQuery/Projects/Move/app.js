var main = function() {
  
    var cities = [
      "Aberdeen",
      "Ashington",
      "Ashurst",
      "Brighton",
      "Chichester",
      "Steyning",
      "Horsham",
      "Worthing",
      "Southwater",
      "Ferring",
      "Storrington",
      "Washington",
      "West Chiltington",
      "Billingshurst"
    ];

    $( "#findyourcity" ).autocomplete({
      source: cities
    });
};
 
$(document).ready(main);
