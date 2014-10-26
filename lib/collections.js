if(Meteor.isServer) {
  var conn = new MongoInternals.RemoteCollectionDriver('mongodb://localhost:27017/metrics-data');
  Metrics = new Mongo.Collection('metrics', {_driver: conn});
}