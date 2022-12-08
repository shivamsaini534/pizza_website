const deals = [
  {
    id: 1,
    name: "Super Value Deal: 2 Medium Pizzas starting at Rs 649",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one.4c058786a6046d93b64a62e60e79d8b2.1.jpg",
    desc: "Choose any 2 of your medium pizza",
    price: "500 rs",
  },
  {
    id: 2,
    name: "Super Value Deal: 2 Medium Pizzas starting at Rs 649",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one.4c058786a6046d93b64a62e60e79d8b2.1.jpg",
    desc: "Choose any 2 of your medium pizza",
    price: "500 rs",
  },
  {
    id: 3,
    name: "Super Value Deal: 2 Medium Pizzas starting at Rs 649",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one.4c058786a6046d93b64a62e60e79d8b2.1.jpg",
    desc: "Choose any 2 of your medium pizza",
    price: "500 rs",
  },
  {
    id: 4,
    name: "Super Value Deal: 2 Medium Pizzas starting at Rs 649",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/deal/one-plus-one.4c058786a6046d93b64a62e60e79d8b2.1.jpg",
    desc: "Choose any 2 of your medium pizza",
    price: "500 rs",
  },
];

let navDeals = document.querySelector("#nav-deals");
navDeals.innerHTML = `<div class="dealsContainer">
    ${deals.map((deal, index) => {
      return `<div class="card mx-2 my-2 item-deals">
        <img
          src=${deal?.img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">
            ${deal?.name}
          </h5>
          <p class="card-text">${deal?.desc}</p>
          <hr />
          <div class="priceBox">
            <div class="price">price: ${deal?.price}</div>
            <button href="#" class="btn btn-primary deals-btn">
              Add
            </button>
          </div>
        </div>
      </div>`;
    })}
</div>`;

// if user take a deal and save it to localstorage

let dealBtns = document.querySelectorAll(".deals-btn");
console.log("dealsBtns", dealBtns);
dealBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {});
});

const pizzas = [
  {
    id: 1,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 2,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 3,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 4,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 5,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 6,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 7,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
  {
    id: 8,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=450",
    name: "Vegge supreme",
    type: "Cheese",
    base: "Crust",
    price: "Rs 200",
  },
];
let navPizzas = document.querySelector("#nav-pizzas");
navPizzas.innerHTML = `<div class="dealsContainer">
    ${pizzas.map((pizza, index) => {
      const id = pizza.id;
      return `<div class="card mx-2 my-2 item-pizzas" data-el-id=${id}>
        <img
          src=${pizza?.img}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${pizza?.name}</h5>
          <p class="card-text">${pizza?.type}</p>
          <p>${pizza?.base}</p>
          <div class="priceBox">${pizza?.price}
            <a class="btn btn-primary pizzas-btn" data-btn-id=${id}>
              Add
            </a>
          </div>
          </div>
        </div>`;
    })}
      </div>`;

// function addPizza(pizza) {
//   console.log(pizza);
// }

// if user add a pizza and save it to localStorage
const setValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getValue = (key) => {
  return localStorage.getItem(key);
};

let pizzaBtns = document.querySelectorAll(".pizzas-btn");
console.log("pizzasBtns", pizzaBtns);
pizzaBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const pizzaId = e.target.dataset.btnId;
    const pizzaInfo = pizzas?.filter(
      (pizza, index) => pizza.id == pizzaId
    )?.[0];
    let data = [];
    const cartData = JSON.parse(getValue("cart"));
    if (cartData?.length) {
      data = cartData;
    }
    data.push(pizzaInfo);
    setValue("cart", data);
  });
});

const sides = [
  {
    id: 1,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/mexican-garlic-breadstix-single.eab1259910d7d29cdba8ceb2e1b36355.1.jpg?width=450",
    name: "Mexican Garlic Breadstix",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 200",
  },
  {
    id: 2,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/mexican-garlic-breadstix-single.eab1259910d7d29cdba8ceb2e1b36355.1.jpg?width=450",
    name: "Mexican Garlic Breadstix",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 200",
  },
  {
    id: 3,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/mexican-garlic-breadstix-single.eab1259910d7d29cdba8ceb2e1b36355.1.jpg?width=450",
    name: "Mexican Garlic Breadstix",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 200",
  },
  {
    id: 4,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/mexican-garlic-breadstix-single.eab1259910d7d29cdba8ceb2e1b36355.1.jpg?width=450",
    name: "Mexican Garlic Breadstix",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 200",
  },
  {
    id: 5,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/side/mexican-garlic-breadstix-single.eab1259910d7d29cdba8ceb2e1b36355.1.jpg?width=450",
    name: "Mexican Garlic Breadstix",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 200",
  },
];
let navSides = document.querySelector("#nav-sides");
navSides.innerHTML = `<div class="dealsContainer">
${sides.map((side, index) => {
  const id = side.id;
  return `<div class="card mx-2 my-2 item-sides">
  <img
    src=${side?.img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${side?.name}</h5>
    <p class="card-text">${side?.text}</p>
    <div class="priceBox">${side?.price}
      <a href="#" class="btn btn-primary sides-btn" data-btn-id=${id}>Add</a>
    </div>
  </div>
</div>`;
})}
</div>`;

const deserts = [
  {
    id: 1,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg?width=450",
    name: "Choco Volcano Cake",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 2,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg?width=450",
    name: "Choco Volcano Cake",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 3,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg?width=450",
    name: "Choco Volcano Cake",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 4,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/dessert/choco-volcano-cake.f829dc6e30a07b83f232b4880395162f.1.jpg?width=450",
    name: "Choco Volcano Cake",
    text: "sjkdaf ;iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
];
let navDeserts = document.querySelector("#nav-deserts");
navDeserts.innerHTML = `<div class="dealsContainer">
${deserts.map((desert, index) => {
  return `<div class="card mx-2 my-2 item-deserts">
  <img
    src=${desert?.img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${desert?.name}</h5>
    <p class="card-text">
    ${desert?.text}
    </p>
    <div class="priceBox">${desert?.price}
      <a href="#" class="btn btn-primary deserts-btn">Add</a>
    </div>
  </div>
</div>`;
})}
</div>`;

const drinks = [
  {
    id: 1,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.ebd77460b7e104a70753241ad502abca.1.jpg?width=450",
    name: "Pepsi",
    text: "sjkdaf iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 2,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.ebd77460b7e104a70753241ad502abca.1.jpg?width=450",
    name: "Pepsi",
    text: "sjkdaf iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 3,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.ebd77460b7e104a70753241ad502abca.1.jpg?width=450",
    name: "Pepsi",
    text: "sjkdaf iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
  {
    id: 4,
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/drink/pepsi.ebd77460b7e104a70753241ad502abca.1.jpg?width=450",
    name: "Pepsi",
    text: "sjkdaf iudsahv dknz jbdsc fsdfsregf faesfsf fds f fdefersfs frgg regvdfds fdssv dsvfrv dsgtrr.",
    price: "Rs 100",
  },
];
let navDrinks = document.querySelector("#nav-drinks");
navDrinks.innerHTML = `<div class="dealsContainer">
${drinks.map((drink, index) => {
  return `<div class="card mx-2 my-2 item-drinks">
  <img
    src=${drink?.img}
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${drink?.name}</h5>
    <p class="card-text">
    ${drink?.text}
    </p>
    <div class="priceBox">${drink?.price}
      <a href="#" class="btn btn-primary drinks-btn">Add</a>
    </div>
  </div>
</div>`;
})}
</div>`;
