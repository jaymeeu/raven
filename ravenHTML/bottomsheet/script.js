document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('open-bottom-sheet');
    const closeButton = document.getElementById('close-bottom-sheet');
    const bottomSheet = document.getElementById('bottom-sheet');

    openButton.addEventListener('click', () => {
        bottomSheet.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        bottomSheet.classList.remove('active');
    });
});
