var item1 ="money.jpg"; 
var item1_num = 1;
var item2 ="toffee.png";
var item2_num = 2;
var item3 ="grapes.jpg";
var item3_num = 3;
var set_arr = new Array();
var answer = new Array();
var track = 0;
function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}   
function create_lottery()
{
    var division = document.getElementsByClassName("symbol");
    var i,a;

    for(i=0;i<9;i++)
    {
        a = randomNumber(1,3);
        a = Math.round(a);
        set_arr.push(a);
    }
    var count = 0;
    var check = new Array();
    for(i=0;i<9;i++)
    {
        if(set_arr[i]==1)
        {
            count++;
            check.push(i);
        }    
    }
    var diff = 3 - count;
    var k=0;
    if(count<3)
    {
        for(i=0;i<9;i++)
        {
            if(diff == 0)
                break;
            if(check[k] != i)
            {
                set_arr[i]=1;
                k++;
                diff--;
            }   
        }
    }
    for(i=0;i<9;i++)
    {
        if(set_arr[i] == 1)
        {
            division[i].innerHTML = "<img src='"+item1+"'>";
        }
        if(set_arr[i] == 2)
        {
            division[i].innerHTML = "<img src='"+item2+"'>";
        }
        if(set_arr[i] == 3)
        {
            division[i].innerHTML = "<img src='"+item3+"'>";
        }
    }
    
}
function show_piece()
{
    var x = document.getElementsByClassName("symbol");
    var but = document.getElementsByTagName("button");
    var i;

    for(i=0;i<answer.length;i++)
    {
        x[answer[i]].style.display = "block";
        x[answer[i]].style.border = "3px solid #2c3e50";
    }

    if(track == 3)
    {
        check_result();
    }
}
function check_result()
{
    var i;
    var but = document.getElementsByTagName("button");
    var x = document.getElementsByClassName("symbol");
    
        for(i=0;i<9;i++)
        {
            but[i].disabled = true;
            x[i].style.display = "block";
            

        }
    
    
    if(set_arr[answer[0]] == set_arr[answer[1]] && set_arr[answer[1]] == set_arr[answer[2]])
    {
        document.getElementById("result").innerHTML = "Winner Winner<br>Chicken Dinner";
    }
    else document.getElementById("result").innerHTML = "Looser";

    document.getElementById("play-again-button").style.display = "block";
}
