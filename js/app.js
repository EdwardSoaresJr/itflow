//Prevents resubmit on refresh or back
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

//Data Tables Options
$('#dt').dataTable( {
    "order": [],
    language: {
        search: '_INPUT_',
        searchPlaceholder: "Enter search...",
        sLengthMenu: "_MENU_",
        sInfo: "<strong>records:</strong> _START_-_END_ of _TOTAL_",
        paginate: {
        	previous: '<i class="fa fa-angle-left"></i>',
            next: '<i class="fa fa-angle-right"></i>'
        }
    }
});

// Call the dataTables jQuery plugin

$('#dataTable').DataTable();

$('#dT').dataTable( {
  "columnDefs": [
    { "orderable": false, "targets": 5 }
  ],
  "orderCellsTop": true,
  language: {
      search: "<i class='fa fa-search'></i>_INPUT_",
      searchPlaceholder: "Search",
      sLengthMenu: "_MENU_",
      sInfo: "_START_-_END_ of _TOTAL_",
      paginate: {
        previous: '<i class="fa fa-angle-left"></i>',
          next: '<i class="fa fa-angle-right"></i>'
      }
  }

});

//Highlight top nav menu item with current page
$(function() {
    // Highlight the active nav link.
    var url = window.location.pathname;
    var filename = url.substr(url.lastIndexOf('/') + 1);
    $('.navbar a[href$="' + filename + '"]').parent().addClass("active");
});

$(function() {
    // Highlight the active nav link.
    var url = window.location.pathname;
    var filename = url.substr(url.lastIndexOf('/') + 1);
    $('.nav a[href$="' + filename + '"]').parent().addClass("active");
});