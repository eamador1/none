import './style.css';
import pastaMenu from './modules/menu.js';


const fetchData = async() => {

  const requestURL =  'http://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta' 
  const request = new Request(requestURL);
    
  const response = await fetch(request);  
  const allPastas = await response.json();

    pastaMenu(allPastas);
    
  };

  fetchData() 
