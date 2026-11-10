// Para agregar una propiedad nueva, copia uno de los bloques de abajo y cambia los datos.
// Cada propiedad necesita: id unico, direccion, enlace de Doorify, precio, impuestos, seguro y escenarios de renta.
// Las rentas (v) son el total mensual de todas las unidades.
window.PROPS = [
  {
    id:'granby', lat:35.9999548, lon:-78.8840628, name:'1214 Granby Street', city:'Durham, NC 27701',
    en:{
          kind:'Duplex',
          tags:['Built in 2009','Townhome style duplex','2 units of 3 bedrooms and 2 baths','1 car garage per unit','No HOA','60 days on the market since it was relisted (97 in total)'],
          taxNote:'Taxes for tax year 2025 (assessed value $459,420).',
          rentSrc:'Rentometer QuickView, apartments or attached units only (not single-family homes), because a duplex earns less rent than a house of the same size. Each side is compared separately: 3 bedrooms, 1.5 baths or more, and between 950 and 1,300 sq ft (each side is about 1,100 sq ft). That is 17 comparables within a 3 mile radius. The median is $1,668 per side and we multiply it by 2 sides. Middle half range per side: $1,529 to $2,612. The high end is wide because it includes some new luxury buildings. IMPORTANT: although Rentometer shows a median of $1,668 per side, so we do not set false expectations we cap our typical scenario at $1,400 per side ($2,800 total) and the maximum at $1,500 per side ($3,000 total). The conservative scenario ($1,250 per side) is what the highest-paying tenant pays today. These caps are our own judgment, not a Rentometer figure.',
          rents:{median:'Our typical estimate (cap of $1,400 per side)',p25:'Conservative ($1,250 per side)',p75:'Maximum we consider ($1,500 per side)',actual:'Current rents under lease ($1,059 and $1,250)',custom:'Other rent (I will type it)'},
          rentNote:'Today the two units rent for $1,059 and $1,250 per month. According to the listing, the leases end on April 30, 2027, and from then on it could be rented at market price. Choose the current rents scenario to see today\'s return.',
          cardNote:'Confirm the tenants\' situation and the plan for the end of the leases with an attorney.'
        },
    grow:{rent:2.3, value:4.7, src:"Renta: Zillow ZORI de Durham (2.97% al año en 5 años y 1.60% en 3 años; usamos el promedio, 2.3%). Valor: FHFA (la agencia federal, mide el precio de las mismas casas con el tiempo), condado de Durham: 4.7% al año en 20 años y 8.1% en 10 años. Zillow de Durham da 3.7% en 20 años, pero -1.1% en los últimos 3 años. Usamos el promedio de 20 años porque incluye la caída de 2008 y el auge reciente: 4.7%.", srcEn:"Rent: Zillow ZORI for Durham (2.97% per year over 5 years and 1.60% over 3 years; we use the average, 2.3%). Value: FHFA (the federal agency, it tracks the price of the same homes over time), Durham County: 4.7% per year over 20 years and 8.1% over 10 years. Zillow for Durham shows 3.7% over 20 years, but -1.1% over the last 3 years. We use the 20-year average because it includes the 2008 drop and the recent boom: 4.7%."},
    link:'https://www.flexmls.com/share/Epl5F/1214-Granby-Street-Durham-NC-27701',
    kind:'Dúplex', price:400000, orig:415000,
    tags:['Construida en 2009','Dúplex tipo townhome','2 unidades de 3 recámaras y 2 baños','Garaje de 1 carro por unidad','Sin HOA','60 días en el mercado desde que se volvió a listar (97 en total)'],
    tax:4554, taxNote:'Impuestos del año fiscal 2025 (valor tasado $459,420).',
    ins:3100,
    rentSrc:'Rentometer QuickView, solo apartamentos o unidades adjuntas (no casas unifamiliares), porque un dúplex rinde menos renta que una casa del mismo tamaño. Cada lado se compara por separado: 3 recámaras, 1.5 baños o más y entre 950 y 1,300 pies² (cada lado mide unos 1,100 pies²). Son 17 comparables en un radio de 3 millas. La mediana es $1,668 por lado y la multiplicamos por 2 lados. Rango de la mitad central por lado: $1,529 a $2,612. El rango alto es amplio porque incluye algunos edificios nuevos de lujo. IMPORTANTE: aunque Rentometer muestra una mediana de $1,668 por lado, para no crear falsas expectativas limitamos nuestro escenario típico a $1,400 por lado ($2,800 en total) y el máximo a $1,500 por lado ($3,000 en total). El escenario conservador ($1,250 por lado) es lo que hoy paga el inquilino que más paga. Estos topes son nuestro criterio, no una cifra de Rentometer.',
    rents:[
      {k:'median',label:'Nuestro estimado típico (tope de $1,400 por lado)',v:2800},
      {k:'p25',label:'Conservador ($1,250 por lado)',v:2500},
      {k:'p75',label:'Máximo que consideramos ($1,500 por lado)',v:3000},
      {k:'actual',label:'Rentas actuales con contrato vigente ($1,059 y $1,250)',v:2309},
      {k:'custom',label:'Otra renta (la escribo yo)',v:2800}
    ],
    rentNote:'Hoy las dos unidades rentan por $1,059 y $1,250 al mes. Según el anuncio, los contratos terminan el 30 de abril de 2027, y desde entonces se podría rentar a precio de mercado. Elige el escenario de rentas actuales para ver el retorno de hoy.',
    cardNote:'Confirma con un abogado la situación de los inquilinos y el plan para el fin de los contratos.'
  },
  {
    id:'sellers', lat:35.5357863, lon:-78.2793964, name:'215 N Sellers Street', city:'Selma, NC 27576',
    en:{
          kind:'Duplex',
          tags:['Built in 2022','Side by side duplex','2 units of 3 bedrooms and 2.5 baths','About 1,255 sq ft per unit','No HOA','155 days on the market'],
          taxNote:'Taxes for tax year 2025 (assessed value $351,820).',
          rentSrc:'Rentometer QuickView does not have enough comparables of 3 bedroom apartments or attached units in this area (only 2 within 10 miles, and none the size of each side). Nearby 3 bedroom single-family homes rent at a median of $1,795, but a duplex earns less, so we do not use that figure. So we do not set false expectations we use the same caps as the other duplex: typical scenario $1,400 per side ($2,800 total) and maximum $1,500 per side. The conservative one is $1,250 per side. These caps are our own judgment, not a Rentometer figure. The best step is to ask the listing agent for the actual rents.',
          rents:{median:'Our typical estimate (cap of $1,400 per side)',p25:'Conservative ($1,250 per side)',p75:'Maximum we consider ($1,500 per side)',custom:'Other rent (I will type it)'},
          rentNote:'Heads up: there is not enough rent data for attached units in Selma, so this rent is our conservative estimate and it is the least reliable on the list. The listing says both units are rented until January 1, 2027, but it does not publish the current rent. Ask the listing agent for it.',
          cardNote:'The seller has more identical buildings on the same street. Buying more than one may open the door to a better price. The listing photos have virtual staging.'
        },
    grow:{rent:2.7, value:4.1, src:"Renta: Zillow ZORI del condado de Johnston (3.41% en 5 años y 1.90% en 3 años; promedio, 2.7%), porque Selma no tiene datos propios. Valor: FHFA (la agencia federal, mide el precio de las mismas casas con el tiempo), condado de Johnston: 4.1% al año en 20 años y 7.5% en 10 años. Zillow de Selma da 3.8% en 20 años, pero 0.3% en los últimos 3 años. Usamos el promedio de 20 años porque incluye la caída de 2008 y el auge reciente: 4.1%.", srcEn:"Rent: Zillow ZORI for Johnston County (3.41% over 5 years and 1.90% over 3 years; average, 2.7%), because Selma has no data of its own. Value: FHFA (the federal agency, it tracks the price of the same homes over time), Johnston County: 4.1% per year over 20 years and 7.5% over 10 years. Zillow for Selma shows 3.8% over 20 years, but 0.3% over the last 3 years. We use the 20-year average because it includes the 2008 drop and the recent boom: 4.1%."},
    link:'https://www.flexmls.com/share/Epl6R/215-N-Sellers-Street-Selma-NC-27576',
    kind:'Dúplex', price:439500, orig:449000,
    tags:['Construida en 2022','Dúplex lado a lado','2 unidades de 3 recámaras y 2.5 baños','Aprox. 1,255 pies² por unidad','Sin HOA','155 días en el mercado'],
    tax:3940, taxNote:'Impuestos del año fiscal 2025 (valor tasado $351,820).',
    ins:2800,
    rentSrc:'Rentometer QuickView no tiene suficientes comparables de apartamentos o unidades adjuntas de 3 recámaras en esta zona (solo 2 en 10 millas, y ninguno con el tamaño de cada lado). Las casas unifamiliares de 3 recámaras cercanas rentan en una mediana de $1,795, pero un dúplex rinde menos, así que no usamos esa cifra. Para no crear falsas expectativas usamos los mismos topes que en el otro dúplex: escenario típico $1,400 por lado ($2,800 en total) y máximo $1,500 por lado. El conservador es $1,250 por lado. Estos topes son nuestro criterio, no una cifra de Rentometer. Lo mejor es pedir las rentas reales al agente de la propiedad.',
    rents:[
      {k:'median',label:'Nuestro estimado típico (tope de $1,400 por lado)',v:2800},
      {k:'p25',label:'Conservador ($1,250 por lado)',v:2500},
      {k:'p75',label:'Máximo que consideramos ($1,500 por lado)',v:3000},
      {k:'custom',label:'Otra renta (la escribo yo)',v:2800}
    ],
    rentNote:'Ojo: no hay datos suficientes de renta de unidades adjuntas en Selma, así que esta renta es nuestro estimado conservador y es la menos confiable de la lista. El anuncio indica que ambas unidades están rentadas hasta el 1 de enero de 2027, pero no publica la renta actual. Pídela al agente de la propiedad.',
    cardNote:'El vendedor tiene más edificios iguales en la misma calle. Comprar más de uno puede abrir la puerta a un mejor precio. Las fotos del anuncio tienen decoración virtual.'
  },
  {
    id:'glendale', lat:35.4433816, lon:-79.1621212, name:'220 Glendale Circle', city:'Sanford, NC 27332',
    en:{
          kind:'Single-family home',
          tags:['Built in 2020','3 bedrooms and 2 baths','About 1,580 sq ft','2 car garage','No HOA','One story, half-acre lot','172 days on the market','Price cut of $65,500'],
          taxNote:'ESTIMATE. The MLS does not publish this property\'s tax. It was calculated with the Lee County rate (65 cents per $100) on the list price. Ask the agent or the county for the real figure.',
          rentSrc:'Rentometer QuickView, median of 19 similar 3 bedroom properties between 1,264 and 1,975 sq ft within a 3 mile radius. Reported average: $1,877. Middle half range: $1,799 to $1,955.',
          rents:{median:'Market median (Rentometer)',p25:'Low market, 25th percentile (Rentometer)',p75:'High market, 75th percentile (Rentometer)',custom:'Other rent (I will type it)'},
          rentNote:'It is a single unit. The listing does not say whether there is a tenant.',
          cardNote:'The listing photos show a clean, well kept home, with a dark cabinet and granite kitchen, and carpeted bedrooms. According to the listing it has a septic tank and propane gas. Confirm the condition in person.'
        },
    grow:{rent:2.8, value:4.0, src:"Renta: Zillow ZORI del condado de Lee (2.82% en 3 años; la cifra de la ciudad, 4.59%, incluye un salto de ajuste, por eso usamos el condado, 2.8%). Valor: FHFA (la agencia federal, mide el precio de las mismas casas con el tiempo), condado de Lee: 4.0% al año en 20 años y 7.7% en 10 años. Zillow de Sanford da 3.9% en 20 años, y 1.4% en los últimos 3 años. Usamos el promedio de 20 años porque incluye la caída de 2008 y el auge reciente: 4.0%.", srcEn:"Rent: Zillow ZORI for Lee County (2.82% over 3 years; the city figure, 4.59%, includes a catch-up jump, so we use the county, 2.8%). Value: FHFA (the federal agency, it tracks the price of the same homes over time), Lee County: 4.0% per year over 20 years and 7.7% over 10 years. Zillow for Sanford shows 3.9% over 20 years, and 1.4% over the last 3 years. We use the 20-year average because it includes the 2008 drop and the recent boom: 4.0%."},
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
    id:'sunfish', lat:35.5359025, lon:-78.331215, name:'282 Sunfish Street', city:'Smithfield, NC 27577',
    en:{
          kind:'Single-family home',
          tags:['Built in 2021','3 bedrooms and 2 baths','About 1,216 sq ft','1 car garage','HOA of $110 per month','One story','135 days on the market'],
          taxNote:'Taxes for tax year 2025 (assessed value $279,900).',
          rentSrc:'Rentometer QuickView, median of 12 similar 3 bedroom properties between 972 and 1,520 sq ft within a 3 mile radius. Reported average: $1,802. Middle half range: $1,744 to $1,861.',
          rents:{median:'Market median (Rentometer)',p25:'Low market, 25th percentile (Rentometer)',p75:'High market, 75th percentile (Rentometer)',custom:'Other rent (I will type it)'},
          rentNote:'It is a single unit. The listing says it is not rented.',
          cardNote:'The listing photos show a clean home, with vinyl plank flooring, a granite kitchen and stainless steel appliances. East River HOA rules: according to the covenants in the listing (a partial copy), the HOA cannot prohibit renting out the home; it can only require a minimum lease of up to 6 months and its own lease form, without charging a fee for the lease. Therefore, long-term renting is allowed. We do NOT know whether short-term rentals (like Airbnb) or mid-term rentals (leases of 1 to 6 months) are allowed, because the use rules (Exhibit C) were not in the documents. Confirm this and the exact fee with the HOA (919-332-4680). Confirm the condition in person.'
        },
    grow:{rent:2.7, value:4.1, src:"Renta: Zillow ZORI del condado de Johnston (3.41% en 5 años y 1.90% en 3 años; promedio, 2.7%); Smithfield solo tiene 20 meses de datos. Valor: FHFA (la agencia federal, mide el precio de las mismas casas con el tiempo), condado de Johnston: 4.1% al año en 20 años y 7.5% en 10 años. Zillow de Smithfield da 3.7% en 20 años, pero -0.4% en los últimos 3 años. Usamos el promedio de 20 años porque incluye la caída de 2008 y el auge reciente: 4.1%.", srcEn:"Rent: Zillow ZORI for Johnston County (3.41% over 5 years and 1.90% over 3 years; average, 2.7%); Smithfield has only 20 months of data. Value: FHFA (the federal agency, it tracks the price of the same homes over time), Johnston County: 4.1% per year over 20 years and 7.5% over 10 years. Zillow for Smithfield shows 3.7% over 20 years, but -0.4% over the last 3 years. We use the 20-year average because it includes the 2008 drop and the recent boom: 4.1%."},
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
