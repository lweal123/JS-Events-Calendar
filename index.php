<!DOCTYPE HTML>
<HTML>
   <HEAD>
      <TITLE>Sample Calendar</TITLE>
      <link rel="stylesheet" href="calendarstyle.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
   </HEAD>
   <BODY>
     <div id="primaryBody">
       <div id="calendarDisplayContainer">
         <div id="topNav"></div><?php /*begin calendar stuff*/ ?>
         <div id="calendarContainer">
           <div id="calendarWrapper">
             <div id="navBar">
                 <select id="monthDropdown"></select>
                 <select id="yearDropdown"></select>
             </div>
             <div id="days">
                 <ul>
                     <li>SUN</li>
                     <li>MON</li>
                     <li>TUE</li>
                     <li>WED</li>
                     <li>THU</li>
                     <li>FRI</li>
                     <li>SAT</li>
                 </ul>
             </div>
             <div id="cellContainer">
                 <ul id="calendar_output"></ul>
             </div>
           </div>
         </div>
       </div>
       <div id="popupDisplayContainer"></div>
     </div><?php /* end calendar stuff*/ ?>

   <script src="calendar.js"></script>
   </BODY>
</HTML>
