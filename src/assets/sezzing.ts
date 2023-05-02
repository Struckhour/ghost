const sezzing: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: string}} } = {
  Breakpoint: {
    'T5XI': {
      '416 SCOUT':'2, 3, 4, 525',
      'G36C SCOUT':'TAKE THEIR LIVES AT SEVENTY-FIVES',
      'M4A1 SCOUT MAWL-DA':'225, 3, 4, 5',
      'MK17 SCOUT BALLISTIC ADV.':'BALLISTICS ON A BUDGET',
      'SR-1':'LEAST BULLET DROP RIFLE. PERIOD.',
      'SR-1 +30 RANGE':'POINT AND SHOOT',

    },
    'DUAL RANGE': { 
      '416 SCOUT':'HEADSHOTS AT 300 WITH NO HUD',  
      "416 SCOUT MAWL-DA": 'seventy-fives and fifties',
      '416 SCOUT RANGE FINDER':'HEADSHOTS AT 300 WITH NO HUD', 
      '553 SCOUT':'headshots at 200 with no hud',  
      '553 SCOUT MAWL-DA':'blood on the tracks',
      '553 SCOUT RANGE FINDER':'Headshots at 400 with no hud', 
      "G28":'headshots at 300 with no hud',
      "G28 MAWL-DA":'triple twenty-fives',
      'G28 SCOUT':"33'S AND 25'S",
      'G28 SCOUT MAWL-DA':"33'S AND 50'S",
      "G28 WILDERNESS":'headshots at 300 with no hud',
      "G28 WILDERNESS MAWL-DA":'triple twenty-fives',
      'M110 MAWL-DA':'200, 300 THEN SEVENTY-FIVES',
      'M110 RANGE FINDER':'THE STANDARD',
      'M4A1 SCOUT':'headshots at 300 with no hud',
      "M4A1 SCOUT MAWL-DA": 'seventy-fives and fifties',
      "M4A1 SCOUT RANGE FINDER": 'headshots at 300 with no hud',
      "MK14 MAWL-DA":'headshots at 200 AND 400 with no hud',
      'MK17 SCOUT':'BALLISTICS ON A BUDGET',
      'MK17 SCOUT BALLISTIC ADV.':'BALLISTICS ON A BUDGET',

      },
    'TARS101': {

      G28:'ALIVE TANGO FIX: JUST ADD 66',
      'G28 MAWL-DA':'HEADSOHOTS AT 400 WITH NO HUD',
      'G28 WILDERNESS':'ALIVE TANGO FIX: JUST ADD 66',
      'G28 WILDERNESS MAWL-DA':'HEADSOHOTS AT 400 WITH NO HUD',
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
      '416 SHORTY RANGE FINDER BALLISTIC ADV.':'HEADSHOTS AT 250 WITH NO HUD',
      '516':'headshots at 250 with no hud?',
      '516 BALLISTIC ADV.':'headshots at 250 with no hud',
      '516 MAWL-DA':'FACTA NON VERBA',
      '516 RANGE FINDER':'headshots at 250 with no hud',
      '516 MAWL-DA BALLISTIC ADV.':'Headshots at 500 with no hud?',
      '553 MAWL-DA':'SEVENTY-FIVE SANDWICH',
      AK47:'SOVIET SEVENTY-FIVES',
      'AK47 RANGE FINDER':'AK...FORTY-SEVEN?',
      'AK74':'COM-RAD',
      'AK74 ASSAULT':'COM-RAD',
      'AK74 ASSAULT SURVIVAL':'COM-RAD',
      AUG:'HEADSHOTS AT 200 WITH NO HUD',
      'AUG ASSAULT':'HEADSHOTS AT 200 WITH NO HUD',
      'G2 RANGE FINDER':'HEADSHOTS AT 225 WITH NO HUD',
      G36C:'DAS IST GUT',
      'G36C MAWL-DA':'fünfundsiebzig',
      'G36C RANGE FINDER':'WUNDERBAR',
      'M4A1 CQC RANGE FINDER':'SHORT AND SWEET',      
      'M4A1 CQC MAWL-DA +30 RANGE':'SEVENTY-FIVE SANDWICH',
      'M4A1 TACTICAL BALLISTIC ADV.':'A GOOD START',
      'M4A1 TACTICAL MAWL-DA':'TACTICAL SEVENTY-FIVES',
      'M4A1 TACTICAL RANGE FINDER':'TACTICAL INDEED',
      'MDR RANGE FINDER':'HEADSHOTS AT 225 WITH NO HUD',
      MK17:'25,13,25,50',
      'MK17 ASSAULT':'25,13,25,50',
      'MK18 MAWL-DA':'COMPETENT',
      'MK18 RANGE FINDER':'QUALIFIED fifties',
      'SILVER STAKE RANGE FINDER':'"THREE" SEVENTY-FIVES',
      'SILVER STAKE TACTICAL RANGE FINDER':'"THREE" SEVENTY-FIVES',
      VHSD2:'RIGHT AND PROPER',
      

      },
    'SLX5': {
      '805 BREN':'RANGE? CZECH.',
      'ARX200 MAWL-DA':'sniper range in an assault rifle',
      'CTMMG':'RANGE AND REASON',
      'MK14 MAWL-DA':'CAPABLE CONSISTENCY',
      MK48:'INTUITIVE',

    },
    'TA31H': {

      '416 MAWL-DA':'SEMPER-FI',
      '4-AC MAWL-DA':'4-acquirendum corpora',
      '4-AC MAWL-DA +30 RANGE':'TACTICAL TWENTY-FIVES',
      '516 MAWL-DA':'FACTA NON VERBA',
      '516 RANGE FINDER':'FACTA NON VERBA',
      '805 BREN':'HEADSHOTS AT 300 WITH NO HUD',
      '805 BREN RANGE FINDER':'HEADSHOTS AT 300 WITH NO HUD',
      'A2 MAWL-DA':'A2',
      'ACR ASSAULT MAWL-DA':'burst for the win',
      AK47:'SOVIET SEVENTY-FIVES',
      'AK47 RANGE FINDER':'COM-RAD',
      'AK74':'COM-RAD',
      'AK74 ASSAULT':'COM-RAD',
      'AK74 ASSAULT SURVIVAL':'COM-RAD',
      'AUG MAWL-DA':'HEADSHOTS AT 275 WITH NO HUD',
      'AUG ASSAULT MAWL-DA':'HEADSHOTS AT 275 WITH NO HUD',
      G36C:'DAS IST GUT',
      'G36C MAWL-DA':'FUN FUN fünfundsiebzig!',
      'G36C RANGE FINDER':'WUNDERBAR',
      'M4A1 BALLISTIC ADV.':'THE STANDARD',
      'M4A1 ASSAULT BALLISTIC ADV.':'A1.',
      'M4A1 SCOUT MAWL-DA':'TACTICAL twenty-fives',
      'M4A1 SCOUT MAWL-DA BALLISTIC ADV.':'300,400,550',
      'M4A1 TACTICAL BALLISTIC ADV.':'A GOOD START',
      'M4A1 TACTICAL RANGE FINDER':'TACTICAL INDEED',
      'MK17 MAWL-DA':'GRAVIS',
      'MK17 MAWL-DA +30 RANGE':'GRAVIS',
      'MK17 RANGE FINDER':'HEADSHOTS AT 275 WITH NO HUD',
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
