// const BASE = "https://pixabay.com/api/";
// const KEY = "24061129-288dc6abfa1f4d8fd1e3dc1ee";

// function FetchApi(value, page) {
//   const url =
//     BASE +
//     `?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   return fetch(url).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(new Error(`Oops, something went wrong.`));
//   });
// }
// export default FetchApi;

import Container from "../constainer/constainer";
import React, { useState, useEffect } from "react";

function FetchApi() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const KEY = `qcVwXNAjcIaQlfMmofYyStZVd43phJMqUnZ7G0P2VTg8z7ItSGmN96sQ`;

    fetch("https://api.pexels.com/v1/search?query=computer", {
      headers: {
        Authorization: KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  return (
    <Container>
      <div>
        <h1>Hello Groups Файл АПИ</h1>
        {photos.map((photo) => (
          <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
        ))}
      </div>
    </Container>
  );
}

export default FetchApi;
