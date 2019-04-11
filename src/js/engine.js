function include(url) {
  
    var sc = document.createElement('script');
    sc.src = url;
    document.head.appendChild(sc);
  }

include('monster.js');
include('block.js');
include('easyStar/easystar-0.4.3.js');