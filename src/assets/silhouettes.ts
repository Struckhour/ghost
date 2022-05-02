const silhouettes: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: number[]}} } = {
  Breakpoint: {
    'T5XI': {
      '416 SCOUT':[200],
      '416 SCOUT MAWL-DA':[200],
      '416 SCOUT RANGE FINDER':[200],
      'G36C SCOUT':[220],
      'HTI SURVIVAL':[230],
      // L115A3:[],
      'M4A1 SCOUT':[260],
      'M4A1 SCOUT MAWL-DA':[260],
      'M4A1 SCOUT RANGE FINDER':[260],
      'M82':[250],
      // 'MK17 SCOUT':[],
      // 'MK17 SCOUT RANGE FINDER':[],
      'RECON-A1':[230],
      'RECON-A1 RANGE FINDER':[230],
      // 'SR-1':[],

    },
    'DUAL RANGE': { 
      // L115A3:[],
      'M110':[150],
      'M110 MAWL-DA':[150],
      'M110 RANGE FINDER':[150],
      'RECON-A1':[240],
      'RECON-A1 RANGE FINDER':[240],
      },
    'TARS101': {
      '416 SCOUT':[190,80],
      '416 SCOUT MAWL-DA':[190],
      '416 SCOUT RANGE FINDER':[190],
      'HTI SURVIVAL':[190],
      L115A3:[210],
      'M4A1 SCOUT':[180],
      'M4A1 SCOUT MAWL-DA':[180],
      'M4A1 SCOUT RANGE FINDER':[180],
      'M82':[200],
      'MK17 SCOUT':[150],
      'SCORPIO SCOUT':[210],
      // 'SR-1':[],
      },
    'VC16': {
      
        },
    'ACSS': {
     
      },
    'DIGITAL': {
      // L115A3:[],
      },
    'SLX5': {

    },
    'TA31H': {

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
      'BFG-50A ZOOMED':[140],
      'FRF-2 ZOOMED':[170],
      'L115A3 ZOOMED':[160],
      'M110 ZOOMED':[200],
      'MK14 CAPTAIN ZOOMED':[144],
      'SR-1 CHAMELEON ZOOMED':[170],
      'SRSA1 ZOOMED':[150],
    },
    'T5XI TACTICAL': {
      'BFG-50A':[95],
      // L115A3:[],
      // M40A5:[],
    },
    'DIGITAL': {
      'M4A1 LONG BARREL':[190],
      'MDR':[225],
      'MDR LONG BARREL':[225],
      'MK17 LONG BARREL':[190],


    },
    'G28': {
      'MK14 LONG BARREL':[210],
      'SR25 LIBERATOR':[225],

    },
    'PKS-07': {
     
    },
    'POSP': {

    }
  }
}

export default silhouettes;
