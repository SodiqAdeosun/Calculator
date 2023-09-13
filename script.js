let displayValue = '0';


    function appendToDisplay(value) {
      document.getElementById("display").value += value;
      }

    function clearDisplay() {
      document.getElementById("display").value = '';
    }

    function deleteDisplay() {
       let displayValue = document.getElementById("display").value;
       if (displayValue.length > 0) {
        document.getElementById("display").value = displayValue.slice(0, -1) 
       }else {
        document.getElementById("display").value = '';
      }
         }
  function calculate() {
      try {
        document.getElementById("display").value = eval(document.getElementById("display").value);

      } catch (error) {
        document.getElementById("display").value = 'Error'
      }
    }


