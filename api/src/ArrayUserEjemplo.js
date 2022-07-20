
const ArrayUsers = [
  {
    dni: 0,
    name: "Axel",
    last_name: "Castillo",
    is_admin: true,
    e_mail: "aCastillo@gmail.com",
    password: "aCastillo",
    phone: 84216484,
    num_contact: 0,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "",
    inscription: {
      id_inscription: 0,
      amount: 0,
      isPayed: false,
      tournament: 0
    },
    score: {
      id_Score:0,
      previous_tournaments: 0,
      hit_knowledge: 0,
      other_strokes: 0,
      special_hits: 0,
      kick_serve_control: 0,
      game_strategy: 0
    },
    category: {
      id_Category: 0,
      type: "A"
    }
  },
  {
    dni: 1,
    name: "Sebastian",
    last_name: "Conte",
    is_admin: false,
    e_mail: "sebaconte@gmail.com",
    password: "sebaconte",
    phone: 3648564,
    num_contact: 5186318,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "male",
    inscription: {
      id_inscription: 1,
      amount: 100,
      isPayed: true,
      tournament: 2
    },
    score: {
      id_Score:1,
      previous_tournaments: 3,
      hit_knowledge: 2,
      other_strokes: 5,
      special_hits: 4,
      kick_serve_control: 4,
      game_strategy: 3
    },
    category: {
      id_Category: 1,
      type: "A"
    }
  },
  {
    dni: 2,
    name: "Denise",
    last_name: "Cardozo",
    is_admin: false,
    e_mail: "denise@gmail.com",
    password: "denise",
    phone: 544843152,
    num_contact: 418315841,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "female",
    inscription: {
      id_inscription: 2,
      amount: 100,
      isPayed: false,
      tournament: 0
    },
    score: {
      id_Score:2,
      previous_tournaments: 2,
      hit_knowledge: 2,
      other_strokes: 4,
      special_hits: 3,
      kick_serve_control: 3,
      game_strategy: 1
    },
    category: {
      id_Category: 2,
      type: "B"
    }
  },
  {
    dni: 3,
    name: "Nahuel",
    last_name: "Toloza",
    is_admin: false,
    e_mail: "tolozanh@gmail.com",
    password: "tolozanh",
    phone: 54264862,
    num_contact: 848315842,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "male",
    inscription: {
      id_inscription: 3,
      amount: 100,
      isPayed: true,
      tournament: 1
    },
    score: {
      id_Score:3,
      previous_tournaments: 3,
      hit_knowledge: 3,
      other_strokes: 3,
      special_hits: 4,
      kick_serve_control: 4,
      game_strategy: 5
    },
    category: {
      id_Category: 3,
      type: "A"
    }
  },
  {
    dni: 4,
    name: "Carlos",
    last_name: "Pereira",
    is_admin: false,
    e_mail: "pereira@gmail.com",
    password: "pereira",
    phone: 41518441,
    num_contact: 748423185,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "male",
    inscription: {
      id_inscription: 4,
      amount: 100,
      isPayed: true,
      tournament: 1
    },
    score: {
      id_Score:4,
      previous_tournaments: 2,
      hit_knowledge: 3,
      other_strokes: 2,
      special_hits: 4,
      kick_serve_control: 3,
      game_strategy: 4
    },
    category: {
      id_Category: 4,
      type: "B"
    }
  },
  {
    dni: 5,
    name: "Maria",
    last_name: "Villalobos",
    is_admin: false,
    e_mail: "maria@gmail.com",
    password: "maria",
    phone: 54843185,
    num_contact: 45541238,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "female",
    inscription: {
      id_inscription: 5,
      amount: 100,
      isPayed: false,
      tournament: 0
    },
    score: {
      id_Score:5,
      previous_tournaments: 3,
      hit_knowledge: 3,
      other_strokes: 4,
      special_hits: 5,
      kick_serve_control: 2,
      game_strategy: 1
    },
    category: {
      id_Category: 5,
      type: "C"
    }
  },
  {
    dni: 6,
    name: "Alejandra",
    last_name: "Guzman",
    is_admin: false,
    e_mail: "aleg@gmail.com",
    password: "aleg",
    phone: 548431851,
    num_contact: 45581238,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "female",
    inscription: {
      id_inscription: 6,
      amount: 100,
      isPayed: false,
      tournament: 0
    },
    score: {
      id_Score:6,
      previous_tournaments: 3,
      hit_knowledge: 3,
      other_strokes: 4,
      special_hits: 5,
      kick_serve_control: 2,
      game_strategy: 1
    },
    category: {
      id_Category: 6,
      type: "C"
    }
  },
  {
    dni: 7,
    name: "Daniel",
    last_name: "Mora",
    is_admin: false,
    e_mail: "daniM@gmail.com",
    password: "daniM",
    phone: 454215154,
    num_contact: 215448421,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "male",
    inscription: {
      id_inscription: 7,
      amount: 100,
      isPayed: true,
      tournament: 2
    },
    score: {
      id_Score:7,
      previous_tournaments: 5,
      hit_knowledge: 2,
      other_strokes: 1,
      special_hits: 3,
      kick_serve_control: 3,
      game_strategy: 4
    },
    category: {
      id_Category: 7,
      type: "E"
    }
  },
  {
    dni: 8,
    name: "Diego",
    last_name: "Apuy",
    is_admin: false,
    e_mail: "jdapuy@gmail.com",
    password: "jdapuy",
    phone: 87168035,
    num_contact: 22696232,
    picture: "https://i.stack.imgur.com/dr5qp.jpg",
    gender: "male",
    inscription: {
      id_inscription: 8,
      amount: 100,
      isPayed: false,
      tournament: 0
    },
    score: {
      id_Score:8,
      previous_tournaments: 2,
      hit_knowledge: 1,
      other_strokes: 3,
      special_hits: 2,
      kick_serve_control: 4,
      game_strategy: 2
    },
    category: {
      id_Category: 8,
      type: "B"
    }
  }
]


module.exports = ArrayUsers;

