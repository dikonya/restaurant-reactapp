import React from 'react';
import './Menu.css';
import { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BreakfastImg from '../../utils/images/breakfast-img.jpg';
import LunchImg from '../../utils/images/lunch-img.jpg';
import DinnerImg from '../../utils/images/dinner-img.jpg';
import DessertImg from '../../utils/images/dessert-img.jpg';
import DrinksImg from '../../utils/images/drinks-img.jpg';

class Menu extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        breakfast: [
          {
            id: 1,
            name: 'English breakfast',
            description: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
            price: '1490₸'
          },
          {
            id: 2,
            name: 'Avocado toast',
            description: 'poached egg, avocado, onion, tomatoes, bread',
            price: '1880₸'
          },
          {
            id: 3,
            name: 'Burrito',
            description: 'tortilla, egg, cheese, potatoes, pork meat',
            price: '1690₸'
          }
        ],
        lunch: [
          {
            id: 1,
            name: 'Caesar salad',
            description: 'chicken breast, romaine lettuce, croutons, parmesan',
            price: '1590₸'
          },
          {
            id: 2,
            name: 'Spaghetti carbonara',
            description: 'spaghetti, pancetta, garlic, eggs, parmesan, pepper',
            price: '2090₸'
          },
          {
            id: 3,
            name: 'Pizza',
            description: 'chorizo, italian salami, tomatoes, mushrooms, olives',
            price: '2550₸'
          }
        ],
        dinner: [
          {
            id: 1,
            name: 'Spicy beef',
            description: 'spicy beef, potatoes, carrots, cheese sauce, spices',
            price: '1990₸'
          },
          {
            id: 2,
            name: 'Spaghetti bolognese',
            description: 'onion, carrot, celery, minced meat, spaghetti, parmesan',
            price: '1990₸'
          },
          {
            id: 3,
            name: 'Chickpea curry',
            description: 'onion, chickpea, garlic, mushrooms, tomatoes, spices',
            price: '1235₸'
          }
        ],
        dessert: [
          {
            id: 1,
            name: 'Lemon cake',
            description: 'flour, sugar, baking powder, lemon',
            price: '990₸'
          },
          {
            id: 2,
            name: 'Cinnamon rolls',
            description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
            price: '1500₸'
          },
          {
            id: 3,
            name: 'Vegan pancakes',
            description: 'flour, sugar, baking powder, soya milk, blueberries',
            price: '1040₸'
          }
        ],
        drinks: [
          {
            id: 1,
            name: 'Organic juice',
            price: '990₸'
          },
          {
            id: 2,
            name: 'Coffee',
            price: '890₸'
          },
          {
            id: 3,
            name: 'Spirits',
            price: '990₸'
          },
          {
            id: 4,
            name: 'Tea',
            price: '590₸'
          },
          {
            id: 5,
            name: 'Water',
            price: '450₸'
          }
        ]
      };
    }
  
render() {
    const { breakfast, lunch, dinner, dessert, drinks } = this.state;
  return (
    
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light'>Menu</h1>
        </div>
      </header>

      <div className='breakfast my-5'>
        <div className='container'>
          <h2 className='text-center fs-2 mb-4 mb-lg-5 text-uppercase fw-bold  '> <Link to='/breakfast' className='text-decoration-none text-success  fs-2 '>Breakfast</Link></h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {breakfast.map((breakfast) => (
                <div key={breakfast.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {breakfast.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {breakfast.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {breakfast.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='lunch bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold'> <Link to='/dishes' className='text-decoration-none  text-success  fs-2 '>Lunch </Link></h2>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {lunch.map((lunch) => (
                <div key={lunch.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {lunch.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {lunch.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {lunch.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='dinner my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold'> <Link to='/dishes' className='text-decoration-none  text-success  fs-2 '>Dinner</Link></h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {dinner.map((dinner) => (
                <div key={dinner.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {dinner.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {dinner.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dinner.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='dessert bg-dark text-light py-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold'><Link to='/desserts' className='text-decoration-none  text-success  fs-2 '>Dessert</Link> </h2>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {dessert.map((dessert) => (
                <div key={dessert.id}>
                  <Card className='border-0 bg-dark text-light'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {dessert.name}
                      </CardTitle>
                      <CardText className='text-center fs-5'>
                        {dessert.description}
                      </CardText>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {dessert.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='drinks my-5'>
        <div className='container'>
          <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold '><Link to='/Drinks' className='text-decoration-none text-success fs-2'>Drinks</Link></h2>
          <div className='row flex-column-reverse flex-lg-row'>
            <div className='col-lg-6 d-flex justify-content-center'>
              <img src={DrinksImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-around'>
              {drinks.map((drink) => (
                <div key={drink.id}>
                  <Card className='border-0'>
                    <CardBody>
                      <CardTitle className='text-center fs-3 text-capitalize'>
                        {drink.name}
                      </CardTitle>
                      <CardText className='text-center fs-3 fw-bold text-success'>
                        {drink.price}
                      </CardText>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 d-flex justify-content-center">
        <Link to='/contact'>
          <button type='button' className='btn btn-success btn-lg text-capitalize mx-2 shadow'>Reserve a table</button>
        </Link>
      </div>
    </div>
  )
}
      }
    
export default Menu;