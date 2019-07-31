$(document).ready(function ()
{
    var choice="";
    $.ajax(
    {
        type:"GET",
        url:"bookdata.json",
        success:function(list)
        {
            var options="<select id='opt'><option value='select'>---Select---</option>";
            for (var j in list)
            {
                options+="<option value="+list[j].category+">"+list[j].category+"</option>";
            }
            options+="</select>";
            $('.optionid').html(options);
        }
    });

    $(".optionid").change(function ()
        {
            $.ajax(
            {
                type:"GET",
                url:"bookdata.json",
                success:function(data)
                {
                    var choice=$(".optionid").val();
                    console.log(choice);
                }
            });
        });
    $("#btn_load").click (function ()
    {
        $.ajax(
        {
            type:"GET",
            url:"bookdata.json",
            success:function(data)
            {
                var x=$("#opt").val();
                var output="<table class='table'><thead><tr><th>Name</th><th>Category</th><th>Image</th><th>Author</th><th>Price</th></tr></thead>"
                    for (var i in data)
                    {
                        if(data[i].category==x)
                        {       
                        output+="<tr><td>"+data[i].name+"</td>";
                        output+="<td>"+data[i].category+"</td>";
                        output+="<td> <img src='"+data[i].image+"' width=150 height=150 alt='"+data[i].image+"'> </td>";
                        output+="<td>"+data[i].Author+"</td>";
                        output+="<td>"+data[i].price+"</td>";
                        }
                        if(x=="select")
                        {
                            output+="<tr><td>"+data[i].name+"</td>";
                            output+="<td>"+data[i].category+"</td>";
                            output+="<td> <img src='"+data[i].image+"' width=150 height=150 alt='"+data[i].image+"'> </td>";
                            output+="<td>"+data[i].Author+"</td>";
                            output+="<td>"+data[i].price+"</td>";
                        }
                    }
                output+="</table>"
                $('.result').html(output);
            }
        });
    });
});