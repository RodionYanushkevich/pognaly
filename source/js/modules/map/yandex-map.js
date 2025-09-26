const mapContainer = document.querySelector('[data-map]')

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapMarker,YMapDefaultFeaturesLayer} = ymaps3;

    const map = new YMap(
        mapContainer,

        {
            location: {
                center: [30.325 , 59.938031],
                zoom: 17
            }
        },
    );

    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer())

    const markerElement = document.createElement('div');
    markerElement.className = 'map__marker';


    const marker = new YMapMarker({
            coordinates: [30.323037, 59.938631],
            draggable: false,
            mapFollowsOnDrag: false,
        },
        markerElement
    );

    map.addChild(marker);
}

export {initMap};
