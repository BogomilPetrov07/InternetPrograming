function toggleDescription(item) {
    const description = item.querySelector('.description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}