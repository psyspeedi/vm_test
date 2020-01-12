// добавление даты рождения в html и поведение открытия списка

const selectYearOpen = document.querySelector('.info-date-div--open');

let arrDate= [];
for(let i = 2002; i >= 1900; i--) {
   arrDate.push(i)
}

arrDate.forEach((year)=>{
    let option = document.createElement('span');
    option.innerHTML = year;
    selectYearOpen.append(option);
});

const selectYear= document.querySelector('.info-date-div');
const selectYearText = selectYear.querySelector('span');
const arrow = document.querySelector('.arrow');
const dateInput = document.getElementById('date');
const year = selectYearOpen.querySelectorAll('span');
const firstItemYear = document.getElementById('firstItemYear');

// открытие списка годов

const toggleMenuYear = () => {
    selectYearOpen.classList.toggle('year-opened');
    arrow.classList.toggle('arrow-opened');
};

// выбор года рождения

const toggleYearStyle = () => {
    if(dateInput.value == '') {
        firstItemYear.style.display = 'none';
    } else firstItemYear.style.display = 'block';
    if (selectYearText.textContent.length == 4) {
        selectYearText.style.color = '#333333'
    } else selectYearText.style.color = '#c8c8c8'
};

selectYear.addEventListener('click', () => {
    toggleMenuYear();
    toggleYearStyle();
});

year.forEach(item => {
    item.addEventListener("click", ()=>{
        if (item.textContent.length == 4) {
            dateInput.value = item.textContent;
        } else dateInput.value = '';
        selectYearText.innerText = item.textContent;
    });
});


// поведение инпутов

const blockInfo = document.querySelector('.info');
const inputArr = blockInfo.querySelectorAll('input');
const toggleInputStyle = (item) => {
    if (item.value) {
        item.parentNode.querySelector('label').classList.add('input-not-empty')
    } else item.parentNode.querySelector('label').classList.remove('input-not-empty')
};

inputArr.forEach(item => {
    item.addEventListener('change', ()=> {
        toggleInputStyle(item);
    })
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == selectYear || selectYear.contains(target);
    const menu_is_active = selectYearOpen.classList.contains('year-opened');

    if (!its_menu && menu_is_active) {
        toggleMenuYear();
    }
});

document.addEventListener('DOMContentLoaded', ()=> {
    inputArr.forEach(item => {
        toggleInputStyle(item);
        selectYearText.innerText = dateInput.value;
        toggleYearStyle();
    });
});
