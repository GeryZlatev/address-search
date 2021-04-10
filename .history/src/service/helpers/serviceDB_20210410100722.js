const baseURLsuggest = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=';


export const suggest = (data) => {
    return fetch(`${baseURLsuggest}${data}`)
            .then(res => res.json())
    
}