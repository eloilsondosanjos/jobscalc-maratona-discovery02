let data = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": 4,
    "total-hours": 47,
    created_at: Date.now(),
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 44,
    created_at: Date.now(),
  },
  {
    id: 3,
    name: "App AquaFish",
    "daily-hours": 2,
    "total-hours": 60,
    created_at: Date.now(),
  },
];

module.exports = {
  get() {
    return data;
  },
};