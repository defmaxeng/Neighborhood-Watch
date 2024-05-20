//removes the black opening screen initially covering the map
function removeCover() {
    var cover = document.getElementById("map-cover");
    anime.timeline({loop: false})
    
    .add({
        targets: '#map-cover',
        opacity: [0.8,0],
        translateZ: 0,
        duration: 2000,
        easing: 'easeOutExpo',
        complete: function() {
            cover.remove();
        }
    })

    .add({
        targets: '#map-container',
        scale: [1, 0.8],
        //translateX: "12.5%",
        duration:2000,
        easing: 'easeOutExpo',
        offset: '-=2000'
    });
    
    
}
