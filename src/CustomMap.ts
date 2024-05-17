/// <reference types="@types/google.maps" />

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    getContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0,
                },
            }
        );
    }

    addMarker(mappabble: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappabble.location.lat,
                lng: mappabble.location.lng,
            },
        });

        const window = new google.maps.InfoWindow({
            content: mappabble.getContent(),
        });

        marker.addListener("click", () => {
            window.open(this.googleMap, marker);
        });
    }
}
