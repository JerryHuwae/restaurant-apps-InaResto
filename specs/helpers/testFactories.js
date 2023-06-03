import LikeButtonPresenter from '../../src/scripts/utils/likebutton-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-db';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
