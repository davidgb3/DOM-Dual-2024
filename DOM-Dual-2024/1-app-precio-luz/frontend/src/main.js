import { createButton } from "./components/loadButton/loadButton";
import { createSpinner, hideSpinner, showSpinner } from "./components/spinner/spinner";
import { getDataPrice } from "./helpers/getDataPrice";

const urlData = import.meta.env.VITE_DATA_URL;

const handlerClick = () => {
    showSpinner();
};

const data = getDataPrice(urlData);

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('app');
    const spinner = createSpinner();
    const loadPricesBtn = createButton();

    app.appendChild(loadPricesBtn);
    app.appendChild(data);
    loadPricesBtn.addEventListener('click', handlerClick);
});