// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

function showModal() {
    document.getElementById('myModal').style.display = 'flex';
}

const delay = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
})
delay.then(showModal)

