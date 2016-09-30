angular.module('heroApp').component('editableField', {
	templateUrl: 'app/components/editable-field/editable-field.html',
	bindings: {
		fieldValue: '<',
		fieldType: '@?',
		onUpdate: '&'
	},
	controller: function() {
		var that = this;
		that.editMode = false;

		that.handleModeChange = function() {
			if (that.editMode) {
				that.onUpdate({value: that.fieldValue});
				that.fieldValueCopy = that.fieldValue;
			}

			that.editMode = ! that.editMode;
		};

		that.reset = function() {
			that.fieldValue = that.fieldValueCopy;
		};

		that.cancel = function() {
			that.editMode = false;
		};

		that.$onInit = function() {
			console.log(1);
			// Make a copy of the initial value to be able to reset it later
			that.fieldValueCopy = that.fieldValue;

			if (! that.fieldType) {
				that.fieldType = 'text';
			}
		};
	}
});