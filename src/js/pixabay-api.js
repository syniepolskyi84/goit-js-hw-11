export default getPictures;

    function getPictures(query) {

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "47437973-d70be85f5be71cfd9f8f29695";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    
    return fetch(`${BASE_URL}?${params}`)
       .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
       })
};

console.log(getPictures());