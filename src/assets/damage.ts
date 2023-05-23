export const rifles:string[]=[
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
        
]


export function GetRifleName(rifleList:string[], rifleString:string): string {
    for (let i = 0; i < rifleList.length; i++) {
          if (rifleString.includes(rifleList[i])) {
            return rifleList[i];
          }
    }
    return 'error';
}
export const damage: { [gameName: string]: {[rifleName: string]: (number | string)[]}} = {
    Breakpoint: {
        
        //ASR'S 
        'VHSD2':[	2,	2,	5,	4,	7,	5],
        'TAVOR ASSAULT':[	2,	2,	5,	4,	7,	5],
        'TAVOR':[	3,	2,	6,	5,	8,	6],        
        
        'SR-3M TACTICAL':[	2,	2,	4,	4,	6,	5,	+5,		],
        'SR-3M':[	2,	2,	4,	4,	6,	5,	+5,		],
        'SILVER STAKE TACTICAL':[	2,	2,	4,	3,	5,	4],
        'SILVER STAKE':[	2,	2,	4,	3,	5,	4],
        'SC-40K':[	2,	2,	4,	4,	6,	5],
        'SC-20K':[	2,	2,	4,	4,	6,	5],
        
        'RESISTANCE ASR SHORTY':[	2,	2,	4,	4,	6,	5,	+5,		],
        'MK18':[	3,	2,	6,	5,	8,	6],
        'MK17 SHORTY GARGOYLE':[	2,	2,	4,	3,	5,	4],
        'MK17 SHORTY':[	2,	2,	4,	3,	5,	4],
        'MK17 ASSAULT':[	2,	1,	3,	3,	4,	4],
        'MK17':[	2,	2,	4,	3,	5,	4,0],

        'MDR':[	2,	2,	4,	3,	5,	4,	+5,	'fires 2 instead of 3 round bursts'	],

        'M4A1 TACTICAL':[	2,	'n/a',	5,	'n/a',	7,	'n/a', 0, 'integrally suppressed'],

        'M4A1 CQC':[	2,	2,	5,	4,	7,	5],
        'M4A1 ASSAULT':[	2,	2,	4,	4,	6,	5],
        'M4A1':[	2,	2,	5,	4,	7,	5],
        'L85-C':[	2,	2,	4,	4,	6,	5],
        'KOBLIN':[	2,	2,	4,	4,	6,	5],
        'K1A':[	2,	2,	5,	4,	6,	5],
        'G36C':[	3,	2,	6,	5,	8,	6, 0,'fires 2 instead of 3 round bursts' ],
        'G2':[	2,	2,	5,	4,	7,	5],

        'FAL':[	2,	2,	4,	4,	6,	5,	+5,		],
        'AUG ASSAULT':[	2,	2,	4,	3,	5,	4],
        'AUG':[	2,	2,	4,	4,	6,	5],
        'ARX200':[	2,	2,	4,	3,	5,	4],
        'AR-18':[	2,	2,	5,	4,	7,	5],
        'AK74 ASSAULT SURVIVAL':[	2,	2,	4,	4,	6,	5],
        'AK74 ASSAULT':[	2,	2,	4,	4,	6,	5],
        'AK74':[	2,	2,	5,	4,	7,	5],

        'AK47 ASSAULT':[	2,	2,	4,	3,	5,	4,	+5,		],
        'AK47 SHORTY':[	2,	2,	4,	4,	6,	5,	+5,		],
        'AK47':[	2,	2,	4,	4,	6,	5,	+5,		],

        'AK12':[	3,	2,	6,	5,	8,	6,	+5,	'fires 2 instead of 3 round bursts'	],
        'ACR ASSAULT':[	2,	2,	4,	4,	6,	5],
        'ACR':[	2,	2,	5,	4,	7,	5],
        
        'AC-AR':[	2,	2,	4,	4,	6,	5,	+5,		],
        'A2 SHORTY':[	2,	2,	5,	4,	7,	5],
        'A2':[	2,	2,	5,	4,	7,	5],

        '805 BREN':[	2,	2,	5,	4,	7,	5,	+5,		],
        '516 SHORTY':[	3,	2,	6,	5,	8,	6],
        '416 SHORTY':[	2,	2,	5,	4,	7,	5],
        '416 ASSAULT SPECIAL':[	2,	2,	4,	4,	6,	5],
        '4-AC':[	2,	2,	5,	4,	7,	5],
        '553':[	2,	2,	5,	4,	7,	5],
        '516':[	3,	2,	6,	5,	8,	6],
        '416':[	2,	2,	5,	4,	7,	5],
      
        // DMR ASR'S
        'TAVOR SCOUT':[	2,	2,	5,	4,	6,	5, +10],
        'MK17 SCOUT':[	2,	1,	4,	3,	5,	4, +10],
        'M4A1 SCOUT':[	2,	2,	4,	4,	6,	5, +10],
        'G36C SCOUT':[	2,	2,	5,	4,	6,	5, +10, 'fires 2 instead of 3 round bursts'],
        'AUG SCOUT':[	2,	1,	4,	3,	5,	4, +10],
        'AK74 SCOUT':[	2,	2,	4,	3,	5,	4, +10],
        '553 SCOUT SENTINEL':[	2,	2,	4,	3,	5,	4, +10],
        '553 SCOUT':[	2,	2,	4,	3,	5,	4, +10],
        '416 SCOUT':[	2,	2,	4,	3,	5,	4, +10],

        //BR DMR'S

        'MK14 ASSAULT BROWN':[	1,	1,	3,	2,	3,	3,	+10,		],
        'MK14 ASSAULT':[	1,	1,	3,	2,	3,	3,	+10,		],
        'MK14':[	1,	1,	3,	3,	4,	3,	+10,		],

        'M110':[	1,	1,	2,	2,	3,	3,	+10,'suppressor does not reduce damage'	],
        'G28 WILDERNESS':[	1,	1,	2,	2,	3,	3,	+10,'suppressor does not reduce damage'	],
        'G28 SCOUT WOLVES':[	1,	1,	3,	3,	4,	3,	+10,		],
        'G28 SCOUT':[	1,	1,	3,	3,	3,	3,	+10,'suppressor does not reduce damage'	],
        
        'G28':[	1,	1,	3,	2,	4,	3,	+10,		],

        //SINGLE SHOT DMR'S
        'SVD-63 PATCHWORK':[	1,	1,	2,	2,	3,	3, +10],
        'SVD-63':[	1,	1,	2,	2,	3,	3, +10],
        'SCORPIO SCOUT QUIET':[	1,	1,	2,	1,	2,	2, +10,'bug - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.'],
        'SCORPIO SCOUT':[	1,	1,	1,	1,	2,	2, +10, 'will one shot wolves after 1st kill loud. bug - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.'],
        'OTS-03':[	1,	1,	2,	2,	3,	3, +10],
        'MK14 TERMINATION':[	1,	1,	2,	2,	3,	3 ],
        'FRF2':[	1,	1,	2,	2,	2,	2, ],

        //SNR'S
        'ZASTAVA M93':[	1,	1,	1,	1,	1,	1,		],
        'VSK-50':[	1,	1,	1,	1,	2,	1,	+0,'will 1 shot wolves suppressed with rolling thunder'	],
        'TAC50 BROWN':[	1,	1,	1,	1,	1,	1,		],
        'TAC50':[	1,	1,	1,	1,	1,	1,		],
        'SR-1':[	1,	1,	1,	1,	2,	1,		],
        'SCORPIO':[	1,	1,	1,	1,	2,	1,	+0, 'bug - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.'	],
        'RECON-A1':[	1,	1,	1,	1,	2,	1,		],
        'PALADIN 9 SNR SURVIVAL':[	1,	1,	1,	1,	2,	1,		],
        'PALADIN 9 SNR':[	1,	1,	1,	1,	2,	1,		],
        'MSR':[	1,	1,	1,	1,	2,	1,	+0,	'bug - fires innacurately directly after drone deployment. always switch to sidearm and back after drone deployment to avoid innaccurate shots.'],
        'M82':[	1,	1,	1,	1,	1,	1,		],
        'L115A3':[	1,	1,	1,	1,	2,	1,		],
        'HTI SURVIVAL':[	1,	1,	1,	1,	1,	1,		],
        'HTI':[	1,	1,	1,	1,	1,	1,		],
  
    },
    Wildlands: {
      
    }
  }
  
  export default damage;