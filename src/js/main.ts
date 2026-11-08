let placeUrl = "https://api.inaturalist.org/v1/places/";
let idUrl = "https://api.inaturalist.org/v1/identifications";

export async function searchHandler(event: Event, query: string) {
    console.log("Search triggered: ", query);
    event.preventDefault();

    try {
        let placeResponse = await fetch(`${placeUrl}${encodeURIComponent(query)}`);
        let placeResults = await placeResponse.json();
        
        const placeId = placeResults.results[0].id;

        console.log(placeResults);

        let idResponse = await fetch(`${idUrl}?current=true&place_id=${placeId}&order=desc&order_by=created_at`);

        let idResults = await idResponse.json();

        console.log(idResults.results);

        const identificationObject = {
            "name": "",
            "image": ""
        }

        return idResults;
    } catch(error: any) {
        console.log(error);
    }
}

export async function getIdentifications(url: string) {
    
}

export async function populateResults() {
    
}