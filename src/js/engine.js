function include(url) {
  
    var sc = document.createElement('script');
    sc.src = url;
    document.head.appendChild(sc);
  }

include('../models/monster.js');
include('../models/block.js');
include('../../easyStar/easystar-0.4.3.js');
include('../models/Player.js');
include('../js/main.js');