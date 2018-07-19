function addURLs(){
    var URLs=$("#addresses-textbox").val()
    console.log(URLs)
}
console.log ("SettingPopup.js is being called")
dialog = $( "#setting-popup" ).dialog({
    autoOpen: false,
    height:300, 
    width:180,
    modal: true,
    buttons: {
      "Save": addURLs,
      Cancel: function() {
        dialog.dialog( "close" );
      }
    },
    close: function() {
      form[ 0 ].reset();
    //   allFields.removeClass( "ui-state-error" );
    }
});

form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addUser();
});

$( "#setting-button" ).button().on( "click", function() {
    dialog.dialog( "open" );
});