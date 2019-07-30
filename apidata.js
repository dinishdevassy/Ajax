$(document).ready(function()
{
    $("#loader").hide();
    $("#btn_loaddata").click(function()
    {
        $("#loader").show();
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
                $("#loader").hide();
                var output="";
                for(var i in data){
                    output+="<br>";
                    output+="<div class='card text-center'>";
                    output+="<div class='card-header'>"+data[i].name+"</div><br>";
                    output+="<div class='card-body'>";
                    output+="<p class='card-text'>"+data[i].id+"</p>";
                    output+="<p class='card-text'>"+data[i].username+"</p>";
                    output+="<p class='card-text'>"+data[i].email+"</p>";
                    output+="<p class='card-text'>"+data[i].address.street+"</p>";
                    output+="<p class='card-text'>"+data[i].address.suite+"</p>";
                    output+="<p class='card-text'>"+data[i].address.city+"</p>";
                    output+="<p class='card-text'>"+data[i].address.zipcode+"</p>";
                    output+="</div> </div>"
                }
                $('.result').html(output);
            },
            error:function()
            {
                "<h3>Error</h3>"
            }
        });
    });
});