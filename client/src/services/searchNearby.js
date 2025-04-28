


async function searchNearby(place, radius){
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");

    let center = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
    const request = {
        // required parameters
        fields: ["displayName", "location", "businessStatus"],
        locationRestriction: {
          center: center,
          radius: radius,
        },
        // optional parameters
        includedPrimaryTypes: ["restaurant"],
        maxResultCount: 5,
        rankPreference: SearchNearbyRankPreference.POPULARITY,
        language: "en-US",
      };

    const { places } = await Place.searchNearby(request);
    if(places.length) console.log(places);
}

export default searchNearby;