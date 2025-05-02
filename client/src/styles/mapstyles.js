

export const simplifiedMapStyle = [
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#e2f0d9" }], // Soft green for healthcare relevance
  },
  
  {
    featureType: "poi.attraction",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.government",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.school",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  {
    featureType: "poi.sports_complex",
    elementType: "labels",
    stylers: [{ visibility: "off" }], // Soft green for healthcare relevance
  },
  
  {
    featureType: "poi.medical",
    elementType: "geometry",
    stylers: [{ color: "#b5e1f3" }], // Light blue for hospitals, etc.
  },
  {
    featureType: "poi.medical",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }, { color: "#007ba7" }], // Clear, readable labels
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#cbeeff" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [{ color: "#f7f9fc" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  }
];