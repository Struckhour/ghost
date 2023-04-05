const sezzing: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: string}} } = {
  Breakpoint: {
    'T5XI': {
      '416 SCOUT':'2, 3, 4, 525',
      'G36C SCOUT':'TAKE THEIR LIVES AT SEVENTY-FIVES',
      'M4A1 SCOUT MAWL-DA':'225, 3, 4, 5',
      'MK17 SCOUT BALLISTIC ADV.':'BALLISTICS ON A BUDGET',
      'SR-1':'LEAST BULLET DROP RIFLE. PERIOD.',

    },
    'DUAL RANGE': { 
      'G28 SCOUT MAWL-DA':'precision in the sweet spot',
      'M110 RANGE FINDER':'intuitive',
      'MK17 SCOUT':'BALLISTICS ON A BUDGET',
      'MK17 SCOUT BALLISTIC ADV.':'BALLISTICS ON A BUDGET',

      },
    'TARS101': {

      G28:'ALIVE TANGO FIX: JUST ADD 66',
      'G28 WILDERNESS':'ALIVE TANGO FIX: JUST ADD 66',
      L115A3:'+ 50 out to 400 meters',
      // 'M4A1 SCOUT':[180],
      'M4A1 SCOUT MAWL-DA':'tango alive? just add seventy-five',
      // 'M4A1 SCOUT RANGE FINDER':[180],
      // 'M82':[200],
      // 'MK17 SCOUT':[150],
      // 'SCORPIO SCOUT':[210],
      'SR-1':'LEAST BULLET DROP RIFLE. PERIOD.',
      'ZASTAVA M93':'easy numbers to 550', 

      },
    'VC16': {

      'MK17 SCOUT':'FN SCAR: FEELS NICE. SOLID, CAPABLE, ACCURATE RIFLE',

        },
    'ACSS': {
      'MK17 SCOUT':'gravis',
      'MK17 SCOUT RANGE FINDER':'gravis',
      'MK17 SCOUT BALLISTIC ADV.':'BALLISTICS ON A BUDGET',
      'M4A1 SCOUT MAWL-DA':'A-1',

     
      },
    'DIGITAL': {
      '4-AC MAWL-DA':'4 EASY NUMBERS',
      '416 MAWL-DA':'SEMPER-FI',
      '416 RANGE FINDER':'SEVENTY-FIVE SANDWICH',
      '416 ASSAULT SPECIAL RANGE FINDER':'SEVENTY-FIVE SANDWICH',
      '416 SHORTY RANGE FINDER':'SHORT AND SWEET',
      '516':'headshots at 250 with no hud?',
      '516 BALLISTIC ADV.':'headshots at 250 with no hud',
      '516 MAWL-DA':'FACTA NON VERBA',
      '516 RANGE FINDER':'headshots at 250 with no hud',
      '516 MAWL-DA BALLISTIC ADV.':'Headshots at 500 with no hud?',
      '553 MAWL-DA':'SEVENTY-FIVE SANDWICH',
      'AK74':'COM-RAD',
      'AK74 ASSAULT':'COM-RAD',
      'AK74 ASSAULT SURVIVAL':'COM-RAD',
      'M4A1 CQC RANGE FINDER':'SHORT AND SWEET',      
      'M4A1 CQC MAWL-DA +30 RANGE':'SEVENTY-FIVE SANDWICH',
      'M4A1 TACTICAL BALLISTIC ADV.':'A GOOD START',
      'M4A1 TACTICAL MAWL-DA':'TACTICAL SEVENTY-FIVES',
      'M4A1 TACTICAL RANGE FINDER':'TACTICAL INDEED',
      MK17:'25,13,25,50',
      'MK17 ASSAULT':'25,13,25,50',
      'MK18 MAWL-DA':'COMPETENT',
      'MK18 RANGE FINDER':'QUALIFIED fifties',
      'SILVER STAKE RANGE FINDER':'"THREE" SEVENTY-FIVES',
      'SILVER STAKE TACTICAL RANGE FINDER':'"THREE" SEVENTY-FIVES',
      VHSD2:'RIGHT AND PROPER',
      

      },
    'SLX5': {
      'ARX200 MAWL-DA':'sniper range in an assault rifle',
      'CTMMG':'RANGE AND REASON',
      'MK14 MAWL-DA':'CAPABLE CONSISTENCY',
      MK48:'INTUITIVE',

    },
    'TA31H': {

      '416 MAWL-DA':'SEMPER-FI',
      '516 MAWL-DA':'FACTA NON VERBA',
      '516 RANGE FINDER':'FACTA NON VERBA',
      'ACR ASSAULT MAWL-DA':'burst for the win',
      'AK74':'COM-RAD',
      'AK74 ASSAULT':'COM-RAD',
      'AK74 ASSAULT SURVIVAL':'COM-RAD',
      'M4A1 BALLISTIC ADV.':'THE STANDARD',
      'M4A1 ASSAULT BALLISTIC ADV.':'A-1',
      'M4A1 SCOUT MAWL-DA':'TACTICALLY SOUND',
      'M4A1 SCOUT MAWL-DA BALLISTIC ADV.':'300,400,550',
      'M4A1 TACTICAL BALLISTIC ADV.':'A GOOD START',
      'M4A1 TACTICAL RANGE FINDER':'TACTICAL INDEED',
      'MK17 ASSAULT MAWL-DA':'gravis',
      'SC-20K MAWL-DA':'INTUITIVE',
      'STONER COMPACT MAWL-DA':'ROCK SOLID',
      VHSD2:'RIGHT AND PROPER',

    },
    'RU LONG-RANGE FOV': {

    },
    'RU LONG-RANGE': {


    },
    'PALADIN OPTIC': {

    }
  },
  Wildlands: {
    'TA31H': {

    },
    'TARS101': {
      // 'BFG-50A ZOOMED':[140],
      // 'FRF-2 ZOOMED':[170],
      // 'L115A3 ZOOMED':[160],
      // 'M110 ZOOMED':[200],
      // 'MK14 CAPTAIN ZOOMED':[144],
      // 'SR-1 CHAMELEON ZOOMED':[170],
      // 'SRSA1 ZOOMED':[150],
      // 'Z93 AMR ZOOMED':[140],
    },
    'T5XI TACTICAL': {
      // 'BFG-50A':[190],
      // 'BFG-50A LONG BARREL':[190],
      // // L115A3:[],
      // // M40A5:[],
      // 'Z93 AMR':[250],
      // 'Z93 AMR LONG BARREL':[250],
    },
    'DIGITAL': {
      // 'M4A1 LONG BARREL':[190],
      // 'MDR':[225],
      // 'MDR LONG BARREL':[225],
      // 'MK16':[190],
      // 'MK16 LONG BARREL':[190],
      // 'MK16 LONG BARREL RANGE FINDER':[190],
      // 'MK16 RANGE FINDER':[190],
      // 'MK16 SHORT BARREL':[190],
      // 'MK16 SHORT BARREL RANGE FINDER':[190],
      // 'MK17':[190],
      // 'MK17 LONG BARREL':[190],
      // 'MK17 LONG BARREL RANGE FINDER':[190],
      // 'MK17 SHORT BARREL':[190],


    },
    'G28': {
      // 'DRAGUNOV (SVD) RANGE FINDER':[240],
      // 'HTI':[250],
      // 'HTI LONG BARREL':[250],
      // 'MK14 LONG BARREL':[210],
      // 'SR25 LIBERATOR':[225],

    },
    'PKS-07': {
      // 'DRAGUNOV (SVD) RANGE FINDER':[240],

    },
    'POSP': {

    }
  }
}

export default sezzing;
