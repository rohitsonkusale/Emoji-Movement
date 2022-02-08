const closedFaced = document.querySelector('.closed')
const openFaced = document.querySelector('.open')

// All Event Listener.

closedFaced.addEventListener('click',() =>{
    if (openFaced.classList.contains('open')){
        openFaced.classList.add('active');
        closedFaced.classList.remove('active');
    }
});

openFaced.addEventListener('click', () => {
    if (closedFaced.classList.contains('closed')){
        closedFaced.classList.add('active');
        openFaced.classList.remove('active');
    }
});