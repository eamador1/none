const pastaMenu =(obj) => {
  const menu = document.querySelector('.menu');
  const pastas = obj.result;
  menu.innerHTML =``;

  pastas.forEach((pastaData) => {
    const contMenu = document.createElement('div');
    const contImage = document.createElement('div');
    const image = document.createElement('img');
    const contText = document.createElement('div');
    const dish = document.createElement('h4');
    const contButtons = document.createElement('div');
    const comments = document.createElement('button');

    contMenu.classList.add('contMenu');
    contImage.classList.add('contImage');
    contText.classList.add('conText');
    contButtons.classList.add('contButtons');
    comments.classList.add('comments');

    image.src = `${pastaData.strMealThumb}`;
    dish.textContent = `${pastaData.strMeal}`;
    comments.textContent = 'Comments';

    contImage.appendChild(image);
    contText.appendChild(dish);
    contButtons.appendChild(comments);
    contMenu.appendChild(contImage);
    contMenu.appendChild(contText);
    contMenu.appendChild(contButtons);
    menu.appendChild(contMenu);

  })
};

export default pastaMenu;