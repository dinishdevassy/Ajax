    $(document).ready(function()
    {
        $("#btn_loaddata").click(function()
        {
            $.ajax({
                type:"GET",
                url:"mydata.json",
                success:function(data){
                    var output="<table class ='table'> <thead> <tr> <th>Name</th> <th>D.O.B</th> <th>College</th> <th>MOBILE </th> </tr> </thead>"
                    for(var i in data){
                        output+="<tr><td>"+data[i].name+"</td>";
                        output+="<td>"+data[i].dob+"</td>";
                        output+="<td>"+data[i].college+"</td>";
                        output+="<td>"+data[i].mobile+"</td></tr>";
                    }
                    output+="</table>"
                    $('.result').html(output);
                },
                error:function()
                {
                    "<h3>Error</h3>"
                }
            });
        });
    });