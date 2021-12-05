const sectionElement = document.querySelector("section");

const h2Element = document.createElement("h2");
h2Element.classList.add("container-shows__heading");
h2Element.innerText = "Shows";
sectionElement.appendChild(h2Element);

let showsArray = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

// const ulDesktopHeading = document.createElement("ul");
// ulDesktopHeading.classList.add(
//   "container-shows__dates-locations--desktop-heading"
// );
// sectionElement.appendChild(ulDesktopHeading);

// headerList.forEach((x) => {
//   const liDesktopHeading = document.createElement("li");
//   liDesktopHeading.classList.add("container-shows__desktop-info-type");
//   liDesktopHeading.innerText = x;
//   document
//     .querySelector(".container-shows__dates-locations--desktop-heading")
//     .appendChild(liDesktopHeading);
// });

// const divElement = document.createElement("div");
// divElement.classList.add("container-shows__desktop-display");
// sectionElement.appendChild(divElement);

// headerList.forEach((x) => {
//   const liMobileHeading = document.createElement("li");
//   liMobileHeading.classList.add("container-shows__desktop-info-type");
//   liMobileHeading.innerText = x;
//   document
//     .querySelector(".container-shows__dates-locations-" + i)
//     .appendChild(liMobileHeading);
// });

// dateList.forEach((x, i) => {
//   const liDateList = document.createElement("li");
//   liDateList.classList.add("container-shows__info-type");
//   liDateList.innerText = x;
//   document
//     .querySelector(".container-shows__dates-locations-" + i)
//     .appendChild(liDateList);
// });

// venueList.forEach((x, i) => {
//   const liVenueList = document.createElement("li");
//   liVenueList.classList.add("container-shows__info-type");
//   liVenueList.innerText = x;
//   document
//     .querySelector(".container-shows__dates-locations-" + i)
//     .appendChild(liVenueList);
// });

/*const ulDesktopHeading = document.createElement("ul");
ulDesktopHeading.classList.add(
  "container-shows__dates-locations--desktop-heading"
);
sectionElement.appendChild(ulDesktopHeading);

const liElement = document.createElement("li");
liElement.classList.add("container-shows__desktop-info-type");
liElement.innerText = "DATE";
let liText = liElement.innerText;
ulElement.appendChild(liElement);

const ulMobileDates1 = document.createElement("ul");
ulMobileDates1.classList.add("container-shows__dates-locations");
divElement.appendChild(ulMobileDates1);*/

showsArray.forEach((show) => {
  const divShowsElement = document.createElement("div");
  divShowsElement.classList.add("container-shows__desktop-display");
  const ulDatesLocations = document.createElement("ul");
  ulDatesLocations.classList.add("container-shows__dates-locations");
  const liDate = document.createElement("li");
  liDate.classList.add("container-shows__info-type");
  liDate.innerText = "DATE";
  const liDateInfo = document.createElement("li");
  liDateInfo.classList.add("container-shows__info-date");
  liDate.innerText = show.date;
  const liVenue = document.createElement("li");
  liVenue.classList.add("container-shows__info-type");
  liVenue.innerText = "VENUE";
  const liVenueInfo = document.createElement("li");
  liVenueInfo.classList.add("container-shows__info-venue");
  liVenueInfo.innerText = show.venue;
  const liLocation = document.createElement("li");
  liLocation.classList.add("container-shows__info-type");
  liLocation.innerText = "LOCATION";
  const liLocationInfo = document.createElement("li");
  liLocationInfo.classList.add("container-shows__info-location");
  liLocationInfo.innerText = show.location;
  const buyTixButton = document.createElement("button");
  buyTixButton.classList.add("container-shows__buy-tickets");
  buyTixButton.innerText = "Buy Tickets";

  divShowsElement.appendChild(ulDatesLocations);
  ulDatesLocations.appendChild(liDate);
  ulDatesLocations.appendChild(liDateInfo);
  ulDatesLocations.appendChild(liVenue);
  ulDatesLocations.appendChild(liVenueInfo);
  ulDatesLocations.appendChild(liLocation);
  ulDatesLocations.appendChild(liLocationInfo);
  divShowsElement.appendChild(buyTixButton);

  sectionElement.appendChild(divShowsElement);
});
