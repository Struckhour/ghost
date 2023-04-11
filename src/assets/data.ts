const fullData: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: (number | string)[]}} } = {
  Breakpoint: {
    'T5XI': {
      '416 SCOUT':[100,200,300,400,525,663,754,811,],
      '416 SCOUT MAWL-DA':[100,225,350,500,650,],
      '416 SCOUT RANGE FINDER':[100,250,375,550,700,],
      '553 SCOUT':[75,200,275,375,500,],
      '553 SCOUT +30 RANGE':[75,275,450,675,863,],
      '553 SCOUT MAWL-DA':[75,225,325,475,625,],
      '553 SCOUT MAWL-DA +30 RANGE':[75,325,550,838,],
      '553 SCOUT RANGE FINDER':[75,225,350,525,675,],
      'AK74 SCOUT':[],
      'FRF2':[150,260,325,390,466,580,663,],
      'G28':[133,287,425,587,700,],
      'G28 MAWL-DA':[150,325,525,725,],
      'G28 RANGE FINDER':[150,350,575,800,],
      'G28 WILDERNESS':[133,287,425,587,700,],
      'G28 WILDERNESS MAWL-DA':[150,325,525,725,],
      'G28 WILDERNESS RANGE FINDER':[150,350,575,800,],
      'G28 SCOUT':[125,200,250,313,375,463,518,],
      'G28 SCOUT MAWL-DA':[125,225,300,388,463,563,632,],
      'G28 SCOUT RANGE FINDER':[125,238,325,425,513,625,682,],
      'G36C SCOUT':[75,175,275,375,475,],
      'G36C SCOUT MAWL-DA':[75,200,300,450,600,],
      'G36C SCOUT RANGE FINDER':[75,225,350,500,650,],
      'HTI':[200,338,438,563,663,800,],
      'HTI SURVIVAL':[200,338,438,563,663,800,],
      'L115A3':[150,300,400,510,625,750,],
      'L115A3 +30 RANGE':[200,413,650,925],
      'L115A3 +30 RANGE BALLISTIC ADV.':[300,800,],
      'M110':[100,225,325,425,538,],
      'M110 MAWL-DA':[100,250,375,525,660,808,],
      'M110 MAWL-DA +30 RANGE':[150,375,625,],
      'M110 RANGE FINDER':[100,270,400,580,725,],
      'M4A1 SCOUT':[100,200,250,325,400,],
      'M4A1 SCOUT MAWL-DA':[100,225,300,400,500,657,763,838,],
      'M4A1 SCOUT MAWL-DA BALLISTIC ADV.':[125,400,700,1025,],
      'M4A1 SCOUT RANGE FINDER':[125,225,325,425,550,],
      'M82':[175,325,438,588,713,],
      'M82 +30 RANGE':[0,475,],
      'M82 CERBERUS':[],
      'MK14':[150,238,288,325,375,463,525,],
      'MK14 MAWL-DA':[175,260,320,390,460,566,650,],
      'MK14 RANGE FINDER':[150,275,338,425,513,625,],
      'MK14 MAWL-DA +30 RANGE':[150,350,475,650,813,],
      'MK14 RANGE FINDER +30 RANGE':[150,363,550,725,888,],
      'MK17 SCOUT':[100,275,413,575,700,],
      'MK17 SCOUT RANGE FINDER':[100,325,550,775,],
      'MK17 SCOUT BALLISTIC ADV.':[75,575,],
      'MSR':[175,275,325,390,450,555,],
      'PALADIN 9 SNR':[70,233,366,560,],
      'PALADIN 9 SNR SURVIVAL':[],
      'RECON-A1':[175,275,350,425,513,632,713,],
      'RECON-A1 RANGE FINDER':[150,313,425,575,700,863,944,],
      'SCORPIO':[200,275,325,388,463, 563, 638],
      'SCORPIO SCOUT':[170,275,340,415,490,607,682,740,780,805,],
      'SCORPIO SCOUT QUIET':[175,263,325,388,450,],
      'SCORPIO SCOUT QUIET +30 RANGE':[200,350,475,638,788,],
      'SR-1':[175,440,650,900,],
      'SR-1 +30 RANGE':[0,638],
      'TAC50':[150,313,525,762,1013,],
      'TAC50 +30 RANGE':[0,500,],
      'TAC50 BROWN':[175,350,475,650,813,],
      'TAVOR SCOUT MAWL-DA':[75,188,263,375,488,],
      'VSK-50':[],
      'ZASTAVA M93':[163,325,450,600,725,], 
    },
    'DUAL RANGE': {

        '416 SCOUT MAWL-DA':[100,175,275,350,450,563],
        "553 SCOUT": [100, 138, 200, 250, 300, 363, 425, 500],
        "553 SCOUT MAWL-DA": [100, 150, 250, 300, 350, 450, 525, 625],
        "553 SCOUT RANGE FINDER": [100, 150, 250, 300, 400, 475, 575, 675],
        FRF2: [150, 225, 300, 350, 410, 485],
        G28: [100, 200, 300, 350, 438, 538, 613, 688, 738],
        "G28 MAWL-DA": [125, 225, 325, 425, 538, 663, 750],
        "G28 RANGE FINDER": [125, 225, 375, 475, 600, 700, 825],
        'G28 SCOUT':[100,163,200,230,260,290,325,360,395,420,445],
        'G28 SCOUT MAWL-DA':[100,175,225,263,300,350,400,450,488,525],
        'G28 SCOUT BALLISTIC ADV.':[125,225,375,488,600,],
        "G28 WILDERNESS": [100, 200, 295, 350, 433, 533],
        "G28 WILDERNESS MAWL-DA": [125, 225, 325, 425, 540, 660, 750],
        "G28 WILDERNESS RANGE FINDER": [100, 220, 350, 450, 580, 715, 815],
        "G36C SCOUT": [80, 133, 200, 250, 300, 366, 433, 507],
        "G36C SCOUT MAWL-DA": [80, 150, 230, 290, 360, 450, 550],
        "HTI": [200, 275, 375, 420, 490],
        "HTI SURVIVAL": [200, 275, 375, 420, 490],
        L115A3: [150, 233, 325, 375, 450, 533],
        M110: [115, 175, 250, 305, 380, 465, 535],
        "M110 MAWL-DA": [150, 200, 300, 375, 475, 575],
        'M110 MAWL-DA +30 RANGE':[150,250,450,625,],
        "M110 RANGE FINDER": [100, 200, 300, 400, 500, 635, 720, 800],
        "M4A1 SCOUT MAWL-DA": [100, 175, 275, 350, 425, 545],
        "M4A1 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        "MK14 MAWL-DA": [125, 200, 270, 300, 350, 400, 450],
        "MK17 SCOUT": [100, 175, 250, 300, 366, 433, 513],
        "MK17 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        'MK17 SCOUT BALLISTIC ADV.':[75,300,538],
        'MK17 SCOUT BALLISTIC ADV. +30 RANGE':[100,350,688],
        'MK17 SCOUT RANGE FINDER BALLISTIC ADV.':[75,350,638],
        'RECON-A1':[163,213,263,300,325,375,407,457,500,544,569,607,638,669,688],
        'RECON-A1 RANGE FINDER':[175,225,300,350,413,488,550,625,688,738,788,825,863,888,925],
        "SCORPIO SCOUT": [170, 235, 300, 335, 385, 435, 495, 540],
        "SCORPIO SCOUT QUIET": [200, 225, 288, 325, 357, 400, 450, 488],
        'SILVER STAKE':[150,225,288,325,375,425,475,], 
        'SILVER STAKE RANGE FINDER':[150,250,350,413,500,575,650,],
        'SILVER STAKE TACTICAL':[150,225,288,325,375,425,475,], 
        'SILVER STAKE TACTICAL MAWL-DA':[150,250,325,388,450,525,],
        'SILVER STAKE TACTICAL RANGE FINDER':[150,250,350,413,500,575,650,],
        "SVD-63": [150, 219, 275, 300, 340, 380, 425, 480],
        'TAVOR SCOUT MAWL-DA':[100,150,213,250,300,375,438,500,550,588,613,],

      },
    'TARS101': {
        '416 SCOUT':[100,150,200,275,325,375,450,525,575,625,675,],
        '416 SCOUT MAWL-DA':[100,175,250,300,400,475,575,650,],
        '416 SCOUT RANGE FINDER':[],
        '553 SCOUT':[75,150,225,275,350,425,500,],
        '553 SCOUT MAWL-DA':[75,175,250,338,425,525,625,],
        '553 SCOUT RANGE FINDER':[],
        'AUG SCOUT':[100,166,233,290,350,413,490,550,],
        'AUG SCOUT MAWL-DA':[],
        'AUG SCOUT RANGE FINDER':[],
        'FRF2':[160,240,300,360,420,480,540,590,635,670,700,725,750,],
        'G28':[133,200,266,333,400,466,533,600,666,700,745,],
        'G28 MAWL-DA':[125,225,300,400,475,575,666,740,],
        'G28 RANGE FINDER':[133,240,330,420,520,640,],
        'G28 SCOUT':[100,160,195,220,245,270,295,320,350,375,400,420,440,460,480,495,505,],
        'G28 SCOUT MAWL-DA':[100,175,215,250,280,320,350,400,433,466,495,525,550,566,588,604,622,633,644,655,666,],
        'G28 SCOUT RANGE FINDER':[],
        'G28 WILDERNESS':[133,200,266,333,400,466,533,600,666,700,745,],
        'G28 WILDERNESS MAWL-DA':[125,225,300,400,475,575,666,740,],
        'G28 WILDERNESS RANGE FINDER':[133,240,330,420,520,640,],
        "G36C SCOUT MAWL-DA": [75,200,275,388,488,600,682,750,],
        'HTI':[200,300,365,440,510,585,650,700,],
        'HTI SURVIVAL':[200,300,365,440,510,585,650,700,],
        'M4A1 SCOUT':[],
        'M4A1 SCOUT MAWL-DA':[100,175,250,325,400,475,550,625,680,725,767,797,827,],
        'M4A1 SCOUT MAWL-DA BALLISTIC ADV.':[125,275,500,800,1050,],
        'M4A1 SCOUT RANGE FINDER':[],
        'L115A3':[150,250,300,350,400,466,525,575,625,666,700,733,760,787,808,827,],
        'L115A3 BALLISTIC ADV.':[200,400,575,],
        'L115A3 +30 RANGE':[200,313,413,538,663,800,913,],
        'L115A3 +30 RANGE BALLISTIC ADV.':[300,500,800,],
        'M110':[100,175,240,295,350,410,475,535,590,],
        'M110 MAWL-DA':[100,200,265,340,415,500,585,660,720,760,],
        'M110 RANGE FINDER':[100,200,290,375,455,550,645,725,785,825,],
        'M110 MAWL-DA WITH BALLISTIC ADV.':[100,333,550,875,],
        'M82':[150,250,350,433,500,600,675,750,],
        'MK14 MAWL-DA':[150,225,275,333,400,450,500,550,590,625,650,680,700,],
        'MK17 SCOUT':[100,200,288,363,463,550,],
        'MSR':[175,240,280,320,360,400,440,485,525,550,],
        'RECON-A1':[150,233,290,340,395,450,505,],
        'SCORPIO SCOUT':[170,240,295,340,385,425,480,525,566,605,640,663,690,710,730,745,760,775,790],
        'SCORPIO SCOUT QUIET':[178,238,288,325,363,400,438,475,513,538,575,600,625,638,657,675,688,700,713,],
        'SR-1':[175,350,463,600,750,875,988],
        'SVD-63':[150,212,273,320,370,420,460,511,762,],
        'TAC50':[100,250,380,550,],
        'TAC50 BROWN':[150,300,400,512,650,750,],
        'VSK-50':[150,250,300,366,425,475,540,595,633,666,700,725,750,],
        'ZASTAVA M93':[163,263,350,450,550,638,725,788,850,888,925,950,975,1000,], 

      },
    'VC16': {
      '553 SCOUT MAWL-DA':[75,138,175,225,275,363,500,563,],
      'AK74':[88,163,188,238,275,338,450,500,],
      'FRF2':[150,215,240,270,305,350,410,450,],
      'G28':[125,175,230,260,310,380,480,533,],
      'G28 MAWL-DA':[125,200,250,300,355,460,600,],
      'G28 RANGE FINDER':[125,200,260,310,390,500,670,],
      'G28 WILDERNESS':[125,175,230,260,310,380,480,533,],
      'G28 WILDERNESS MAWL-DA':[125,200,250,300,355,460,600,],
      'G28 WILDERNESS RANGE FINDER':[125,200,260,310,390,500,670,],
      'G36C Scout':[75,125,150,175,225,275,350,400,],
      'HTI':[200,266,300,333,366,420,500,],
      'HTI SURVIVAL':[200,266,300,333,366,420,500,],
      'L115A3':[150,213,240,275,300,350,412,440,],
      'M110':[100,150,180,215,250,300,375,415,],
      'M110 MAWL-DA':[100,165,205,240,290,350,450,505,],
      'M110 RANGE FINDER':[100,175,210,250,310,395,515,],
      'M4A1 SCOUT MAWL-DA':[100,150,190,225,270,325,425,475,],
      'M4A1 SCOUT RANGE FINDER':[100,175,200,238,300,363,475,],
      M82:[150,238,288,338,388,463,588,650],
      'MK14 MAWL-DA':[175,200,240,260,300,340,400,433,],
      'MK14 ASSAULT MAWL-DA':	[150,200,238,263,300,338,400,425,625],
      'MK17 SCOUT':[125,175,200,250,300,350,450,500,],
      'SC-20K':[75,138,175,225,275,350,450,500],
      'SC-20K MAWL-DA':[75,150,200,250,300,400,550,625],
      'SCORPIO SCOUT':[170,225,250,280,315,360,430,460,],
      'SCORPIO SCOUT QUIET':[150,225,238,275,300,338,400,425,],
      'SR-1':[175,300,350,425,500,650,825,],

        },

    'ACSS': {
      '553 SCOUT':[75,150,200,275,375,500,650,],
      '553 SCOUT MAWL-DA':[75,150,225,325,450,625,775,],
      '805 BREN':[75,125,160,195,230,285,365,],
      '805 BREN MAWL-DA':[80,145,185,225,275,350,450,],
      '805 BREN RANGE FINDER':[85,140,190,225,300,375,500,],
      'ARX200':[75,163,225,288,375,500,650],
      'AUG SCOUT':[100,163,213,263,325,425,550],
      'AUG SCOUT RANGE FINDER':[100,200,250,325,425,575,725],
      'FRF2':[160,240,290,350,425,535,630,],
      'G28':[125,200,275,350,475,615,733,],
      'G28 WILDERNESS RANGE FINDER':[120,250,335,450,640,],
      'G36C SCOUT':[75,150,213,300,400,550,],
      'M10':[100,175,225,275,350,450,575,],
      'M110 MAWL-DA':[100,190,255,320,420,565,700,],
      'M110 RANGE FINDER':[100,200,265,350,465,625,770,],
      "M4A1 SCOUT MAWL-DA": [100,175,225,275,350,450,575,],
      'M4A1 SCOUT RANGE FINDER':[100,175,225,288,375,475,538,],
      'MK17 SCOUT':[125,200,250,313,400,513,638,],
      'MK17 SCOUT RANGE FINDER':[150,225,300,400,525,700,838],
      'MK17 SCOUT BALLISTIC ADV.':[150,350,500],
      'SR-1':[0,338,438,538,738,938,],
      'SVD-63':[150,215,255,300,345,420,500,],
      'VSK-50':[150,250,307,363,469,575,669],
      'VSK-50 RANGE FINDER':[163,288,363,475,638,788,900],
      'VSK-50 RANGE FINDER BALLISTIC ADV.':[200,538,825],
      },
    'DIGITAL': {
      '4-AC MAWL-DA':[88,125,200,300,425,550,],
      416:[100,125,175,225,288,363,],
      '416 MAWL-DA':[100,125,200,263,350,450,],
      '416 RANGE FINDER':[100,125,200,275,375,500],
      '416 ASSAULT SPECIAL':[100,125,175,225,288,363,],
      '416 ASSAULT SPECIAL RANGE FINDER':[100,125,200,275,375,500,],
      '416 SHORTY':[75,100,125,163,200,238],
      '416 SHORTY MAWL-DA':[75,100,150,188,225,275,],
      '416 SHORTY RANGE FINDER':[75,100,150,200,250,300,],
      '416 SHORTY RANGE FINDER BALLISTIC ADV.':[75,125,250,400,600,],
      516:[63,100,150,200,250,325,],
      '516 BALLISTIC ADV.':[63,150,250,425,650,863],
      '516 MAWL-DA':[63,100,163,225,300,400,],
      '516 MAWL-DA BALLISTIC ADV.':[63,150,300,500,800,'greater than 1000'],
      '516 RANGE FINDER':[63,113,163,250,338,450,],
      '516 SHORTY':[57,87,127,167,207,257,],
      '516 SHORTY BALLISTIC ADV.':[63,125,213,338,500,675],
      '516 SHORTY RANGE FINDER':[63,100,150,200,263,350],
      '516 SHORTY RANGE FINDER BALLISTIC ADV.':[75,125,250,450,688,900],
      553:[75,113,175,238,300,400,],
      '553 MAWL-DA':[75,125,200,275,375,500,],
      '553 RANGE FINDER':[75,125,200,288,400,550,],
      '805 BREN':[75,113,163,225,288,375,],
      '805 BREN MAWL-DA':[75,125,188,257,350,457,],
      '805 BREN RANGE FINDER':[88,138,200,275,388,504,],
      A2:[100,138,188,238,300,363],
      'A2 MAWL-DA':[100,150,207,275,350,450,],
      'A2 RANGE FINDER':[100,150,213,288,375,500,],
      'A2 SHORTY':[75,125,163,194,225,270],
      'A2 SHORTY RANGE FINDER':[75,138,188,238,288,363],
      'AC-AR':[75,100,150,200,250,338],
      'AC-AR MAWL-DA':[75,113,163,238,300,400],
      'AC-AR RANGE FINDER':[75,125,175,250,338,450],
      'ACR':[75,100,163,238,313,425],
      'ACR BALLISTIC ADV.':[75,150,300,525,838,1050],
      'ACR MAWL-DA':[63,113,188,275,388,525,],
      'ACR MAWL-DA BALLISTIC ADV.':[100,175,338,638,1025,],
      'ACR RANGE FINDER':[63,125,200,300,425,575,],
      'ACR ASSAULT':[75,100,163,238,313,425,],
      'ACR ASSAULT BALLISTIC ADV.':[75,150,300,525,838,1050],
      'ACR ASSAULT MAWL-DA':[75,125,200,275,388,525,],
      'ACR ASSAULT MAWL-DA BALLISTIC ADV.':[100,175,338,638,1025,],
      'ACR ASSAULT RANGE FINDER':[75,125,200,300,425,588,],
      AK47:[100,150,200,275,375,475],
      'AK47 RANGE FINDER':[100,147,247,347,500,647,],
      'AK74':[100,150,225,325,450,588],
      'AK74 ASSAULT':[100,150,225,325,450,588],
      'AK74 ASSAULT SURVIVAL':[100,150,225,325,450,588],
      'AR-18':[100,150,225,325,450,590,],
      AUG:[75,125,200,275,388,500],
      'AUG RANGE FINDER':[75,150,238,363,525,675],
      'AUG ASSAULT':[75,125,200,275,388,500],
      'AUG ASSAULT MAWL-DA':[75,138,225,325,475,625],
      'AUG ASSAULT RANGE FINDER':[75,150,238,363,525,675],
      'FAL':[80,120,160,210,260,330,],
      'FAL RANGE FINDER':[88,138,188,263,350,450,],
      'FAL +30 RANGE':[88,150,213,313,438,575,],
      'G2':[75,125,188,263,350,463,],
      'G2 RANGE FINDER':[75,150,225,338,475,625],
      'G28':[120,175,250,340,450,575,],
      'G28 MAWL-DA':[120,185,275,400,550,],
      'G28 WILDERNESS RANGE FINDER':[125,190,290,425,600,780,],
      G36C:[75,100,175,238,300,400],
      'G36C MAWL-DA':[75,125,188,275,375,500],
      'G36C RANGE FINDER':[75,125,200,300,400,550],
      'HONEY BADGER':[100,125,175,235,300,380],
      'HONEY BADGER MAWL-DA':[88,138,200,275,363,475],
      'L115A3':[150,213,275,350,],
      'M110':[100,150,200,275,350,450,],
      'M110 MAWL-DA':[100,150,225,320,425,565,],
      'M110 MAWL-DA BALLISTIC ADV.':[100,225,450,800,],
      'M110 RANGE FINDER':[100,150,245,350,475,625,],
      'M4A1':[88,125,175,238,300,388,],
      'M4A1 BALLISTIC ADV.':[100,175,300,525],
      'M4A1 MAWL-DA':[88,138,200,275,375,475,],
      'M4A1 RANGE FINDER':[100,145,207,288,400,],
      'M4A1 MAWL-DA +30 RANGE':[100,150,263,425],
      'M4A1 ASSAULT':[88,125,175,238,300,388,],
      'M4A1 ASSAULT BALLISTIC ADV.':[100,175,300,525],
      'M4A1 ASSAULT MAWL-DA':[88,138,200,275,],
      'M4A1 ASSAULT RANGE FINDER':[88,138,213,300,],
      'M4A1 CQC':[75,100,125,163,200,238,375],      
      'M4A1 CQC BALLISTIC ADV.':[75,125,213,313,450,625],      
      'M4A1 CQC MAWL-DA':[75,100,138,188,225,300],
      'M4A1 CQC MAWL-DA BALLISTIC ADV.':[75,150,250,375,563,750],      
      'M4A1 CQC MAWL-DA +30 RANGE':[75,125,200,275,375,500],
      'M4A1 CQC RANGE FINDER':[75,100,150,200,250,325],
      'M4A1 CQC RANGE FINDER BALLISTIC ADV.':[75,150,250,413,625,825],            
      'M4A1 TACTICAL':[88,125,175,238,300,388,],
      'M4A1 TACTICAL BALLISTIC ADV.':[100,175,300,525],
      'M4A1 TACTICAL MAWL-DA':[88,138,200,275,375,475,],
      'M4A1 TACTICAL RANGE FINDER':[88,138,200,300,400,525,],
      MDR:[75,125,200,263,350,450],
      'MDR MAWL-DA':[75,138,200,300,425,575],
      'MDR RANGE FINDER':[75,150,225,325,475,625],
      'MK14 MAWL-DA':[150,200,250,300,363,450,],
      'MK14 MAWL-DA BALLISTIC ADV.':[150,263,425,650,950,],
      'MK14 ASSAULT BROWN MAWL-DA':[163,213,275,350,438,538,],
      'MK14 ASSAULT BROWN MAWL-DA BALLISTIC ADV.':[175,288,488,838,],
      'MK17':[100,150,225,313,425,550,],
      'MK17 MAWL-DA':[100,163,250,363,513,663],
      'MK17 RANGE FINDER':[100,175,275,400,575,725,],
      'MK17 MAWL-DA +30 RANGE':[100,200,350,600,900],
      'MK17 BALLISTIC ADV.':[100,225,400,775,],
      'MK17 MAWL-DA BALLISTIC ADV.':[100,250,475,950],
      'MK17 RANGE FINDER BALLISTIC ADV.':[100,263,500,'greater than 1000'],
      'MK17 ASSAULT':[100,150,225,313,425,550,],      
      'MK17 ASSAULT MAWL-DA':[100,163,250,363,513,663],
      'MK17 ASSAULT BALLISTIC ADV.':[100,225,400,775,],
      'MK17 ASSAULT MAWL-DA BALLISTIC ADV.':[100,250,475,950],
      'MK17 ASSAULT RANGE FINDER BALLISTIC ADV.':[100,263,500,'greater than 1000'],
      'MK17 SHORTY MAWL-DA':[100,150,200,250,325,413,],
      'MK17 SHORTY MAWL-DA BALLISTIC ADV.':[125,200,338,575,850,],
      'MK18 MAWL-DA':[75,100,150,225,300,400,],
      'MK18 MAWL-DA +30 RANGE':[75,125,225,350,525,700,],
      'MK18 RANGE FINDER':[75,113,175,250,350,450,],
      'HTI':[],
      'HTI SURVIVAL':[],
      'M82':[],
      'M82 CERBERUS':[],
      'MSR':[],
      'PALADIN 9 SNR':[],
      'PALADIN 9 SNR SURVIVAL':[],
      'RECON-A1':[],
      'SR-1':[],
      'SCORPIO':[],
      'SC-20K':[100,125,225,325,475,613],
      'SC-20K MAWL-DA':[100,150,250,400,575,750],
      'SC-40K':[75,125,175,257,350,475],
      'SC-40K MAWL-DA':[75,138,200,300,425,588,],
      'SILVER STAKE':[175,213,263,313,363,425,], 
      'SILVER STAKE RANGE FINDER':[175,238,300,375,475,575,],
      'SILVER STAKE TACTICAL':[175,213,263,313,363,425,], 
      'SILVER STAKE TACTICAL MAWL-DA':[175,225,288,350,438,525,],
      'SILVER STAKE TACTICAL RANGE FINDER':[175,238,300,375,475,575,],
      'TAC50':[],
      'TAC50 BROWN':[],
      TAVOR:[75,100,150,200,257,325,],
      VECTOR:[50,63,100,138,175,225],
      'VECTOR MAWL-DA':[50,63,113,163,213,275],
      'VECTOR BALLISTIC ADV.':[50,100,200,288,438,600],
      'VECTOR SHORTY':[50,63,88,119,144,175,],
      'VECTOR SHORTY MAWL-DA':[50,63,100,132,163,200],
      'VECTOR SHORTY BALLISTIC ADV.':[50,63,163,263,313,438],
      VHSD2:[75,138,200,300,400,525],
      'VHSD2 MAWL-DA':[75,150,225,338,500,638],
      'VSK-50':[],
      'ZASTAVA M93':[],
      },
    'SLX5': {
      '416 SCOUT':[75,100,175,225,307,425,550,],
      '416 SCOUT MAWL-DA':[100,125,213,275,375,525,675,],
      '553 SCOUT MAWL-DA':[75,150,225,300,425,600,],
      '553 SCOUT':[75,100,200,250,350,500,],
      '805 BREN':[75,140,185,233,300,400,500,],
      '805 BREN MAWL-DA':[75,150,213,275,363,488,600,],
      '805 BREN RANGE FINDER':[75,163,225,288,400,538,663,],
      'ARX200 MAWL-DA':[100,188,275,425,600,800,950],
      'CTMMG':[100,150,225,300,400,550,675,],
      'FRF2':[100,210,265,320,390,475,585,],
      'G28 WILDERNESS':[100,188,250,325,438,575,713,],
      'G28 WILDERNESS RANGE FINDER':[100,200,300,400,585,],
      'G36C SCOUT':[75,125,188,250,350,488,625,],
      'G36C SCOUT MAWL-DA':[75,138,200,300,425,600,750],
      'G36C SCOUT RANGE FINDER':[75,125,225,325,475,663,813,],
      'HONEY BADGER':[100,150,200,250,320,410,505],
      'HONEY BADGER MAWL-DA':[100,163,225,275,375,500,625,],
      'M110':[100,175,225,280,360,475,590,],
      'M110 MAWL-DA':[100,190,255,325,435,585,720,],
      'M110 RANGE FINDER':[100,200,265,350,485,650,790,],
      'M4A1 SCOUT':[75,150,200,250,313,425,538,],
      'M4A1 SCOUT MAWL-DA':[75,150,225,288,388,525,663,],
      'M4A1 SCOUT RANGE FINDER':[75,163,233,300,425,575,725,],
      'MG121':[100,150,213,275,363,475,600,],
      'MK14 MAWL-DA':[175,215,250,300,350,433,525,],
      'MK14 ASSAULT MAWL-DA':	[100,213,263,313,375,475,563,],
      'MK17 SCOUT':[125,175,250,325,425,575,713,],
      'MK17 SCOUT RANGE FINDER':[100,200,300,425,600,788,932,],
      'MK48':[100,163,200,250,300,375,475,],
      'MK48 BALLISTIC ADV':[100,250,375,525],
      'MK48 SAW':[100,175,225,288,363,475,588,],
      'STONER MAWL-DA':[100,175,238,325,438,563,663,],
      'SVD-63':[],
      'HTI':[],
      'HTI SURVIVAL':[],
      'L115A3':[],
      'M82':[],
      'M82 CERBERUS':[],
      'MSR':[],
      'PALADIN 9 SNR':[],
      'PALADIN 9 SNR SURVIVAL':[],
      'RECON-A1':[],
      'SR-1':[],
      'SCORPIO':[],
      'TAC50':[],
      'TAC50 BROWN':[],
      'VSK-50':[],
      'ZASTAVA M93':[],
    },
    'TA31H': {
      416:[100,138,175,200,238,300,375],
      '416 MAWL-DA':[100,150,200,225,275,350,450],
      '416 RANGE FINDER':[100,150,200,238,300,375,500],     
      '416 ASSAULT SPECIAL':[100,138,175,200,238,300,375],
      '416 ASSAULT SPECIAL RANGE FINDER':[100,150,200,238,300,375,500],
      '4-AC MAWL-DA':[75,150,200,225,275,375,488],
      '4-AC MAWL-DA +30 RANGE':[88,188,250,325,425,625,825],
      516:[75,113,150,175,213,263,338],
      '516 MAWL-DA':[75,125,150,200,250,313,413],
      '516 RANGE FINDER':[75,125,175,200,250,350,450],
      553:[],
      '553 MAWL-DA':[75,138,188,225,288,375,513],
      '805 BREN':[100,138,175,200,238,300,388],
      '805 BREN MAWL-DA':[100,150,188,225,275,363,475,],
      '805 BREN RANGE FINDER':[100,150,200,250,300,388,513],
      A2:[100,150,188,213,250,300,375],
      'A2 MAWL-DA':[100,175,213,238,288,350,450],
      'A2 RANGE FINDER':[100,175,225,250,300,388,500],
      ACR:[63,125,163,200,250,325,438],
      'ACR BALLISTIC ADV.':[75,200,300,425,588,850,'greater than 1000'],
      'ACR MAWL-DA':[63,138,188,225,288,388,525,],
      'ACR MAWL-DA BALLISTIC ADV.':	[	100,	262,	350,	463,	719,	1025],
      'ACR RANGE FINDER':[63,150,200,238,313,438,588,],
      'ACR ASSAULT MAWL-DA':[100,150,200,250,300,400,538,],
      'ACR ASSAULT MAWL-DA BALLISTIC ADV. +30 RANGE':[100,300,450,],
      'AK12 MAWL-DA +30 RANGE':[150,213,250,288,338,400,488,],
      AK47:[88,163,200,238,288,375,475],
      'AK47 RANGE FINDER':[100,175,250,300,375,500,650,],
      'AK74':[100,175,225,275,350,450,600],
      'AK74 ASSAULT':[100,175,225,275,350,450,600],
      'AK74 ASSAULT SURVIVAL':[100,175,225,275,350,450,600],
      'ARX200':[75,150,225,275,350,475,638],
      'ARX200 MAWL-DA':[100,163,238,308,413,575,775,],
      'ARX200 MAWL-DA BALLISTIC ADV.':[100,300,475,700,1050,],
      AUG:[75,150,200,238,288,388,500],
      'AUG RANGE FINDER':[75,163,225,288,375,525,675],
      'AUG ASSAULT':[75,150,200,238,288,388,500],
      'AUG ASSAULT MAWL-DA':[75,163,213,275,350,463,625],
      'AUG ASSAULT RANGE FINDER':[75,163,225,288,375,525,675],
      'CTMMG':[100,175,200,250,313,413,550,],
      'FAL':[88,125,150,175,207,238,300,],
      'FAL RANGE FINDER':[88,150,175,213,250,313,400,],
      'FRF2':[],
      'G28 WILDERNESS RANGE FINDER':[125,220,285,350,450,610,780,],
      G36C:[75,138,163,200,238,300,400],
      'G36C MAWL-DA':[75,150,175,225,275,375,500],
      'G36C RANGE FINDER':[75,150,200,250,300,400,550],
      'G36C SCOUT':[],
      'L115A3':[150, 225, 275, 313, 375, 463, 575],
      'M110':[100,165,200,240,285,355,460,],
      'M110 MAWL-DA':[100,175,225,265,330,430,560,],
      'M110 RANGE FINDER':[100,180,240,290,360,475,635,],
      'M4A1':[75,150,175,200,238,300,388],
      'M4A1 BALLISTIC ADV.':[88,200,300,400,500],
      'M4A1 +30 RANGE':[100,175,225,300,375,],
      'M4A1 MAWL-DA':	[	100,	150,	200,	238,	275	],
      'M4A1 MAWL-DA +30 RANGE':[125,188,250,338,],
      'M4A1 MAWL-DA BALLISTIC ADV.':	[	100,	238,	338,	475,	688,],
      'M4A1 ASSAULT':[75,150,175,200,238,300,388],
      'M4A1 ASSAULT BALLISTIC ADV.':[88,200,300,400,500],
      'M4A1 ASSAULT MAWL-DA':[88,150,188,225,],
      'M4A1 SCOUT':[],
      'M4A1 SCOUT MAWL-DA':[100,200,225,275,325,425,550],
      'M4A1 SCOUT MAWL-DA BALLISTIC ADV.':[100,300,400,550],
      'M4A1 SCOUT RANGE FINDER':[],
      'M4A1 TACTICAL': [ 88,	138,	175,	200,	238,	300,	388,	],
      'M4A1 TACTICAL BALLISTIC ADV.':[100,225,300,400,550],
      'M4A1 TACTICAL MAWL-DA': [	88, 150,	200,	238,	288,	363,	475,	],
      'M4A1 TACTICAL RANGE FINDER':	[	88,	150,	200,	250,	300,	400,	525,	],
      MDR:[75,138,175,213,263,350,450],
      'MDR MAWL-DA':[75,150,200,250,325,425,575],
      'MDR RANGE FINDER':[75,150,200,275,350,475,625],
      'MK14 MAWL-DA':[150,225,250,285,325,400,485,],
      'MK17 MAWL-DA':[100,188,250,300,400,525,675],
      'MK17 MAWL-DA +30 RANGE':[100,250,350,450,650,888,],
      'MK17 BALLISTIC ADV.':[100,263,375,500],
      'MK17 ASSAULT MAWL-DA':[100,200,250,300,350,475,613],
      'MK17 MAWL-DA BALLISTIC ADV.':[100,275,450,600,],
      'MK17 RANGE FINDER':[100,200,275,325,425,575,738],
      'MK17 RANGE FINDER BALLISTIC ADV.':[113,300,488,650],
      'MK17 ASSAULT BALLISTIC ADV.':[100,263,375,500],
      'MK17 ASSAULT MAWL-DA BALLISTIC ADV.':[100,275,450,600,],
      'MK17 ASSAULT RANGE FINDER BALLISTIC ADV.':[113,300,488,650],
      'MK17 SCOUT':[75,175,225,275,338,425,513],
      'MK17 SCOUT RANGE FINDER':[75,200,263,325,425,588,775],
      'MK17 SCOUT BALLISTIC ADV.':[75,250,400,550,850,'greater than 1000'],
      'MK17 SCOUT RANGE FINDER BALLISTIC ADV.':[75,300,500,738,'greater than 1000'],
      'MK18 MAWL-DA':[75,100,150,200,250,300,425,],
      'SC-20K':[100,163,213,263,338,463,613],
      'SC-20K MAWL-DA':[100,175,250,300,400,575,750],
      'SILVER STAKE':[150,225,250,288,313,363,425,], 
      'SILVER STAKE RANGE FINDER':[150,250,288,338,388,475,575,],
      'STONER COMPACT MAWL-DA':[100,150,200,250,300,400,513,],
      'SVD-63':[],
      TAVOR:[75,125,150,175,207,250,325],
      VHSD2:[75,150,200,238,300,400,525],
      'VHSD2 MAWL-DA':[75,175,225,275,350,500,650],

    },
    'RU LONG-RANGE FOV': {
      'FRF2':[150,	275,	333,	466,	613	],
      'L115A3':[175,	275,	333,	466,	620	],
      'SC-20K':[100,213,288,425,625],
      'SC-20K MAWL-DA':[125,238,325,513,763],
      'SCORPIO SCOUT':[170,	250,	290,	335,	415	],
      'VSK-50':	[200,	250,	300,	388,	507	],
      'VSK-50 RANGE FINDER':[200,	288,	363,	507,	688	]
    },
    'RU LONG-RANGE': {
      'AUG SCOUT RANGE FINDER':[125,225,300,350,425,525],
      'FRF2':	[	150,	250,	325,	350,	425,	463	],
      'FRF2 BALLISTIC ADV.':	[	200,	450,	650	],
      'M82':	[	175,	300,	400,	450,	575,	625	],
      'SVD-63':	[	163,	250,	300,	325,	375,	425	],
      'SVD-63 PATCHWORK':	[	163,	250,	300,	325,	375,	425	],
      'SVD-63 PATCHWORK BALLISTIC ADV.': [188,	400,	600,	],
      'TAC50 BROWN':[0,0,400,475,600]

    },
    'PALADIN OPTIC': {
      'PALADIN 9':[70,200,275,350,450,560,],
    }
  },
  Wildlands: {
    'TA31H': {
      '416':[125,150,175,200,250,300,350,],
      '416 LONG BARREL':[125,175,200,225,300,350,425,],
      '416 LONG BARREL RANGE FINDER':[150,200,225,250,325,375,450,],
      '556XI':[125,175,200,250,300,400,500,],
      '556XI LONG BARREL':[125,175,250,300,400,525,650,],
      '805 BREN':[100,150,200,225,300,400,475	],
      '805 BREN RANGE FINDER':[	125,175,225,250,325,425,500],
      '805 BREN LONG BARREL':[125,175,250,275,375,500,600	],
      '805 BREN LONG BARREL RANGE FINDER':[	125,200,275,300,400,525,625],
      '805 BREN SHORT BARREL':[75, 125, 175, 200, 250, 300, 350],
      '805 BREN SHORT BARREL RANGE FINDER':	[	100,	150,	175,	200,	250,	325,	400	],
      'AC-AR':[125,175,225,275,375,525,625,],
      'ACR':[125,175,200,250,300,375,475,],
      'ACR LONG BARREL':[125,175,225,275,350,475,600,],
      'AK12':[100,150,200,225,300,375,450,],
      'AK12 LONG BARREL':[125,175,225,275,350,450,550,],
      'AK47 LONG BARREL':[150,200,250,300,400,525,650,],
      'AK74':[100,150,200,250,325,425,525,],
      'AUG A3':[125,175,225,275,350,450,575,],
      'AUG A3 LONG BARREL RANGE FINDER':[125,175,275,325,475,625,775],
      'BFG':[150,225,275,350,450,600,700,],
      'F2000':[100,150,200,250,325,425,550,],
      'FAL':[125,200,250,300,425,575,700,],
      'G2':[125,175,225,250,350,475,575,],
      'G36C':[125,175,200,225,300,375,450,],
      'G36C LONG BARREL':[150,200,250,275,350,450,550,],
      'L85A2':[125,175,225,275,350,450,550,],
      'LVOA':[125,200,275,325,450,600,725,],
      'M40A5':[150,200,275,325,425,525,625,],
      'M40A5 LONG BARREL':[100,225,325,375,525,700,825,],
      'M40A5 SHORT BARREL':[125,175,225,250,325,400,500,],
      'M1891':[100,200,300,325,450,600,725,],
      'M1891 LONG BARREL':[200,250,350,425,600,775,925,],
      'MDR':[125,150,200,225,275,325,400,],
      'MDR LONG BARREL':[150,175,225,250,325,400,500,],
      'MK14':[150,200,275,350,500,625,750,],
      'MK16 LONG BARREL':[100,150,200,250,300,375,475,],
      'MK16 SHORT BARREL':[100,125,150,175,200,233,275,],
      'MK17':[125,150,200,225,300,375,450,],
      'MK17 LONG BARREL':[150,200,250,275,350,450,550,],
      'MK17 SHORT BARREL':[100,125,150,175,225,275,325,],
      'MK18':[150,175,200,250,300,350,425,],
      'P416':[100,150,225,275,375,500,625,],
      'P416 SHORT BARREL':[100,150,200,225,300,375,475,],
      'PSG-1':[150,175,225,250,300,375,450,],
      'SC4000':[125,150,175,200,250,325,375,],
      'SR25':[150,225,300,350,500,625,775,],
      'SR25 JUNGLE':[275,425,650,800,],
      'SR25 MACHINERY':[150,225,300,363,500,650,775],
      'SR3M':[125,175,225,275,375,475,575,],
      'SRSA1':[150,225,250,300,375,450,550,],
      'R4 LONG BARREL':[125,150,200,225,275,350,425,],
      'R4 LONG BARREL RANGE FINDER':[125,175,225,250,300,375,450,],
      'R5 RGP':[125,175,225,250,350,450,550,],
      'TAR21':[125,175,200,225,300,375,450,]
    },
    'TARS101': {
      'BFG-50A ZOOMED':[175,275,375,600,],
      'BFG-50A':[150,250,300,450,575,],
      'FRF-2 ZOOMED':[50,100,150,250,300,350,400,450,500,550,600,650,],
      'FRF-2':[25,75,125,225,250,300,325,375,425,475,525,550,],
      'G28 ROOKIE ZOOMED':[150,225,275,400,500,600,],
      'G28 ROOKIE':[150,200,250,350,400,475,575,],
      'L115A3 ZOOMED':[150,200,300,400,500,600,],
      'L115A3':[125,200,250,338,400,500,],
      'M110 ZOOMED':[150,200,300,400,500,600,],
      'M110':[150,200,250,350,425,500,],
      'M1891 Zoomed':[150,250,325,475,600,725,],
      'M1891':[150,225,275,400,500,600,700,],
      'M1891 LONG BARREL ZOOMED':[175,275,375,600,750,900,],
      'M1891 LONG BARREL':[175,250,325,475,600,725,],
      'M40A5 ZOOMED':[175,250,300,400,500,625,],
      'M40A5 ':[150,225,250,350,425,500,600,],
      'MK14 ZOOMED':[150,225,300,475,625,],
      'MK14':[150,200,275,375,500,600,],
      'MK14 LONG BARREL ZOOMED':[175,275,350,600,],
      'MK14 LONG BARREL':[175,250,325,500,],
      'MK14 CAPTAIN ZOOMED':[150,225,300,475,625,],
      'MK14 CAPTAIN':[150,200,250,375,475,600,],
      'MSR SHORT BARREL ZOOMED':[150,200,250,300,350,400,475,525,575,625,675,700,725,750,775,788,800,],
      'MSR SHORT BARREL':[150,175,200,250,300,350,400,450,500,],
      'PSG-1 ZOOMED':[150,200,250,300,363,425,500,575,],
      'PSG-1':[150,175,225,275,325,375,425,],
      'SR-1 ZOOMED':[175,250,300,425,550,],
      'SR-1':[150,225,275,375,450,550,625,],
      'SR-1 CHAMELEON ZOOMED':[175,250,300,425,550,650,],
      'SR-1 CHAMELEON':[150,225,275,375,450,525,],
      'SR25 ZOOMED':[150,250,300,475,625,],
      'SR25':[150,200,275,375,500,],
      'SR25 RANGE FINDER ZOOMED':[150,250,350,500,650,],
      'SR25 RANGE FINDER':[150,200,300,400,550,625,],
      'SR25 RANGE FINDER SHORT BARREL ZOOMED':[150,200,275,400,500,625,],
      'SR25 RANGE FINDER SHORT BARREL':[150,200,225,325,400,500,],
      'SR25 SHORT BARREL ZOOMED':[150,200,250,375,475,575,],
      'SR25 SHORT BARREL':[125,175,225,300,375,450,],
      'SRSA1 ZOOMED':[150,250,300,450,550,],
      'SRSA1':[150,225,275,350,450,],
      'Z93 AMR ZOOMED':[125,225,300,500,650,750,825,900,950,],
      'Z93 AMR':[100,200,275,400,500,625,],
    },
    'T5XI TACTICAL': {
      'BFG-50A':[150,250,325,500,700,],
      'BFG-50A LONG BARREL':[175,275,375,650,875,],
      'DESERT TECH HTI BDC':[200,300,450,800,],
      'DRAGUNOV (SVD)':[],
      'FRF2':[150,200,250,375,500,600,600,],
      'FRF2 LONG BARREL':[150,250,300,450,600,],
      'EXTRANJEROS BFG':[275,400,775,],
      'G28':[],
      'HTI':[],
      'HTI MUDDY BONES':[275,450,650,],
      'L115A3':[100,200,300,475,675,],
      'M110':[],
      'M110 RANGE FINDER':[],
      'M1891':[],
      'M40A5':[125,225,325,525,725,],
      'M40A5 LONG BARREL':[],
      'M40A5 SHORT BARREL':[],
      'M40A5 GOLDEN SUN':[200,300,375,650,],
      'MK14':[150,225,325,625,],
      'MSR':[],
      'MSR EAGLE SHOT':[200,250,350,575,],
      'MSR THERMITE':[],
      'PSG-1':[150,200,250,400,550,],
      'PSG-1 LONG BARREL':[150,238,300,488,688],
      'SR-1':[],
      'SR25':[125,225,350,625,875,],
      'SR25 RANGE FINDER':[],
      'SR25 SHORT BARREL':[100,200,275,500,700,],
      'SR25 SHORT BARREL RANGE FINDER':[],
      'SRSA1':[],
      'Z93 AMR':[100,225,	275,400,575,738,838,925,1000,],
      'Z93 AMR LONG BARREL':[150,225,325,500,725,900,],			
      },
    'DIGITAL': {
      '416':[163,188,238,313,425,538,],
      '556xi':[],
      '805 BREN LONG BARREL':[138,188,275,425,613,763],
      'ACR':[100,150,213,313,450,588,],
      'ACR LONG BARREL':[125,150,250,400,575,750,],
      'ACR SHORT BARREL':[100,125,175,250,350,450,],
      'AK12 Zoomed':[],
      'AK12 LONG BARREL':[],
      'AUG A3':[100,150,238,388,575,738,],
      'BFG-50A':[150,200,275,400,550,700,],
      'G36C':[125,150,200,300,450,550],
      'G36C LONG BARREL':[138,175,250,400,550,700,],
      'LVOA':[125,175,275,425,625,800],
      'L115A3':[],
      M4A1:[125,150,200,300],
      'M4A1 LONG BARREL':[138,175,250,400,],
      'MDR':[75,125,175,275,375,500,],
      'MDR LONG BARREL':[75,150,200,325,475,625,],
      'MK16':[100,138,188,263,363,463,],
      'MK16 LONG BARREL':[100,150,225,325,450,588,],
      'MK16 RANGE FINDER':[125,150,200,275,375,488,],
      'MK16 LONG BARREL RANGE FINDER':[	125,	163,250,350,475,607,],
      'MK16 SHORT BARREL':[75,100,150,213,275,363,],
      'MK16 SHORT BARREL RANGE FINDER':[100,125,175,225,300,375,],
      'MK17':[100,150,200,300,450,550],
      'MK17 SHORT BARREL':[100,125,175,250,325,425,],
      'MK17 LONG BARREL':[138,175,250,400,550,700,],
      'MK17 LONG BARREL RANGE FINDER':[150,200,250,400,550,725,],
      'MK18':[100,150,200,300,400,525,],
      'P416':[125,175,250,425,600,],
      'P416 RANGE FINDER':[150,200,275,450,650,],
      'P416 SHORT BARREL':[125,150,200,325,475,600,],
      'PSG-1':[125,175,225,325,450,575,],
      'R5 RGP LONG BARREL':[125,175,275,475,675,850],
    },
    'G28': {
      'DRAGUNOV (SVD) RANGE FINDER':[125,188,250,300,338,400,463,525,588,638,688,],
      'FRF-2':[150,200,275,325,375,450,500,],
      'FRF-2 LONG BARREL':[175,250,325,375,450,550,],
      'G28':[175,200,250,275,325,375,450,500,550,],
      'G28 LONG BARREL':[175,225,275,325,400,475,550,650,],
      'G28 LONG BARREL RANGE FINDER':[200,250,300,350,425,500,575,650,],
      'HTI':[175,238,300,350,400,488,575,650,713,750,800,],
      'HTI LONG BARREL':[200,275,350,425,513,625,725,800,875,925,975,],      
      'L115A3':[],
      'L115A3 LONG BARREL':[200,263,350,413,500,600,700,],
      'M110':[150,200,275,350,425,525,650,],
      'M110 RANGE FINDER':[175,225,300,375,450,575,],
      'MK14':[150,225,275,375,475,575,],
      'MK14 LONG BARREL':[175,275,375,475,575,675,],
      'MK14 RANGE FINDER':[175,250,325,400,475,600,],
      'MK14 LONG BARREL RANGE FINDER':[200,275,375,475,600,],
      'PSG-1 STANDARD BARREL':[150,175,225,275,325,375,425,500,550,],
      'PSG-1 LONG BARREL':[175,200,275,325,375,450,550,625,],
      'PSG-1 MERCENARY':[200,250,325,375,450,525,600,],
      'SR25':[175,250,325,400,475,600,],
      'SR25 SHORT BARREL':[150,200,250,300,375,450,525,600,],
      'SR25 RANGE FINDER':[200,250,350,400,500,638,],
      'SR25 RANGE FINDER SHORT BARREL':[175,225,275,325,400,475,550,625,],
      'SR25 LIBERATOR':[200,250,325,400,475,600,],
      'SRSA1 LONG BARREL':[200,275,350,425,525,625,725,813,875,925,975,1013,1038],
    },
    'PKS-07': {
      'BFG-50A':[175,275,375,500,600,700,],
      'DRAGUNOV (SVD)':[175,225,275,325,400,450,],
      'DRAGUNOV (SVD) RANGE FINDER':[175,250,300,350,413,475,],
      'DRAGUNOV (SVD) SHORT BARREL':[150,200,225,275,300,350,],
      'DRAGUNOV (SVD) SHORT BARREL RANGE FINDER ':[150,200,250,300,325,375,],
      'FRF-2':[150,200,250,300,350,400,],
      'L115A3':[175,250,300,375,450,525,],
      'M1891':[200,250,350,400,525,600,],
      'MK14':[150,250,325,425,525,625,],
      'PSG-1':[150,200,250,300,350,400,],
      'SR25':[175,250,350,425,550,625,],
      'SR25 SHORT BARREL':[150,225,275,325,425,500,],
      'SRSA1':[200,250,325,400,475,550,],
    },
    'POSP': {
      'DRAGUNOV (SVD)':[],
      'FRF-2 ZOOMED':[100,200,250,350,500,],
      'HIS AK47 ZOOMED':[150,200,250,375,575,],
      'HIS AK47':[125,175,225,300,450,],
      'L115A3':[],
      'MK14 ZOOMED':[175,250,375,625,],
      'MK14':[150,225,300,450,675,],
      'MK14 OCCULT ZOOMED':[300,450,625,],
      'MK14 OCCULT ':[275,400,500,],
      'PSG-1 ZOOMED':[150,225,300,425,600,],
      'PSG-1':[125,200,250,325,475,],
      'SR25 ZOOMED':[175,275,375,625,],
      'SR25':[150,250,300,450,],
    }
  }
}

export default fullData;
