const baseUrl = 'https://acnhapi.com/v1a'

function getVillagers(){
    return fetch (`${baseUrl}/villagers`)
    .then(res => res.json())
}

export {
    getVillagers
}