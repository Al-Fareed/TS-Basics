var myArray:Array<any> = [];
for(var i=0;i<10;i++)
{
    myArray.push(():number=>{
        return i;
    })
}
for(var i=0;i<10;i++)
{
    console.log(myArray[i]());
    
}