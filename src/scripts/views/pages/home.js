import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="latest">
      <h2 class="latest__label">Explore Restaurant</h2>
      <div id="restaurant" class="list">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
