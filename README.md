# Project-MyStore-Udacity

The project of making an ecommerce with Angular, the entire UI is designed for computer screens, in this online store you can select your favorite products, edit them in the cart and make the payment (only the data is checked)

## Getting started

- Enter the folder: Project-MyStore-Udacity

```
cd Project-MyStore-Udacity
```

- Install dependencies (use node V14.17):

```
npm install
```

- Development command:

```
npm run start
```

```
http://localhost:4200/
```

- Test command:

```
npm run test
```

- Build command:

```
npm run build
```

## Documentation

### menu

The navbar component is where the Menu is along with its logic. We have the Home button, the Shop button, the Contact Us button and the sweater cart button with its icon, at the end of the component

### Home

In the home we have a section where you can see all our products if you want more information you can click and it will lead to a new section.

All product information comes from a json file.

### Products details

In this section of the project we can see more information, and be able to choose the amount we would like to buy.

It works by checking the url, and fetching the product information using the service: `products-service.service.spec.ts` y para la gestion de los productos del usuario usamos el servicio: `product-cart.service.ts`

### shopping cart

In this section of the project, we can see our selected products, edit the quantity or if we want them or not, this is thanks to the service: `product-cart.service.spec.ts`. There is also the section of the form that is responsible for reviewing the information for the payment and redirect us to the section of payment made.

### Payment made.

When the payment is made, the result is displayed and the shopping list is deleted and the products are restarted with the services

- `products-service.service.spec.ts`
- `product-cart.service.ts`

### 404

And there is also the 404 error class when the url is not valid

### product-cart.service service.

This service is the one in charge of managing the user's cart. We have methods to add products, delete them, show them, get the total to pay and modify the amount of each one of them

### the products-service.service.ts service

This service is that it is in charge of managing all the products of the application as well as its management, and updating

### Footer

In this part we have the contact section, and a menu to move on the platform
