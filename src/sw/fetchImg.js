console.log("Starting");
let image;

fetch("coffee.jpg")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      console.log("It worked :)");
      return response.blob();
    }
  })
  .then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement("img");
    image.src = objectURL;
    document.body.appendChild(image);
  })
  .catch(e => {
    console.log(
      "There has been a problem with your fetch operation: " + e.message
    );
  });

// async function myFetch() {
//   let response = await fetch('coffee.jpg');

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   } else {
//     let myBlob = await response.blob();

//     let objectURL = URL.createObjectURL(myBlob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);
//   }
// }

// myFetch()
// .catch(e => {
//   console.log('There has been a problem with your fetch operation: ' + e.message);
// });

// async function myFetch() {
//   try {
//     let response = await fetch('coffee.jpg');

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     } else {
//       let myBlob = await response.blob();
//       let objectURL = URL.createObjectURL(myBlob);
//       let image = document.createElement('img');
//       image.src = objectURL;
//       document.body.appendChild(image);
//     }
//   } catch(e) {
//     console.log(e);
//   }
// }

// async function myFetch() {
//   let response = await fetch('coffee.jpg');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   } else {
//     return await response.blob();
//   }
// }

// myFetch().then((blob) => {
//   let objectURL = URL.createObjectURL(blob);
//   let image = document.createElement('img');
//   image.src = objectURL;
//   document.body.appendChild(image);
// })
// .catch((e) =>
//   console.log(e)
// );

console.log("All done!");
