Kosnice = new Mongo.Collection("kosnice");


if (Meteor.isClient) {

    Template.proba.helpers({
    kosnice: function(){
        return Kosnice.find();
    }
    });

    Template.proba.events({
        'submit .new-object': function(event){
            var title = event.target.title.value;
            var color = event.target.color.value;

            Kosnice.insert({
                title: title,
                color: color,
                createdAt: new Date()
            });

            event.target.title.value = "";
            event.target.color.value = "";

            return false;
        }
    });

    Template.kosnica.events({
        'submit .edit-object': function(event){
            var title = event.target.title.value;
            var color = event.target.color.value;


            Kosnice.update(this._id, {$set: {
                title: title,
                color: color
            }});

            return false;
        }
    });


    Template.kosnica.events({
        'click .delete': function(){
            Kosnice.remove(this._id);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
