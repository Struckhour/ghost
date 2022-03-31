const fullData: { [gameName: string]: {[scopeName: string]: {[rifleName: string]: number[]}} } = {
  Breakpoint: {
    'T5XI SIGHT': {
      '416 SCOUT':[100,200,300,400,525,],
      '416 SCOUT MAWL-DA':[100,225,350,500,650,],
      '416 SCOUT RANGE FINDER':[100,250,375,550,700,],
      '553 SCOUT':[75,200,275,375,500,],
      '553 SCOUT MAWL-DA':[75,225,325,475,625,],
      '553 SCOUT RANGE FINDER':[75,225,350,525,675,],
      'AK74 SCOUT':[],
      'FRF2':[150,260,325,390,466,580,],
      'G28':[133,287,425,587,700,],
      'G28 MAWL-DA':[150,325,525,725,],
      'G28 RANGE FINDER':[150,350,575,800,],
      'G28 WILDERNESS':[133,287,425,587,700,],
      'G28 WILDERNESS MAWL-DA':[150,325,525,725,],
      'G28 WILDERNESS RANGE FINDER':[150,350,575,800,],
      'G28 SCOUT':[125,200,250,313,375,463,518,],
      'G28 SCOUT MAWL-DA':[],
      'G28 SCOUT RANGE FINDER':[],
      'G36C SCOUT':[75,175,275,375,475,],
      'G36C SCOUT MAWL-DA':[75,200,300,450,600,],
      'G36C SCOUT RANGE FINDER':[75,225,350,500,650,],
      'HTI SURVIVAL':[200,345,445,560,666,800,],
      'L115A3':[150,300,400,510,625,750,],
      'M110':[100,225,315,425,535,],
      'M110 MAWL-DA':[100,250,375,525,660,808,],
      'M110 RANGE FINDER':[100,270,400,580,725,],
      'M4A1 SCOUT':[100,200,250,325,400,],
      'M4A1 SCOUT MAWL-DA':[100,225,300,400,500,],
      'M4A1 SCOUT RANGE FINDER':[125,225,325,425,475,],
      'M82':[175,325,440,580,720,],
      'MK14':[],
      'MK14 MAWL-DA':[175,260,320,390,460,566,],
      'MK14 RANGE FINDER':[],
      'MK14 ASSAULT':[],
      'MK17 SCOUT':[100,275,400,575,700,],
      'MK17 SCOUT RANGE FINDER':[100,325,550,775,],
      'MSR':[175,275,325,390,450,555,],
      'PALADIN 9':[70,233,366,560,],
      'SCORPIO SCOUT':[170,275,340,415,490,],
      'SR-1':[175,440,650,],
    },
    'DUAL RANGE SIGHT': {

        "553 SCOUT": [100, 133, 200, 250, 285, 366, 425, 500],
        "553 SCOUT MAWL-DA": [525],
        "553 SCOUT RANGE FINDER": [],
        FRF2: [150, 225, 300, 350, 410, 485],
        G28: [100, 200, 295, 350, 433, 533, 615, 680, 733],
        "G28 MAWL-DA": [125, 225, 325, 425, 540, 660, 750],
        "G28 WILDERNESS": [100, 200, 295, 350, 433, 533],
        "G28 WILDERNESS MAWL-DA": [125, 225, 325, 425, 540, 660, 750],
        "G28 WILDERNESS RANGE FINDER": [100, 220, 350, 450, 580, 715, 815],
        "G36C Scout": [80, 133, 200, 250, 300, 366, 433, 507],
        "G36C SCOUT MAWL-DA": [80, 150, 230, 290, 360, 450, 550],
        "HTI SURVIVAL": [200, 275, 375, 420, 490],
        L115A3: [150, 233, 325, 375, 450, 533],
        M110: [115, 175, 250, 305, 380, 465, 535],
        "M110 MAWL-DA": [150, 190, 295, 360, 470, 575],
        "M110 RANGE FINDER": [100, 200, 300, 400, 500, 635, 720, 800],
        "M4A1 SCOUT MAWL-DA": [100, 175, 275, 350, 425, 545],
        "M4A1 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        "MK14 MAWL-DA": [125, 200, 270, 300, 350, 400, 450],
        "MK17 SCOUT": [100, 175, 250, 300, 366, 433, 513],
        "MK17 SCOUT RANGE FINDER": [100, 200, 300, 375, 475, 600],
        "SCORPIO SCOUT": [170, 235, 300, 335, 385, 435, 495, 540],
        "SCORPIO SCOUT QUIET": [200, 225, 275, 313, 350, 400, 450, 480],
        "SVD-63": [150, 219, 275, 300, 340, 380, 425, 480],
      },
    'TARS101': {
        '416 SCOUT':[100,150,200,275,325,375,450,525,575,625,675,],
        '416 SCOUT MAWL-DA':[100,175,250,300,400,475,575,650,],
        '416 SCOUT RANGE FINDER':[],
        '553 SCOUT':[75,150,225,275,350,425,500,],
        '553 SCOUT MAWL-DA':[75,175,250,335,425,525,625,],
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
        'HTI SURVIVAL':[200,300,365,440,510,585,650,700,],
        'M4A1 SCOUT':[],
        'M4A1 SCOUT MAWL-DA':[100,175,250,325,400,475,550,625,680,725,767,797,827,],
        'M4A1 RANGE FINDER':[],
        'L115A3':[150,250,300,350,400,466,525,575,625,666,700,733,760,787,808,827,],
        'L115A3 BALLISTIC ADV.':[200,400,575,],
        'M110':[100,175,240,295,350,410,475,535,590,],
        'M110 MAWL-DA':[100,200,265,340,415,500,585,660,720,760,],
        'M110 RANGE FINDER':[100,200,290,375,455,550,645,725,785,825,],
        'M110 MAWL-DA WITH BALLISTIC ADV.':[100,333,550,875,],
        'M82':[150,250,350,433,500,600,675,750,],
        'MK14 MAWL-DA':[150,225,275,333,400,450,500,550,590,625,650,680,700,],
        'MK17 SCOUT':[100,200,285,366,450,550,],
        'MSR':[175,240,280,320,360,400,440,485,525,550,],
        'RECON-A1':[150,233,290,340,395,450,505,],
        'SCORPIO SCOUT':[170,240,295,340,385,425,480,525,566,605,640,],
        'SR-1':[175,350,450,600,750,],
        'SVD-63':[150,212,273,320,370,420,460,511,762,],
        'TAC50':[100,250,380,550,],
        'TAC50 BROWN':[150,300,400,512,650,750,],
        'VSK-50':[150,250,300,366,425,475,540,595,633,666,700,725,750,],
      },
    'VC16': {
      'FRF2':[150,215,240,270,305,350,410,],
      'G28':[125,175,230,260,310,380,480,533,],
      'G28 MAWL-DA':[125,200,250,300,355,460,600,],
      'G28 RANGE FINDER':[125,200,260,310,390,500,670,],
      'G28 WILDERNESS':[125,175,230,260,310,380,480,533,],
      'G28 WILDERNESS MAWL-DA':[125,200,250,300,355,460,600,],
      'G28 WILDERNESS RANGE FINDER':[125,200,260,310,390,500,670,],
      'G36C Scout':[75,125,150,175,225,275,350,400,],
      'HTI SURVIVAL':[200,266,300,333,366,420,500,],
      'L115A3':[150,213,240,275,300,350,412,440,],
      'M110':[100,150,180,215,250,300,375,415,],
      'M110 MAWL-DA':[100,165,205,240,290,350,450,505,],
      'M110 RANGE FINDER':[100,175,210,250,310,395,515,],
      'M4A1 SCOUT MAWL-DA':[100,150,190,225,270,325,425,475,],
      'MK14 MAWL-DA':[175,200,240,260,300,340,400,433,],
      'MK17 SCOUT':[125,175,200,250,300,350,450,500,],
      'SCORPIO SCOUT':[170,225,250,280,315,360,430,460,],
      'SR-1':[175,300,350,425,500,650,825,],
        },
    'ACSS': {
      '553 SCOUT':[75,150,200,275,375,500,650,],
      '553 SCOUT MAWL-DA':[75,150,225,325,450,625,775,],
      '805 BREN':[75,125,160,195,230,285,365,],
      '805 BREN MAWL-DA':[80,145,185,225,275,350,450,],
      '805 BREN RANGE FINDER':[85,140,190,225,300,375,500,],
      'FRF2':[160,240,290,350,425,535,630,],
      'G28':[125,200,275,350,475,615,733,],
      'G28 WILDERNESS RANGE FINDER':[120,250,335,450,640,],
      'M10':[100,175,225,275,350,450,575,],
      'M110 MAWL-DA':[100,190,255,320,420,565,700,],
      'M110 RANGE FINDER':[100,200,265,350,465,625,770,],
      'SVD-63':[150,215,255,300,345,420,500,],
      },
    'DIGITAL SIGHT': {
      'AK47 RANGE FINDER':[100,150,250,350,500,650,],
      'AR-18':[100,150,225,325,450,590,],
      'FAL':[80,120,160,210,260,330,],
      'G28':[120,175,250,340,450,575,],
      'G28 MAWL-DA':[120,185,275,400,550,],
      'G28 WILDERNESS RANGE FINDER':[125,190,290,425,600,780,],
      'L115A3':[150,213,275,350,],
      'M110':[100,150,200,275,350,450,],
      'M110 MAWL-DA':[100,150,225,320,425,565,],
      'M110 MAWL-DA BALLISTIC ADV.':[100,225,450,800,],
      'M110 RANGE FINDER':[100,150,245,350,475,625,],
      'M4A1 RANGE FINDER':[100,145,205,290,400,],
      'MK17 ASSAULT MAWL-DA':[100,150,250,350,525,650,],
    },
    'SLX5': {
      '553 SCOUT MAWL-DA':[75,150,225,300,425,600,],
      '553 SCOUT':[75,100,200,250,350,500,],
      '805 BREN':[100,140,185,233,300,400,500,],
      'FRF2':[100,210,265,320,390,475,585,],
      'G28 WILDERNESS RANGE FINDER':[100,200,300,400,585,],
      'M110':[100,175,225,280,360,475,590,],
      'M110 MAWL-DA':[100,190,255,325,435,585,720,],
      'M110 RANGE FINDER':[100,200,265,350,485,650,790,],
      'MK14 MAWL-DA':[175,215,250,300,350,433,525,],
      'MK17 SCOUT':[125,175,250,325,425,575,],
      'MK17 SCOUT RANGE FINDER':[100,200,300,425,600,],
      'G36C SCOUT':[],
      'SVD-63':[],
    },
    'TA31H': {
      '805 BREN':[100,140,170,200,235,290,380,],
      'AK47 RANGE FINDER':[100,175,225,275,375,500,650,],
      'G28 WILDERNESS RANGE FINDER':[125,220,285,350,450,610,780,],
      'M110':[100,165,200,240,285,355,460,],
      'M110 MAWL-DA':[100,175,225,265,330,430,560,],
      'M110 RANGE FINDER':[100,180,240,290,360,475,635,],
      'MK14 MAWL-DA':[150,225,250,285,325,400,485,],
      'FRF2':[],
      'MK17 SCOUT':[],
      'G36C SCOUT':[],
      'SVD-63':[],
    },
    'RU LONG-RANGE FOV': {
      'FRF2':[150,213,275,300,333,366,466,500,613,633,],
      'L115A3':[175,225,275,300,333,366,466,500,620,644,],
      'SCORPIO SCOUT':[170,200,250,265,290,305,335,350,415,430,],
      'SVD-63':[],
      'SVD-63 PATCHWORK':[],
    },
    'RU LONG-RANGE SIGHT': {
      'FRF2':[150,250,300,350,400,460,],
      'FRF2 BALLISTIC ADV.':[200,450,650,],
      'M82':[175,300,375,450,550,625,],
      'SVD-63':[150,250,275,325,350,400,],
      'SVD-63 PATCHWORK':[150,250,275,325,366,400,],
    },
    'PALADIN OPTIC': {
      'PALADIN 9':[70,200,275,350,450,560,],
    }
  },
  Wildlands: {
    'T5XI SIGHT': {
      "416 SCOUT": [100, 200, 300, 400, 525],
      "416 SCOUT MAWL-DA": [100, 225, 350, 500, 650],
      "416 SCOUT RANGE FINDER": [100, 250, 375, 550, 700],
      "553 SCOUT": [75, 200, 275, 375, 500],
      "553 SCOUT MAWL-DA": [75, 225, 325, 475, 625],
      "553 SCOUT RANGE FINDER": [75, 225, 350, 525, 675],
      "AK74 SCOUT": [],
      FRF2: [150, 260, 325, 390, 466, 580],
      G28: [133, 290, 425, 585],
      "G28 WILDERNESS MAWL-DA": [125, 325, 515, 715],
      "G28 WILDERNESS RANGE FINDER": [125, 350, 575],
      "G28 SCOUT": [],
      "G36C SCOUT": [75, 175, 275, 375, 475],
      "G36C SCOUT MAWL-DA": [75, 200, 300, 450, 600],
      "G36C SCOUT RANGE FINDER": [75, 225, 350, 500, 650],
      "HTI SURVIVAL": [200, 345, 445, 560, 666, 800],
      L115A3: [150, 300, 400, 510, 625, 750],
      M110: [100, 225, 315, 425, 535],
      "M110 MAWL-DA": [100, 250, 375, 525, 660, 808],
      "M110 RANGE FINDER": [100, 270, 400, 580, 725],
      "M4A1 SCOUT": [100, 200, 250, 325, 400],
      "M4A1 SCOUT MAWL-DA": [100, 225, 300, 400, 500],
      "M4A1 SCOUT RANGE FINDER": [125, 225, 325, 425, 475],
      M82: [175, 325, 440, 580, 720],
      MK14: [],
      "MK14 MAWL-DA": [175, 260, 320, 390, 460, 566],
      "MK14 RANGE FINDER": [],
      "MK14 ASSAULT": [],
      "MK17 SCOUT": [100, 275, 400, 575, 700],
      "MK17 SCOUT RANGE FINDER": [100, 325, 550, 775],
      MSR: [175, 275, 325, 390, 450, 555],
      "PALADIN 9": [70, 233, 366, 560],
      "SCORPIO SCOUT": [170, 275, 340, 415, 490],
      "SR-1": [175, 440, 650],
    },
  }
}

export default fullData;
