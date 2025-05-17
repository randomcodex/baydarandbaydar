import img1 from '../../assets/images/portfolio/mas.png'; 
import img2 from '../../assets/images/portfolio/csd.png'; 
import img3 from '../../assets/images/portfolio/ltg.png';
import img4 from '../../assets/images/portfolio/vdl.webp';
import img5 from '../../assets/images/portfolio/wem.png';

export const brands = [
  {
    id: 'brand1',
    name: 'Mastroberardino',
    logo: img1,
    website: 'https://mastroberardino.com/',
    founded: 1878,
    region: 'Campania, Italy',
    description:
      'Mastroberardino, a historic winery in Campania, Italy, is renowned for preserving indigenous grape varieties like Aglianico and Greco di Tufo. Their signature wine, Radici Taurasi DOCG, exemplifies the depth and longevity of Aglianico from the Irpinia region.',
    extendedDescription: 
      'For over 140 years, the Mastroberardino family has been dedicated to preserving Campania\'s viticultural heritage, particularly after phylloxera devastated European vineyards. Through meticulous research and dedication, they revived ancient grape varieties including Fiano, Greco, and Aglianico that might otherwise have been lost to history. Their vineyards extend across the most suitable areas of Irpinia, where varying altitudes, soils, and microclimates allow each variety to express its full potential.',
    keyWines: [
      {
        name: 'Radici Taurasi DOCG',
        varietal: '100% Aglianico',
        profile: 'Complex aromas of cherry, violet, and wild berries with notes of tobacco and spice. Full-bodied with firm tannins and remarkable aging potential of 20+ years.'
      },
      {
        name: 'Novaserra Greco di Tufo DOCG',
        varietal: '100% Greco',
        profile: 'Bright straw yellow with intense aromas of peach, apricot, and citrus. Mineral-driven palate with refreshing acidity and notable complexity.'
      },
      {
        name: 'Fiano di Avellino DOCG',
        varietal: '100% Fiano',
        profile: 'Elegant white offering notes of honey, hazelnuts, and Mediterranean herbs with a structured palate and impressive aging capability.'
      }
    ],
    awards: [
      'Gambero Rosso "Three Glasses" for multiple vintages of Radici Taurasi',
      'Wine Spectator Top 100 Wines',
      'Decanter World Wine Awards Gold Medal'
    ],
    importanceStatement: 'Mastroberardino stands as a guardian of Campania\'s viticultural heritage and continues to set the benchmark for quality wines from southern Italy.'
  },
  {
    id: 'brand2',
    name: 'Col Sandago',
    logo: img2,
    website: 'https://www.colsandago.it/en/',
    founded: 1970,
    region: 'Conegliano Valdobbiadene, Veneto, Italy',
    description:
      'Col Sandago, situated in the Conegliano Valdobbiadene region of Italy, excels in producing Prosecco Superiore DOCG and reviving the rare Wildbacher grape. Their wines offer elegance and unique profiles.',
    extendedDescription: 
      'Located in the heart of Prosecco country between Venice and the Dolomites, Col Sandago is owned by the Martino Zanetti family. The estate embraces sustainable viticulture across its hillside vineyards, which benefit from the region\'s unique microclimate with warm days and cool nights. Beyond their exceptional Prosecco production, Col Sandago has dedicated significant resources to revitalizing the rare Wildbacher grape, an ancient variety that had nearly disappeared from cultivation.',
    keyWines: [
      {
        name: 'Vigna del Cuc Valdobbiadene Prosecco Superiore DOCG',
        varietal: 'Glera',
        profile: 'Elegant sparkling wine with fine, persistent bubbles. Offers delicate floral aromas with notes of green apple, citrus, and fresh bread. Crisp acidity balanced with subtle sweetness.'
      },
      {
        name: 'Case Bianche Wildbacher IGT',
        varietal: '100% Wildbacher',
        profile: 'Intense ruby red with purple highlights. Complex bouquet of black fruits, violets, and spices. Full-bodied with firm tannins and balanced acidity.'
      }
    ],
    awards: [
      'Decanter Gold Medal for Prosecco Superiore',
      'International Wine Challenge Silver Medal',
      'Slow Wine Guide "Vino Slow" distinction'
    ],
    importanceStatement: 'Col Sandago represents both tradition and innovation, crafting world-class Prosecco while preserving biodiversity through their work with the Wildbacher grape.'
  },
  {
    id: 'brand3',
    name: 'La Togata',
    logo: img3,
    website: 'https://www.latogata.com/',
    founded: 1960,
    region: 'Montalcino, Tuscany, Italy',
    description:
      'La Togata, located in Montalcino, Tuscany, specializes in crafting Brunello di Montalcino DOCG from 100% Sangiovese grapes. Their wines reflect the unique terroir of the region.',
    extendedDescription: 
      'Nestled on the slopes of Montalcino, La Togata is a boutique winery dedicated to producing exceptional Brunello and Rosso di Montalcino. Their vineyards sit at optimal elevations of 350-450 meters above sea level, featuring the galestro and clay soils that contribute to Brunello\'s distinctive character. The estate practices traditional winemaking methods combined with modern technology to achieve the perfect expression of Sangiovese Grosso, locally known as Brunello. With limited production, each bottle receives meticulous attention throughout the growing, fermentation, and extended aging process.',
    keyWines: [
      {
        name: 'Brunello di Montalcino DOCG',
        varietal: '100% Sangiovese Grosso',
        profile: 'Intense garnet color with aromas of dark cherry, leather, tobacco, and Mediterranean herbs. Full-bodied with firm tannins, bright acidity, and remarkable aging potential of 15-20+ years.'
      },
      {
        name: 'Rosso di Montalcino DOC',
        varietal: '100% Sangiovese Grosso',
        profile: 'Vibrant ruby red color offering fresh cherry and red berry notes with hints of violets and spices. Medium-bodied with silky tannins and excellent balance.'
      },
      {
        name: 'Brunello di Montalcino Riserva DOCG',
        varietal: '100% Sangiovese Grosso',
        profile: 'Only produced in exceptional vintages. Deep, complex flavors of dark fruits, dried herbs, chocolate, and balsamic notes. Elegant, powerful, and extraordinarily long-lived.'
      }
    ],
    awards: [
      'James Suckling 95+ points for multiple vintages',
      'Wine Spectator 93+ points',
      'Wine Enthusiast Editor\'s Choice'
    ],
    importanceStatement: 'La Togata exemplifies the highest traditions of Brunello di Montalcino, crafting wines of elegance, power, and remarkable longevity that showcase Sangiovese\'s finest expression.'
  },
  {
    id: 'brand4',
    name: 'Vignedileo',
    logo: img4,
    website: 'https://www.vignedileo.it/en/',
    founded: 1997,
    region: 'Marche, Italy',
    description:
      'Vignedileo, a boutique winery in the Marche region of Italy, focuses on native grapes like Verdicchio. Their signature wine, Issimo, showcases the freshness and complexity of Verdicchio.',
    extendedDescription: 
      'Founded by the Leo family, Vignedileo embraces sustainable farming practices across their hillside vineyards in the Castelli di Jesi area. The winery combines traditional winegrowing knowledge with modern techniques to produce distinctive wines that express the unique character of Marche terroir. Their vineyards benefit from maritime influences of the Adriatic Sea and the protection of the Apennine Mountains, creating ideal growing conditions for Verdicchio and other indigenous varieties. Small production volumes allow for attentive vineyard management and precise winemaking.',
    keyWines: [
      {
        name: 'Issimo Verdicchio dei Castelli di Jesi Classico Superiore DOC',
        varietal: '100% Verdicchio',
        profile: 'Brilliant straw yellow with greenish reflections. Intense aromas of white flowers, green apple, and almond with pronounced minerality. Crisp, structured palate with excellent aging potential.'
      },
      {
        name: 'Rosso Conero DOC',
        varietal: 'Primarily Montepulciano',
        profile: 'Deep ruby red with aromas of ripe cherries, plums, and violet with subtle spice notes. Medium to full-bodied with soft tannins and balanced acidity.'
      }
    ],
    awards: [
      'Gambero Rosso "Two Glasses" for Verdicchio',
      'Slow Wine Guide Recognition',
      'Decanter World Wine Awards Bronze Medal'
    ],
    importanceStatement: 'Vignedileo represents the exciting potential of Marche\'s indigenous varieties, particularly showcasing how Verdicchio can produce world-class white wines of distinction, complexity, and ageability.'
  }
];

export const equipment = [
  {
    id: 'equipment1',
    name: 'Wine Emotion',
    logo: img5,
    website: 'https://www.wineemotion.com/wine-dispenser-and-cooler/',
    founded: 2008,
    headquarters: 'Tuscany, Italy',
    description:
      'Wine Emotion specializes in wine dispensing and preservation systems, offering innovative solutions for restaurants and wine enthusiasts.',
    extendedDescription:
      'Wine Emotion leads the industry with state-of-the-art wine dispensing and preservation technology, designed and manufactured in Italy. Their systems use inert gas preservation, allowing opened bottles to maintain perfect quality for up to 30 days. The company\'s solutions range from compact home units to sophisticated commercial systems that can precisely dispense and track inventory for dozens of bottles simultaneously. These systems enable restaurants, wine bars, and hotels to offer premium wines by the glass without risk of waste or oxidation.',
    keyProducts: [
      {
        name: 'Quattro',
        type: 'Dispensing System',
        features: '4-bottle capacity, temperature control zones, programmable pour sizes, nitrogen preservation system, intuitive touch interface, and cloud-based management software.'
      },
      {
        name: 'Otto',
        type: 'Commercial Dispensing System',
        features: '8-bottle capacity with dual temperature zones, RFID card reader option, customizable LED lighting, industrial-grade components for high-volume environments.'
      },
      {
        name: 'Perle',
        type: 'Premium Dispensing System',
        features: 'Crystal display, customizable finishes, whisper-quiet operation, enhanced temperature precision, and elegant design for luxury environments.'
      }
    ],
    awards: [
      'Innovation Award at HostMilano International Hospitality Exhibition',
      'Good Design Award',
      'Best Bar Equipment Provider - Hospitality Excellence Awards'
    ],
    importanceStatement: 'Wine Emotion systems revolutionize wine service by combining preservation technology with elegant design, allowing establishments to expand their by-the-glass offerings while minimizing waste and maximizing profitability.'
  }
];

export const animationConfig = {
  duration: 1000,
  easing: 'ease-in-out',
  once: true
};

export const portfolioContent = {
  sections: {
    wineries: "Wineries",
    equipment: "Dispensing & Preservation"
  }
};

export const portfolioImages = {
  background: '../assets/images/portfolio/bgportfolio.webp'
};
