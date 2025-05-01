import { useMap } from "@vis.gl/react-google-maps";



async function searchNearby(place, radius, healthTypes){
    const { Place, SearchNearbyRankPreference } = await google.maps.importLibrary("places");

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    const resultMap = new Map();

    const shiftAmount = radius / 2;
    const steps = [-1,0,1];

    for(let dx of steps){
      for(let dy of steps){
        const shiftedLat = lat + (dx * shiftAmount) / 111320;
        const shiftedLng = lng + (dy * shiftAmount) /  (111320 * Math.cos((lat * Math.PI) / 180));

        const center = new google.maps.LatLng(shiftedLat, shiftedLng);
        const request = {
          // required parameters
          fields: ["displayName", "location", "businessStatus", "types", "formattedAddress", "websiteURI"],
          locationRestriction: {
            center: center,
            radius: radius,
          },
          includedPrimaryTypes: healthTypes,
          rankPreference: SearchNearbyRankPreference.DISTANCE,
       };

       const { places } = await Place.searchNearby(request);

       for(const p of places || []){
        const key = p.Eg.id || `${p.Eg.location.lat}_${p.Eg.location.lng}`;
        if(!resultMap.has(key)){
          resultMap.set(key, p);
        }
       }
      }
    }

    return Array.from(resultMap.values());
}


export function identifyPlaceType(place){
  const validTypes = ["doctor", "pharmacy", "hospital", "drugstore", "dentist", "physiotherapist"];
  if(place.Eg.types && place.Eg.types.length > 0){
    const type = place.Eg.types[0];
    return validTypes.includes(type) ? type : 'default';
  }

}

export default searchNearby;