/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `

<div class="list_item">
            <img class="list_item_thumb lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.name}">
            <div class="city">${restaurant.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                ⭐️ 
                    <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
                </p>
                <h1 class="list_item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
                <div class="list_item_desc">${restaurant.description}...</div>
            </div>
        </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="detail-title">
        <h1 class="title" id="resto-title">
        ${restaurant.name}
        </h1>
        <img class="lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="info">
            <h2>Information</h2>
            <ul>
                <li>
                <h3>Kota</h3>
                <p>${restaurant.city}</p>
                </li>
                <li>
                <h3>Alamat</h3>
                <p>${restaurant.address}</p>
                </li>
                <li>
                <h3>Rating</h3>
                <p>${restaurant.rating}</p>
                </li>
                <li>
                <h3>Foods Menu</h3>
                <span id="food">
                <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
                </span>
                </li>
                <li>
                <h3>Drinks Menu</h3>
                <span id="drink">
                    <p>${restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
                </span>
                </li>
            </ul>

            <div class="overview">
            <h2>Overview</h2>
            <p>${restaurant.description}</p>
            </div>
        </div>
    </div>
    <h3 tabindex="0" class="title-review">Reviews</h3>
<div tabindex="0" class="detail-review">
${restaurant.customerReviews
    .map(
      (review) => `
      <div class="detail-review-item">
        <div class="header-review">
          <p class="name-review"><i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}</p>
          <p class="date-review">${review.date}</p>
        </div>
        <div class="body-review">
          ${review.review}
        </div>
      </div>
    `,
    )
    .join('')}
</div>
</div>

`;
const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

// eslint-disable-next-line object-curly-newline
export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate };
