



function drawPoint(color, magnitude, x, y) {
	console.log("call draw point");
	
	// Allocate image resource
    	//var uri = "http://google-hangouts-app.mybluemix.net/AirDraw2/redpaint.png";
        var arbitraryResource = gapi.hangout.av.effects.createImageResource(color);

        // Use an onLoad handler
        arbitraryResource.onLoad.add( function(event) {
          if ( !event.isLoaded ) {
            alert("Could not load your overlay.");
            arbitraryResource.dispose();
          } else {
          	var arbitraryOverlay = arbitraryResource.createOverlay(
     {'scale':
        {'magnitude': magnitude,
        'reference': gapi.hangout.av.effects.ScaleReference.WIDTH}});
          	 arbitraryOverlay.setPosition(x,y);
            arbitraryOverlay.setVisible(true);
          }
        });
  

   
}