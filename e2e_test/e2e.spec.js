describe('hero list component', function() {
	browser.get('http://localhost:3000');

	it('should list 2 heros by default', function() {
		var heros = element.all(by.repeater('hero in $ctrl.list'));
		expect(heros.count()).toEqual(2);
	});

	it('should delete a hero', function() {
		// Click on the delete button
		element(by.css('.panel')).$('.btn-danger').click();

		var heros = element.all(by.repeater('hero in $ctrl.list'));
		expect(heros.count()).toEqual(1);
	});

	it('should add a hero', function() {
		// Open the new hero form
		element(by.css('.btn-primary')).click();

		element(by.model('$ctrl.hero.name')).sendKeys('Testhero');
		element(by.model('$ctrl.hero.location')).sendKeys('Testlocation');

		// Click on the save button
		element(by.css('.btn-primary')).click();

		var heros = element.all(by.repeater('hero in $ctrl.list'));
		expect(heros.count()).toEqual(2);

		browser.pause();
	});
});