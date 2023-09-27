// Access token: PEHcFxL45KgoNaAZQFP9 (Include this in your API calls!)

// const BASE_URL = "https://the-one-api.dev/v2";
// const ENDPOINT = "character";
// const KEY = "PEHcFxL45KgoNaAZQFP9";

// function getCharacter() {
//   const params = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });

//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer${KEY}`,
//     },
//   };
//   fetch(`${BASE_URL}${ENDPOINT}?${params}`, options)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }
// getCharacter();

// -------------Це була робота з апішкою, для роботи з якою треба авторизація Bearer і отримати token-------------
// const target = document.querySelector(".js-guard");
// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };
// let observer = new IntersectionObserver(callback, options);
// function callback(event) {
//   console.log(event);
// }
// const BASE_URL = "https://api.themoviedb.org/3/";
// const ENDPOINT = "trending/movie/day";
// const KEY = "345007f9ab440e5b86cef51be6397df1";
// const list = document.querySelector(".js-list");
// const loadMore = document.querySelector(".js-load");
// let currentPage = 1;

// loadMore.addEventListener("click", onLoad);

// function onLoad() {
//   currentPage += 1;
//   getTrending(currentPage)
//     .then((data) => {
//       list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//       if (data.page === data.total_pages) {
//         loadMore.hidden = true;
//       }
//     })
//     .catch((error) => console.log(error));
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${KEY}&page=${page}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }
// getTrending()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     observer.observe(target);
//     if (data.page !== data.total_pages) {
//       loadMore.hidden = false;
//     }
//   })
//   .catch((error) => console.log(error));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) =>
//         `<li><img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}"><h2>${title}</h2></li>`
//     )
//     .join("");
// }

// let counter = 0;
// document.addEventListener("scroll", onScroll);

// function onScroll() {
//   counter += 1;
//   console.log(counter);
// }

// ----------Вище ми відмалювали розмітку сайту з фільмами і зробили сторінки по 30 фільмів. Кнопка "Load more" з'являється коли потрібно і зникає----------

// const target = document.querySelector(".js-guard");
// const BASE_URL = "https://api.themoviedb.org/3/";
// const ENDPOINT = "trending/movie/day";
// const KEY = "345007f9ab440e5b86cef51be6397df1";
// const list = document.querySelector(".js-list");
// let currentPage = 1;
// let options = {
//   root: null,
//   rootMargin: "300px",
//   threshold: 1.0,
// };
// let observer = new IntersectionObserver(onLoad, options);

// function onLoad(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       getTrending(currentPage)
//         .then((data) => {
//           list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//           if (data.page === data.total_pages) {
//             observer.unobserve(target);
//           }
//         })
//         .catch((error) => console.log(error));
//     }
//   });
// }

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) =>
//         `<li><img src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}"><h2>${title}</h2></li>`
//     )
//     .join("");
// }

// function getTrending(page = 1) {
//   return fetch(`${BASE_URL}${ENDPOINT}?api_key=${KEY}&page=${page}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }

// getTrending()
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data.results));
//     observer.observe(target);
//   })
//   .catch((error) => console.log(error));
// ----------Вище ми створили розмітку фільмівб плавний скрол і завантаження сторінок з допомогою Intersection Observer----------
