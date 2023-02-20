function ejerciciofactorial() {
  let text;
  let factorial = prompt("Introduce un numero", 5);
  for(let a=factorial-1;a>=1;a--)
  {
	  factorial*=a;
  }
  document.getElementById("factorial").innerHTML = factorial;
}