const openBox1Button = document.getElementById('link1');
const openBox2Button = document.getElementById('link2');
const openBox3Button = document.getElementById('link3');

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const closeButtons = document.querySelectorAll('#close');

const overlay = document.createElement('div');
overlay.classList.add('popup-overlay');

openBox1Button.addEventListener('click', () => {
    openPopup(box1);
});

openBox2Button.addEventListener('click', () => {
    openPopup(box2);
});

openBox3Button.addEventListener('click', () => {
    openPopup(box3);
});

closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        closePopup();
    });
});

function openPopup(box) {
    document.body.appendChild(overlay);
    box.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    overlay.remove();
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'none';
    document.body.style.overflow = 'auto';
}



