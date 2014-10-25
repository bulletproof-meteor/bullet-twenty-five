if(Meteor.isServer) {
  Metrics = new Mongo.Collection('metrics');
}