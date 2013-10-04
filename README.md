<h3>ClavesMX.js</h3>
@TODO Eliminar Palabras inconvenientes de la clave CURP 
@TODO Test con nombres comunes 

<p>ClavesMX.js es una pequeña libreria para generar claves unicas utilizadas en documentos oficiales en México aún falta hacer una serie de pruebas con datos reales para comparar.</p>

<ul>
  <li>RFC para Persona Física.</li>
  <li>RFC para Persona Moral</li>
  <li>CURP</li>
</ul>

<h4> Como utilizar ClavesMX.js </h4>
```html
<script>
  // Se genera una instancia 
  var CMX = new ClavesMX();
</script>
```
<h4>RFC Persona Física.</h4>
```html
<script>
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
</script>
```
<h4>RFC Persona Moral</h4>
```html
<script>
	var resultado = CMX.RFCPersonaMoral({
	nombre: 'Sonora Industrial Azucarera, S. de R.L.'
	,	fecha: {
		month : 11,
		year  : 1982,
		day   : 29
		}
	});
	// RFC => SIA821129
</script>
```
<h4>CURP</h4>
La clave CURP consta de 18 caracteres desafortunadamente los 2 últimos caracteres son asignados por el gobierno y no viene el algoritmo para generarlo.
```html
<script>
	var CMX = new ClavesMX();
	var resultado = CMX.CURP({
	    paterno: 'LECHUGA'
	  , materno: 'AMADOR'
	  , nombre:  'RAMÓN ALEJANDRO'
	  , nacimiento: {
	    month : 11,
	    year  : 1985,
	    day   : 14
	  }
	  ,	sexo: 'H'
	  , estado: 'BAJA CALIFORNIA'
	});
	// CURP => LEAR851114HBCCMM
</script>
```
