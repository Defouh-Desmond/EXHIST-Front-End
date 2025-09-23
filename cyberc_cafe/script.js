const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
};

const listItems = document.querySelectorAll('.list-item a');
listItems.forEach(anchor => {
    anchor.onclick = (e) => {
        e.preventDefault();
        const listItemElements = document.querySelectorAll('.list-item');
        listItemElements.forEach(otherItem => otherItem.classList.remove('active'));
        anchor.parentElement.classList.add('active');
    };
});
