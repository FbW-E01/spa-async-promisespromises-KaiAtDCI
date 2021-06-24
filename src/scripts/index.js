// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

const modalElement = document.getElementById('myModal');

function showModal() {
    modalElement.style.display = 'flex';
    modalElement.addEventListener('click', () => {
        modalElement.style.display = 'none';
        // remove event listener again?!
    })
}

const delay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
})
delay.then(showModal)

