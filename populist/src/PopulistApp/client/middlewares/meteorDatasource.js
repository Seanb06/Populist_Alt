import actionTypeBuilder from '../actions/actionTypeBuilder';

const comps = {};

Meteor.comps = comps;

export default store => next => action => {
  if (!action.meteor || (!action.meteor.get && !action.meteor.unsubscribe)) {
    return next(action);
  }

  const { get, unsubscribe } = action.meteor;

  console.log("meteorDatasource: action.meteor", action.meteor);
  console.log("meteorDatasource: action.meteor", action.type);

  return new Promise((resolve, reject) => {

    console.log("new promise", get, Meteor.isServer);
    if (Meteor.isServer) {

      console.log("should be on the server here");
      const data = get();
      next({ type: actionTypeBuilder.changed(action.type), data });
      return resolve();
    }

    // If we already have an handle for this action
    if (comps[action.type]) {
      comps[action.type].stop();
    }

    if (!unsubscribe) {
      comps[action.type] = Tracker.autorun(() => {
        const data = get();
        next({ type: actionTypeBuilder.changed(action.type), data });
        return resolve();
      });
    }
  });
};