angular.module('heroApp').component('heroAdd', {
	templateUrl: 'app/components/hero-add/hero-add.html',
	bindings: {
		onSave: '&'
	},
	controller: function() {
		var ctrl = this;
		ctrl.addMode = false;
		ctrl.hero = {
			name: '',
			location: ''
		};

		ctrl.save = function() {
			ctrl.onSave({ newHero : ctrl.hero });
			ctrl.addMode = false;
		};
	}
});