export const SmartRifles:string[]=[
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
    'G36C',

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
    'MK14 TERMINATION',
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


export function GetSmartRifleName(rifleList:string[], rifleString:string): string {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return rifleList[i];
          }
    }
    return 'error';
}
export const SmartDamage: { [gameName: string]: {[rifleName: string]: number}} = {
    Breakpoint: {
        
//ASR'S 
        'VHSD2':	27,
        'TAVOR':	22,
        'TAVOR ASSAULT':	27,
        
        'SR-3M':	32,
        
        'SR-3M TACTICAL':	32,

        'SILVER STAKE':	37,
        'SILVER STAKE TACTICAL':	37,
        'SC-40K':	32,
        'SC-20K':	32,
        'RESISTANCE ASR SHORTY':	32,

        'MK18':	22,
        'MK17':	37,
        'MK17 SHORTY':	37,
        'MK17 SHORTY GARGOYLE':	37,
        'MK17 ASSAULT':	42,
        
        'MDR':	37,
        'M4A1':	27,
        'M4A1 TACTICAL':	27,
        'M4A1 CQC':	27,
        'M4A1 ASSAULT':	32,
        'L85-C':	32,
        'KOBLIN':	32,
        'K1A':	30,
        'G36C':	22,
        'G2':	27,
        'FAL':	32,
        'AUG':	32,
        'AUG ASSAULT':	37,
        'ARX200':	37,
        'AR-18':	27,
        'AK74':	27,
        'AK74 ASSAULT':	32,
        'AK74 ASSAULT SURVIVAL':	32,
        'AK47':	32,

        'AK47 SHORTY':	32,
        'AK47 ASSAULT':	37,
        
        'AK12':	22,
        
        'ACR':	27,
        'ACR ASSAULT':	32,
        'AC-AR':	32,

        'A2':	27,
        'A2 SHORTY':	27,
        '805 BREN':	27,

        '553':	27,
        '516':	22,
        '516 SHORTY':	22,
        '416':	27,
        '416 SHORTY':	27,
        '416 ASSAULT SPECIAL':	32,
        '4-AC':	27,

// ASR DMR'S

        'TAVOR SCOUT':	29,
        'MK17 SCOUT':	39,
        'M4A1 SCOUT':	32,
        'G36C SCOUT':	29,
        'AUG SCOUT':	39,
        'AK74 SCOUT':	34,
        '553 SCOUT SENTINEL':	34,
        '553 SCOUT':	34,
        '416 SCOUT':	34,

// BR DMR'S

        'MK14 ASSAULT BROWN':	59,
        'MK14 ASSAULT':	59,
        'MK14':	49,
        'M110':	54,
        'G28 WILDERNESS':	54,
        'G28 SCOUT WOLVES':	49,
        'G28 SCOUT':	49,
        'G28':	54,

        //SINGLE SHOT DMR'S
        'SVD-63 PATCHWORK':	64,
        'SVD-63':	64,
        'SCORPIO SCOUT QUIET':	104,
        'SCORPIO SCOUT':	129,
        'OTS-03':	64,
        'MK14 TERMINATION':	64,
        'FRF2':	82,

        //SMG'S
        'VECTOR':	24,
        'VECTOR SHORTY':	24,
        'SCORPION EVO3':	23,
        'SCORPION EVO3 TACTICAL':	23,
        'SCORPION EVO3 CQC':	23,
        'P90':	28,
        "FLYCATCHER'S P90":	28,
        'MP5':	29,
        'HONEY BADGER':	31,
        'HONEY BADGER BROWN':	31,
        'BULLPUP PDR':	31,
        'MP7':	23,
        'ECHELON SMG':	23,
        'MPX':	23,
        'MPX TACTICAL':	23,
        'SN-9MM':	28,
        'UZI 9MM':	23,
        'UMP':	28,
        'UMP CQC':	28,

        //SNR'S
        'ZASTAVA M93':	167,
        'VSK-50':	157,
        'TAC50 BROWN':	167,
        'TAC50':	167,
        'SR-1':	132,
        'SCORPIO':	132,
        'RECON-A1':	132,
        'PALADIN 9 SNR SURVIVAL':	132,
        'PALADIN 9 SNR':	132,
        'MSR':	132,
        'M82':	167,
        'L115A3':	132,
        'HTI SURVIVAL':	167,
        'HTI':	167,

        //LMG'S
        'T95':	33,
        'STONER COMPACT':	38,
        'STONER':	38,
        'MK48 SAW':	38,
        'MK48 COMPACT':	38,
        'MK48':	38,
        'MG121':	43,
        'L86A1':	33,
        'CTMMG BAAL':	38,
        'CTMMG':	38,
        '6P41':	43,

// SHOTGUNS
        'ACS12':	84,
        'KSG12':	124,
        'M4':	144,
        'M4 ASSAULT':	144,
        'M4 SHORTY':	144,
        'M590A1':	164,
        'M590A1 SURVIVAL':	164,
        'RU12SG':	94,
        'RU12SG ASSAULT':	104,
        'SASG12':	84,
        "SILVERBACK'S KSG12":	124,
        'SPAS-12':	84,
        'UNDERBARREL SHOTGUN':	99,
  
    },
    Wildlands: {
      
    }
  }
  
  export default SmartDamage;