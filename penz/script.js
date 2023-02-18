let si = 1;
    shows(si);
    
    function ps(n) {
      shows(si += n);
    }
    function cs(n) {
      shows(si = n);
    }
    
    function shows(n) {
      let i;
      let slides = document.getElementsByClassName("ss");
      let current = document.getElementsByClassName("ss");
      let desc = document.getElementsByClassName("desc");
      if (n > slides.length) {
        si = 1
      }    
      if (n < 1) {
        si = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < current.length; i++) {
        current[i].className = current[i].className.replace(" active", "");
      }
      for (i = 0; i < desc.length; i++) {
        desc[i].style.display = "none";  
      }
      slides[si-1].style.display = "block";  
      current[si-1].className += " active";
      desc[si-1].style.display = "block";  
    }


    switch(n){
        case 1:
            
            ;
            break;
        case 2:
            ;
            break;
        case 3:
            ;
            break;
    }