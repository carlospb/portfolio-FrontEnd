console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

let i = 0;

function getItem() { i++; console.log(i, 'GET_ITEM'); console.log(new Date());  }
function getTagTrend() { console.log('GET_TREND'); console.log(new Date()); }

let getTagTrendTimer = setTimeout(function myTimer() { getTagTrend(); getTagTrendTimer = setTimeout(myTimer, 30000);}, 30000);
let getItemTimer = setTimeout(function myTimer() { getItem(); getItemTimer = setTimeout(myTimer, 5000); }, 5000);
