
   function somar(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let somatoria = a + b;
    document.getElementById("resultado").innerText = "O resultado é: " + somatoria;
   }