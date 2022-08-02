<?php
/*

Stwórz klasę PhoneKeyboardConverter zawierającą metody:

1. convertToNumeric, umożliwiającą tłumaczenie łańcucha znaków na ciąg numeryczny
zgodny z klawiaturą telefonu, kolejne „litery” oddzielone powinny być przecinkiem,
2. convertToString , umożliwiającą tłumaczenie ciągu numerycznego zgodnego z klawiaturą
telefonu (gdzie kolejne „litery” oddzielone będą przecinkiem) na tekst.
Metody powinny przyjmować jako wymagany parametr wejściowy ciąg znaków i zwracać
przetłumaczony ciąg. Klasa może zawierać dowolne inne zmienne/metody, które zostały uznane za
niezbędne bądź pomocne przy wykonaniu zadania.

Przykładowe dane wejściowe i oczekiwane rezultaty:
Metoda Dane wejściowe Zwrócone przez metodę
convertToNumeric Ela nie ma kota 33,555,2,0,66,444,33,0,6,2,0,55,666,8,2
convertToString 5,2,22,555,33,222,9999,66,444,55 jablecznik
*/

class PhoneKeyboardConverter {
   static function convertToNumberic(&$arr, $string)
    {
      $output = "";
      $n = strlen($string);
      echo  $string. ' ';
      for ($i = 0; $i < $n; $i++)
      {
         
          if ($string[$i] == ' ')
          {
            $string[$i] = '0';
            $output = $output . $string[$i];
          
          }
          else 
          {    
            if(ctype_lower($string[$i])){
                
               $position = ord($string[$i]) - ord('a');
               $output = $output . $arr[$position] ;
            }
            else{
              $position = ord($string[$i]) - ord('A');
               $output = $output . $arr[$position] ;
            }
            
          }
          $output = $output . ',';
          
         }
         $output = rtrim($output, ',');
         return $output;
    }
    static function convertToString(&$arr, $string)
    {
      
      $str_arr = preg_split ("/\,/", $string); 
      //print_r($string);
      $alphachar = array_combine($arr, range('a', 'z'));
      $n = count($str_arr);
      echo  $string. ' ';
      
      for ($i = 0; $i < $n; $i++)
      {
//echo $str_arr[$i];
//echo $str_arr[$i];
        if($str_arr[$i] ){
        //echo $str_arr[$i];
        echo $alphachar[$str_arr[$i]] ;
        }
        else {
          echo " ";
        }
       
      }
      //print_r($alphachar);
      

         // echo $array_values($str_arr);
        
      
       

    
  }
}


#Wywołanie w konsoli
$selectNumber = new PhoneKeyboardConverter();
$str = array( "2", "22", "222", "3", "33", "333", "4", "44", "444", "5", "55", "555", "6", "66", "666", "7", "77", "777", "7777", "8", "88", "888", "9", "99", "999", "9999"
);

$input = "Ela nie ma kota";
$input1 = "5,2,22,555,33,222,9999,66,444,55";
echo PhoneKeyboardConverter::convertToNumberic($str, $input),"\n";
echo PhoneKeyboardConverter::convertToString($str, $input1),"\n";


?>