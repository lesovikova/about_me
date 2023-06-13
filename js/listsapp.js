// Main arrays of data

const skills = [
'Skilled bowman',
'Tracking foes',
'Amazing travelling speed',
'Camouflage and hiding',
'Trapping enemies and beasts',
'Hourseback fighting',
'Wielding a variety of weapons',
'Tailoring and woodwork'
];

const places = [
    'Shire and Yondershire',
    'Bree land',
    'Ered Luin',
    'Lone-lands',
    'North Downs',
    'Evendim',
    'Rivendell',
    'Misty Mountains',
    'Angmar',
    'Forochel',
    'Eregion',
    'Khazad Dum',
    'Mirkwood',
    'Enedwaith',
    'Dunland',
    'Rohan',
    'Gondor'
];

const people = [
    'Gendalf the Wisard',
    'Aragorn, Ranger of the North',
    'Elrond the Half-elven',
    'Gimly the Dwarf and Legolas the Elven Prince',
    'Four Brave Hobbits from Shire',
    'Theoden the King',
    'Boromir the Tragically Dead'
];

// Containers for data

    const skillsItems = document.querySelectorAll(".lists__skill p");
    const placesItems = document.querySelectorAll('.lists__places p');
    const peopleItems = document.querySelectorAll('.lists__people p');

// Assigning data to containers from the start

    function assignItems(items, array) {
        for (let i = 0; i < items.length; i++) {
            items[i].textContent = array[i];
        };
    }
    
assignItems(skillsItems, skills);
assignItems(placesItems, places);
assignItems(peopleItems, people);

// Changing the text of the elements on button click, scrolling up or down

function changeItemsUp(items, array) {
    for (let i = 0; i < items.length; i++) {
        let tracker = array.indexOf(items[i].textContent);
        items[i].textContent = array[--tracker];
        const arrLength = array.length;
        if(tracker == 0) {
            items[i].textContent = array[arrLength - 1];
        } else if (tracker == -1) {
            items[i].textContent = array[arrLength - 2];
        }
    };
}


function changeItemsDown(items, array) {
    for (let i = 0; i < items.length; i++) {
        let tracker = array.indexOf(items[i].textContent);
        items[i].textContent = array[++tracker];
        if (tracker == array.length) {
            items[i].textContent = array[0];
        }
    };
}


document.querySelector('.lists__button-up--skill').addEventListener('click', () => {
    changeItemsUp(skillsItems, skills);
});
document.querySelector('.lists__button-down--skill').addEventListener('click', () => {
    changeItemsDown(skillsItems, skills);
});

document.querySelector('.lists__button-up--places').addEventListener('click', () => {
    changeItemsUp(placesItems, places);
});
document.querySelector('.lists__button-down--places').addEventListener('click', () => {
    changeItemsDown(placesItems, places);
});

document.querySelector('.lists__button-up--people').addEventListener('click', () => {
    changeItemsUp(peopleItems, people);
});
document.querySelector('.lists__button-down--people').addEventListener('click', () => {
    changeItemsDown(peopleItems, people);
});
