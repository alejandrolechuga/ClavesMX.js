/**
* @class RFC
* @developer Alejandro Lechuga
*/

function ClavesMX () {
  "use strict";
  console.log(Array(3).join('x'));
  // VOCALES
  var vocales = [
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
  var nombres_comunes = [
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
  var estados = {
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

  var abreviaturas_sociedad = [
      'S. EN N.C.'
    , 'S. EN C.V.'
    , 'S. DE R.L.'
    , 'S. EN C. POR A.'
    , 'S.A. DE C.V.'
    , 'S.N.C.'
    , 'S.C.L.'
    , 'S.C.S.'
    , 'S.A.'
    , 'S.C.'
    , 'A.C.'
    , 'A. EN P.'
    , 'Compañía'
    , 'Cia.'
    , 'Sociedad'
    , 'Soc.'
  ];

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

  var RFCPersonaFisica = function(args) {
    var 
      _RFC        = []
    , paterno     = args.paterno
    , materno     = args.materno
    , nombre      = args.nombre
    , nacimiento  = args.nacimiento
    
    , pattern 
    , found
    , nombres

    , result; 
    
    //Debug
    console.log(args);

    // Normalizar Nombre Completo
    paterno = normalizar(paterno);
    materno = normalizar(materno);
    nombre  = normalizar(nombre);

    // Primer caracter de apellido paterno
    _RFC.push(paterno[0]);

    // Primer vocal del primer del nombre 
    pattern = new RegExp('[' + vocales.join('|') + ']');
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
      pattern = new RegExp('(' + nombres_comunes.join('|') + ')');
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
    
    // FORMATO DE FECHA
    _RFC.push(formatoFecha(
        nacimiento.year
      , nacimiento.month
      , nacimiento.day
    ));

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
    // Recorre los cada caracter y toma la posicion de forma inversa
    // Pi => [13][12][11][10]...[2]
    // V  => tabla_cod_verif_rfc['A'] 
    // V12 * (Pi13 + 1) + V11 * (Pi12 + 1) ... V0 * (Pi0 + 1)
    for (var i = 0; i < rfc_length; i++) {
      accum += parseInt(tabla_cod_verif_rfc[rfc_string[i]]) * ((rfc_length + 1) - i);
    }

    // Condiciones de digito verificador
    var coef = Math.floor(accum  / 11)
      , residuo = (accum % 11);

    if (residuo == 0) {
      _RFC.push(0);
    } else if (residuo == 10 || residuo == 1) {
       // La comparacion con 1 cae en este caso por que 11-1 = 10
      _RFC.push("A");
    } else if (residuo > 0) {
      _RFC.push(11 - residuo);
    } 

    // _RFC to String 
    result = _RFC.join(''); 

    // Limpiar palabras inconvenientes 
    // @todo Este deberia ser antes de HOMOCLAVE ?
    result = limpiarPalabras(result);
    return result;  
  };
  
  var RFCPersonaMoral = function(args) {
    var
      _RFC        = []
      , nombre    = args.nombre
      , fecha     = args.fecha
      , nombres   = [];
      
      console.log("nombre ", nombre);
      nombre = trim(nombre);
      nombre = nombre.toUpperCase();
      nombre = removerAbreviaturasSociedad(nombre);
      nombre = normalizar(nombre);
      nombre = trim(nombre);

      // Convertir puntos de Abreviaturas a espacios
      nombre = nombre.replace(/\./g,' ');

      // Degar solo un espacio por palabra
      nombre = nombre.replace(/\s+/g,' ');

      // Separar Palabras del Nombre 
      nombres = nombre.split(' ');
      console.log(nombres);
      // Si el nombre consta de 3 palabras o mas 
      // seran el primero caractere de cada palabras
      if (nombres.length > 2) {
        _RFC.push(nombres[0].charAt(0));  
        _RFC.push(nombres[1].charAt(0));
        _RFC.push(nombres[2].charAt(0));

      // Si el nombre consta de 2 palabras 
      // seran el primer caracter de cada palabra y el segundo de la segunda palabra 
      } else if (nombres.length == 2) {
        _RFC.push(nombres[0].charAt(0));  
        _RFC.push(nombres[1].charAt(0));
        _RFC.push(nombres[1].charAt(1));
      } else {
        if (nombres[0].length > 2) {
      // En el caso que sea una sola palabra
      // seran los 3 caracteres de la palabra
          _RFC.push(nombres[0].charAt(0));  
          _RFC.push(nombres[0].charAt(1));
          _RFC.push(nombres[0].charAt(2));
        } else {
          nombres[0] += Array(4 - (nombres[0].length)).join('X');
          _RFC.push(nombres[0]);
        }
      }

      // Format de fecha 
      _RFC.push(formatoFecha(
          fecha.year
        , fecha.month
        , fecha.day
      ));

      //console.log(_RFC.join(''));
    return _RFC.join('');
  };

  var formatoFecha = function (anio, mes, dia) {
    var fecha = [];
    // Los dos ultimos digitos del Año
    anio = anio % 100;
    fecha.push( anio > 9 
      ? anio 
      : '0' + anio
    );

    // Dia del Mes
    fecha.push(mes > 9 
      ? mes 
      : '0' + mes
    );

    // Dia de Nacimiento
    fecha.push(dia > 9
      ? dia
      : '0' + dia
    ); 

    return fecha.join('');
  };

  /**
  * @method normalizar
  * @param String
  * @return String
  */
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
  * @method limpiarPalabras
  * @param String
  * @return String
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

  /**
  * @method removerAbreviaturasSociedad
  * @param String 
  * @return String
  */
  var removerAbreviaturasSociedad = function(string) {
    var pattern = RegExp('(' + abreviaturas_sociedad.join('|') + ')');
    string = string.replace(pattern, '');
    string = string.replace(/,/g,'');
    return string;
  };

  var trim = function(string){
    return string.replace(/^\s+|\s+$/g, "");
  }
  return {
      'RFCPersonaFisica' : RFCPersonaFisica
    , 'RFCPersonaMoral'  : RFCPersonaMoral     
  }
}