export const BonusRifles:string[]=[
    // LONG NAMES FIRST!!! REVERSE ALPHABETICAL Z-A

//ASR'S

    'VHSD2',

    'TAVOR SCOUT',
    'TAVOR ASSAULT',
    'TAVOR',

    'SR-3M TACTICAL',
    'SR-3M',
    'SILVER STAKE TACTICAL',
    'SILVER STAKE',
    'SC-40K',
    'SC-20K',
    'RESISTANCE ASR SHORTY',
    'MK18',

    
    'MK17 SHORTY GARGOYLE',
    'MK17 SHORTY',
    'MK17 SCOUT',
    'MK17 ASSAULT',
    'MK17',

    'MDR',
    'M4A1 TACTICAL',
    'M4A1 CQC',
    'M4A1 ASSAULT',
    'M4A1',
    'L85-C',
    'KOBLIN',
    'K1A',

    'FAL',
    
    'AUG ASSAULT',
    'AUG SCOUT',
    'AUG',

    'ARX200',
    'AR-18',
   
    'AK74 ASSAULT SURVIVAL',
    'AK74 ASSAULT',
    'AK74 SCOUT',
    'AK74',

    'AK47 SHORTY',
    'AK47 ASSAULT',
    'AK47',
    'AK12',
    'ACR ASSAULT',
    'ACR',
    'AC-AR',
    'A2 SHORTY',
    'A2',
    '805 BREN',
    '516 SHORTY',
    
    '4-AC',
    
    '516',
               

//ASR DMR'S
    
    
    'M4A1 SCOUT',
    'G36C SCOUT',
    
    
    '553 SCOUT SENTINEL',
    '553 SCOUT',
    '553',
    '416 SCOUT',
    
    '416 SHORTY',
    '416 ASSAULT SPECIAL',
    '416',

//BR DMR'S 
    'MK14 TERMINATION',
    'MK14 ASSAULT BROWN',
    'MK14 ASSAULT',
    'MK14',
    'M110',
    'G28 WILDERNESS',
    'G28 SCOUT WOLVES',
    'G28 SCOUT',
    'G28',

    'G2',

//SINGLE SHOT DMR'S
    'SVD-63 PATCHWORK',
    'SVD-63',
    'SCORPIO SCOUT QUIET',
    'SCORPIO SCOUT',
    'OTS-03',
    'FRF2',
    
//SMG'S
    'VECTOR SHORTY',
    'VECTOR',
    'UZI 9MM',
    'UMP CQC',
    'UMP',
    'SN-9MM',
    'SCORPION EVO3 TACTICAL',
    'SCORPION EVO3 CQC',
    'SCORPION EVO3',
    'P90',
    'MPX TACTICAL',
    'MPX',
    'MP7',
    'MP5',
    'HONEY BADGER BROWN',
    'HONEY BADGER',
    "FLYCATCHER'S P90",
    'ECHELON SMG',
    'BULLPUP PDR',

//SNR'S
    'ZASTAVA M93',
    'VSK-50',
    'TAC50 BROWN',
    'TAC50',
    'SR-1',
    'SCORPIO',
    'RECON-A1',
    'PALADIN 9 SNR SURVIVAL',
    'PALADIN 9 SNR',
    'MSR',
    'M82',
    'L115A3',
    'HTI SURVIVAL',
    'HTI',

//LMG'S
    'T95',
    'STONER COMPACT',
    'STONER',
    'MK48 SAW',
    'MK48 COMPACT',
    'MK48',
    'MG121',
    'L86A1',
    'CTMMG BAAL',
    'CTMMG',
    '6P41',        
        
]


export function GetBonusRifleName(rifleList:string[], rifleString:string): string {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return rifleList[i];
          }
    }
    return 'error';
}
export const BonusDamage: { [gameName: string]: {[rifleName: string]: number}} = {
    Breakpoint: {
        
        //ASR'S 
        'SR-3M TACTICAL':	+5,
        'SR-3M':	+5,
        'RESISTANCE ASR SHORTY':	+5,
        'MDR':	+5,
        'FAL':	+5,
        'AK47':	+5,
        'AK47 SHORTY':	+5,
        'AK47 ASSAULT':	+5,
        'AK12':	+5,
        'AC-AR':	+5,
        '805 BREN':	+5,
      
        // DMR ASR'S
        'TAVOR SCOUT':	+10,
        'MK17 SCOUT':	+10,
        
        'G36C SCOUT':	+10,
        'AUG SCOUT':	+10,
        'AK74 SCOUT':	+10,
        '553 SCOUT SENTINEL':	+10,
        '553 SCOUT':	+10,
        '416 SCOUT':	+10,

        //BR DMR'S

        'MK14 ASSAULT BROWN':	+10,
        'MK14 ASSAULT':	+10,
        'MK14':	+10,
        'M110':	+10,
        'G28 WILDERNESS':	+10,
        'G28 SCOUT WOLVES':	+10,
        'G28 SCOUT':	+10,
        'G28':	+10,

        //SINGLE SHOT DMR'S
        'SVD-63 PATCHWORK':	+10,
        'SVD-63':	+10,
        'SCORPIO SCOUT QUIET':	+10,
        'SCORPIO SCOUT':	+10,
        'OTS-03':	+10,

        //SMG'S
     

        //SNR'S
       

        //LMG'S
       
  
    },
    Wildlands: {
      
    }
  }
  
  export default BonusDamage;