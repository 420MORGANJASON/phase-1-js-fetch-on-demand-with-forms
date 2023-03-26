const init = () => {
  const inputForm = document.querySelector('form');
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
     const input = document.querySelector("#movie");

     fetch(`http://localhost:3000/movies/${input.Form}`)
  .then(response => response.json())
  .then(data => {
    const title = document.querySelector.childNode('#movieDetails');
    const summary = document.querySelector.childnode('#movieDetails');

    title.innerText = data.title;
    summary.innerText = data.summary;
  });

  console.log(input.value);

  //   fetch(`http://localhost:3000/movies/${input.value}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //         });
  // });
}
  //  event.target.children[1].value
  document.addEventListener('DOMContentLoaded', init);


//   const inputForm = document.querySelector('form')

//   inputForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = document.querySelector('input#searchByID');

//     fetch(`http://localhost:3000/movies/${input.value}`)
//     .then(response => response.json())
//     .then(data => {
//       const title = document.querySelector('section#movieDetails h4');
//       const summary = document.querySelector('section#movieDetails p');

//       title.innerText = data.title;
//       summary.innerText = data.summary;
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', init);

const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
      
      fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
     
     const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
       
     title.innerText = data.title;
    summary.innerText = data.summary;
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

explorer.exe index.html