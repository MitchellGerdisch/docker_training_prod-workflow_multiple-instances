/// <reference types="@types/googlemaps" />

// Interface needed for the addMarker method.
// Any object/class that has a location object and a markerContent() function will match
interface mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  // Method for adding a marker at given lat/long
  addMarker(mappable: mappable): void {
    // CMD-click on Marker and you'll see it takes a "map marker options" interface (i.e. object)
    // containing the map object and for position, one possibility is at "LatLngLiteral" which is an object as created for "position" above.
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
      animation: 2,
    });

    // The info window gets created on click when the marker is created
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
