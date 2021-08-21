const attributes = {
  description: {
    type: "array",
    source: "children",
    selector: ".recipe-description",
  },
  ingredients: {
    type: "array",
    source: "children",
    selector: ".recipe-ingredients",
  },
  method: {
    type: "array",
    source: "children",
    selector: ".recipe-method",
  },
  textAlignment: {
    type: "string",
  },
  align: {
    type: "string",
    default: "wide",
  },
  magicButton: {
    type: "boolean",
    default: false,
  },
};

export default attributes;
