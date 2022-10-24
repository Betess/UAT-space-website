
//This is the function, Ran by the button reading "Count Down"
function start()
        {
        //This is a varible named count and defined as the number"10"
            var count = 10;

        //This is a for statement
            for(i=0; i < 11; i++) {
                //This is creating a countdown clock
                setTimeout(function() {
                    document.write("Countdown " + count + "<br>");

        //This is a If statement, asking if the countdown is less than 5
                    if(count <= 5) {
                        //If the countdown is, indeed, less than 5, the code will run to write this statement
                        document.write("Blast Off is in, " + count + " seconds <br>");
                    }
                    //This subs the count by 1
                    count=count-1;

        
                    }, 1000*i) 
            }
            //Once countdown hits 0, an alert reading blast off will be displayed
            setTimeout(function() {
                    alert("WE HAVE BLAST OFF!!! ----======TO-THE-MOON-======-----");
                    }, 11000)
                    
        }
        