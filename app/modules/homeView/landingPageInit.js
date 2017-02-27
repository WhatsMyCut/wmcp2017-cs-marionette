$(document).ready(function() {
	// Set up the Calendar
	var specialDates = [];
	var ppStartDay = 2;
	var ppStartMonth = 0;
	var ppStartYear = 2015;
	var currDate = new Date(ppStartYear, ppStartMonth, ppStartDay);
	do {
		specialDates.push({
			date: new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
			data: {message:"Pay Period End"},
			cssClass: "calendar-payperiod-end"
		});
		currDate.setDate(currDate.getDate() + 14);
	} while (currDate.getFullYear() < (ppStartYear + 2));
	currDate = new Date(ppStartYear,0,13);
	do {
		specialDates.push({
			date: new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
			data: {message:"Payday"},
			cssClass: "calendar-payday"
		});
		currDate.setDate(currDate.getDate() + 14);
	} while (currDate.getFullYear() < (ppStartYear + 2));	
	var holidays = [
		// REMEMBER TO ENTER MONTHS WITH JAN = 0!
		// CCSF Holidays
		 {
			date: new Date(1970, 0, 1),
			data: { message: "Holiday: New Year's Day" },
			repeatYear: true,
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 0, 19),
			data: { message: "Holiday: Presidents' Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 1, 16),
			data: { message: "Holiday: Martin Luther King, Jr. Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 4, 25),
			data: { message: "Holiday: Memorial Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(1970, 6, 3),
			data: { message: "Holiday: Independence Day (Observed)\nPay Period End" },
			repeatYear: true,
			cssClass: 'calendar-holiday-payperiod-end'
		},
		{
			date: new Date(1970, 6, 4),
			data: { message: "Holiday: Independence Day" },
			repeatYear: true,
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 8, 7),
			data: { message: "Holiday: Labor Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 9, 12),
			data: { message: "Holiday: Columbus Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 10, 11),
			data: { message: "Holiday: Veterans' Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 10, 26),
			data: { message: "Holiday: Thanksgiving Day" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2015, 10, 27),
			data: { message: "Holiday: Black Friday" },
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(1970, 11, 25),
			data: { message: "Holiday: Christmas Day" },
			repeatYear: true,
			cssClass: 'calendar-holiday'
		},
		{
			date: new Date(2016, 0, 1),
			data: { message: "Holiday: New Year's Day\nPay Period End" },
			repeatYear: true,
			cssClass: 'calendar-holiday-payperiod-end'
		}
	];
	while (holidays.length > 0) {
		specialDates.push(holidays.shift());
	}
	var cal = $('#mydate').glDatePicker({
		showAlways: true,
		cssName: 'flatwhite',
		borderSize: 2,
		calendarOffset: { x: 0, y: 0 },
		zIndex: 1,
		pointerX: 0,
		pointerY: 0,
		//selectedDate: new Date(2015, 6, 5),

		onHover: function(target, cell, date, data) {
			var tt = $("#tooltip");
			console.info(cell);
			if (data !== null) {
				console.info(window.x + ", " + window.y);
				$("#tooltip-text").html("<nobr>" + date.toLocaleDateString()+ "<wbr>" + data.message + "</nobr>");
				//tt.css("position", "absolute").css("left", window.x + "px").css("top", window.y + "px");
				tt.show();
			} else {
				tt.hide();
			}
		},
		/*
		onClick: function(target, cell, date, data) {
			//alert('click');

			//console.info(target);
			//console.info(cell);
			//console.info(date);
			//console.info(data);
			//$("#mydate-calendar").css("display", "block").show();

			target.val(date.getFullYear() + ' - ' +
						(date.getMonth()+1) + ' - ' +
						date.getDate());

			if(data != null) {
				//alert(date.toLocaleDateString()+ '\n' + data.message);
				$("#tooltip-text").html("<nobr>" + date.toLocaleDateString()+ "<wbr>" + data.message + "</nobr>");
				$("#tooltip").trigger("hover");
				//$("#tooltip").css("visibility", "visible");
			}
		},
		*/
		onShow: function(calendar) {
			//alert('show');
			$("#mydate-calendar").css("display", "block").show(250);
		},
		onHide: function (calendar) {
			//alert('hide');
			console.warn(this);
			return true;
		},
		specialDates: specialDates
	}).glDatePicker(true);
	$("#tooltip").css('visibility', 'hidden');
	cal.render();
	cal.show();
	
	
	// Set up the Carousel
	$("#carousel-container").slick({
	autoplay: true,
	//adaptiveHeight: true,
	//variableWidth: false,
	arrows: false,
	//centerMode: true,
	//centerPadding: '10px',
	//slidesToShow: 3,
	dots: true,
	draggable: false,
	infinite: true,
	fade:true,
	lazyLoad: 'ondemand',
	//cssEase: 'linear',
	/*
	responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
	]
	*/
	});
}).mousemove(function (evt){
	window.x = evt.clientX;
	window.y = evt.clientY;
});
