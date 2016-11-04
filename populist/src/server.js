//import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import 'PopulistApp/server';
import Lists from 'PopulistApp/collections/Lists';
import ListItem from 'PopulistApp/collections/ListItem';


Meteor.startup(function(){

  Lists.remove({});
  ListItem.remove({});



  // LIST ONE temp content
  Lists.insert({
    _id: 'one', 
    title: 'The Best Pizza in Brooklyn NYC', 
    lead_image: 'http://populist-images.s3.amazonaws.com/frannys.jpg', 
    content: 'Yeah! Lists lists lists!'
  });


  //items
  ListItem.insert({
   list: 'one',
   title: 'Frannies Brooklyn',
   image: 'http://populist-images.s3.amazonaws.com/frannys.jpg',
   content: 'Out-of-this-world wood-fired pizzas, pastas and other Italian dishes built around wonderful local ingredients mean you can\'t lose at this Park Slope go-to'
  })

  ListItem.insert({
   list: 'one',
   title: 'Pauley Gee\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/PaulyGee6_n.jpg',
   content: 'The crowds prove the hype at this Greenpoint pizzeria where seriously good pies (especially the addictive Hellboy) are offered with original toppings varied enough to please anyone.'
  })

  ListItem.insert({
   list: 'one',
   title: 'Lombardi\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/Lombardi.jpg',
   content: 'This 1905-vintage NoLita pizza shrine, which claims to be America\'s first pizzeria, still draws throngs with its real-deal coal-fired pies.'
  })

  ListItem.insert({
   list: 'one',
   title: 'Totonno\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/totonos.jpg',
   content: 'An old-fashioned place unchanged by time, this 1924-vintage Coney Island pizzeria is renowned for terrific coal-oven pies lovingly made with the freshest ingredients.'
  })

  ListItem.insert({
   list: 'one',
   title: 'Patsy\'s Pizzeria',
   image: 'http://populist-images.s3.amazonaws.com/Pstsy.jpg',
   content: 'Turning out Naples-good thin-crust pizza since 1933, this East Harlem treasure and its separately owned offshoots offer generous portions of hit-the-spot Italian-American fare.'
  })

  ListItem.insert({
   list: 'one',
   title: 'Co. Pizza',
   image: 'http://populist-images.s3.amazonaws.com/CoPizzza.jpg',
   content: 'Co. — a pizza restaurant from Jim Lahey of Sullivan Street Bakery — was born of a worship of dough. Gourmet pizzas are made with inventive toppings at this restaurant with communal tables.'
  })




  //LIST TWO temp content
  Lists.insert({
    _id: 'two', 
    title: 'NY Times Hardcover fiction',
    lead_image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg', 
    content: 'Something new soon.'}
  );


   //LIST THREE temp content
  Lists.insert({
    _id: 'three', 
    title: 'The Best Barbershops in Brooklyn',
    lead_image: 'http://populist-images.s3.amazonaws.com/Georges.jpg',
    content: 'Content for list 3.'}
  );

  Lists.insert({_id: 'four', title: 'Poplist list 4', content: 'Content for list 4.'});
  Lists.insert({_id: 'five', title: 'Poplist list 5', content: 'Content for list 5.'});
  Lists.insert({_id: 'six', title: 'Poplist list 6', content: 'Content for list 6.'});
  Lists.insert({_id: 'seven', title: 'My Secret LIst', category: 'private'});

 


  ['Carrie', 'Al', 'Sean'].forEach(function(name) {

    if (!Meteor.users.findOne({"username": name}) ) {
      Accounts.createUser({
        username: name,
        password: 'password',
        profile: {},
      });
    }
  });


  //console.log(process.env.GOOGLE_CLIENT_KEY, process.env.GOOGLE_SECRET);
  ServiceConfiguration.configurations.remove ({service: "google"});
  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: process.env.GOOGLE_CLIENT_KEY,
    secret: process.env.GOOGLE_SECRET
  });

  ServiceConfiguration.configurations.remove({service: 'facebook'});
  ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: process.env.FACEBOOK_APP_ID,
      secret: process.env.FACEBOOK_SECRET
  });
    
  
});



// Do server-rendering only in production
// Otherwise, it will break the hot-reload
// DO NOT REMOVE THIS LINE TO TEST, use: meteor --production
// if (process.env.NODE_ENV === 'production') {
//   // Load Webpack infos for SSR
//   ReactRouterSSR.LoadWebpackStats(WebpackStats);

//   require('./routes').default;
// }