import { GET_PROPERTIES, FILTER_PROPERTIES, LOADING } from './types';

// temp properties
const properties = [
  {
    title: 'Suburb Home 1',
    description:
      'A nice house for rent in the suburbs. It features a nearby school, a public pool in the neighborhood, 3 bedrooms, 2 bath, upstairs and downstairs, spacious kitchen.',
    address: '111 House Lane, Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/house1/house1.jpg',
        alt: 'Photo by Binyamin Mellish from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 2500,
  },
  {
    title: 'Suburb Home 2',
    description:
      'A nice house for rent in the suburbs. It features a nearby school, a public tennis court in the neighborhood, 2 bedrooms, 3 bath, upstairs and downstairs, spacious living room.',
    address: '112 House Lane, Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/house2/house2.jpg',
        alt: 'Photo by Thgusstavo Santana from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 1800,
  },
  {
    title: 'Apartment 1',
    description:
      'A great space for a college student looking for something with convenient campus access!',
    address: '111 Apartment Road, Apt. 111,  Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/apartment1/apartment1.jpg',
        alt: 'Photo by George Becker from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 1300,
  },
  {
    title: 'Suburb Home 1',
    description:
      'A nice house for rent in the suburbs. It features a nearby school, a public pool in the neighborhood, 3 bedrooms, 2 bath, upstairs and downstairs, spacious kitchen.',
    address: '111 House Lane, Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/house1/house1.jpg',
        alt: 'Photo by Binyamin Mellish from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 2500,
  },
  {
    title: 'Suburb Home 2',
    description:
      'A nice house for rent in the suburbs. It features a nearby school, a public tennis court in the neighborhood, 2 bedrooms, 3 bath, upstairs and downstairs, spacious living room.',
    address: '112 House Lane, Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/house2/house2.jpg',
        alt: 'Photo by Thgusstavo Santana from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 1800,
  },
  {
    title: 'Apartment 1',
    description:
      'A great space for a college student looking for something with convenient campus access!',
    address: '111 Apartment Road, Apt. 111,  Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/apartment1/apartment1.jpg',
        alt: 'Photo by George Becker from Pexels',
      },
    ],
    renter: null,
    owner: 'Don',
    price: 1300,
  },
];

// Get Properties
export const getProperties = () => (dispatch) => {
  dispatch({
    type: GET_PROPERTIES,
    payload: properties,
  });
};

// Filter Properties
export const filterProperties = (text) => (dispatch) => {
  dispatch({
    type: FILTER_PROPERTIES,
    payload: text,
  });
};

// Loading

export const Loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};
