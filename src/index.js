let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

console.log(paris.temperature);

// JS Challenge 2
let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 25,
  capitalCity: false,
};

console.log(sydney.temperature);

// JS Challenge 3
let australianCities = ["Sydney", "Melbourne", "Brisbane"];
australianCities.forEach((city) => {
  console.log(city);
});

// JS Challenge 4
let cities = [
  {
    name: "Berlin",
    country: "Germany",
    language: "German",
    temperature: 15,
    capitalCity: true,
  },
  {
    name: "Madrid",
    country: "Spain",
    language: "Spanish",
    temperature: 20,
    capitalCity: true,
  },
  {
    name: "Rome",
    country: "Italy",
    language: "Italian",
    temperature: 22,
    capitalCity: true,
  },
];

cities.forEach((city) => {
  console.log(`The temperature in ${city.name} is ${city.temperature}°C`);
});
