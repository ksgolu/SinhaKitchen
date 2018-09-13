window.onload = function()
{
    var sidebar = document.getElementById("sidebar");
    sidebar.hidden=true;
}
function hide()
{
    var sidebar = document.getElementById("sidebar");
    if(sidebar.hidden==true)
    {
        sidebar.hidden=false;
    }
    else
    {
        sidebar.hidden=true;
    }
   
}