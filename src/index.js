import "./styles.css";
import { inputTemplate, resultTemplate } from "./templates";

const app = document.querySelector("#app");

app.insertAdjacentHTML("afterbegin", resultTemplate);
app.insertAdjacentHTML("afterbegin", inputTemplate);

const data = ["Apple", "Orange", "Waterlemon"];

const input = document.querySelector("#search");
const result = document.querySelector("#result");

const addFilterToResult = (f) => (result.innerText = f);

let filter = data;
addFilterToResult(data);

function search() {
  filter = data.filter((el) => {
    return el.toLocaleLowerCase().includes(input.value.toLocaleLowerCase());
  });
  addFilterToResult(filter);
  return filter;
}

input.addEventListener("keyup", search);
