//import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import 'PopulistApp/server';
import Lists from 'PopulistApp/collections/Lists';


Meteor.startup(function(){
  Lists.remove({});
  Lists.insert({
    _id: 'one', title: 'Populist list 1', content: 'Yeah! Lists lists lists!'
  });
  Lists.insert({_id: 'two', title: 'Populist list 2', content: 'Something new soon.'});
  Lists.insert({_id: 'three', title: 'Poplist list 3'});
  Lists.insert({_id: 'four', title: 'Poplist list 4'});
  Lists.insert({_id: 'five', title: 'Poplist list 5'});
  Lists.insert({_id: 'six', title: 'Poplist list 6'});
  Lists.insert({_id: 'seven', title: 'My Secret LIst', category: 'private'});
  
});



// Do server-rendering only in production
// Otherwise, it will break the hot-reload
// DO NOT REMOVE THIS LINE TO TEST, use: meteor --production
// if (process.env.NODE_ENV === 'production') {
//   // Load Webpack infos for SSR
//   ReactRouterSSR.LoadWebpackStats(WebpackStats);

//   require('./routes').default;
// }