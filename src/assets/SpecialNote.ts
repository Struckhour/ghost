export const SpecialRifles:string[]=[
    // LONG NAMES FIRST!!! REVERSE ALPHABETICAL Z-A

//ASR'S

    'VHSD2',

    'TAVOR SCOUT',
    'TAVOR ASSAULT',
    'TAVOR',

    'SR-3M SCOUT',
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
    'M4A1 SCOUT',
    'M4A1',

    'L85-C',
    'KOBLIN',
    'K1A',
    'G36C SCOUT',
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
    
    
    
    '553 SCOUT SENTINEL',
    '553 SCOUT',
    '553',
    '416 SCOUT',
    
    '416 SHORTY',
    '416 ASSAULT SPECIAL',
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


export function GetSpecialRifleName(rifleList:string[], rifleString:string): string {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return rifleList[i];
          }
    }
    return 'error';
}
export const SpecialNote: { [gameName: string]: {[rifleName: string]: string}} = {
    Breakpoint: {
        
//ASR'S 
        'SILVER STAKE TACTICAL':'integrally suppressed, but suppressor can be exchanged for other muzzle attachments in the loadout menu. No full auto so time to kill values may be greater than stated. Look for ">".',
        
        'TAVOR SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',

        'SR-3M SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',

        'MDR':'fires 2 instead of 3 round bursts'	,

        'MK17 SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',

        'M4A1 TACTICAL':'integrally suppressed. Only suppressed damage applies. No full auto so time to kill values may be greater than stated. Look for ">".',

        'M4A1 SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',
        
        'G36C SCOUT':'Fires 2 instead of 3 round bursts. No full auto so time to kill values may be greater than stated. Look for ">".',

        'G36C':'fires 2 instead of 3 round bursts' ,
        
        'AUG SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',

        'AK74 SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',


        'AK12':'fires 2 instead of 3 round bursts'	,

        '553 SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',
        '553 SCOUT SENTINEL':'No full auto so time to kill values may be greater than stated. Look for ">".',

        '416 SCOUT':'No full auto so time to kill values may be greater than stated. Look for ">".',



// ASR DMR'S        
        
//BR DMR'S

        'M110':'suppressor does not reduce damage. loud rounds to kill always apply.'	,

        'G28 WILDERNESS':'suppressor does not reduce damage. loud rounds to kill always apply.'	,

        'G28 SCOUT':'suppressor does not reduce damage. loud rounds to kill always apply.'	,
        
//SINGLE SHOT DMR'S

        'SCORPIO SCOUT QUIET':'bug! - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.',

        'SCORPIO SCOUT':'will one shot wolves after 1st kill loud within ~10 seconds. bug! - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.',

//SMG'S
        'VECTOR SHORTY':'fires 2 instead of 3 round bursts. integrally suppressed. Only suppressed damage applies.'	,

        'VECTOR':'fires 2 instead of 3 round bursts. '	,
    
        'UMP CQC': 'fires 2 instead of 3 round bursts. integrally suppressed. Only suppressed damage applies.'	,

        'UMP':'fires 2 instead of 3 round bursts'	,

        'SCORPION EVO3 TACTICAL':'integrally suppressed. Only suppressed damage applies. No full auto so time to kill values may be greater than stated. Look for ">".',

        'SCORPION EVO3 CQC':'WITH THE MAWL-DA 140M IS THE BOTTOM OF THE CIRCLE WITH EXPS3(LARGE SETTING), MH-1, AND PANORAMIC SIGHT.', 

        'MPX TACTICAL':'integrally suppressed. Only suppressed damage applies. No full auto so time to kill values may be greater than stated. Look for ">".',

       

//SNR'S

        'VSK-50':'will 1 shot wolves suppressed with rolling thunder perk'	,
        
        'SCORPIO': 'bug! - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.'	,
       
        'MSR':'bug! - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.',
        

//LMG'S
        
  
    },
    Wildlands: {
      
    }
  }
  
  export default SpecialNote;