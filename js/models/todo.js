var app = app || {};

app.ToDo = Backbone.Model.extend({
	defaults: {
		tite: '',
		completed: false
	},

	toggle: function(){
		this.save({
			completed: !this.get('completed')
		})
	}
})
