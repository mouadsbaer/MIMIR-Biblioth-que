function redirectToPage() {
    const select = document.getElementById('cat');
    const selectedValue = select.value;
    
    if (selectedValue !== 'all') {
        window.location.href = selectedValue + '.html';
    }
}