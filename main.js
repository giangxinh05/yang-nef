function check(){
    document.getElementById("yes").innerHTML="thật không?" 
    document.getElementById("no").innerHTML="có chứ";
    document.getElementById("no").style.backgroundColor="pink";
    document.getElementById("no").style.color="balck";
    setTimeout(
        () => {
            document.write("nooooo" )
        },
        1*1000
    );  
}