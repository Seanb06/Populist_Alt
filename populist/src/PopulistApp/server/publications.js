import { Meteor } from 'meteor/meteor';
import Lists from 'PopulistApp/collections/Lists';


Meteor.publish('lists', () => {
  const selector = {category: {$ne: "private"}};
  return Lists.find(selector);
});

Meteor.publish('singleList', _id => {
  console.log (_id);
  check(_id, String);
  return Lists.find({_id});
});