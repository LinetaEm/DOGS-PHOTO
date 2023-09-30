// 1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.


// function getRandomDogImage() {
//     const breedSelect = document.getElementById("breedSelect");
//     const selectedBreed = breedSelect.value;
//     let apiUrl = "https://dog.ceo/api/breeds/image/random";

//     if (selectedBreed !== "random") {
//         apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
//     }

//     fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//             const dogImageContainer = document.getElementById("dogImage");
//             dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random">`;
//         });
// }

// 2. Jeigu šuns veislė yra išvestinė (sub-breed), tai šalia ji turėtų būti atvaizduojama parašant pagrindinės veislės pavadinimą (breed) ir šalia išvestinės veislės pavainimą (sub-breed).

// viena kategorija
// antra kategorija
// Bulldog (French)
// Bulldog (English)
// Bulldog (Boston)
// ketvirta kategorija

function getRandomDogImage() {
    const breedSelect = document.getElementById("breedSelect");
    const selectedBreed = breedSelect.value;
    let apiUrl = "https://dog.ceo/api/breeds/image/random";

    if (selectedBreed !== "random") {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/list`)
            .then((response) => response.json())
            .then((data) => {
                const subBreeds = data.message;

                if (subBreeds.length > 0) {
                    const randomSubBreed = subBreeds[Math.floor(Math.random() * subBreeds.length)];

                    const breedInfo = document.getElementById("breedInfo");
                    breedInfo.textContent = `${selectedBreed} (${randomSubBreed})`;

                    apiUrl = `https://dog.ceo/api/breed/${selectedBreed}/${randomSubBreed}/images/random`;

                    fetch(apiUrl)
                        .then((response) => response.json())
                        .then((data) => {
                            const dogImageContainer = document.getElementById("dogImage");
                            dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
                        });
                } else {
                    breedInfo.textContent = selectedBreed;

                    fetch(apiUrl)
                        .then((response) => response.json())
                        .then((data) => {
                            const dogImageContainer = document.getElementById("dogImage");
                            dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
                        });
                }
            });
    } else {
        document.getElementById("breedInfo").textContent = "";

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const dogImageContainer = document.getElementById("dogImage");
                dogImageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog">`;
            });
    }
}





