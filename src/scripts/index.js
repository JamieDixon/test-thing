(function ($) {
  'use strict';

  var tree;

  var renderDataOnPage = function (data) {
      var container = $('#data');
      var units = data['Units Table'];

      container.empty();

      var mapped = units.map(function (unit) {
        return {
          text: unit.uid,
          state: {
            opened: true
          }
        };
      });

      container.jstree({
          core: {
            data: mapped
          }
        });  };

  var getData = function () {
    $.get('/data/units_table.json?foo=' + Math.random()).then(renderDataOnPage);
  };

  var init = function () {

    getData();
    //setInterval(getData, 300);
  };

  $(document).ready(init);

}(jQuery));
