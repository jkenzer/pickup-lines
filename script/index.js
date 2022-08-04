const { decode } = require("html-entities");
const { writeFileSync } = require("fs");
const fromlines1 = require("./pickup-lines.1.json");
const fromlines2 = require("./pickup-lines.2.json");
const fromlines3 = require("./pickup-lines.3.json");
const fromlines4 = require("./pickup-lines.4.json");
const fromlines5 = require("./pickup-lines.5.json");
const fromlines6 = require("./pickup-lines.6.json");
const fromlines7 = require("./pickup-lines.7.json");
const fromlines8 = require("./pickup-lines.8.json");
const fromlines9 = require("./pickup-lines.9.json");
const fromlines10 = require("./pickup-lines.10.json");
const fromCategories = require("./categories.json");

const fromlines = [
  ...fromlines1,
  ...fromlines2,
  ...fromlines3,
  ...fromlines4,
  ...fromlines5,
  ...fromlines6,
  ...fromlines7,
  ...fromlines8,
  ...fromlines9,
  ...fromlines10,
];

console.log(fromlines.length);
const categories = fromCategories.reduce((accum, c) => {
  accum.set(c.id, c.name);
  return accum;
}, new Map());

const lines = fromlines.map((l) => {
  const cats = [];
  l.categories.forEach((c) => {
    cats.push(categories.get(c));
  });
  return {
    line: decode(l.title.rendered),
    categories: cats,
  };
});
writeFileSync(
  "./public/all-lines.json",
  JSON.stringify(lines, null, 2),
  "utf-8"
);
