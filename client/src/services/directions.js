


async function getDirections(destinationAddress, originAddress, setDirections){
    const origin = {
        lat: originAddress.geometry.location.lat(),
        lng: originAddress.geometry.location.lng(),
    };
    const destination = destinationAddress
    const { DirectionsService } = await google.maps.importLibrary("routes");
    const directionsService = new DirectionsService();

    const panel = document.getElementById("directions-panel");
    if (panel) panel.innerHTML = "<h3>Directions</h3>";

    directionsService.route(
        {
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
            if(status === google.maps.DirectionsStatus.OK){
                setDirections(result);
            }else{
                console.error("Error fetching directions", status);
            }
        }
    )
}

export default getDirections;