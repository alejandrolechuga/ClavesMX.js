<h3>ClavesMX.js</h3>

<p>ClavesMX.js es una pequeña libreria para generar claves unicas utilizadas en documentos oficiales en México aún no estan todas desarrolladas
pero se pretende tener la siguiente lista. Todo es para que sea de dominio publico en especial a la comunidad de desarroladores</p>

<ul>
  <li>RFC para persona fisica</li>
  <li>RFC para persona moral</li>
  <li>CURP</li>
</ul>

<h4> Como utilizar ClavesMX.js </h4>
```js
  // Se genera una instancia 
  var CMX = new ClavesMX();
```
<h4>RFC Persona Física.</h4>
```js
 	var resultado = CMX.RFCPersonaFisica({
	    paterno: 'DE PEREZ'
	  , materno: 'LOPEZ'
	  , nombre:  'JUAN'
	  , nacimiento: {
	      month : 3
	    , year  : 1963
	    , day   : 5
	  }
	});
	// RFC  => PELJ6303052A9
```
<h4>RFC Persona Moral</h4>
```js
	var resultado = CMX.RFCPersonaMoral({
	nombre: 'Sonora Industrial Azucarera, S. de R.L.'
	,	fecha: {
		month : 11,
		year  : 1982,
		day   : 29
		}
	});
	// RFC => SIA821129
```
