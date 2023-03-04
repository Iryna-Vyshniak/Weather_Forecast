// import { createClient } from 'pexels';

// export function setBackground(query) {
//   const client = createClient(
//     '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74'
//   );

//   const defaultImg =
//     'https://ik.imagekit.io/irinavn2011/sunflowers-7122336.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677946301169';

//   const randomNumber = max => {
//     return Math.floor(Math.random() * max);
//   };

//   client.photos
//     .search({
//       query,
//       per_page: 40,
//       size: 'large',
//     })
//     .then(data => {
//       const index = randomNumber(data.photos.length);
//       console.log('data', data);
//       const { large2x: src = defaultImg } = data.photos[index]?.src ?? {};

//       const today = new Date();
//       const dayHour = today.getHours();

//       if (dayHour >= 11 && dayHour <= 17) {
//         document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0),  rgba(255, 247, 3, 0.366)),
//       url('${src}') center fixed; background-size: cover;`;
//       } else if (dayHour >= 5 && dayHour <= 11) {
//         document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(2, 107, 220, 0.647)),
//       url('${src}') center fixed; background-size: cover;`;
//       } else if (dayHour >= 18 && dayHour <= 23) {
//         document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(104, 24, 2, 0.514)),
//       url('${src}') center fixed; background-size: cover;`;
//       } else {
//         document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(32, 1, 85, 0.576)),
//       url('${src}') center fixed; background-size: cover;`;
//       }
//     });
// }

export function setBackground(query) {
  const API_KEY = '28194821-49041d995ecd04735d9e20d11';

  const defaultImg = `https://ik.imagekit.io/irinavn2011/sunflowers-7122336.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1677946301169`;

  const randomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`)
    .then(response => response.json())
    .then(data => {
      // console.log('data', data);
      const index = randomNumber(data.hits.length);
      // console.log(index);
      // console.log('data', data.hits.length);

      const src = data.hits[index]?.largeImageURL ?? defaultImg;

      // console.log(src);

      const today = new Date();
      const dayHour = today.getHours();

      if (dayHour >= 11 && dayHour <= 17) {
        document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0),  rgba(255, 247, 3, 0.5)),
      url('${src}') center fixed; background-size: cover;`;
      } else if (dayHour >= 5 && dayHour <= 11) {
        document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(2, 107, 220, 0.5)),
      url('${src}') center fixed; background-size: cover;`;
      } else if (dayHour >= 18 && dayHour <= 23) {
        document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(104, 24, 2, 0.5)),
      url('${src}') center fixed; background-size: cover;`;
      } else {
        document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(32, 1, 85, 0.5)),
      url('${src}') center fixed; background-size: cover;`;
      }
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}
