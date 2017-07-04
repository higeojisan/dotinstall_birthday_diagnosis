(function() {
  'use strict';

  var birthday = document.getElementById('birthday');
  var calc_button = document.getElementById('calc');
  var result = document.getElementById('result');

  calc_button.addEventListener('click', function() {
      // 誕生日のUNIXタイムスタンプの取得
      var birthday_date_obj = new Date(birthday.value);
      var birthday_timestamp = birthday_date_obj.getTime();
      // 現在時刻のUNIXタイムスタンプの取得
      var now = Date.now();

      // 経過日数の計算
      var elapsedday = Math.floor((now - birthday_timestamp) / (1000 * 60 * 60 * 24));
      // 年齢の計算
      var age = Math.floor(elapsedday / 365.25);

      // 表示
      result.innerHTML = "<p>あなたは" + age + "歳で、生まれてから" + elapsedday + "日経過しています</p>";
  });
})();
