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
    title: 'Pizza in Brooklyn NYC', 
    lead_image: 'http://populist-images.s3.amazonaws.com/frannys.jpg',
    subtitle: 'Perhaps no list will be more contentious than this, the Pizza throw down. I\'ve always stood by the belief that NYC pizza is best in a coal or wood fired oven. You can see I have a type here, and I\'m sure others will dissent but this is the my top six go-to places.',
    byline: 'Derek Gruen',
    content: 'Yeah! Lists lists lists!',
    item_count: 6
  });


  //items
  ListItem.insert({
   list: 'one',
   title: 'Frannies Brooklyn',
   image: 'http://populist-images.s3.amazonaws.com/frannys.jpg',
   content: 'Out-of-this-world wood-fired pizzas, pastas and other Italian dishes built around wonderful local ingredients mean you can\'t lose at this Park Slope go-to',
   order: 1
  })

  ListItem.insert({
   list: 'one',
   title: 'Pauley Gee\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/PaulyGee6_n.jpg',
   content: 'The crowds prove the hype at this Greenpoint pizzeria where seriously good pies (especially the addictive Hellboy) are offered with original toppings varied enough to please anyone.',
   order: 2
  })

  ListItem.insert({
   list: 'one',
   title: 'Lombardi\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/Lombardi.jpg',
   content: 'This 1905-vintage NoLita pizza shrine, which claims to be America\'s first pizzeria, still draws throngs with its real-deal coal-fired pies.',
   order: 3
  })

  ListItem.insert({
   list: 'one',
   title: 'Totonno\'s Pizza',
   image: 'http://populist-images.s3.amazonaws.com/totonos.jpg',
   content: 'An old-fashioned place unchanged by time, this 1924-vintage Coney Island pizzeria is renowned for terrific coal-oven pies lovingly made with the freshest ingredients.',
   order: 4
  })

  ListItem.insert({
   list: 'one',
   title: 'Patsy\'s Pizzeria',
   image: 'http://populist-images.s3.amazonaws.com/Pstsy.jpg',
   content: 'Turning out Naples-good thin-crust pizza since 1933, this East Harlem treasure and its separately owned offshoots offer generous portions of hit-the-spot Italian-American fare.',
   order: 5
  })

  ListItem.insert({
   list: 'one',
   title: 'Co. Pizza',
   image: 'http://populist-images.s3.amazonaws.com/CoPizzza.jpg',
   content: 'Co. — a pizza restaurant from Jim Lahey of Sullivan Street Bakery — was born of a worship of dough. Gourmet pizzas are made with inventive toppings at this restaurant with communal tables.',
   order: 6
  })




  //LIST TWO temp content
  Lists.insert({
    _id: 'two', 
    title: 'NY Times Hardcover fiction',
    lead_image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg', 
    content: 'Something new soon.',
    item_count:7
  });

  ListItem.insert({
   list: 'two',
   title: 'ESCAPE CLAUSE',
   image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg',
   content: 'Virgil Flowers of the Minnesota Bureau of Criminal Apprehension must deal with the theft of tigers from the local zoo.',
   order: 1
  })

  ListItem.insert({
   list: 'two',
   title: 'TWO BY TWO',
   image: 'http://populist-images.s3.amazonaws.com/EscapeClause.jpg',
   content: 'A man who became a single father when his marriage and business collapsed learns to take a chance on a new love.',
   order: 2
  })

  ListItem.insert({
   list: 'two',
   title: 'SMALL GREAT THINGS',
   image: 'http://populist-images.s3.amazonaws.com/SmallGreatThings.jpg',
   content: 'A medical crisis entangles a black nurse, a white supremacist father and a white lawyer.',
   order: 3
  })

  ListItem.insert({
   list: 'two',
   title: 'THE OBSIDIAN CHAMBER',
   image: 'http://populist-images.s3.amazonaws.com/Obsidian.jpg',
   content: 'While the F.B.I. agent Aloysius Pendergast is believed dead, his ward is kidnapped.',
   order: 4
  })

  ListItem.insert({
   list: 'two',
   title: 'VINCE FLYNN: ORDER TO KILL',
   image: 'http://populist-images.s3.amazonaws.com/OrderToKill.jpg',
   content: 'Flynn\'s character, the C.I.A. operative Mitch Rapp, uncovers a dangerous Russian plot. Flynn died in 2013..',
   order: 5
  })

  ListItem.insert({
   list: 'two',
   title: 'THE SECRET HISTORY OF TWIN PEAKS',
   image: 'http://populist-images.s3.amazonaws.com/TwinPeaks.jpg',
   content: 'An amplification of the world of the 1990-91 TV series Twin Peaks by the show\'s co-creator, in preparation for new episodes to be aired on Showtime in 2017.',
   order: 6
  })

  ListItem.insert({
   list: 'two',
   title: 'COMMONWEALTH',
   image: 'http://populist-images.s3.amazonaws.com/Commonwealth.jpg',
   content: 'Five decades in the lives of two families  parents, children, siblings, stepchildren remade by divorce.',
   order: 7
  })


   //LIST THREE temp content
  Lists.insert({
    _id: 'three', 
    title: 'Barbershops in Brooklyn',
    lead_image: 'http://populist-images.s3.amazonaws.com/Georges.jpg',
    subtitle: 'After many years of struggling to find a quality barbershop I finally have a few that I like all in BK near me.',
    byline: 'Tom Grand',
    content: 'Content for list 3.',
    item_count: 4
  });


  ListItem.insert({
   list: 'three',
   title: 'Persons of Interest Barbershop',
   image: 'http://populist-images.s3.amazonaws.com/Persons-of-Interest_06.jpg',
   content: 'People working there were nice, pleasant interior, beers while you wait.',
   order: 1
  })

  ListItem.insert({
   list: 'three',
   title: 'George\'s Barber Shop',
   image: 'http://populist-images.s3.amazonaws.com/Georges.jpg',
   content: 'The last time I was in, I got my haircut by Viktor\'s cousin, and he\'s good too, though, I would say I still marginally prefer Eddie and Viktor.',
   order: 2
  })

  ListItem.insert({
   list: 'three',
   title: 'The Stepping Razor',
   image: 'http://populist-images.s3.amazonaws.com/SteppingRazor_1098.jpg',
   content: '"No fuss" gets thrown around a lot when talking about barbershops, but believe it this time. Danny Baptista started his shop in the back of a BMX store, and now he\'s running one of the best places to get a cut in Brooklyn. You won\'t beat the price, and you definitely won\'t find a more skilled team of barbers in King\'s County.',
   order: 3
  })

  ListItem.insert({
   list: 'three',
   title: 'Tomcats',
   image: 'http://populist-images.s3.amazonaws.com/TomKatsrbershops_11_sk_150204.jpg_3x2_1600.jpg',
   content: 'Tomcats is the industry standard for the modern vintage gentleman\'s cut. What does that mean? If you part it, comb it, slick it back, or smear it with pomade, this is your joint. Sure they\'ll do any kid of cut you want, but if you\'re after a quick buzz, Astor Barber is your best bet.',
   order: 4
  })

  //List FOUR content
  Lists.insert({
    _id: 'four',
    title: 'Coffee Shops for a Meeting in NYC',
    lead_image: 'http://populist-images.s3.amazonaws.com/SuperCrown.4.jpg',
    subtitle: 'Sometimes you need a place to meet a client that isn’t a office. These are my go-to spots in NYC with a professional quiet setting (and good coffee)!',
    byline: 'Sarah Nelson',
    content: 'Content for list 4.',
    item_count: 4
  });

  ListItem.insert({
   list: 'four',
   title: 'Supercrown Coffee Roasters',
   image: 'http://populist-images.s3.amazonaws.com/SuperCrown.4.jpg',
   content: 'You can tell from the wine-style tasting notes on the menu that the owner of this airy Bushwick newcomer—Darleen Scherer, a founder of Gorilla Coffee—takes her java seriously. Connoisseurs can test whether they can distinguish between notes of green grapes in the PT Toarco from Sulawesi and the Concorde grapes in the Kanzu Lot #15 from Rwanda. In addition to pour-over, you\'ll find all the usual cafe offerings (cappuccinos, lattes, cortados), a selection of teas, plus treats like single origin drinking chocolate, an iced almond dirty chai and a coffee milkshake.',
   order: 1
  })

  ListItem.insert({
   list: 'four',
   title: 'Tekoá',
   image: 'http://populist-images.s3.amazonaws.com/Tekoav1.4.jpg',
   content: 'Fans of Cobble Hill\'s La Vara and Txikito and El Quinto Pino in Chelsea will want to check out this sibling Cobble Hill cafe (on the same block as La Vara). The spot serves coffee (from Irving Farm Coffee Roasters), housemade pastries, breakfast, sandwiches and much more, with flavors on the broad menu wandering from Latin America to Spain to the Mediterranean. With its bright-red door and sunny window seats, the trim storefront has a charming stay-awhile vibe that\'s enhanced by the fact that breakfast is served into the late afternoon. Beyond breakfast, there are hearty sandwiches such as the porchetta spiced pork shoulder and a double burger with Idiazabel cheese, plus cakes, cookies and other baked goods.',
   order: 2
  })

  ListItem.insert({
   list: 'four',
   title: 'Ludlow Coffee Supply Co.',
   image: 'http://populist-images.s3.amazonaws.com/Ludlowv1.4.jpg',
   content: 'Lower East Siders who used to put down pints of beer at the Pink Pony can now sidle up to the same wooden bar for a cold brew coffee. The coffee shop, a sibling to Sweet Chick next door, is open from 8 AM to 8 PM, serving espresso, lattes and other coffee drinks, plus a brief menu of eggs, avocado toast and salads. Those who are so inclined can head to the back of the bar to the adjoining Ludlow Barber Supply for a hot-towel shave or a haircut.',
   order: 3
  })

  ListItem.insert({
   list: 'four',
   title: 'Tilda All Day',
   image: 'http://populist-images.s3.amazonaws.com/Tildav1.4.jpg',
   content: 'This all-day cafe from chef Claire Welle (Gwynett Street, Per Se, Pecks) and co-owners Daniel Nusbaum and Samantha Safer opened last fall in Clinton Hill. With a space designed by the MP Shift, the cafe features Parlor Coffee, housemade pasties and various sandwiches and small plates that rotate frequently.',
   order: 4
  })

  // List 5 content
  Lists.insert({
    _id: 'five',
    title: 'Bagels in NYC',
    lead_image: 'http://populist-images.s3.amazonaws.com/tompkins.jpg',
    subtitle: 'I was teethed on H&H Bagels, and it\'s no secret that the heartbreak I experienced when my beloved bagel shop shuttered in 2011 was worse than that from any failed romantic relationship. I don\'t care if the quality of H&H went down in its later years, for I dream, still, of those hot sesame bagels, and nothing will ever replace them for me. Still, this city has other good bagels, I suppose. Whatever. Here they are, broken down by categoryÑleave your favorites in the comments, and feel free to send me more bagels to ease my pain. ',
    byline: 'Rebecca Fishbein',
    content: 'Content for list 5.',
    item_count: 7
  });


  ListItem.insert({
   list: 'five',
   title: 'TOMPKINS SQUARE BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/tompkins.jpg',
   content: 'Tompkins Square Bagels which owner Christopher Pugliese calls a love letter to the East Village has plenty of local charm. Moderately priced, and objectively robust, bagels come shiny and packed with cream cheese, of which there is a wide array of options (including the Birthday Cake cream cheese, which is legendary). Seating tends to be limited, so it may be best to plan to grab-on-the-go.',
   order: 1
  })
 
  ListItem.insert({
   list: 'five',
   title: 'ESS-A-BAGEL',
   image: 'http://populist-images.s3.amazonaws.com/essa.jpg',
   content: 'The original 1st Avenue location is dead and gone (though a new East Village/Gramercy spot will arrive...eventually), but Midtown East still serves up the same giant, fluffy bagels for which this Manhattan mainstay\'s long been known. Some unenlightened folk claim Ess-A-Bagel\'s offerings are too big, but we beg to differ, and will continue to indulge in a crispy, colossal everything bagel loaded with scallion cream cheese, lox and tomato. Our apologies if you get too close to us on the train later, but at least we help mitigate flu season.',
   order: 2
  })

  ListItem.insert({
   list: 'five',
   title: 'MURRAY\'S BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/murrays.jpg',
   content: 'Murray\'s broke my heart last year when they gave in to transplants\' demands and began toasting fresh bagels, a move I consider a great bagel shop\'s greatest crime. Still, an everything bagel with lox spread is a work of art here. Go early to get the freshest bagel, skip the toaster and leave in the embrace of bagel-eating angelsÑnote that there\'s also a location in Chelsea, but the 20-plus year old Greenwich Village spot is above and beyond the best one.',
   order: 3
  })

  ListItem.insert({
   list: 'five',
   title: 'TERRACE BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/terrace.jpg',
   content: 'This Windsor Terrace spot continues to produce some of the most solid bagels in all of Kings County...and therefore the WORLD. These ever-fresh fluffy offerings are best when doused with a healthy serving of house-made flavored cream cheese or sandwiching sliced turkey and mustard. Plus, there\'s no need to get them toasted; just slap on a spread and head out to nearby Prospect Park with your breakfast/lunch/midday snack, assuming the sky has stopped winter-crying.',
   order: 4
  })

  ListItem.insert({
   list: 'five',
   title: 'KOSSAR\'S BIALYS',
   image: 'http://populist-images.s3.amazonaws.com/kossars.jpg',
   content: 'This LES institution may be famed for its namesake bialys, but the $1 bagels here are nothing to sneer at, either. The shop underwent a recent renovation and now sells a slew of spreads, but the magic here is still in the bagel itself. Of course, if you\'re feeling "adventurous" you can\'t go wrong with a bialy, a pillowy round thing that looks a little bit like a bagel but will SURPRISE YOU when you bite into it and are overcome by the taste of onionÑor try the "pletzel," a savory, foccacia-esque flatbread.',
   order: 5
  })

  ListItem.insert({
   list: 'five',
   title: 'BAGEL HOLE',
   image: 'http://populist-images.s3.amazonaws.com/bagelhole.jpg',
   content: 'There\'s been some controversy over this venerable Park Slope bagel spot. Naysayers say the bagels here are too small and too tough, but I disagree though I\'m a fan of a fluffier bagel, the little guys here are probably the size a bagel should be, and not what our double cheeseburger-eating stomachs have decided they must be. Haters be damned, Bagel Hole\'s goods are always fresh, dense and chewy, enveloped by the necessary salty, crispy crust. Eat with cream cheese, whitefish, lox or nothing, dream of flocks of angels crowned by bagel halos all night long.',
   order: 6
  })

  ListItem.insert({
   list: 'five',
   title: 'UTOPIA BAGELS',
   image: 'http://populist-images.s3.amazonaws.com/utopia.jpg',
   content: 'You likely need a car to get to this out-of-the-way bagel shop, but the wares here are well worth the price of a Zip Car rental, with fresh bagels baked onsite earning legions of fans and garnering long, looong lines on weekends. Really, anyone who calls themselves a fan of Real Bagels needs to make the pilgrimage to Utopia get an onion bagel with lox, and don\'t breathe near anyone for a week or two. You\'ll be floating so hard on post-bagel love you won\'t even notice the isolation.',
   order: 7
  })

  
  

  //List 6 content
 Lists.insert({
    _id: 'six',
    title: 'Hip Hop Albums of the 1990s',
    lead_image: 'http://populist-images.s3.amazonaws.com/Nasijusr.jpg',
    subtitle: 'In the 1990s, hip-hop truly exploded. Regional scenes from around the country blew up in unprecedented ways, helping rap to become one of the most dominant musical genres in the world.Major corporations invested in labels that started on the street, while regional indies wielded enough power to drop game-changing records. It was an era of transformation that created an incredible variety of styles and sounds. Along the way, some of the greatest rap albums of all time were released: The Low End Theory. Life After Death. 36 Chambers. The Chronic.',
    byline: 'Ben Manzone',
    content: 'Content for list 6.',
    item_count: 6
  });

 ListItem.insert({
   list: 'six',
   title: 'Nas, Illmatic (1994)',
   image: 'http://populist-images.s3.amazonaws.com/Nasijusr.jpg',
   content: '',
   order: 1
  })

 ListItem.insert({
   list: 'six',
   title: 'The Notorious B.I.G., Life After Death (1997)',
   image: 'http://populist-images.s3.amazonaws.com/Biggie7y.jpg',
   content: '',
   order: 2
  })
  
  ListItem.insert({
   list: 'six',
   title: 'A Tribe Called Quest, Midnight Marauders (1993)',
   image: 'http://populist-images.s3.amazonaws.com/Tribe.jpg',
   content: '',
   order: 3
  })

  ListItem.insert({
   list: 'six',
   title: 'OutKast, Aquemini (1998)',
   image: 'http://populist-images.s3.amazonaws.com/Outcast.jpg',
   content: '',
   order: 4
  })

  ListItem.insert({
   list: 'six',
   title: 'The Pharcyde, Bizarre Ride II The Pharcyde (1992)',
   image: 'http://populist-images.s3.amazonaws.com/Pharcyde.jpg',
   content: '',
   order: 5
  })

  ListItem.insert({
   list: 'six',
   title: 'Gang Starr, Hard to Earn (1994)',
   image: 'http://populist-images.s3.amazonaws.com/GangStarrt.jpg',
   content: '',
   order: 6
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