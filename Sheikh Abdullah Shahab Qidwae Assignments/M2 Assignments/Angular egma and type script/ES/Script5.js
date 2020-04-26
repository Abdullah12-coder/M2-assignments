// JavaScript source code
function fun1(...param)
{

    console.log("Length"+param.length);

    var x=0;
    for(var i=0;i< param.length;++i)
    {
        x +=param[i];
    }

    console.log(x);
}
fun1(1,2,3)