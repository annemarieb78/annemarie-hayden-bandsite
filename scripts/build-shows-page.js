const sectionElement = document.querySelector("section");

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
  liDateInfo.innerText = show.date;
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
  const dividerLine = document.createElement("hr");
  sectionElement.appendChild(dividerLine);

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
