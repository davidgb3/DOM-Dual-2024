export const createButton = () => {
    const button = document.createElement('button');
    button.id = 'load-price-btn';
    button.classList.add('load-btn');
    button.textContent = 'Cargar Precios de la Luz';
    return button;
};