{
  let num1 = parseFloat(prompt("Висота", ""));
  let num2 = parseFloat(prompt("Ширина", ""));
  let a = num1 * num2;
  let b = num1 + num1 + num2 + num2;
  document.write(` при висоті прямокутника ${num1}, а ширині ${num2}  
     <table border=2px>
      <tr>
        <td> периметр</td>
        <td>${b}</td>
      </tr>
      <tr>
        <td>площа   </td>
        <td>${a}</td>
      </tr>
    </table>`);
}
