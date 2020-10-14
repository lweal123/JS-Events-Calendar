<?php

//include 'dbConfig.php';

$dayCount = $_POST['days'];
$year = $_POST['year'];
$month = $_POST['month'];
$today = $_POST['today'];

$output = [];

function pad($n) {return $n<10 ? '0'.$n : $n;}

for ($c=1; $c<=$dayCount; $c++){

  $date = $month.'-'.pad($c).'-'.$year;
  $dateString = $month.pad($c).$year;
  //$dayOfWeekNum = date("w",$date);
  //$dayOfWeekText = date("l",strtotime("$date"))
/*
  $sql = ("SELECT * FROM `table` WHERE `DateColumn` BETWEEN '".$date."' AND '".$date."' ORDER BY DateColumn ASC;");
  $result = mysqli_query($db,$sql);

  for($i = 0; $sampleData[$c][$i] = mysqli_fetch_assoc($result); $i++) ;
  array_pop($sampleData[$c]);
*/
$output['cell'][$c] = '<div id="resultsTableContainer">
  <table class = "resultsTable">
    <thead class = "resultsTableHead">
    </thead>
    <tbody class = "resultsTableBody">
      <tr class = "resultsTableBodyRow"><td>THE DAY IS:</td><td>' . $date . '</td></tr>

    </tbody>
  </table>
</div>';

$output['popup'][$c] = '<div class="popContainer" id="day'.pad($c).'">
 <div class="popTableContainer">
   <div id="close'.pad($c).'" class="exitContainer"><div class="exit">&times;</div></div>
   <table class = "popTable">
     <thead class = "popTableHead">
       <tr class = "popTableHeadRow">
         <th>Put your queried Events in this table</th>
       </tr>
     </thead>
     <tbody class = "popTableBody">
     <tr class = "popTableBodyRow">
       <td>' . /*$sampleData[$c][$i]['Event']*/'Something that needs to be done today' . '</td>
     </tr>
     </tbody>
   </table>
   </div>
 </div>';

}

echo json_encode($output);
?>
