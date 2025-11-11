let map;
let markers = [];
let service;
let autocomplete;
let userLocation = { lat: 35.4676, lng: -97.5164 }; // default = OKC campus

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: userLocation,
    zoom: 14,
  });

  service = new google.maps.places.PlacesService(map);

  // Try to get user's live location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        map.setCenter(userLocation);
        console.log("Using user's current location:", userLocation);
        initializeSearchFeatures();
      },
      () => {
        alert("Could not get your location — showing Oklahoma City campus instead.");
        map.setCenter(userLocation);
        initializeSearchFeatures();
      }
    );
  } else {
    console.log("Geolocation not supported, using default location.");
    initializeSearchFeatures();
  }
}

function initializeSearchFeatures() {
  const input = document.getElementById("placeSearch");
  const searchBtn = document.getElementById("searchBtn");

  // Autocomplete setup
  autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();

    if (!place.geometry || !place.geometry.location) {
      alert("No details available for: '" + place.name + "'");
      return;
    }

    map.setCenter(place.geometry.location);
    map.setZoom(15);

    // Show top 5 places near the selected location
    searchNearbyPlaces(place.geometry.location || userLocation, place.name.replace(/near me/gi, "").trim());
  });

  // Manual search button
  searchBtn.addEventListener("click", () => {
    const query = input.value.trim();
    if (!query) {
      alert("Please enter a place to search.");
      return;
    }
    searchNearbyPlaces(userLocation, query.replace(/near me/gi, "").trim());
  });
}

function searchNearbyPlaces(location, query) {
  // 🧹 Clean up user input
  query = query
    .replace(/top\s*\d*/gi, "")
    .replace(/near me/gi, "")
    .trim()
    .toLowerCase();

  // 🗺️ Map common words to Google types
  const typeMap = {
    school: "school",
    schools: "school",
    restaurant: "restaurant",
    restaurants: "restaurant",
    coffee: "cafe",
    "coffee shop": "cafe",
    "coffee shops": "cafe",
    cafe: "cafe",
    gas: "gas_station",
    "gas station": "gas_station",
    library: "library",
    park: "park",
    hospital: "hospital",
    grocery: "supermarket",
    "grocery store": "supermarket",
  };

  // detect if query matches a known type
  let placeType = null;
  for (const key in typeMap) {
    if (query.includes(key)) {
      placeType = typeMap[key];
      break;
    }
  }

  const request = {
    location: location,
    radius: 10000, // increase radius for more results
    keyword: query,
  };

  if (placeType) {
    request.type = placeType;
  }

  service.nearbySearch(request, (results, status) => {
    const resultsDiv = document.querySelector(".results");

    if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
      const topFive = results.slice(0, 5);
      clearMarkers();
      displayResults(topFive);
      topFive.forEach((place) => {
        if (place.geometry && place.geometry.location) {
          addMarker(place);
        }
      });
    } else {
      clearMarkers();
      resultsDiv.innerHTML = `<p>No results found for "${query}".</p>`;
      console.warn("No results or API status:", status, results);
    }
  });
}


function addMarker(place) {
  const marker = new google.maps.Marker({
    position: place.geometry.location,
    map,
    title: place.name,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<div><strong>${place.name}</strong><br>${place.vicinity || "No address"}</div>`,
  });

  marker.addListener("click", () => infoWindow.open(map, marker));
  markers.push(marker);
}

function clearMarkers() {
  markers.forEach((m) => m.setMap(null));
  markers = [];
}

function displayResults(places) {
  const resultsDiv = document.querySelector(".results");
  resultsDiv.innerHTML = ""; // Clear old results

  places.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.marginBottom = "12px";
    card.style.padding = "10px";
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "6px";
    card.style.background = "#fff";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";

    const name = place.name || "Unknown";
    const address = place.vicinity || place.formatted_address || "No address available";
    const rating = place.rating ? `${place.rating} ⭐` : "No rating";
    const openNow =
      place.opening_hours && place.opening_hours.open_now
        ? "🟢 Open Now"
        : "🔴 Closed";

    card.innerHTML = `
      <h3 style="margin:4px 0">${name}</h3>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Rating:</strong> ${rating}</p>
      <p><strong>Status:</strong> ${openNow}</p>
    `;

    // Click on a card zooms to marker
    card.addEventListener("click", () => {
      if (place.geometry && place.geometry.location) {
        map.setCenter(place.geometry.location);
        map.setZoom(16);
      }
    });

    resultsDiv.appendChild(card);
  });
}
