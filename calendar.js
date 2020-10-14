$(document).ready(function(){

  var currentDate = new Date();
  var currentBeginDay = currentDate.getDate();
  var currentmonth = currentDate.getMonth();
  var currentyear = currentDate.getFullYear();
  function pad(n) {return n<10 ? '0'+n : n}
  function remove(n) {return n<10 ? n.replace('0', '') : n}

  var monthSelected = $('#monthDropdown').val() == null ? currentmonth+1 : $('#monthDropdown').val();
  var yearSelected = $('#yearDropdown').val() == null ? currentyear : $('#yearDropdown').val();

  function getCalendar(target_div, yearSelected, monthSelected){

    function monthDropdown(){
      $('#monthDropdown').empty();
      var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      for(var i=0;i<12;i++){
        var value = i+1;
        var selectedOpt = (value == monthSelected)?'selected':'';
        $('#monthDropdown').append('<option value="' + pad(value) + '" ' + selectedOpt + ' >' + month[i] + '</option>');
      }
    }

     monthDropdown();

     function yearDropdown(){
       $('#yearDropdown').empty();
       var start = currentyear - 5;
       var finish = currentyear + 5;
       for(var i = start; i <= finish; i++){
         var selectedOpt = (i == yearSelected)?'selected':'';
         $('#yearDropdown').append('<option value="' + i + '" ' + selectedOpt + ' >' + i + '</option>');
       }
     }

     yearDropdown();

      var selectedDate = new Date(yearSelected+'-'+monthSelected+'-01');
      var firstDay = new Date(yearSelected, monthSelected-1, 1);
      var dayStart = firstDay.getDay();
      var getDaysInMonth = new Date(yearSelected, monthSelected, 0).getDate();
      var boxDisplay = Math.ceil((getDaysInMonth + dayStart)/7)*7;
      var dayCount = 1;
      //var eventNum = 0;

      var today = currentyear+'-'+(currentmonth+1)+'-'+pad(currentBeginDay);

      for(var box=1 ; box<=boxDisplay; box++){
          if ((box >= dayStart+1) && (box <= (getDaysInMonth + dayStart))){
              dayCount = pad(dayCount);
              var loopDate = yearSelected+'-'+monthSelected+'-'+dayCount;
              /* Define date cell color. Begin each calendar cell */
              if(loopDate == today){
                  $('#calendar_output').append('<li value="'+loopDate+'" class="grey date_cell" id="dayDisplay'+dayCount+'"><span>'+dayCount+'</span></li>');
              }else{
                  $('#calendar_output').append('<li value="'+loopDate+'" class="date_cell" id="dayDisplay'+dayCount+'"><span>'+dayCount+'</span></li>');
              }
              dayCount++;
          }else{$('#calendar_output').append('<li class = "no_date"></li>');}
      }

      function populateDateCells(){
          $.ajax({
              type:'POST',
              url:'calendareventquery.php',
              data:{
                days: getDaysInMonth,
                year: yearSelected,
                month: monthSelected,
                today: today
              },
              success:function(output){
                var data = JSON.parse(output);
                //console.log(data);

                for (var c=1;c<=getDaysInMonth;c++){
                  $('#dayDisplay'+pad(c)).append(data.cell[c]);
                }
                /*adds popup info on date cell click*/
                $('.date_cell').click(function(event) {

                  var clicked = $(this).find( "span").html();

                  $('#calendarDisplayContainer').hide();
                  $('#popupDisplayContainer').append(data.popup[remove(clicked)]);
                  $('#popupDisplayContainer').show();

                   $(document).ready(function($) {
                     $('.exitContainer').click(function(event) {
                       $('#popupDisplayContainer').hide();
                       $('#calendarDisplayContainer').show();
                       $('#popupDisplayContainer').empty();
                     });
                   });
                });
              }
          });
      }
      populateDateCells();

  }

  getCalendar('calendar_output', yearSelected, monthSelected);

  $('#monthDropdown').on('change',function(){
    $('#calendar_output').empty();
      getCalendar('calendar_output', $('#yearDropdown').val(), $('#monthDropdown').val());

  });
  $('#yearDropdown').on('change',function(){
    $('#calendar_output').empty();
      getCalendar('calendar_output', $('#yearDropdown').val(), $('#monthDropdown').val());
  });

});
