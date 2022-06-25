ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [48.00878157, 37.79983749],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [48.00878157, 37.79983749]
            },
            properties: {
                iconContent: 'Клуб Hazzer',
                hintContent: 'С 20:00 до 5:00'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        })

    myMap.geoObjects.add(myGeoObject);
}

