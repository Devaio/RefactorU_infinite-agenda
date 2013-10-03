$(document).ready(function (){

//Week and Date Rendering
	var n = 0
var dateCounter = function() {
	var currentDate = (new Date)
	var newDate = new Date(currentDate);
	newDate.setDate(newDate.getDate() + n);
	var nd = new Date(newDate);
	n++
	calendarDay = nd.toString()

	return calendarDay.slice(3,15);
};


//Rendering Initial Week
var initialWeek = function (){
	var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	var calList = $('<ul class="calendarWeek"></ul>')
	
	for(var i=(new Date().getDay()); i<weekDays.length; i++) {
		var week = createDay(weekDays[i]);
		var item = $('<li></li>');
		item.append(week);
		calList.append(item);
	}

	$('.calendarList').append(calList);

};

//Rendering one week at a time
var renderWeek = function (){
	var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	var calList = $('<ul class="calendarWeek"></ul>')
	
	for(var i=0; i<weekDays.length; i++) {
		var week = createDay(weekDays[i]);
		var item = $('<li></li>');
		item.append(week);
		calList.append(item);
	}

	$('.calendarList').append(calList);
	console.log('renderWeek')

};



var createDay = function(weekdays) {
		var dayOfWeek = $('<div class="dayOfWeek">{0}</div>'.supplant([weekdays]));
		var date = $('<div class="date">'+ dateCounter() +'</div>');
		var appt = $('<span class="appt">test</span>');

		dayOfWeek.append(date);
		dayOfWeek.append(appt);

		return dayOfWeek;
	};
/// End week rendering










initialWeek();


renderWeek();
renderWeek();
renderWeek();
renderWeek();




















});