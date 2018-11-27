// initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте.
    var centerLatLng = new google.maps.LatLng(54.728518, 20.510836);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);