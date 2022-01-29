//theme switch
const checkBox = document.getElementById('checkBox');

checkBox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});