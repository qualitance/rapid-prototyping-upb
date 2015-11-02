angular.module('ServicesModule').factory('RestaurantsService', [ function() {

  var restaurantsObj = {};

  restaurantsObj.data = [
    {
      name : "McDonalds",
      img: "https://lh4.googleusercontent.com/-Ykwm0lAAjBc/VgE-ZL3PeMI/AAAAAAAAAoY/-2PvWh7vKKU/s648/mcd_800x800.jpg",
      rating: 4,
      address:,
      comments: []
    },
    {
      name : "KFC",
      img: "https://lh4.googleusercontent.com/-Ykwm0lAAjBc/VgE-ZL3PeMI/AAAAAAAAAoY/-2PvWh7vKKU/s648/mcd_800x800.jpg",
      rating: 4,
      address:,
      comments: []
    },
    {
      name : "La mama",
      img: "https://lh4.googleusercontent.com/-Ykwm0lAAjBc/VgE-ZL3PeMI/AAAAAAAAAoY/-2PvWh7vKKU/s648/mcd_800x800.jpg",
      rating: 4,
      address:,
      comments: []
      
    },
    {
      name : "Subway",
      img: "https://lh4.googleusercontent.com/-Ykwm0lAAjBc/VgE-ZL3PeMI/AAAAAAAAAoY/-2PvWh7vKKU/s648/mcd_800x800.jpg",
      rating: 4,
      address:,
      comments: []
      
    },
    {
      name : "Pizza Hut",
      img: "https://lh4.googleusercontent.com/-Ykwm0lAAjBc/VgE-ZL3PeMI/AAAAAAAAAoY/-2PvWh7vKKU/s648/mcd_800x800.jpg",
      rating: 4,
      address:,
      comments: []
    }

  ];

  return restaurantsObj;

}]);