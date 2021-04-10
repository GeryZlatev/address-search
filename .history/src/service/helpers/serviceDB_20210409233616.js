const baseURL = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=';
export const suggest = (data) => {
    fetch(`${baseURL}${data}`)
        .then(res => res.json())
    .then(data => console.log(data))
}