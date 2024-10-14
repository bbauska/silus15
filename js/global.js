/* global.js - theme by: brian a. bauska (grandpa) */
$( function() {
  // add background image - 3rd countdown to 14th birthday 10/11/2024. Set to 10/12 @3:59:59am. Started with 11th birthday on 10/11/21.
  $.backstretch('images/July-2-2024-kitty-2.png');  /* -500 */
  // date of birth: 10/11/10.
  var endDate = "Oct  11, 2024 10:59:59";
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
