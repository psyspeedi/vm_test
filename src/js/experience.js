const labelAll = document.querySelectorAll('.checkbox-content');
labelAll.forEach(label => {
    label.addEventListener('click', ()=> {
        let id = label.getAttribute('data-id');
        document.getElementById(id).toggleAttribute('checked')
    })
});