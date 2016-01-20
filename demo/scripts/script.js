$(document).ready(function () {

    var delen = {'Oudzuid' : [
                    'Project a', 'Project 1','Project 2','Project 3','Project 4'
                    ],
                  'Osdorp' : [
                    'Project 5','Project x', 'Project 6','Project 7','Project 8'
                    ],
                    'Zeebrug' : [
                    'Project 9','Project 10','Project 11','Project 12'
                    ],
                    'Zuidoost' : [
                    'Project 13','Project 14','Project 15','Project 16','Project 17','Project 18','Project 19'
                    ]};
                    
    $('path').click(function () {
        var $this = $(this);

        toggleActive($this[0]);
       var region = $('#regionName').text()
     
      
       var listHTML = "";
       if(delen[region]){
       $.each(delen[region], function(a,region){
           listHTML += "<li>" + region + "</li>"
       })
       }
       $('.projects ul').remove();
       $(".projects").append("<ul>"+listHTML+"</ul>");
       $('li').addClass('slideInBottom')
       
       
        //console.log($('#regionName').text());
    })

    function toggleActive(region) {

        var currentFill = region.getAttribute('fill');
        if (currentFill === "#76B042") {
            region.setAttribute('fill', "#FFFFFF")
        }
        else {
            $('svg').find('path').each(function () {
                this.setAttribute('fill', "#FFFFFF");
            });

            region.setAttribute('fill', "#76B042");
        }

    }

});
