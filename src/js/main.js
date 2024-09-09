let landingPage = document.getElementById('landing-page');
const tableUl = document.getElementById('tableUl');

async function getDataLandingPage() {
    landingPage.innerHTML = '';
    let ul = document.createElement('ul');

    try {
        let response = await fetch('http://localhost:4000/desserts');
        if (response.ok) {
            let data = await response.json();
            
            data.forEach(element => {
                let li = document.createElement('li');
                
                let imageSource = '';
                let initial = element.image;

                switch (initial) {
                    case 'strawberry-and-basil.svg': 
                        imageSource = '../../assets/Firefly Strawberry and basil with cream desert on a white background 59251.png';
                        break;
                    case 'walnuts-and-honey.svg': 
                        imageSource = '../../assets/Firefly Yogurt, Walnuts and Honey desert on a white background 1445.png';
                        break;
                    case 'bacon-and-blueberry.svg': 
                        imageSource = '../../assets/Firefly Bacon and blueberry desert on a white background 11617.png';
                        break;
                    case 'crispy-sunflower-seed-with-cream.svg': 
                        imageSource = '../../assets/Firefly Crispy sunflower seed with cream desert on a white background 1445.png';
                        break;
                }

                li.innerHTML = `
                    <img src="${imageSource}" alt="${element.name.toLowerCase()}">

                    <img class="stars" src="./assets/Sub Title Element.png" alt="a star with two lines">
                    <h2>${element.name}</h2>

                    <p>${element.description_short}</p>
                    <a href="#">НАУЧЕТЕ ПОВЕЧЕ</a>
                `

                ul.appendChild(li);
            });

            landingPage.appendChild(ul);
        }
        else {
            throw new Error('Failed to get data');
        }
    }
    catch (e) {
        console.error(e.message);
    }
}

async function getTableData() {
    tableUl.innerHTML = '';

    try {
        let response = await fetch('http://localhost:4000/desserts');
        if (response.ok) {
            let data = await response.json();
            
            data.forEach(element => {
                let li = document.createElement('li');
                li.className = 'dessert-cards';
                
                let imageSource = '';
                let initial = element.image;

                switch (initial) {
                    case 'strawberry-and-basil.svg': 
                        imageSource = '../../assets/Firefly Strawberry and basil with cream desert on a white background 59251.png';
                        break;
                    case 'walnuts-and-honey.svg': 
                        imageSource = '../../assets/Firefly Yogurt, Walnuts and Honey desert on a white background 1445.png';
                        break;
                    case 'bacon-and-blueberry.svg': 
                        imageSource = '../../assets/Firefly Bacon and blueberry desert on a white background 11617.png';
                        break;
                    case 'crispy-sunflower-seed-with-cream.svg': 
                        imageSource = '../../assets/Firefly Crispy sunflower seed with cream desert on a white background 1445.png';
                        break;
                }

                li.innerHTML = `
                                <img src="${imageSource}" alt="${element.name.toLowerCase()}">

                                <section class="desserts-title-description">
                                    <h3>${element.name}</h3>
                                    <p class="desserts">${element.description_long}</p>
                                    <p><strong>Основни съставки</strong>: ${element.ingredients_text}.</p>
                                </section>

                                <section class="food-table">
                                    <article>
                                        <p>Калории:</p>
                                        <strong>${element.nutrition.calories}g</strong>
                                    </article>
                                    <article>
                                        <p>Общо мазнини:</p>
                                        <strong>${element.nutrition.totalFat}g</strong>
                                    </article>
                                    <article>
                                        <p>Наситени мазнини:</p>
                                        <strong>${element.nutrition.saturatedFat}g</strong>
                                    </article>
                                    <article>
                                        <p>Общо въглехидрати:</p>
                                        <strong>${element.nutrition.totalCarbs}g</strong>
                                    </article>
                                    <article>
                                        <p>Протеин:</p>
                                        <strong>${element.nutrition.protein}g</strong>
                                    </article>
                                    <article>
                                        <p>Захари:</p>
                                        <strong>${element.nutrition.sugars}g</strong>
                                    </article>
                                    <article>
                                        <p>Натрий:</p>
                                        <strong>${element.nutrition.sodium}mg</strong>
                                    </article>
                                    <article>
                                        <p>Холестерол:</p>
                                        <strong>${element.nutrition.cholesterol}mg</strong>
                                    </article>
                                </section>
                `

                tableUl.appendChild(li);
            });
        }
        else {
            throw new Error('Failed to get data');
        }
    }
    catch (e) {
        console.error(e.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getDataLandingPage();
    getTableData();
});

const form = document.getElementById('submit-form');

form.addEventListener('submit', () => {
    submitData();
});

async function submitData() {
    const nameForm = document.getElementById('name');
    const phoneForm = document.getElementById('phone');
    const emailForm = document.getElementById('email');
    const questionForm = document.getElementById('question');

    try {
        let name = nameForm.value;
        let phone = phoneForm.value;
        let email = emailForm.value;
        let question = questionForm.value;

        const obj = {
            'name': name,
            'phone': phone,
            'email': email,
            'question': question
        }

        let req = await fetch('http://localhost:4000/form_submissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });
    }
    catch (err) {
        console.error(err);
    }
}