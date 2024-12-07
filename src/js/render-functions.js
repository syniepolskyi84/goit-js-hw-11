
export default reflectionPictures;

 function reflectionPictures(pictures) {
    return pictures.map(
        ({ webformatURL, largeImageURL, tags,
            likes, views, comments, downloads }) => `
   <a class="gallery-item" href="${largeImageURL}">
   <div class=all-gallary>
   <img src="${webformatURL}" alt="${tags}">
   <div class="description">
   <p>Likes: <span>"${likes}"</span></p>
   <p>Views: <span>"${views}"</span></p>
   <p>Comments: <span>"${comments}"</span></p>
   <p>Downloads: <span>"${downloads}"</span></p>
   </div>
   </div>
   </a>
    `).join("");
}