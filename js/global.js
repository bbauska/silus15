/* global.js - theme by: brian a. bauska (grandpa) */
$( function() {
  // add background image - 4th countdown to 15th birthday 10/11/2025. Set to 10/11 @10:59:59am. Started with 11th birthday on 10/11/21.
  $.backstretch('images/background-bday-silus-16th-2026.jpg');
  // date of birth: 10/11/10 10:59:59.
  var endDate = "Oct  11, 2025 10:59:59";
  $('.countdown.simple').countdown({ date: endDate });
  $('.countdown.styled').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" 
        + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" 
        + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" 
        + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });
  $('.countdown.callback').countdown({
    date: +(new Date) + 10000,
    render: function(data) {
      $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
    },
    onEnd: function() {
            $(this.el).addClass('ended');
    }
  }).on("click", function() {
    $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
  });
});
