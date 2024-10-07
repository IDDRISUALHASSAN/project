const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('search');

searchButton.addEventListener('click', searchFunction);

function searchFunction() {
  const searchValue = searchInput.value.trim().toLowerCase();

  if (searchValue !== '') {
    if (searchValue === 'hassan') {
      alert('Do you want to read about Alhassan?');
    } 
    
    else if(searchValue ==='mr. kofi '  || searchInput === 'kofi'){
         alert('do you want to learn about kofi ');
    }
    else {
      alert(` ${searchValue} is not a member of this family`);
    }
  } else {
    alert('Please enter a search term');
  }
}
