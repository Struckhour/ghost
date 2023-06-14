export const loudGuns: { [gameName: string]: string [] } = {
    Breakpoint: [
// ASR'S
'RESISTANCE ASR SHORTY',

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

// DMR'S
'SVD-63 PATCHWORK',

// SHOTGUNS
'ACS12',
'KSG12',
'SPAS-12',
'UNDERBARREL SHOTGUN',

    ],
Wildlands: [


]    
}

export function IsLoudGun(rifleList:string[], rifleString:string): boolean {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return true;
          } 
    }  
    return false;
          
}
