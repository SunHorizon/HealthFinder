

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
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b6b6b" }],
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