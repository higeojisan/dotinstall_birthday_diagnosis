(function() {
  'use strict';

  var birthday = document.getElementById('birthday');
  var calc_button = document.getElementById('calc');
  calc_button.addEventListener('click', function() {
      var birthday_value = birthday.value.split("-");
      var year = birthday_value[0];
      var month = birthday_value[1];
      var day = birthday_value[2];
  });

})();
