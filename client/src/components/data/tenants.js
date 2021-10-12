export const tenants = [
  {
    id: '1',
    firstName: 'Niko',
    lastName: 'Icardo',
    email: 'test@test.com',
    phone: '122-212-1212',
    password: 'tester',
    profileImage: './img/tenants/tenant1.jpg',

    address: '111 Apartment Road, Apt. 111, Sanfrancisco, CA 11111',
    propertyId: '',
    leaseStartDate: '06/10/21',
    leaseEndDate: '06/10/22',

    transactions: [
      {
        amount: '',
        date: '',
        for: '',
      },
    ],
    rent: 1300,
    utilities: 75,
    dueDate: 1,
    outStanding: '',

    //Messages will be separate model with an id that will be listed here.
    messages: [''],
  },
];
