const slides = [];
for(let i = 1; i <= 5; i++) {
    slides.push(document.getElementById(`hero-slide-${i}`));
}

let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove("opacity-100");
    slides[currentSlide].classList.add("opacity-0");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    slides[currentSlide].classList.add("opacity-100");
}

setInterval(showNextSlide, 4000);

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

menuToggle.addEventListener('click', function() {
    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('translate-y-2');
    bar2.classList.toggle('opacity-0');
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('-translate-y-2');

    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

let menuItems = [
    {name: "Suya Skewers", description: "Grilled spiced beef skewers with onions and tomatoes", price: "₦2,000", image: "images/menu/starters/suya-skewers.jpg", category: "starters"},
    {name: "Peppered Snails", description: "Tender snails tossed in a spicy pepper sauce", price: "₦3,500", image: "images/menu/starters/peppered-snail.jpg", category: "starters"},
    {name: "Puff Puff Bites", description: "Sweet fried dough bites served warm", price: "₦1,500", image: "images/menu/starters/puff-puff.jpg", category: "starters"},
    {name: "Chicken Spring Rolls", description: "Crispy rolls filled with seasoned chicken and vegetables", price: "₦2,500", image: "images/menu/starters/chicken-spring-rolls.jpg", category: "starters"},
    {name: "Fish Small Chops", description: "Assorted bite-sized fried fish and sides", price: "₦3,000", image: "images/menu/starters/small-chops.jpg", category: "starters"},
    {name: "Moi Moi", description: "Steamed bean pudding with egg and fish", price: "₦1,800", image: "images/menu/starters/moi-moi.webp", category: "starters"},
    {name: "Grilled Prawns", description: "Charred prawns in garlic butter sauce", price: "₦4,000", image: "images/menu/starters/grilled-prawn.jpg", category: "starters"},
    {name: "Vegetable Samosa", description: "Crispy pastry filled with spiced vegetables", price: "₦1,800", image: "images/menu/starters/vegetable-samosa.jpg", category: "starters"},
    {name: "Pepper Soup (Goat Meat)", description: "Spicy traditional broth with tender goat meat", price: "₦3,200", image: "images/menu/starters/goat-peppersoup.jpg", category: "starters"},
    {name: "Jollof Rice & Chicken", description: "Classic smoky jollof rice with grilled chicken", price: "₦4,500", image: "images/menu/mains/jollof-and-chicken.jpg", category: "mains"},
    {name: "Fried Rice & Beef", description: "Nigerian-style fried rice with tender beef", price: "₦4,500", image: "images/menu/mains/fried-rice-beef.jpg", category: "mains"},
    {name: "Pounded Yam & Egusi", description: "Smooth pounded yam with rich melon seed soup", price: "₦5,000", image: "images/menu/mains/pounded-yam-egusi.jpg", category: "mains"},
    {name: "Grilled Tilapia & Plantain", description: "Whole grilled fish served with fried plantain", price: "₦5,500", image: "images/menu/mains/grilled-tilapia-plantain.jpg", category: "mains"},
    {name: "Ofada Rice & Ayamase Sauce", description: "Local rice with spicy green pepper stew", price: "₦4,800", image: "images/menu/mains/ofada-ayamase.jpg", category: "mains"},
    {name: "Beef Suya Platter", description: "Grilled beef suya with onions, cabbage, and sauce", price: "₦5,200", image: "images/menu/mains/pounded-yam-egusi.jpg", category: "mains"},
    {name: "Chicken Alfredo Pasta", description: "Creamy pasta with grilled chicken strips", price: "₦5,000", image: "images/menu/mains/alfredo-pasta.jpg", category: "mains"},
    {name: "Efo Riro & Semo", description: "Vegetable soup with assorted meat and semolina", price: "₦4,700", image: "images/menu/mains/Efo Riro & Semo.jpg", category: "mains"},
    {name: "Grilled Chicken & Chips", description: "Continental-style grilled chicken with fries", price: "₦4,500", image: "images/menu/mains/chicken-chips.jpg", category: "mains"},
    {name: "Chapman", description: "Classic Nigerian fruit cocktail, non-alcoholic", price: "₦2,000", image: "images/menu/drinks/chapman.jpg", category: "drinks"},
    {name: "Zobo", description: "Chilled hibiscus drink with ginger and fruit", price: "₦1,500", image: "images/menu/drinks/zobo.jpg", category: "drinks"},
    {name: "Fresh Orange Juice", description: "Freshly squeezed orange juice", price: "₦1,800", image: "images/menu/drinks/orange-juice.jpg", category: "drinks"},
    {name: "Smoothie (Mixed Fruit)", description: "Blended seasonal fruit smoothie", price: "₦2,500", image: "images/menu/drinks/smoothies.jpg", category: "drinks"},
    {name: "Chilled Palm Wine", description: "Traditional fresh palm wine, served cold", price: "₦2,200", image: "images/menu/drinks/palm-wine.jpeg", category: "drinks"},
    {name: "Soft Drink (Coke/Fanta/Sprite)", description: "Chilled bottled soft drink", price: "₦1,000", image: "images/menu/drinks/soft-drink.jpg", category: "drinks"},
    {name: "Iced Tea", description: "Refreshing chilled tea with lemon", price: "₦1,800", image: "images/menu/drinks/ice-tea.jpg", category: "drinks"},
    {name: "Sparkling Water", description: "Chilled sparkling mineral water", price: "₦1,200", image: "images/menu/drinks/sparkling-water.jpg", category: "drinks"},
    {name: "Ginger Shot", description: "Concentrated fresh ginger juice shot", price: "₦1,500", image: "images/menu/drinks/ginger-shots.jpg", category: "drinks"},
    {name: "Chin Chin", description: "Crunchy sweet fried pastry bites", price: "₦1,200", image: "images/menu/desserts/chinchin.jpg", category: "desserts"},
    {name: "Coconut Candy", description: "Sweet chewy coconut treats", price: "₦1,000", image: "images/menu/desserts/coconut-candy.jpg", category: "desserts"},
    {name: "Chocolate Lava Cake", description: "Warm cake with a molten chocolate center", price: "₦2,800", image: "images/menu/desserts/chocolate-lava-cake.jpg", category: "desserts"},
    {name: "Puff Pancake with Honey", description: "Soft pancakes drizzled with honey", price: "₦2,000", image: "images/menu/desserts/puff-pancakes.jpg", category: "desserts"},
    {name: "Fruit Salad", description: "Fresh mixed seasonal fruits", price: "₦2,200", image: "images/menu/desserts/fruit-salad.jpg", category: "desserts"},
    {name: "Ice Cream (2 Scoops)", description: "Choice of vanilla, chocolate, or strawberry", price: "₦2,500", image: "images/menu/desserts/ice-cream.jpg", category: "desserts"},
    {name: "Bread Pudding", description: "Warm spiced bread pudding with custard", price: "₦2,300", image: "images/menu/desserts/bread-pudding.jpg", category: "desserts"},
    {name: "Banana Fritters", description: "Sweet fried banana fritters", price: "₦1,800", image: "images/menu/desserts/banana-fritters.jpg", category: "desserts"},
    {name: "Red Velvet Cake Slice", description: "Rich red velvet cake with cream cheese frosting", price: "₦2,600", image: "images/menu/desserts/red-velvet.jpg", category: "desserts"}
];

const menuGrid = document.getElementById('menu-grid');

function renderMenu(items) {
    let html = "";

    for(let i = 0; i < items.length; i++) {
        const dish = items[i];

        html += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden mt-8 hover:shadow-xl hover:translate-y-2 transition delay-150 duration-300 ease-in-out">
                <img src="${dish.image}" alt="${dish.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-heading font-bold text-lg">${dish.name}</h3>
                    <p class="font-body text-sm text-gray-600 mt-2">${dish.description}</p>
                    <span class="font-body font-semibold text-primary mt-3 block">${dish.price}</span>
                </div>
            </div>
        `;
    }
    
    menuGrid.innerHTML = html;
}

const categoryButtons = document.querySelectorAll('[data-category]');

for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener('click', function() {
        const selectedCategory = categoryButtons[i].dataset.category;

        for (let j = 0; j < categoryButtons.length; j++) {

            categoryButtons[j].classList.remove('bg-primary', 'text-white');
        }

        categoryButtons[i].classList.add('bg-primary', 'text-white');

        if(selectedCategory === 'all') {
            renderMenu(menuItems);
        } else {

                const filteredItems = menuItems.filter(function(dish) {
            return dish.category === selectedCategory;
        });
        renderMenu(filteredItems);

        }
        
    });
}

renderMenu(menuItems);
categoryButtons[0].classList.add('bg-primary', 'text-white');

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-gray-900', 'shadow-md');
  } else {
    navbar.classList.remove('bg-gray-900', 'shadow-md');
  }
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});