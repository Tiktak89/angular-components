angular.module('heroApp').component('heroDetail', {
	templateUrl: 'app/components/hero-detail/hero-detail.html',
	bindings: {
		hero: '<',
		onDelete: '&',
		onUpdate: '&'
	},
	controller : function() {
		var that = this;

		that.delete = function() {
			that.onDelete({hero: that.hero});
		};

		that.update = function(prop, value) {
			that.onUpdate({hero: that.hero, prop: prop, value: value});
		};
	}
});