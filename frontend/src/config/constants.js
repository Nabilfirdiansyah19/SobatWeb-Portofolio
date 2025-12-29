export const CONTACTS = {
  primary: "+6287888082449",
  secondary: "081319878831",
  waLink: (num, msg) => `https://wa.me/${num.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`
};

export const PROJECTS = [
    { id: 1, title: "HotelRes", category: "Booking System", img: hotelResImg },
   { id: 2, title: "Coffee Shop", category: "Food & Beverage", img: coffeeShopImg },
   { id: 3, title: "Berkah Catering", category: "Food & Beverage", img: berkahImg },
   { id: 4, title: "Ran Karoseri", category: "Service", img: ranImg },
   { id: 5, title: "Undangan Pernikahan", category: "Undangan Digital", img: undanganImg }
];