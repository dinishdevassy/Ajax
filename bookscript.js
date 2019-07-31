$(document).ready(function ()
{
    
    $.ajax(
    {
        type:"GET",
        url:"bookdata.json",
        success:function(list)
        {
            var options="<select>";
            for (var j in list)
            {
                options+="<option value=data[j].category>data[j].category</option>";
            }
            options+="</select>";
            $('.optionid').html(options);
        }
    }

    $("#btn_load").click (function ()
    {
        $.ajax(
        {
            type:"GET",
            url:"bookdata.json",
            success:function(data)
            {
                var output="<table class='table'><thead><tr><th>Name</th><th>Category</th><th>Image</th><th>Author</th><th>Price</th></tr></thead>"
                for (var i in data)
                {
                    output+="<tr><td>"+data[i].name+"</td>";
                    output+="<td>"+data[i].category+"</td>";
                    output+="<td>"+data[i].image+"</td>";
                    output+="<td>"+data[i].price+"</td>";
                    output+="<td>"+data[i].Author+"</td>";
                }
                output+="</table>"
                $('.result').html(output);
            }
        });
    });
});