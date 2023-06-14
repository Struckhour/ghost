export const RPMRifles:string[]=[
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
    
    ' 516',
               

//ASR DMR'S
    
    
    'M4A1 SCOUT',
    'G36C SCOUT',
    
    
    '553 SCOUT SENTINEL',
    '553 SCOUT',
    ' 553',
    
    '416 ASSAULT SPECIAL',
    '416 SHORTY',
    '416 SCOUT',
    
    ' 416',

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


export function GetRPMRifleName(rifleList:string[], rifleString:string): string {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return rifleList[i];
          }
    }
    return 'error';
}
export const RPM: { [gameName: string]: {[rifleName: string]: number}} = {
    Breakpoint: {
        
//ASR'S 
    'VHSD2':	750,
    'TAVOR':	650,
    'TAVOR ASSAULT':	650,

    'SR-3M':	900,

    'SR-3M TACTICAL':	900,

    'SILVER STAKE':	450,
    'SILVER STAKE TACTICAL':	450,
    'SC-40K':	850,
    'SC-20K':	850,
    'RESISTANCE ASR SHORTY':	760,

    'MK18':	800,
    'MK17':	550,
    'MK17 SHORTY':	550,
    'MK17 SHORTY GARGOYLE':	550,
    'MK17 ASSAULT':	550,

    'MDR':	650,

    'M4A1':	950,
    'M4A1 TACTICAL':	950,
    'M4A1 CQC':	950,
    'M4A1 ASSAULT':	950,
    'L85-C':	610,
    'KOBLIN':	800,
    'K1A':	800,
    'G36C':	750,
    'G2':	980,
    'FAL':	800,

    'AUG':	680,
    'AUG ASSAULT':	680,
    'ARX200':	680,
    'AR-18':	650,
    'AK74':	650,
    'AK74 ASSAULT':	650,
    'AK74 ASSAULT SURVIVAL':	650,
    'AK47':	600,
    'AK47 SHORTY':	600,

    'AK47 ASSAULT':	600,

    'AK12':	850,

    'ACR':	700,
    'ACR ASSAULT':	700,
    'AC-AR':	750,

    'A2':	720,
    'A2 SHORTY':	720,
    '805 BREN':	760,

    ' 553':	700,
    ' 516':	800,
    '516 SHORTY':	800,

    '416 ASSAULT SPECIAL':	700,
    '416 SHORTY':	700,
    ' 416':	700,

    '4-AC':	860,

// ASR DMR'S

    'TAVOR SCOUT':	650,
    'MK17 SCOUT':	550,
    
    'M4A1 SCOUT':	950,
    'G36C SCOUT':	750,
    'AUG SCOUT':	680,
    'AK74 SCOUT':	650,
    '553 SCOUT':	700,
    '553 SCOUT SENTINEL':	700,
    '416 SCOUT':	700,

// BR DMR'S

    'MK14 ASSAULT BROWN':	725,
    'MK14 ASSAULT':	725,
    'MK14':	725,
    'M110':	400,
    'G28 WILDERNESS':	400,
    'G28 SCOUT WOLVES':	400,
    'G28 SCOUT':	400,
    'G28':	400,

//SINGLE SHOT DMR'S

    'SVD-63 PATCHWORK':	90,
    'SVD-63':	90,
    'SCORPIO SCOUT QUIET':	110,
    'SCORPIO SCOUT':	110,
    'OTS-03':	150,
    'MK14 TERMINATION':	160,
    'FRF2':	70,

//SMG'S
    'VECTOR':	1200,
    'VECTOR SHORTY':	1200,
    'SCORPION EVO3':	1150,
    'SCORPION EVO3 TACTICAL':	1150,
    'SCORPION EVO3 CQC':	1150,
    'P90':	900,
    "FLYCATCHER'S P90":	900,
    'MP5':	800,
    'HONEY BADGER':	800,
    'HONEY BADGER BROWN':	800,
    'BULLPUP PDR':	800,
    'MP7':	950,
    'ECHELON SMG':	950,
    'MPX':	850,
    'MPX TACTICAL':	850,
    'SN-9MM':	700,
    'UZI 9MM':	750,
    'UMP':	600,
    'UMP CQC':	600,

//SNR'S
    
//LMG'S
    'T95':	650,
    'STONER COMPACT':	750,
    'STONER':	750,
    'MK48 SAW':	710,
    'MK48 COMPACT':	710,
    'MK48':	710,
    'MG121':	640,
    'L86A1':	610,
    'CTMMG BAAL':	720,
    'CTMMG':	600,
    '6P41':	650,

// SHOTGUNS
    'ACS12':	300,
    'KSG12':	130,
    'M4':	420,
    'M4 ASSAULT':	420,
    'M4 SHORTY':	420,
    'M590A1':	310,
    'M590A1 SURVIVAL':	310,
    'RU12SG':	300,
    'RU12SG ASSAULT':	300,
    'SASG12':	300,
    "SILVERBACK'S KSG12":	130,
    'SPAS-12':	300,
    'UNDERBARREL SHOTGUN':	120,
  
    },
    Wildlands: {
      
    }
  }
  
  export default RPM;