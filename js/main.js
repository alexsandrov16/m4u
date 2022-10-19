/**
 * M4U
 */

(()=> {
    console.log('Ready');
})()

function openM() {
    document.querySelector('aside').classList.toggle('open');
}

function toggleW(el) {
    document.querySelector('aside').classList.toggle('rail');
    if (document.querySelector('aside').classList.contains('rail')) {
        el.innerText = 'chevron_right';
        console.log('derecha');
    } else {
        el.innerText = 'chevron_left';
        console.log('izq');
    }
}
