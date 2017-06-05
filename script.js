var gradeArray = [document.getElementById(g1), document.getElementById(g2), document.getElementById(g3), document.getElementById(g4),
                  document.getElementById(g5), document.getElementById(g6), document.getElementById(g7), document.getElementById(g8), 
                  document.getElementById(g9), document.getElementById(g10)]


function grades (){
    for (var i=0; i<=gradeArray.length; i++)
        if(gradeArray[i]>=0 && <=59){
            return("F");
        }
        else if(gradeArray[i]>=60 && <=69){
            return("D");
        }
        else if(gradeArray[i]>=70 && <=79){
            return("C");
        }
        else if(gradeArray[i]>=80 && <=89){
            return("B");
        }
        else if(gradeArray[i]>=90 && <=100){
            return("A");
        }
        else{
            return "Invalid Input"
        }
}
