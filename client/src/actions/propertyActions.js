import {
  GET_PROPERTIES,
  FILTER_PROPERTIES,
  LOADING,
  SET_CURRENT,
} from './types';

// temp properties
const properties = [
  {
    id: '1',
    title: 'Suburb Home',
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
    id: '2',
    title: 'Suburb Home',
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
    id: '3',
    title: 'Apartment',
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
    id: '4',
    title: 'Suburb Home',
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
    id: '5',
    title: 'Suburb Home',
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
    id: '6',
    title: 'Apartment',
    description:
      'A great space for a college student looking for something with convenient campus access!',
    address: '111 Apartment Road, Apt. 111, Sanfrancisco, CA 11111',
    img: [
      {
        path: './img/properties/apartment1/apartment1.jpg',
        alt: 'Photo by George Becker from Pexels',
      },
      {
        path: './img/properties/apartment1/apartment12.jpg',
        alt: 'Photo by Pixabay from Pexels',
      },
      {
        path: './img/properties/apartment1/apartment13.jpg',
        alt: 'Photo by Polina Kovaleva from Pexels',
      },
    ],
    renter: null,
    owner: 'Don Julio',
    price: 1300,
  },
];

// Get Properties
export const getProperties = () => (dispatch) => {
  loading();
  dispatch({
    type: GET_PROPERTIES,
    payload: properties,
  });
};

// Filter Properties
export const filterProperties = (text) => (dispatch) => {
  dispatch({
    type: FILTER_PROPERTIES,
    payload: {
      text,
      properties,
    },
  });
};

// Set Current Property

export const setCurrent = (id) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: id,
  });
};

// Loading

export const loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};
