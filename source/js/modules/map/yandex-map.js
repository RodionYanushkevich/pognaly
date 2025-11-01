const mapContainer = document.querySelector('[data-map]')
const centerButton = document.querySelector('[data-button="map-center-button"]');
const routeButton = document.querySelector('[data-button="map-route-button"]');
const markerElement = document.querySelector('[data-el="map-marker"]');
const location = [30.323037, 59.938631];

const  openYandexMapsRoute = (location) => {
    const [lon, lat] = location;
    const url = `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`;
    window.open(url, '_blank');
}

async function initMap() {
if (!mapContainer) {
  return
}

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

    const marker = new YMapMarker({
            coordinates: location,
            draggable: false,
            mapFollowsOnDrag: false,
        },
        markerElement
    );

  centerButton.addEventListener('click', () => {
    map.setLocation({
      center: location,
      zoom: 17
    });
  });

  routeButton.addEventListener('click', () => {
    openYandexMapsRoute(location);
  });
    map.addChild(marker);
}

export {initMap};
