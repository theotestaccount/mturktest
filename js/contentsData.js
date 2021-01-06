// Lecture URL
var lectureIDAndURL = {
  "lec_0": 'vfjapXq2pd8', // 1_Variables_L1
  "lec_1": 'jDFotlZJiCY', // 2_functionDef_L1
  "lec_2": 'o9M78XSsv-w', // 3_CallingFunc_L1
  "lec_3": '2bhhB9vyMm8', // 4_Parameters_L1
  "lec_4": 'WXU79tFOJ0I', // 5_Return_L1

  "lec_0_0": "wSsARlIwoaU",
  "lec_0_1": "Gjc0kJ6bCmU",
  "lec_1_0": "Ta8n23jGMYo",
  "lec_1_0_1": "_tmapWTPJgI",
  "lec_2_0": "J7tTjc52_Pg",
  "lec_3_0": "2t9O0wq_kNc",
  "lec_3_1": "mMU03qq-QjY",
  "lec_3_2": "5S8vcjJQ2pY"

};

// Lecture and Exercise per Level. Key: Video Num
const l3 = { // low level
  0: [ // variable
    "lec_0_0", // first num: lecture number, second num: part number // 0. variable - part0. basic syntax
    "lec_0_0/exe_1_0",
    "lec_0_0/exe_2_0",
    "lec_0_0/exe_3_0",
    "lec_0_0/exe_4_0"
  ],

  1: [
    "lec_0_1", // 0. variable - part1. syntax with type Int
    "lec_0_1/exe_1_0",
    "lec_0_1/exe_2_0",
    "lec_0_1/exe_3_0",
    "lec_0_1/exe_4_0",
    "lec_0_1/exe_5_0",
  ]

};

const l2 = { // middle level
  0: [ // variable
    "lec_0_0", // first num: lecture number, second num: part number // 0. variable - part0. basic syntax
    "lec_0_0/exe_1_0"
    // "lec_0_0/exe_4_0"
  ],

  1: [
    "lec_0_1", // 0. variable - part1. syntax with type Int
    "lec_0_1/exe_1_0",
    "lec_0_1/exe_3_0"
    // "lec_0_1/exe_5_0"
  ],

  2: [ // function definition
    "lec_1_0", // part0. definition
    "lec_1_0/exe_1_0",
    "lec_1_0/exe_3_0"
    // "lec_1_0/exe_5_1"
  ],

  3: [ // calling function
    "lec_2",
    "lec_2_0/exe_1_0",
    "lec_2_0/exe_4_0"
  ],

  4: [ // calling function
    "lec_3",
    "lec_3_0/exe_1_0",
    "lec_3_0/exe_2_0",
    "lec_3_0/exe_5_0"
  ]
};

const l1 = { // high level
  0: [ // variable
    "lec_0" // first num: lecture number, second num: part number // 0. variable - part0. basic syntax
  ],

  1: [ // function definition
    "lec_1",
    "lec_1_0/exe_1_0",
    "lec_1_0/exe_5_1",
    "lec_1_0_1/exe_1_0",
    "lec_1_0_1/exe_6_0"
  ],

  2: [ // calling function
    "lec_2",
    "lec_2_0/exe_1_0",
    "lec_2_0/exe_2_0"
  ]
};
