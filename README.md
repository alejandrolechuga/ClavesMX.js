<h3>ClavesMX.js</h3>

<p>ClavesMX.js es una pequeña libreria para generar claves unicas utilizadas en documentos oficiales en México aún no estan todas desarrolladas
pero se pretende tener la siguiente lista. Todo es para que sea de dominio publico en especial a la comunidad de desarroladores</p>

<ul>
  <li>RFC para persona fisica</li>
  <li>RFC para persona moral</li>
  <li>CURP</li>
</ul>

<h4> Como utilizar ClavesMX.js </h4>
<code>
```js
  // Se genera una instancia 
  var CMX = new ClavesMX();
```
</code>

<h4>RFC Persona fisica.</h4>
<code>
```js
 	var resultado = CMX.RFCPersonaFisica({
	    paterno: 'DE PEREZ'
	  , materno: 'LOPEZ'
	  , nombre:  'JUAN'
	  , nacimiento: {
	    month : 3,
	    year  : 1963,
	    day   : 5
	  }
	});
	console.log(" Resultado ", resultado);
```
</code>
