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
    subtitle: 'Perhaps no list will be more contentious than this, the Pizza throw down. I\'ve always stood by the belief that NYC pizza is best in a coal or wood fired oven. You can see I have a type here, and I\'m sure others will dissent but this is the my top six go-to places.',
    byline: 'Derek Gruen',
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

  ListItem.insert({
   list: 'two',
   title: 'ESCAPE CLAUSE',
   image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg',
   content: 'Virgil Flowers of the Minnesota Bureau of Criminal Apprehension must deal with the theft of tigers from the local zoo.'
  })

  ListItem.insert({
   list: 'two',
   title: 'TWO BY TWO',
   image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg',
   content: 'A man who became a single father when his marriage and business collapsed learns to take a chance on a new love.'
  })

  ListItem.insert({
   list: 'two',
   title: 'SMALL GREAT THINGS',
   image: 'http://populist-images.s3.amazonaws.com/SmallGreatThings.jpg',
   content: 'A medical crisis entangles a black nurse, a white supremacist father and a white lawyer.'
  })

  ListItem.insert({
   list: 'two',
   title: 'THE OBSIDIAN CHAMBER',
   image: 'http://populist-images.s3.amazonaws.com/Obsidian.jpg',
   content: 'While the F.B.I. agent Aloysius Pendergast is believed dead, his ward is kidnapped.'
  })

  ListItem.insert({
   list: 'two',
   title: 'VINCE FLYNN: ORDER TO KILL',
   image: 'http://populist-images.s3.amazonaws.com/OrderToKill.jpg',
   content: 'Flynn\'s character, the C.I.A. operative Mitch Rapp, uncovers a dangerous Russian plot. Flynn died in 2013..'
  })

  ListItem.insert({
   list: 'two',
   title: 'THE SECRET HISTORY OF TWIN PEAKS',
   image: 'http://populist-images.s3.amazonaws.com/TwinPeaks.jpg',
   content: 'An amplification of the world of the 1990-91 TV series Twin Peaks by the show\'s co-creator, in preparation for new episodes to be aired on Showtime in 2017.'
  })

  ListItem.insert({
   list: 'two',
   title: 'COMMONWEALTH',
   image: 'http://populist-images.s3.amazonaws.com/Commonwealth.jpg',
   content: 'Five decades in the lives of two families  parents, children, siblings, stepchildren remade by divorce. '
  })


   //LIST THREE temp content
  Lists.insert({
    _id: 'three', 
    title: 'The Best Barbershops in Brooklyn',
    lead_image: 'http://populist-images.s3.amazonaws.com/Georges.jpg',
    subtitle: 'After many years of struggling to find a quality barbershop I finally have a few that I like all in BK near me.',
    byline: 'Tom Grand',
    content: 'Content for list 3.'}
  );


  ListItem.insert({
   list: 'three',
   title: 'Persons of Interest Barbershop',
   image: 'http://populist-images.s3.amazonaws.com/Persons-of-Interest_06.jpg',
   content: 'People working there were nice, pleasant interior, beers while you wait.'
  })

  ListItem.insert({
   list: 'three',
   title: 'George\'s Barber Shop',
   image: 'http://populist-images.s3.amazonaws.com/Georges.jpg',
   content: 'The last time I was in, I got my haircut by Viktor\'s cousin, and he\'s good too, though, I would say I still marginally prefer Eddie and Viktor.'
  })

  ListItem.insert({
   list: 'three',
   title: 'The Stepping Razor',
   image: 'http://populist-images.s3.amazonaws.com/SteppingRazor_1098.jpg',
   content: '"No fuss" gets thrown around a lot when talking about barbershops, but believe it this time. Danny Baptista started his shop in the back of a BMX store, and now he\'s running one of the best places to get a cut in Brooklyn. You won\'t beat the price, and you definitely won\'t find a more skilled team of barbers in King\'s County.'
  })

  ListItem.insert({
   list: 'three',
   title: 'Tomcats',
   image: 'http://populist-images.s3.amazonaws.com/TomKatsrbershops_11_sk_150204.jpg_3x2_1600.jpg',
   content: 'Tomcats is the industry standard for the modern vintage gentleman\'s cut. What does that mean? If you part it, comb it, slick it back, or smear it with pomade, this is your joint. Sure they\'ll do any kid of cut you want, but if you\'re after a quick buzz, Astor Barber is your best bet.'
  })

  //List FOUR content
  Lists.insert({
    _id: 'four',
    title: 'Coffee',
    lead_image: 'http://populist-images.s3.amazonaws.com/SuperCrown.4.jpg',
    subtitle: 'Sometimes you need a place to meet a client that isn’t a office. These are my go-to spots in NYC with a professional quiet setting (and good coffee)!',
    byline: 'Sarah Nelson',
    content: 'Content for list 4.'
  });

  ListItem.insert({
   list: 'four',
   title: 'Supercrown Coffee Roasters',
   image: 'http://populist-images.s3.amazonaws.com/SuperCrown.4.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'four',
   title: 'Tekoá',
   image: 'http://populist-images.s3.amazonaws.com/Tekoav1.4.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'four',
   title: 'Ludlow Coffee Supply Co.',
   image: 'http://populist-images.s3.amazonaws.com/Ludlowv1.4.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'four',
   title: 'Tilda All Day',
   image: 'http://populist-images.s3.amazonaws.com/Tildav1.4.jpg',
   content: ''
  })

  // List 5 content
  Lists.insert({
    _id: 'five',
    title: 'Bagels',
    lead_image: 'http://populist-images.s3.amazonaws.com/essa.jpg',
    subtitle: 'Sometimes you need a place to meet a client that isn’t a office. These are my go-to spots in NYC with a professional quiet setting (and good coffee)!',
    byline: 'Sarah Nelson',
    content: 'Content for list 4.'
  });

 
  ListItem.insert({
   list: 'five',
   title: 'ESS-A-BAGEL',
   image: 'http://populist-images.s3.amazonaws.com/essa.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'MURRAY\'S BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/murrays.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'TERRACE BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/terrace.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'KOSSAR\'S BIALYS',
   image: 'http://populist-images.s3.amazonaws.com/kossars.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'BAGEL HOLE',
   image: 'http://populist-images.s3.amazonaws.com/bagelhole.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'UTOPIA BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/utopia.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'five',
   title: 'TOMPKINS SQUARE BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/tompkins.jpg',
   content: ''
  })
  

  //List 6 content
 Lists.insert({
    _id: 'six',
    title: 'Hip Hop',
    lead_image: 'http://populist-images.s3.amazonaws.com/Nasijusr.jpg',
    subtitle: 'In the 1990s, hip-hop truly exploded. Regional scenes from around the country blew up in unprecedented ways, helping rap to become one of the most dominant musical genres in the world.Major corporations invested in labels that started on the street, while regional indies wielded enough power to drop game-changing records. It was an era of transformation that created an incredible variety of styles and sounds. Along the way, some of the greatest rap albums of all time were released: The Low End Theory. Life After Death. 36 Chambers. The Chronic.',
    byline: 'Ben Manzone',
    content: 'Content for list 6.'
  });

 ListItem.insert({
   list: 'six',
   title: 'Nas, Illmatic (1994)',
   image: 'http://populist-images.s3.amazonaws.com/Nasijusr.jpg',
   content: ''
  })

 ListItem.insert({
   list: 'six',
   title: 'The Notorious B.I.G., Life After Death (1997)',
   image: 'http://populist-images.s3.amazonaws.com/Biggie7y.jpg',
   content: ''
  })
  
  ListItem.insert({
   list: 'six',
   title: 'A Tribe Called Quest, Midnight Marauders (1993)',
   image: 'http://populist-images.s3.amazonaws.com/Tribe.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'six',
   title: 'OutKast, Aquemini (1998)',
   image: 'http://populist-images.s3.amazonaws.com/Outcast.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'six',
   title: 'The Pharcyde, Bizarre Ride II The Pharcyde (1992)',
   image: 'http://populist-images.s3.amazonaws.com/Pharcyde.jpg',
   content: ''
  })

  ListItem.insert({
   list: 'six',
   title: 'Gang Starr, Hard to Earn (1994)',
   image: 'http://populist-images.s3.amazonaws.com/GangStarrt.jpg',
   content: ''
  })
  
  
  

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