var Table = require('cli-table')

var logger = function () {

  var table = new Table ({
    head: ['Options', 'Type', 'Description'],
    colWidths: [15, 20, 100]
  });

  function purpose (purpose) {
    var print = typeof(purpose === 'String') ? purpose : purpose + '';
    console.log (print);
    return this;
  }

  function describe (option, type, description) {

    table.push (
      ['--'+ option, type, description]
    );

    return this;
  }

  function printDescribes () {
    console.log(table.toString());
  }

  return {
    purpose : purpose,
    describe : describe,
    printDescribes : printDescribes
  }

}();

module.exports = logger;