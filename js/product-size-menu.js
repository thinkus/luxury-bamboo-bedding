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
		
		// Add select value to tab menu as id and set default tab.
		menu.setTabValue();
	},
	
	selectOption: function(evt) {
		// Clear all selected elements
		$('a', menu.tabMenu).removeClass('selected');
		// Add selected class to the selected tab:
		$('a[id="' + $(this).val() + '"]', menu.tabMenu).addClass('selected');
	},
	
	tabOption: function(evt) {
		// Update select option
		if ($(this).attr('id') != $('option:selected', menu.selectMenu).val()) {
			$('a', menu.tabMenu).removeClass('selected');
			$(this).addClass('selected');
			// Find option with matching value of the tab id and set as selected:
			$('option[value="' + $(this).attr('id') + '"]', menu.selectMenu).attr('selected', 'selected');
			// Initiate onchange event to update colour picker
			menu.selectMenu.onchange();		
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
			
			// Set default tab:
			if (i == 1) {
				// Set selected tab:
				$('a', tabs).removeClass('selected');
				$('a', tabs[i]).addClass('selected');
				// Change select option:
				$('option[value="' + $('a', tabs[i]).attr('id') + '"]', menu.selectMenu).attr('selected', 'selected');
			} 
		}
	}	
};

$(function() {
	menu.init();
});