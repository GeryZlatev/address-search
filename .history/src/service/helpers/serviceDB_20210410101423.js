const baseURLsuggest = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=';

const baseURLfindAddressCandidates = ''


export const suggest = (data) => {
    return fetch(`${baseURLsuggest}${data}`)
            .then(res => res.json())
    
}

export const findAddress = (data) => {

}