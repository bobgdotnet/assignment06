window.addEventListener('load', () => {
    document.getElementById('empForm').addEventListener('submit', e => {
        e.preventDefault();
        [...e.target.elements].forEach(element => element.id && console.log(`${element.id}: ${element.value}`));
    });
});