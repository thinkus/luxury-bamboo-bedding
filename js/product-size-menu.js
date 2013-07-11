/*
*	Author: Lior Bar-David
*	Company: Think Us Design
*	Theme: Luxury Bamboo Bedding
*	Date: July 10, 2013
*	Git: https://github.com/thinkus/luxury-bamboo-bedding.git
*/

var menu = {
	selectMenu: null,
	tabMenu: null,
	
	init: function() {
		// Define Menu Variables:
		menu.selectMenu = $('#allPersonalizations .form-field select');
		menu.tabMenu = $('.sizeSelector');
		
		// Bind Event Listeners:
		menu.selectMenu.bind('change', menu.selectOption);
		$('a', menu.tabMenu).bind('click', menu.tabOption);
		
		// Add select value to tab menu as id:
		menu.setTabValue();
	},
	
	selectOption: function(evt) {
		// Update selected tab
		console.log($(':selected', evt.target));
	},
	
	tabOption: function(evt) {
		// Update select option
		if ($(this).attr('id') != $('option:selected', menu.selectMenu).val()) {
			// Find option with matching value and set as selected:
			$('option[value="' + $(this).attr('id') + '"]', menu.selectMenu).attr('selected', 'selected');			
		}
	},
	
	getOptionValue: function() {
		// Set array to store value frome select menu
		var valueArr = [];
		
		// Push all option values to valueArr:
		$('option', menu.selectMenu).each(function(i) {
			//console.log(i, this.value);
			valueArr.push(this.value);
		});
		
		return valueArr;
	},
	
	setTabValue: function() {
		// Get select option valueArr:
		var tabIdArr = menu.getOptionValue();
		var tabs = $('td', menu.tabMenu);
		
		// Add value from tabIdArr as id to tab menu links:
		for (var i = 0, count = tabIdArr.length; i < count; i++) {
			$('a', tabs[i]).attr('id', tabIdArr[i]);
		}
	}
	
};

$(function() {
	menu.init();
});