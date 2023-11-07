// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (event) => {
    let allBreeds=[];
    const breedsList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
   

    
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
        fetch(imgUrl)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            const images = data.message; // Assuming the API returns the images in a property called 'message'
            const container = document.getElementById('dog-image-container');
    
            // Clear the container
            container.innerHTML = '';
    
            // Add img elements to the container
            images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Dog image';
            container.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
    
        const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breedsObject = data.message;
            breedsList.innerHTML = ''; // Clear the list

            // Populate allBreeds array and create list items for each breed
            for (const breed in breedsObject) {
                if (breedsObject[breed].length > 0) {
                    breedsObject[breed].forEach(subBreed => {
                        allBreeds.push(`${breed} (${subBreed})`);
                    });
                } else {
                    allBreeds.push(breed);
                }
            }

            populateBreedsList(allBreeds); // Populate the list with all breeds initially
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Function to update the breeds list in the DOM
    function populateBreedsList(breeds) {
        breedsList.innerHTML = ''; // Clear the list
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedsList.appendChild(li);
        });
    }

    // Function to change the color of list items
    function changeLiColor(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'blue';
        }
    }

    breedsList.addEventListener('click', changeLiColor);

    // Function to filter breeds by the selected letter
    function filterBreedsByLetter(letter) {
        const filteredBreeds = allBreeds.filter(breed => breed.toLowerCase().startsWith(letter));
        populateBreedsList(filteredBreeds);
    }

    // Event listener for the dropdown
    breedDropdown.addEventListener('change', function(event) {
        const selectedLetter = event.target.value.toLowerCase();
        filterBreedsByLetter(selectedLetter);
    });
});


