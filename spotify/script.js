const featureCardsData = [
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/features/feature-1.jpg",
    title: "This Is Shawn Mendes",
    desc: "This is Shawn Mendes. The essential tracks, all in one playlist.",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/features/feature-2.jpeg",
    title: "Shawn Mendes Radio",
    desc: "With Maroon 5, One Direction, Sam Smith and more",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/features/feature-3.jpeg",
    title: "Mega Hit Max",
    desc: "A mega mix of 75 favorites from the last few years!",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/features/feature-4.jpeg",
    title: "All Out 2010s",
    desc: "The biggest songs of the 2010s. Cover: Justin Bieber",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/features/feature-5.jpeg",
    title: "All Out 2020s",
    desc: "The biggest songs of the 2020s. Cover: Doja Cat",
  },
];
const artistsCardsData = [
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/artists/artist-1.jpeg",
    title: "Shawn Mendes",
    desc: "Artist",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/artists/artist-2.jpeg",
    title: "Ed Sheeran",
    desc: "Artist",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/artists/artist-3.jpeg",
    title: "Charile Puth",
    desc: "Artist",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/artists/artist-4.jpeg",
    title: "Camila Cabello",
    desc: "Artist",
  },
  {
    img: "https://raw.githubusercontent.com/khatri2002/codepen/refs/heads/main/spotify/assets/images/artists/artist-5.jpeg",
    title: "Bruno Mars",
    desc: "Artist",
  },
];

const featureCards = document.getElementById("feature-cards");
const artistCards = document.getElementById("artist-cards");

const featureCardsContent = featureCardsData
  .map(
    (card) =>
      `
    <div class="card" role="button">
      <div class="img-wrapper">
        <img
          class="card-img"
          src=${card.img}
          alt="feature-1"
        />
        <div class="play-btn-wrapper">
          <span class="tooltip-text">Play ${card.title}</span>
          <button type="button" class="play-btn">
            <svg
              class="play-icon"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="text">
        <span class="hero-text">${card.title}</span>
        <span class="sub-text">
            ${card.desc}
        </span>
      </div>
    </div>
      `
  )
  .join("");
const artistCardsContent = artistsCardsData
  .map(
    (card) =>
      `
    <div class="card" role="button">
      <div class="img-wrapper">
        <img
          class="card-img"
          src=${card.img}
          alt="feature-1"
        />
        <div class="play-btn-wrapper">
          <span class="tooltip-text">Play ${card.title}</span>
          <button type="button" class="play-btn">
            <svg
              class="play-icon"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="text">
        <span class="hero-text">${card.title}</span>
        <span class="sub-text">
            ${card.desc}
        </span>
      </div>
    </div>
      `
  )
  .join("");

featureCards.innerHTML = featureCardsContent;
artistCards.innerHTML = artistCardsContent;
