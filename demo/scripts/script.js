$(document).ready(function () {

    var delen = {'Oudzuid' : [
                    'Science Park', 'StadionPlein','Mosveld','Oostpoort','Overhoeks'
                    ],
                  'Osdorp': [
                    'Hamerstraat', 'NDSM Haven','Ravel','Rai'
                    ]};
                    
    $('path').click(function () {
        var $this = $(this);

        toggleActive($this[0]);
       var region = $('#regionName').text()
       var project_lijst =  delen[region];
       console.log(project_lijst);
       var listHTML = "";
       if(delen[region]){
       $.each(delen[region], function(a,b){
           console.log(a,b);
           listHTML += "<li>" + b + "</li>"
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
