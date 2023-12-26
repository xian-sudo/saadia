
// Example of loading publications dynamically (mock data)
document.addEventListener('DOMContentLoaded', function() {
    const publicationsList = document.getElementById('publications-list');
    
    // Mock data - replace with real data source or API call
    const publications = [
        'Publication Title One - Journal Name',
        'Publication Title Two - Conference Proceedings',
        'Publication Title Three - Journal Name',
    ];

    publications.forEach(pub => {
        const listItem = document.createElement('li');
        listItem.textContent = pub;
        publicationsList.appendChild(listItem);
    });
});
