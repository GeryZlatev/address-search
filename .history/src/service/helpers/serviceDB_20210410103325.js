const baseURLsuggest = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=';

const baseURLfindAddressCandidates = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine='


export const suggest = (data) => {
    return fetch(`${baseURLsuggest}${data}`)
            .then(res => res.json())
    
}

export const findAddress = (address) => {
    return fetch(`${baseURLfindAddressCandidates}${address}`)
    .then(res => res.json())

}