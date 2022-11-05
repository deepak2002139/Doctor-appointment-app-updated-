
var inputBox = document.getElementsByTagName('input');
var n = inputBox.length;
var j = 0;
var address = document.getElementById("address");
var flag = 0;
function validation()
{
    
    for(j=0 ; j<n ; j++)
        {
            if(j==1 || j==4 || j==5 || j==7)
                        continue;
            else{
                 
                 if( inputBox[j].value.length == 0 )
                   {
                      
                    document.getElementById('test' + j).style.display = "block";
					flag = 1;
                    }	
                  if( address.value.length == 0)
                      {
                          document.getElementById('test8').style.display = 'block';
                          flag = 1;
                      }
                 }
   
         }
    if( flag == 1)
    {
        setTimeout(reloading,5000);
    }
    
    
    
}
function reloading()
{
    
    location.reload();
}