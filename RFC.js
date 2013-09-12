/**
* @class RFC
* @developer Alejandro Lechuga
*/

function RFC () {
  "use strict";

  // VOCALES
  var vowels = [
      'A'
    , 'E'
    , 'I'
    , 'O'
    , 'U'
  ];

  // ARTICULOS 
  var articulos = [
      'DE'
    , 'DEL'
    , 'LOS'
    , 'LA'
    , 'Y'
  ];

  // CARACTERES ESPECIALES DEL ESPAÑOL 
  var caracteres_esp = {
      'Á': 'A'
    , 'É': 'E'
    , 'Í': 'I'
    , 'Ó': 'O'
    , 'Ú': 'O'
    , 'Ü': 'U'
    , 'Ñ': 'N'
  };

  // NOMBRES COMUNES
  var common_names = [
      'MARIA'
    , 'JOSE'
  ];
  
  // CARACTERES VALIDOS PARA NOMBRE
  var caracteres_persona_fisica = [
      '´'
    , '.'
  ];

  // CARACTEES DE PERSONA MORAL 
  var caracteres_persona_moral = [
  
  ];

  // ESTADOS DE MEXICO 
  var states = {
      'AGUASCALIENTES': 'AG'
    , 'BAJA CALIFORNA': 'BC'
  };

  // PALABRAS INCONVENIENTES
  var palabras_incov = {
      'BUEI': 'BUEX'
    , 'BUEY': 'BUEX'  
    , 'CACA': 'CACX'  
    , 'CACO': 'CACX'  
    , 'CAGA': 'CAGX'   
    , 'CAGO': 'CAGX'  
    , 'CAKA': 'CAKX'  
    , 'COGE': 'COGX'  
    , 'COJA': 'COJX'  
    , 'COJE': 'COJX'  
    , 'COJI': 'COJX'  
    , 'COJO': 'COJX'  
    , 'CULO': 'CULX'  
    , 'FETO': 'FETX'  
    , 'GUEY': 'GUEX'  
    , 'JOTO': 'JOTX'  
    , 'KACA': 'KACX'  
    , 'KACO': 'KACX'  
    , 'KAGA': 'KAGX'  
    , 'KAGO': 'KAGX'    
    , 'KOGE': 'KOGX'
    , 'KOJO': 'KOJX'
    , 'KAKA': 'KAKX'
    , 'KULO': 'KULX'
    , 'MAME': 'MAMX'
    , 'MAMO': 'MAMX'
    , 'MEAR': 'MEAX'
    , 'MEON': 'MEOX'
    , 'MION': 'MIOX'
    , 'MOCO': 'MOCX'
    , 'MULA': 'MULX'
    , 'PEDA': 'PEDX'
    , 'PEDO': 'PEDX'
    , 'PENE': 'PENX'
    , 'PUTA': 'PUTX'
    , 'PUTO': 'PUTX'
    , 'QULO': 'QULX'
    , 'RATA': 'RATX'
    , 'RUIN': 'RUIX'
  };

  // TABLA PARA ASIGNAR VALORES A LOS CARACTERES 
  // QUE APARECEN EN EL NOMBRE AL QUE SE LE CALCULARA 
  // LA CLAVE DIFERENCIADORA DE HOMONIMO
  var tabla_valor_caracter = {
      ' ': '00'
    , '0': '00'
    , '1': '01'
    , '2': '02'
    , '3': '03'
    , '4': '04'
    , '5': '05' 
    , '6': '06'
    , '7': '07'
    , '8': '08' 
    , '9': '09' 
    , '&': '10'
    , 'A': '11'
    , 'B': '12'
    , 'C': '13'
    , 'D': '14'
    , 'E': '15'
    , 'F': '16'
    , 'G': '17'
    , 'H': '18'
    , 'I': '19'
    , 'J': '21'
    , 'K': '22'
    , 'L': '23' 
    , 'M': '24'
    , 'N': '25'
    , 'O': '26'
    , 'P': '27'
    , 'Q': '28'
    , 'R': '29'
    , 'S': '32' 
    , 'T': '33'
    , 'U': '34'
    , 'V': '35' 
    , 'W': '36'
    , 'X': '37'
    , 'Y': '38'
    , 'Z': '39'
    , 'Ñ': '40'
  };

  // TABLA DE VALORES QUE SE ASIGNAN 
  // A LA CLAVE DIFERENCIADORA DE HOMONIMIO 
  // EN BASE AL COEFICIENTE Y AL RESIDUO
  var tabla_clave_coef_res = {
      '0': 1
    , '1': 2
    , '2': 3 
    , '3': 4
    , '4': 5 
    , '5': 6 
    , '6': 7
    , '7': 8 
    , '8': 9
    , '9': 'A'
    , '10': 'B'
    , '11': 'C'
    , '12': 'D'
    , '13': 'E'
    , '14': 'F'
    , '15': 'G'
    , '16': 'H'
    , '17': 'I'
    , '18': 'J' 
    , '19': 'K'
    , '20': 'L'
    , '21': 'M'
    , '22': 'N'
    , '23': 'P'
    , '24': 'Q'
    , '25': 'R'
    , '26': 'S'
    , '27': 'T'
    , '28': 'U'
    , '29': 'V'
    , '30': 'W'
    , '31': 'X'
    , '32': 'Y' 
    , '33': 'Z' 
  };

  // TABLA DE VALORES PARA LO GENERACIÓN DEL 
  // CÓDIGO VERIFICADOR DEL REGISTRO FEDERAL 
  // DE CONTRIBUYENTES.
  var tabla_cod_verif_rfc = {
      '0': '00'
    , '1': '01'
    , '2': '02'
    , '3': '03'
    , '4': '04'
    , '5': '05'
    , '6': '06'
    , '7': '07'
    , '8': '08'
    , '9': '09'
    , 'A': '10'
    , 'B': '11'
    , 'C': '12'
    , 'D': '13'
    , 'E': '14'
    , 'F': '15'
    , 'G': '16'
    , 'H': '17'
    , 'I': '18'
    , 'J': '19'
    , 'K': '20'
    , 'L': '21'
    , 'M': '22'
    , 'N': '23'
    , '&': '24'
    , 'O': '25'
    , 'P': '26'
    , 'Q': '27'
    , 'R': '28'
    , 'S': '29'
    , 'T': '30'
    , 'U': '31'
    , 'V': '32'
    , 'W': '33'
    , 'X': '34'
    , 'Y': '35'
    , 'Z': '36'
    , ' ': '37'
    , 'Ñ': '38'
  };

  /**
  * @method personaFisica
  * @params Object 
  *   {
  *     paterno : String
  *     materno : String
  *     nombre  : String
  *     nacimiento : Object {
  *       month : Number,
  *       year  : Number,
  *       day   : Number 
  *     }
  *   } 
  * @return String
  */  

  var personaFisica = function(params) {
    var 
      _RFC        = []
    , paterno     = params.paterno
    , materno     = params.materno
    , nombre      = params.nombre
    , nacimiento  = params.nacimiento
    
    , pattern 
    , found
    , nombres

    , result; 
    
    //Debug
    console.log(params);
    // Normalizar Nombre Completo
    paterno = normalizar(paterno);
    materno = normalizar(materno);
    nombre  = normalizar(nombre);

    // Primer caracter de apellido paterno
    _RFC.push(paterno[0]);

    // Primer vocal del primer del nombre 
    pattern = new RegExp('[' + vowels.join('|') + ']');
    found = paterno.match(pattern);
    if (found) {
      _RFC.push(found[0]);
    }

    // Primer caracter de apellido materno
    _RFC.push(materno[0]);

    // Primer caracter de nombre
    nombres = nombre.split(' ');
    if (nombres.length == 1) {
      _RFC.push(nombre[0]);
    } else {

    // Si tienen un segundo nombre
      pattern = new RegExp('(' + common_names.join('|') + ')');
      found = nombres[0].match(pattern);

    // Si hace match con uno de los nombres comunes
      if (found) {
    // Se toma el primer caracter del segundo nombre
        _RFC.push(nombres[1][0]);
      } else {

    // Se toma el primer caracter del primer nombre
        _RFC.push(nombres[0][0]);
      }
    }
    
    // Los dos ultimos digitos de 'nacimiento.year'
    var anio = nacimiento.year % 100;
    _RFC.push( anio > 9 
      ? anio 
      : '0' + anio
      );

    // Dia del Mes
    _RFC.push(nacimiento.month > 9 
      ? nacimiento.month 
      : '0' + nacimiento.month);

    // Dia de Nacimiento
    _RFC.push(nacimiento.day > 9
      ? nacimiento.day
      : '0' + nacimiento.day);    

    // CLAVE DIFERENCIADORA DE HOMONIMIA
    var nombre_completo = [paterno, materno, nombre].join(' ')
      , valores_caracter = '0'
      , nombre_length = nombre_completo.length
      , acum = ''
      , sum  = 0;

    // Valores asignados por caracter
    for (var i = 0; i < nombre_length; i++) {
      valores_caracter += tabla_valor_caracter[nombre_completo[i]];
    }

    // Multiplicacion por posicion , incremento 2
    for (var i = 0; i < valores_caracter.length - 1; i++) {
      acum += valores_caracter[i];
      acum += valores_caracter[i+1];
      sum  += parseInt(acum) * parseInt(valores_caracter[i+1])
      acum = '';
    }

    // Calculo del CLAVE DIFERENCIADORA DE HOMONIMIA
    var coef = Math.floor((sum % 1000) / 34)
      , residuo = ((sum % 1000) % 34);

    _RFC.push(tabla_clave_coef_res[coef]);
    _RFC.push(tabla_clave_coef_res[residuo]);

    // PROCEDIMIENTO PARA CALCULAR EL 
    // DIGITO VERIFICADOR DEL REGISTRO 
    // FEDERAL DE CONTRIBUYENTES
    // 12 Caracteres
    var valores_caracter = []
      , rfc_string = _RFC.join('')
      , rfc_length = rfc_string.length
      , accum = 0;

    // Asignacion de valores por caracter del RFC 
    for (var i = 0; i < rfc_length; i++) {
      accum += parseInt(tabla_cod_verif_rfc[rfc_string[i]]) * ((rfc_length+1)-i);
    }

    var coef = Math.floor(accum  / 11)
      , residuo = (accum % 11);
      console.log('residuo', residuo);
    if (residuo == 0) {
      _RFC.push(0);
    } else if (residuo == 10 || residuo == 1) {
      _RFC.push("A");
    } else if (residuo > 0) {
      _RFC.push(11 - residuo);
    } 

    // _RFC to String 
    result = _RFC.join(''); 
    result = limpiarPalabras(result);
    return result;  
  };
  
  var normalizar = function (string) {
    var pattern 
      , match;
    // Remplazar Caracteres Especiales del Español
    for (var caracter in caracteres_esp) {
      pattern = new RegExp(caracter);
      match = string.match(pattern);
      if (match) {
        string = string.replace(caracter, caracteres_esp[caracter]);
      }
    }

    // Remover Articulos
    pattern = new RegExp('(' + articulos.join('|') + ')\\s','g');
    string = string.replace(pattern, '');

    // Remover Apostofre y puntos

    return string;
  };

  /**
  * @method: limpiarPalabras
  */
  var limpiarPalabras = function (string) {
    var pattern
      , match;

    for(var palabra in palabras_incov) {
      if (palabras_incov.hasOwnProperty(palabra)) {
        pattern = new RegExp(palabra);
        match = string.match(pattern);
        if (match) {
          string = string.replace(palabra, palabras_incov[palabra]);
          break;
        }
      }
    }
    return string;
  };

  return {
    'personaFisica' : personaFisica      
  }
}

var rfc = new RFC();
var resultado = rfc.personaFisica({
    paterno: 'LECHUGA'
  , materno: 'AMADOR'
  , nombre:  'RAMÓN ALEJANDRO'
  , nacimiento: {
    month : 11,
    year  : 1985,
    day   : 14
  }
});
//LEAR8511147J9
console.log(" Esperado => " , "LEAR8511147J9");
console.log(" Resultado ", resultado, "LEAR8511147J9" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'DE PEREZ'
  , materno: 'LOPEZ'
  , nombre:  'JUAN'
  , nacimiento: {
    month : 3,
    year  : 1963,
    day   : 5
  }
});
console.log(" Esperado => " , "PELJ6303052A9");
console.log(" Resultado ", "PELJ6303052A9", resultado == "PELJ6303052A9", resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'GOMEZ'
  , materno: 'DIAZ'
  , nombre:  'EMMA'
  , nacimiento: {
    month : 12,
    year  : 1956,
    day   : 31
  }
});
console.log(" Esperado => " , "GODE561231GR8");
console.log(" Resultado ", resultado, "GODE561231GR8" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'DIAZ'
  , materno: 'DE LOS SANTOS'
  , nombre:  'MARIA LUISA'
  , nacimiento: {
    month : 10,
    year  : 2001,
    day   : 17
  }
});

console.log(" Esperado => " , "DISL011001754R1");
console.log(" Resultado ", resultado, "DISL011001754R1" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'GONZALEZ'
  , materno: 'TORRES'
  , nombre:  'JUAN'
  , nacimiento: {
    month : 5,
    year  : 1978,
    day   : 12
  }
});
console.log(" Esperado => " , "GOTJ7805125T6");
console.log(" Resultado ", resultado, "GOTJ7805125T6" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'PEREZ'
  , materno: 'GARCIA'
  , nombre:  'JOSE'
  , nacimiento: {
    month : 1,
    year  : 1901,
    day   : 1
  }
});
console.log(" Esperado => " , "PEGJ010101R64");
console.log(" Resultado ", resultado, "PEGJ010101R64" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'JUAREZ'
  , materno: 'MORELOS'
  , nombre:  'MANUEL'
  , nacimiento: {
    month : 3,
    year  : 1942,
    day   : 13
  }
});
console.log(" Esperado => " , "JUMM420313PA9");
console.log(" Resultado ", resultado, "JUMM420313PA9" == resultado, resultado.length);

var resultado = rfc.personaFisica({
    paterno: 'MAYO'
  , materno: 'LARA'
  , nombre:  'ALEJANDRO'
  , nacimiento: {
    month : 7,
    year  : 1970,
    day   : 17
  }
});
console.log(" Esperado => " , "MALA700717J54");
console.log(" Resultado ", resultado, "MALA700717J54" == resultado, resultado.length);
