$(document).ready(function()
{
$.ajax
({
    type:"GET",
    url:"https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=d1cc0d219f9e42e8a217b38cf950454e",
    Success:function(data)
    {
        var output="";
        for(var in data)
        {
            output+=data[i].content;
        }
        $('.result').html(output);
    }
});
});