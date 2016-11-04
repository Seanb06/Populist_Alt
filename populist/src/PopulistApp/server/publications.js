import { Meteor } from 'meteor/meteor';
import Lists from 'PopulistApp/collections/Lists';
import ListItem from 'PopulistApp/collections/ListItem';

Meteor.publish("userData", function () {
  return Meteor.users.find(
    {_id: this.userId}, 
    {fields: 
      {'profile': 1}
    });
});

Meteor.publish('lists', () => {
  const selector = {category: {$ne: "private"}};
  return Lists.find(selector);
});

Meteor.publish('singleList', _id => {
  console.log (_id);
  check(_id, String);
  return [
    Lists.find({_id}),
    ListItem.find({list:_id})
  ];
});