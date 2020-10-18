(function () {

 // Turn off inspect element / just past it .js within function //
 
 document.addEventListener('contextmenu', function(e) {
   e.preventDefault();
 });

 window.oncontextmenu = function () {
            return false;
    }
 
 window.onkeydown = function () {
            return false;
    }
 

 window.onmousedown = function () {
            return false;
    }
 

 document.onkeydown = function(e) {
 if(event.keyCode == 123) {
 return false;
 }
 if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
 return false;
 }
 if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
 return false;
 }
 if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
 return false;
 }
 }

 })(jQuery);