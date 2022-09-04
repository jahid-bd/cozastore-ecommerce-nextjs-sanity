import shortid from "shortid";

const shortBy = {
  id: shortid.generate(),
  title: "Short By",
  type: "shortBy",
  options: [
    {
      id: shortid.generate(),

      text: "Default",
      value: "default",
    },
    {
      id: shortid.generate(),
      text: "Popularity",
      value: "popularity",
    },
    {
      id: shortid.generate(),
      text: "Average rating",
      value: "averageRating",
    },
    {
      id: shortid.generate(),
      text: "Newness",
      value: "newness",
    },
    {
      id: shortid.generate(),
      text: "Price: Low to High",
      value: "lowToHigh",
    },
    {
      id: shortid.generate(),
      text: "Price: High to Low",
      value: "highToLow",
    },
  ],
};

const price = {
  id: shortid.generate(),
  title: "Price",
  type: "price",
  options: [
    {
      id: shortid.generate(),
      text: "All",
      value: {
        min: 0,
        max: 10000,
      },
    },
    {
      id: shortid.generate(),
      text: "$0.00 - $50.00",
      value: {
        min: 0,
        max: 50,
      },
    },
    {
      id: shortid.generate(),
      text: "$50.00 - $100.00",
      value: {
        min: 50,
        max: 100,
      },
    },
    {
      id: shortid.generate(),
      text: "$100.00 - $150.00",
      value: {
        min: 100,
        max: 150,
      },
    },
    {
      id: shortid.generate(),
      text: "$150.00 - $200.00",
      value: {
        min: 150,
        max: 200,
      },
    },
    {
      id: shortid.generate(),
      text: "$200.00",
      value: {
        min: 200,
        max: 10000,
      },
    },
  ],
};

const color = {
  id: shortid.generate(),
  title: "Color",
  type: "color",
  options: [
    {
      id: shortid.generate(),
      text: "Black",
      value: "black",
    },
    {
      id: shortid.generate(),
      text: "Blue",
      value: "blue",
    },
    {
      id: shortid.generate(),
      text: "Grey",
      value: "gray",
    },
    {
      id: shortid.generate(),
      text: "Green",
      value: "green",
    },
    {
      id: shortid.generate(),
      text: "Red",
      value: "red",
    },
    {
      id: shortid.generate(),
      text: "White",
      value: "white",
    },
  ],
};

const tags = {
  id: shortid.generate(),
  title: "Tags",
  type: "tags",
  options: [
    {
      id: shortid.generate(),
      text: "Fashion",
      value: "fashion",
    },
    {
      id: shortid.generate(),
      text: "Life Style",
      value: "lifeStyle",
    },
    {
      id: shortid.generate(),
      text: "Denim",
      value: "denim",
    },
    {
      id: shortid.generate(),
      text: "Streetstyle",
      value: "streetstyle",
    },
    {
      id: shortid.generate(),
      text: "Carfts",
      value: "Carfts",
    },
  ],
};

export const filterData = [shortBy, price, color, tags];
