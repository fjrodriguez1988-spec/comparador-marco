// Para agregar una propiedad nueva, copia uno de los bloques de abajo y cambia los datos.
// Cada propiedad necesita: id unico, direccion, enlace de Doorify, precio, impuestos, seguro y escenarios de renta.
// Las rentas (v) son el total mensual de todas las unidades.
window.PROPS = [
  {
    id:'granby', name:'1214 Granby Street', city:'Durham, NC 27701',
    link:'https://www.flexmls.com/share/Epl5F/1214-Granby-Street-Durham-NC-27701',
    price:400000, orig:415000,
    tags:['Construida en 2009','Dúplex tipo townhome','2 unidades de 3 recámaras y 2 baños','Garaje de 1 carro por unidad','Sin HOA','60 días en el mercado'],
    tax:4554, taxNote:'Impuestos del año fiscal 2025 (valor tasado $459,420).',
    ins:3100,
    rentSrc:'Rentometer QuickView, mediana de 29 propiedades similares de 3 recámaras en un radio de 0.75 millas. Promedio reportado: $2,186 por unidad. Rango de la mitad central: $1,841 a $2,530.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:4000},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:3682},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:5060},
      {k:'actual',label:'Rentas actuales con contrato vigente',v:2309},
      {k:'custom',label:'Otra renta (la escribo yo)',v:4000}
    ],
    rentNote:'Hoy las dos unidades rentan por $1,059 y $1,250 al mes. Según el anuncio, los contratos terminan el 30 de abril de 2027, y desde entonces se podría rentar a precio de mercado. Elige el escenario de rentas actuales para ver el retorno de hoy.',
    cardNote:'Confirma con un abogado la situación de los inquilinos y el plan para el fin de los contratos.'
  },
  {
    id:'sellers', name:'215 N Sellers Street', city:'Selma, NC 27576',
    link:'https://www.flexmls.com/share/Epl6R/215-N-Sellers-Street-Selma-NC-27576',
    price:439500, orig:449000,
    tags:['Construida en 2022','Dúplex lado a lado','2 unidades de 3 recámaras y 2.5 baños','Aprox. 1,255 pies² por unidad','Sin HOA','155 días en el mercado'],
    tax:3940, taxNote:'Impuestos del año fiscal 2025 (valor tasado $351,820).',
    ins:2800,
    rentSrc:'Rentometer QuickView, mediana de 13 propiedades similares de 3 recámaras en un radio de 5 millas. Promedio reportado: $1,719 por unidad. Rango de la mitad central: $1,580 a $1,857.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:3590},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:3160},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:3714},
      {k:'custom',label:'Otra renta (la escribo yo)',v:3590}
    ],
    rentNote:'El anuncio indica que ambas unidades están rentadas hasta el 1 de enero de 2027, pero no publica la renta actual. Pídela al agente de la propiedad.',
    cardNote:'El vendedor tiene más edificios iguales en la misma calle. Comprar más de uno puede abrir la puerta a un mejor precio. Las fotos del anuncio tienen decoración virtual.'
  }
];
