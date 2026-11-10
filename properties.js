// Para agregar una propiedad nueva, copia uno de los bloques de abajo y cambia los datos.
// Cada propiedad necesita: id unico, direccion, enlace de Doorify, precio, impuestos, seguro y escenarios de renta.
// Las rentas (v) son el total mensual de todas las unidades.
window.PROPS = [
  {
    id:'granby', lat:35.994, lon:-78.899, name:'1214 Granby Street', city:'Durham, NC 27701',
    link:'https://www.flexmls.com/share/Epl5F/1214-Granby-Street-Durham-NC-27701',
    kind:'Dúplex', price:400000, orig:415000,
    tags:['Construida en 2009','Dúplex tipo townhome','2 unidades de 3 recámaras y 2 baños','Garaje de 1 carro por unidad','Sin HOA','60 días en el mercado'],
    tax:4554, taxNote:'Impuestos del año fiscal 2025 (valor tasado $459,420).',
    ins:3100,
    rentSrc:'Rentometer QuickView, solo apartamentos o unidades adjuntas (no casas unifamiliares), porque un dúplex rinde menos renta que una casa del mismo tamaño. Cada lado se compara por separado: 3 recámaras, 1.5 baños o más y entre 950 y 1,300 pies² (cada lado mide unos 1,100 pies²). Son 17 comparables en un radio de 3 millas. La mediana es $1,668 por lado y la multiplicamos por 2 lados. Rango de la mitad central por lado: $1,529 a $2,612. El rango alto es amplio porque incluye algunos edificios nuevos de lujo.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:3336},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:3058},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:5224},
      {k:'actual',label:'Rentas actuales con contrato vigente',v:2309},
      {k:'custom',label:'Otra renta (la escribo yo)',v:3336}
    ],
    rentNote:'Hoy las dos unidades rentan por $1,059 y $1,250 al mes. Según el anuncio, los contratos terminan el 30 de abril de 2027, y desde entonces se podría rentar a precio de mercado. Elige el escenario de rentas actuales para ver el retorno de hoy.',
    cardNote:'Confirma con un abogado la situación de los inquilinos y el plan para el fin de los contratos.'
  },
  {
    id:'sellers', lat:35.5365, lon:-78.2845, name:'215 N Sellers Street', city:'Selma, NC 27576',
    link:'https://www.flexmls.com/share/Epl6R/215-N-Sellers-Street-Selma-NC-27576',
    kind:'Dúplex', price:439500, orig:449000,
    tags:['Construida en 2022','Dúplex lado a lado','2 unidades de 3 recámaras y 2.5 baños','Aprox. 1,255 pies² por unidad','Sin HOA','155 días en el mercado'],
    tax:3940, taxNote:'Impuestos del año fiscal 2025 (valor tasado $351,820).',
    ins:2800,
    rentSrc:'Rentometer QuickView. ATENCIÓN: esta cifra mezcla casas unifamiliares, porque Rentometer no tiene suficientes comparables de apartamentos o unidades adjuntas de 3 recámaras en esta zona (solo 2 en 10 millas, y ninguno con el tamaño de cada lado). Por eso probablemente es alta para un dúplex. Es la mediana de 13 propiedades de 3 recámaras con 1.5 baños o más en un radio de 5 millas: $1,795 por lado, multiplicada por 2 lados. Rango de la mitad central por lado: $1,580 a $1,857. Lo mejor es pedir las rentas reales al agente de la propiedad.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:3590},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:3160},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:3714},
      {k:'custom',label:'Otra renta (la escribo yo)',v:3590}
    ],
    rentNote:'Ojo: la renta de mercado de esta propiedad es la menos confiable de la lista. Rentometer no tiene suficientes comparables de unidades adjuntas en Selma, así que la cifra incluye casas unifamiliares y probablemente es más alta de lo que rendiría un dúplex. El anuncio indica que ambas unidades están rentadas hasta el 1 de enero de 2027, pero no publica la renta actual. Pídela al agente de la propiedad.',
    cardNote:'El vendedor tiene más edificios iguales en la misma calle. Comprar más de uno puede abrir la puerta a un mejor precio. Las fotos del anuncio tienen decoración virtual.'
  },
  {
    id:'glendale', lat:35.4799, lon:-79.1803, name:'220 Glendale Circle', city:'Sanford, NC 27332',
    link:'https://www.flexmls.com/share/EpmBo/220-Glendale-Circle-Sanford-NC-27332',
    kind:'Casa unifamiliar', price:260000, orig:325500,
    tags:['Construida en 2020','3 recámaras y 2 baños','Aprox. 1,580 pies²','Garaje de 2 carros','Sin HOA','Una planta, lote de media acre','172 días en el mercado','Rebaja de $65,500'],
    tax:1690, taxEst:true, taxNote:'ESTIMADO. El MLS no publica el impuesto de esta propiedad. Se calculó con la tasa del condado de Lee (65 centavos por cada $100) sobre el precio de lista. Pide el dato real al agente o al condado.',
    ins:2100, hoa:0,
    rentSrc:'Rentometer QuickView, mediana de 19 propiedades similares de 3 recámaras y entre 1,264 y 1,975 pies² en un radio de 3 millas. Promedio reportado: $1,877. Rango de la mitad central: $1,799 a $1,955.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:1875},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:1799},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:1955},
      {k:'custom',label:'Otra renta (la escribo yo)',v:1875}
    ],
    rentNote:'Es una sola unidad. El anuncio no dice si hay inquilino.',
    cardNote:'Las fotos del anuncio muestran una casa limpia y bien cuidada, con cocina de gabinetes oscuros y granito, y recámaras alfombradas. Según el anuncio tiene fosa séptica y gas propano. Confirma el estado en persona.'
  },
  {
    id:'sunfish', lat:35.5085, lon:-78.3394, name:'282 Sunfish Street', city:'Smithfield, NC 27577',
    link:'https://www.flexmls.com/share/EpmCK/282-Sunfish-Street-Smithfield-NC-27577',
    kind:'Casa unifamiliar', price:249900, orig:249900,
    tags:['Construida en 2021','3 recámaras y 2 baños','Aprox. 1,216 pies²','Garaje de 1 carro','HOA de $110 al mes','Una planta','135 días en el mercado'],
    tax:2707, taxNote:'Impuestos del año fiscal 2025 (valor tasado $279,900).',
    ins:2100, hoa:1320,
    rentSrc:'Rentometer QuickView, mediana de 12 propiedades similares de 3 recámaras y entre 972 y 1,520 pies² en un radio de 3 millas. Promedio reportado: $1,802. Rango de la mitad central: $1,744 a $1,861.',
    rents:[
      {k:'median',label:'Mediana de mercado (Rentometer)',v:1800},
      {k:'p25',label:'Mercado bajo, percentil 25 (Rentometer)',v:1744},
      {k:'p75',label:'Mercado alto, percentil 75 (Rentometer)',v:1861},
      {k:'custom',label:'Otra renta (la escribo yo)',v:1800}
    ],
    rentNote:'Es una sola unidad. El anuncio indica que no está rentada.',
    cardNote:'Las fotos del anuncio muestran una casa limpia, con piso vinílico, cocina con granito y electrodomésticos de acero inoxidable. Reglas de la HOA de East River: según los convenios del anuncio (copia parcial), la HOA no puede prohibir rentar la casa; solo puede exigir un contrato mínimo de hasta 6 meses y su formato de contrato, sin cobrar cuota por el contrato. Por lo tanto, la renta a largo plazo está permitida. NO sabemos si se permiten rentas a corto plazo (como Airbnb) ni a mediano plazo (contratos de 1 a 6 meses), porque las reglas de uso (Exhibit C) no estaban en los documentos. Confirma esto y el costo exacto de la cuota con la HOA (919-332-4680). Confirma el estado en persona.'
  }
];
