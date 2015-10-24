(function ($) {
  'use strict';

  var renderDataOnPage = function (data) {
      var container = $('#data');
      var units = data['Units Table'];

      var html = units.reduce(function (agg, next) {
        agg += '<li>Uid: ' + next.uid + ' - hwaddr: ' + next.hwaddr + '</li>';
        return agg;
      }, '');

      container.html(html);
  };

  var getData = function () {
    $.get('/data/units_table.json?foo=' + Math.random()).then(renderDataOnPage);
  };

  var init = function () {
    getData();

    setInterval(getData, 300);
  };

  $(document).ready(init);

}(jQuery));
