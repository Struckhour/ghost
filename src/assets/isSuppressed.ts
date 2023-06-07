export const suppressedGuns: { [gameName: string]: string [] } = {
    Breakpoint: [
// ASR'S
'M4A1 TACTICAL',

//SMG'S
'UMP CQC',
'SCORPION EVO3 TACTICAL',
'MPX TACTICAL',


    ],
Wildlands: [


]    
}

export function IsSuppressedGun(rifleList:string[], rifleString:string): boolean {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return true;
          } 
    }  
    return false;
          
}