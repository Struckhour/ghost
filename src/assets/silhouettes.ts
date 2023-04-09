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
      'MK17 SCOUT':[170],
      'MK17 SCOUT RANGE FINDER':[170],
      'MK17 SCOUT BALLISTIC ADV.':[170],
      'MK17 SCOUT RANGE FINDER BALLISTIC ADV.':[170],
      'RECON-A1':[230],
      'RECON-A1 RANGE FINDER':[230],
      'SR-1':[225],

    },
    'DUAL RANGE': { 
      // L115A3:[],
      'G28':[160],
      'G28 MAWL-DA':[160],
      'G28 RANGE FINDER':[160],
      'G28 SCOUT':[160],
      'G28 SCOUT MAWL-DA':[160],
      'G28 SCOUT BALLISTIC ADV.':[160], 
      'G28 WILDERNESS':[160],
      'G28 WILDERNESS MAWL-DA':[160],
      'G28 WILDERNESS RANGE FINDER':[160],
      'M110':[150],
      'M110 MAWL-DA':[150],
      'M110 RANGE FINDER':[150],
      'MK17 SCOUT':[200],
      'MK17 SCOUT RANGE FINDER':[200],
      'MK17 SCOUT BALLISTIC ADV.':[200],
      'MK17 SCOUT RANGE FINDER BALLISTIC ADV.':[200],
      'RECON-A1':[240],
      'RECON-A1 RANGE FINDER':[240],
      'SR-1':[175],

      },
      
    'TARS101': {
      '416 SCOUT':[190,80],
      '416 SCOUT MAWL-DA':[190],
      '416 SCOUT RANGE FINDER':[190],
      'G28':[200],
      'G28 MAWL-DA':[200],
      'G28 RANGE FINDER':[200],
      'G28 SCOUT':[190],
      'G28 SCOUT MAWL-DA':[190],
      'G28 SCOUT BALLISTIC ADV.':[190],
      'G28 WILDERNESS':[200],
      'G28 WILDERNESS MAWL-DA':[200],
      'G28 WILDERNESS RANGE FINDER':[200],
      'HTI SURVIVAL':[190],
      L115A3:[210],
      'M4A1 SCOUT':[180],
      'M4A1 SCOUT MAWL-DA':[180],
      'M4A1 SCOUT RANGE FINDER':[180],
      'M82':[200],
      'MK17 SCOUT':[150],
      'SCORPIO SCOUT':[210],
      'SR-1':[200],
      },
    'VC16': {
      
        },
    'ACSS': {
     
      },
    'DIGITAL': {
      '416':[250],
      '416 MAWL-DA':[250],
      '416 RANGE FINDER':[250],
      '516':[250],
      '516 BALLISTIC ADV.':[250],
      '516 MAWL-DA':[250],
      '516 MAWL-DA BALLISTIC ADV.':[250],
      '516 RANGE FINDER':[250],
      '516 RANGE FINDER BALLISTIC ADV.':[250],
      '516 SHORTY':[250],
      '516 SHORTY BALLISTIC ADV.':[250],
      '516 SHORTY RANGE FINDER':[250],
      '516 SHORTY RANGE FINDER BALLISTIC ADV.':[250],
      ACR:[220],
      'ACR BALLISTIC ADV.':[220],
      'ACR MAWL-DA':[220],
      'ACR MAWL-DA BALLISTIC ADV.':[220],
      'ACR RANGE FINDER':[220],
      'ACR ASSAULT':[220],
      'ACR ASSAULT BALLISTIC ADV.':[220],
      'ACR ASSAULT MAWL-DA':[220],
      'ACR ASSAULT MAWL-DA BALLISTIC ADV.':[220],
      'ACR ASSAULT RANGE FINDER':[220],
      AK47:[215],
      'AK47 RANGE FINDER':[215],
      'AK74':[225],
      'AK74 ASSAULT':[225],
      'AK74 ASSAULT SURVIVAL':[225],
      'M4A1 CQC':[250],
      'M4A1 CQC BALLISTIC ADV.':[250],      
      'M4A1 CQC MAWL-DA':[250],
      'M4A1 CQC MAWL-DA BALLISTIC ADV.':[250],
      'M4A1 CQC MAWL-DA +30 RANGE':[250],
      'M4A1 CQC RANGE FINDER':[250],     
      'M4A1 CQC RANGE FINDER BALLISTIC ADV.':[250],             
      MK17:[200],
      'MK17 MAWL-DA':[200],
      'MK17 RANGE FINDER':[200],
      'MK17 BALLISTIC ADV.':[200],
      'MK17 MAWL-DA BALLISTIC ADV.':[200],
      'MK17 RANGE FINDER BALLISTIC ADV.':[200],
      'MK17 ASSAULT':[200],
      'MK17 ASSAULT MAWL-DA':[200],
      'MK17 ASSAULT RANGE FINDER':[200],
      'MK17 ASSAULT BALLISTIC ADV.':[200],
      'MK17 ASSAULT MAWL-DA BALLISTIC ADV.':[200],
      'MK17 ASSAULT RANGE FINDER BALLISTIC ADV.':[200],
      'SC-20K':[220],
      'SC-20K MAWL-DA':[220],
      TAVOR:[220],
      VHSD2:[200],
      'VHSD2 MAWL-DA':[200],

      // L115A3:[],
      },
    'SLX5': {

    },
    'TA31H': {
      '416 MAWL-DA':[325],
      '4-AC':[300],
      '4-AC MAWL-DA':[300],
      '4-AC MAWL-DA +30 RANGE':[300],
      '516 MAWL-DA':[325],
      553:[325],
      '553 MAWL-DA':[325],
      A2:[325],
      'A2 MAWL-DA':[325],
      'ACR ASSAULT':[325],
      'ACR ASSAULT MAWL-DA':[325],
      AK47:[300],
      'AK47 RANGE FINDER':[300],
      'AK74':[325],
      'AK74 ASSAULT':[325],
      'AK74 ASSAULT SURVIVAL':[325],
      M4A1:[275],
      'M4A1 MAWL-DA':[275],
      'M4A1 MAWL-DA BALLISTIC ADV.':[275],
      'M4A1 RANGE FINDER':[275],
      'M4A1 BALLISTIC ADV.':[275],
      'M4A1 ASSAULT':[275],
      'M4A1 ASSAULT BALLISTIC ADV.':[275],
      MK17:[275],
      'MK17 BALLISTIC ADV.':[275],
      'MK17 MAWL-DA':[275],
      'MK17 MAWL-DA +30 RANGE':[275],
      'MK17 MAWL-DA BALLISTIC ADV.':[275],
      'MK17 RANGE FINDER':[275],
      'MK17 RANGE FINDER BALLISTIC ADV.':[275],
      'MK17 ASSAULT':[325],
      'MK17 ASSAULT BALLISTIC ADV.':[325],
      'MK17 ASSAULT MAWL-DA':[325],
      'MK17 ASSAULT MAWL-DA BALLISTIC ADV.':[325],
      'MK17 ASSAULT RANGE FINDER':[325],
      'MK17 ASSAULT RANGE FINDER BALLISTIC ADV.':[325],
      'MK17 SCOUT':[300],
      'MK17 SCOUT BALLISTIC ADV.':[300],
      'MK17 SCOUT RANGE FINDER':[300],
      'MK17 SCOUT RANGE FINDER BALLISTIC ADV.':[300],






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
      'Z93 AMR ZOOMED':[140],
    },
    'T5XI TACTICAL': {
      'BFG-50A':[190],
      'BFG-50A LONG BARREL':[190],
      // L115A3:[],
      // M40A5:[],
      'Z93 AMR':[250],
      'Z93 AMR LONG BARREL':[250],
    },
    'DIGITAL': {
      G36C:[190],
      'G36C LONG BARREL':[190],
      'M4A1':[190],
      'M4A1 LONG BARREL':[190],
      'MDR':[225],
      'MDR LONG BARREL':[225],
      'MK16':[190],
      'MK16 LONG BARREL':[190],
      'MK16 LONG BARREL RANGE FINDER':[190],
      'MK16 RANGE FINDER':[190],
      'MK16 SHORT BARREL':[190],
      'MK16 SHORT BARREL RANGE FINDER':[190],
      'MK17':[190],
      'MK17 LONG BARREL':[190],
      'MK17 LONG BARREL RANGE FINDER':[190],
      'MK17 SHORT BARREL':[190],


    },
    'G28': {
      'DRAGUNOV (SVD) RANGE FINDER':[240],
      'HTI':[250],
      'HTI LONG BARREL':[250],
      'MK14 LONG BARREL':[210],
      'SR25 LIBERATOR':[225],

    },
    'PKS-07': {
      // 'DRAGUNOV (SVD) RANGE FINDER':[240],

    },
    'POSP': {

    }
  }
}

export default silhouettes;
