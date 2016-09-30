angular.module('heroApp').component('heroList', {
	templateUrl: 'app/components/hero-list/hero-list.html',
	controller: function() {
		var that = this;
		that.list = [
			{ name: 'Superman', location: '' },
			{ name: 'Batman', location: 'Wayne Manor' }
		];

		that.updateHero = function(hero, prop, value) {
			hero[prop] = value;
		};

		that.deleteHero = function(hero) {
			var idx = that.list.indexOf(hero);
			if (idx >= 0) {
				that.list.splice(idx, 1);
			}
		};

		that.saveHero = function(hero) {
			that.list.push(hero);
		};
	}
});