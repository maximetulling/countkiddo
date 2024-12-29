PennController.ResetPrefix(null);
//PennController.DebugOff();

Sequence("setcounter","preload","Info", "Introduction", "Example", "Context", "Instruction", "Practice1", "Practice2", randomize("Target_control"), shuffle(randomize("Target_count"), randomize("Target_past"), randomize("Target_pres")), "Send", "End"); // Target_control
shuffle(randomize("Target_pres_count"), randomize("Target_past"))

PreloadZip("https://maximetulling.com/count_kiddo_returns/sounds.zip");
PreloadZip("https://maximetulling.com/count_kiddo_returns/images.zip");

PennController.SendResults( "Send" );
PennController.CheckPreloaded()
    .label( "preload" );

// The counter is incremented when this is executed
PennController.SetCounter("Setcounter", "inc", 1);

Header(
    newCanvas("confirmation", '75vw', '80vh')
        .css({'background-color': "floralwhite", 'z-order': 9999})
        .add( "center at 50%", "middle at 25%" , newText("Are you sure you want to send your incomplete results now?") )
        .add( "center at 50%", "middle at 75%" , newScale("quit", "Yes", "No").size("10em","auto").button() )
    ,
    newButton("stop", "Stop").callback(
        getCanvas("confirmation")
            .print("center at 50vw", "middle at 50vh")
        ,
        getScale("quit").wait()
        ,
        getCanvas("confirmation").remove()
        ,
        getScale("quit").test.selected("Yes")
            .success(
                clear()
                ,
                SendResults()
            )
    )
    .print("right at 98vw","bottom at 98vh")
)

//-------------------ENDING----------------------------//
newTrial("End",
   newImage("background", "background.png")
        .settings.size(1100,500)
   ,
    newImage("kippie1", "kippie_star_hat.png")
        .settings.size(175,300)
        .print()
    ,
    newImage("kippie2", "kippie_circle_hat.png")
        .settings.size(175,300)
        .print()
    ,
    newImage("kippie3", "kippie_heart_hat.png")
        .settings.size(175,300)
            ,
    newImage("continue", "button_o.png")
        .settings.size(80,80)
    ,
    newCanvas("kippies", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        .settings.add(490,350, getImage("continue"))
        .print()
    ,
    newSelector("continue_button0")
        .settings.add( getImage("continue"))
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()          
    ,
    newAudio("thank_you", "thank_for_help.mp3")
        .play()
    ,
//////////\\\\\\\\\\/////////////MOVEMENT: JUMPING\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
    newTimer("wait", 100)
        .start()
        .wait()
    ,
    getCanvas("kippies")
        .remove()   
    ,
    newCanvas("kippies_100_1", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_1")
        .remove()   
    ,
    newCanvas("kippies_100_2", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_2")
        .remove()   
    ,
    newCanvas("kippies_100_3", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_3")
        .remove()   
    ,
    newCanvas("kippies_100_4", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_4")
        .remove()   
    ,
    newCanvas("kippies_100_5", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_5")
        .remove()   
    ,
    newCanvas("kippies_100_6", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_6")
        .remove()   
    ,
    newCanvas("kippies_100_7", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_7")
        .remove()   
    ,
    newCanvas("kippies_100_8", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_8")
        .remove()   
    ,
    newCanvas("kippies_100_9", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_9")
        .remove()   
    ,
    newCanvas("kippies_100_10", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_10")
        .remove()   
    ,
    newCanvas("kippies_100_11", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_11")
        .remove()   
    ,
    newCanvas("kippies_100_12", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_12")
        .remove()   
    ,
    newCanvas("kippies_100_13", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_13")
        .remove()   
    ,
    newCanvas("kippies_100_14", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_14")
        .remove()   
    ,
    newCanvas("kippies_100_15", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_15")
        .remove()   
    ,
    newCanvas("kippies_100_16", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_16")
        .remove()   
    ,
    newCanvas("kippies_100_17", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_17")
        .remove()   
    ,
    newCanvas("kippies_100_18", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_18")
        .remove()   
    ,
    newCanvas("kippies_100_19", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_19")
        .remove()   
    ,
    newCanvas("kippies_100_20", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_20")
        .remove()   
    ,
    newCanvas("kippies_100_21", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_21")
        .remove()   
    ,
    newCanvas("kippies_100_22", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_22")
        .remove()   
    ,
    newCanvas("kippies_100_23", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_23")
        .remove()   
    ,
    newCanvas("kippies_100_24", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("game_over", "end_game.mp3")
        .play()
        .wait()
    ,
    newAudio("bye", "bye.mp3")
        .play()
        .wait()       
);

//------------------------------------------------------------------------------------
//-------------------PARTICIPANT INFO ------------------------------------------------
newTrial("Info",
   defaultText.settings.center() //Sets default position for all Text elements
   ,
   defaultButton.settings.center() //Sets default position for all Button elements
   ,
   defaultTextInput.settings.center() //Sets default position for all TextInput elements
   ,
   defaultScale.settings.center() //Sets default position for all Scale elements
   ,  
   newText("intro", "Experimenter: Fill out the following info before starting the experiment.")
        .print()
   ,
    //Prompts subject for gender
    newText("ID","ParticipantID (e.g. c001)")
        .settings.bold()
        .settings.center()
        .print()
    ,
    //Introduces a text input element to log answers                          
    newTextInput("AmazonID", "")
        .settings.log()
        .settings.center()
        .print()
        .wait() //Waits till subject has entered
    ,
    newVar("ParticipantID")
        .settings.global()          // Make it globally accessible
        .set( getTextInput("AmazonID") )  // And save the text from TextInput
    ,
       //Introduces a text element
        //Introduces a text element
    newText("question2","Age (years)")
        .print()
    ,

    //Introduces a text input element to log answers                          
    newTextInput("age", "")
        .settings.log()
        .settings.center()
        .print()
        .wait() //Waits till subject has entered  
    ,
    newText("question1","Version:")
        .print()
    ,

    //Introduces a text input element to log answers                          
    newTextInput("version", "")
        .settings.log()
        .settings.center()
        .print()
        .wait() //Waits till subject has entered                
     ,
   //Creates button press to start experiment
   newButton("start", "Start")
        .settings.center()
        .print()
        .wait()
        .remove()
   )
   .log( "ParticipantID", getVar("ParticipantID") );

//-------------------------------------------------------------------
//----------------INTRODUCTION-------------------------------//
newTrial("Introduction",

//-----the kippies---------
   newImage("background", "background.png")
        .settings.size(1100,500)
   ,
    newImage("kippie1", "kippie_no_hat.png")
        .settings.size(175,300)
        .print()
    ,
    newImage("kippie2", "kippie_no_hat.png")
        .settings.size(175,300)
        .print()
    ,
    newImage("kippie3", "kippie_no_hat.png")
        .settings.size(175,300)
            ,
    newImage("continue", "button_o.png")
        .settings.size(80,80)
    ,
    newCanvas("kippies", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        .settings.add(490,350, getImage("continue"))
        .print()
    ,
    newSelector("continue_button0")
        .settings.add( getImage("continue"))
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()          
    ,
    getCanvas("kippies")
        .settings.remove(getImage("continue"))          
    ,
    newAudio("intro", "intro.mp3")
        .play()
        .wait()
    ,
    newAudio("intro_kippies", "intro_kippies.mp3")
        .play()
    ,
//////////\\\\\\\\\\/////////////MOVEMENT: JUMPING\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
    newTimer("wait", 150)
        .start()
        .wait()
    ,
    getCanvas("kippies")
        .remove()   
    ,
    newCanvas("kippies_100_1", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_1")
        .remove()   
    ,
    newCanvas("kippies_100_2", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_2")
        .remove()   
    ,
    newCanvas("kippies_100_3", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_3")
        .remove()   
    ,
    newCanvas("kippies_100_4", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_4")
        .remove()   
    ,
    newCanvas("kippies_100_5", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_5")
        .remove()   
    ,
    newCanvas("kippies_100_6", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_6")
        .remove()   
    ,
    newCanvas("kippies_100_7", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_7")
        .remove()   
    ,
    newCanvas("kippies_100_8", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_8")
        .remove()   
    ,
    newCanvas("kippies_100_9", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_9")
        .remove()   
    ,
    newCanvas("kippies_100_10", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_10")
        .remove()   
    ,
    newCanvas("kippies_100_11", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
       // .settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_11")
        .remove()   
    ,
    newCanvas("kippies_100_12", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_12")
        .remove()   
    ,
    newCanvas("kippies_100_13", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_13")
        .remove()   
    ,
    newCanvas("kippies_100_14", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_14")
        .remove()   
    ,
    newCanvas("kippies_100_15", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_15")
        .remove()   
    ,
    newCanvas("kippies_100_16", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_16")
        .remove()   
    ,
    newCanvas("kippies_100_17", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_17")
        .remove()   
    ,
    newCanvas("kippies_100_18", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_18")
        .remove()   
    ,
    newCanvas("kippies_100_19", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_19")
        .remove()   
    ,
    newCanvas("kippies_100_20", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,10, getImage("kippie1"))
        .settings.add(-20,90, getImage("kippie2"))
        .settings.add(180,10, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_20")
        .remove()   
    ,
    newCanvas("kippies_100_21", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,50, getImage("kippie1"))
        .settings.add(-20,30, getImage("kippie2"))
        .settings.add(180,50, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_21")
        .remove()   
    ,
    newCanvas("kippies_100_22", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,10, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_22")
        .remove()   
    ,
    newCanvas("kippies_100_23", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,50, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
        ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("kippies_100_23")
        .remove()   
    ,
    newCanvas("kippies_100_24", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(  -220,100, getImage("kippie1"))
        .settings.add(-20,100, getImage("kippie2"))
        .settings.add(180,100, getImage("kippie3"))
        .settings.add(490,350, getImage("continue"))
        .print()
    ,
    newSelector("continue_button")
        .settings.add( getImage("continue"))
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()
    ,
    getCanvas("kippies_100_24")
        .remove()
    ,
//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:JUMPING-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
//------------the wizard--------------------------

    newImage("wizard1", "wizard_wave.png")
        .settings.size(350,400)
    ,
    newImage("wizard2", "wizard_wave2.png")
        .settings.size(350,400)
    ,
    newCanvas("wizard_waving", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard1"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("intro_wizard", "intro_wizard1.mp3")
        .play()
        .wait()
    ,
    getTimer("wait")
        .start()
        .wait()
    ,
    getCanvas("wizard_waving")
        .remove()   
    ,
//////////\\\\\\\\\\/////////////MOVEMENT:WAVING\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
    newCanvas("wizard_waving2", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard2"))
        //.settings.add(490,350, getImage("continue"))
        .print()
     ,
     newAudio("hello", "hello.mp3")
        .play()
    ,
    newTimer("wait2", "300")
        .start()
        .wait()
    ,
    getCanvas("wizard_waving2")
        .remove()   
    ,
    newCanvas("wizard_waving3", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard1"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait2")
        .start()
        .wait()
    ,
    getCanvas("wizard_waving3")
        .remove()   
    ,
    newCanvas("wizard_waving4", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard2"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait2")
        .start()
        .wait()
    ,
        getCanvas("wizard_waving4")
        .remove()   
    ,
    newCanvas("wizard_waving5", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard1"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait2")
        .start()
        .wait()
       ,
    getCanvas("wizard_waving5")
        .remove()   
    ,
    newCanvas("wizard_waving6", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard2"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    getTimer("wait2")
        .start()
        .wait()
    ,
    getCanvas("wizard_waving6")
        .remove()   
    ,
    newCanvas("wizard_waving7", 500, 100)
        .settings.add( -480,-150, getImage("background"))
        .settings.add(-100,20, getImage("wizard1"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("intro_wizard2", "intro_wizard2.mp3")
        .play()
        .wait()
    ,
    getTimer("wait2")
        .start()
        .wait()
    ,
	getCanvas("wizard_waving7")
		.settings.add(490,350, getImage("continue"))
		.print()
	,
//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:WAVING-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
    newSelector("continue_button2")
        .settings.add( getImage("continue") )
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()
    ,
    getCanvas("wizard_waving7")
        .remove()
    ,
    
//------------INTRODUCTION-GOAL--------------------//
    newImage("white", "white.png")
        .settings.size(800,400)
    ,
    newCanvas("kippies_want_hats", 500, 100)
        .settings.add(-300,-400, getImage("white"))
        .settings.add(  -220,120, getImage("kippie1"))
        .settings.add(-20,120, getImage("kippie2"))
        .settings.add(180,120, getImage("kippie3"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("want_hats", "want_hats.mp3")
        .play()
        .wait()
    ,
    newImage("cashier", "cashier.png")
        .settings.size(459, 305)
    //,
    //newImage("hat_stand", "hat_stand_full.png")
    //    .settings.size(250,250)
    ,
    getCanvas("kippies_want_hats")
        .settings.add(  -220,120, getImage("kippie1"))
        .settings.add(-20,120, getImage("kippie2"))
        .settings.add(180,120, getImage("kippie3"))
        .settings.add(-125,-125, getImage("cashier"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("wizard_sells", "wizard_sells.mp3")
        .play()
        .wait()
    ,
    getCanvas("kippies_want_hats")
        .settings.add(  -220,120, getImage("kippie1"))
        .settings.add(-20,120, getImage("kippie2"))
        .settings.add(180,120, getImage("kippie3"))
        .settings.add(-125,-125, getImage("cashier"))
        //.settings.add(200,-50, getImage("hat_stand"))
        //.settings.add(490,350, getImage("continue"))
        .print()
    ,
    newAudio("wizard_sells_what", "wizard_sells_what.mp3")
        .play()
        .wait()
    ,
    newAudio("how_much", "how_much.mp3")
        .play()
        .wait()
    ,
    getCanvas("kippies_want_hats")
        .settings.add(490,350, getImage("continue"))
        .print()           
    ,
    newSelector("continue_button3")
        .settings.add( getImage("continue") )
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()
    ,
    getCanvas("kippies_want_hats")
        .remove()
    ,
    newImage("star", "star.png")
        .settings.size(100,100)
    ,
    newImage("heart", "heart.png")
        .settings.size(100,100)
    ,
    newImage("circle", "circle.png")
        .settings.size(100,100)
    ,
    newImage("star_hat", "star_hat.png")
        .settings.size(150,150)
    ,
    newImage("heart_hat", "heart_hat.png")
        .settings.size(150,150)
    ,
    newImage("circle_hat", "circle_hat.png")
        .settings.size(150,150)
    ,
    newCanvas("costs", 500, 100)
        .settings.add(-300,-400, getImage("white"))
        .print()
    ,
    newAudio("rules", "rules.mp3")
        .play()
    ,
    newTimer("wait1000", 1000)
        .start()
        .wait()
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .print()
    ,
    newTimer("wait3", 1500)
        .start()
        .wait()
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .settings.add(-180,200, getImage("star"))
        .print()
    ,
    newTimer("wait4", 1700)
        .start()
        .wait()
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .settings.add(-180,200, getImage("star"))
        .settings.add(0,0, getImage("heart_hat"))
        .print()
    ,
    newTimer("wait5", 1700)
        .start()
        .wait()
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .settings.add(-180,200, getImage("star"))
        .settings.add(0,0, getImage("heart_hat"))
        .settings.add(20,200, getImage("heart"))
        .print()
    ,
    newTimer("wait6", 1800 )
        .start()
        .wait()
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .settings.add(-180,200, getImage("star"))
        .settings.add(0,0, getImage("heart_hat"))
        .settings.add(20,200, getImage("heart"))
        .settings.add(200,0, getImage("circle_hat"))
        .print()     
    ,
     newTimer("wait7", 1300)
        .start()
        .wait()  
    ,
    getCanvas("costs")
        .settings.add(-200,0, getImage("star_hat"))
        .settings.add(-180,200, getImage("star"))
        .settings.add(0,0, getImage("heart_hat"))
        .settings.add(20,200, getImage("heart"))
        .settings.add(200,0, getImage("circle_hat"))
        .settings.add(220,200, getImage("circle"))		
        .settings.add(490,350, getImage("continue"))
        .print()  
    ,
    newSelector("continue_button4")
        .settings.add( getImage("continue") )
        .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        .wait()
    ,
    getCanvas("costs")
        .remove()
   );
//------------------------------------------------------------------------------------------   
//--------------------------------EXAMPLE + RULE CHECK--------------------------------------

newTrial("Example",
       newImage("target", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor1", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_old", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_old", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
		newImage("last_kippie", "kippie_circle_hat.png")
            .settings.size(150,275)
		,
        newImage("hat_stand", "hat_stand_full.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptier", "hat_stand_circle_star.png")
            .settings.size(382,254)
        ,
        newImage("hat_stand_emptier_f1", "hat_stand_circle_star_f1.png")
            .settings.size(382,254)
        ,
        newImage("hat_stand_emptier_f2", "hat_stand_circle_star_f2.png")
            .settings.size(382,254)
        ,
        newImage("hat_stand_emptiest", "hat_stand_circle.png")
            .settings.size(382,254)
        ,
        newImage("hat_stand_empty", "hat_stand_empty.png")
            .settings.size(382,254)
        ,
        newImage("blanco", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco2", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco3", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("hat_star", "star_hat.png")
          .settings.size(150,150)
         ,
        newImage("hat_circle", "circle_hat.png")
          .settings.size(150,150)
         ,
        newImage("hat_heart", "heart_hat.png")
          .settings.size(150,150)
         ,
        newImage("heart", "heart.png")
          .settings.size(80,80)
         ,
        newImage("star", "star.png")
          .settings.size(80,80)
         ,
        newImage("circle", "circle.png")
          .settings.size(80,80)
         ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newCanvas("shop", 500, 100)
            .settings.add(  -230,200, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newTimer("lookwait", 300)
            .start()
            .wait()
        ,
        newAudio("first_heart", "want_hat_hearts.mp3")
            .play()
        ,
        newTimer("lookwait2", 1000)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .remove()  
        ,
//////////\\\\\\\\\\/////////////MOVEMENT:KIPPIE GOES FORWARD\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
        newCanvas("shop_f2", 500, 100)
            .settings.add(  -230,175, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand"))
            //.settings.add(490,350, getImage("clickme"))
            .print()    
        ,
        newTimer("wait", 100)
            .start()
            .wait()
        ,
        getCanvas("shop_f2")
            .remove()
        ,
        newCanvas("shop_f3", 500, 100)
            .settings.add(  -230,150, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand"))
            //.settings.add(490,350, getImage("clickme"))
            .print()    
        ,
        getTimer("wait")
            .start()
            .wait()       
        ,
        getCanvas("shop_f3")
            .remove()
        ,
        newCanvas("shop_f4", 500, 100)
            .settings.add(  -230,125, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand"))
            //.settings.add(490,350, getImage("clickme"))
            .print()    
        ,
        getTimer("wait")
            .start()
            .wait()     
        ,
        getCanvas("shop_f4")
            .remove()
        ,
         newCanvas("shop_f5", 500, 100)
            .settings.add(  -230,100, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand"))
            //.settings.add(490,350, getImage("clickme"))
            .print()    

//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:KIPPIE GOES FORWARD-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
        ,
        getTimer("wait")
            .start()
            .wait()      
        ,
//////////\\\\\\\\\\/////////////MOVEMENT:HAT GOES UPWARD\\\\\\\\\\\\//////////////\\\\\\\\\\\\\

        getCanvas("shop_f5")
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newTimer("wait_longer", 150)
            .start()
            .wait()     
        ,
        getCanvas("shop_f5")
            .remove()
        ,
        newCanvas("shop_f6", 500, 100)
            .settings.add(  -230,100, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand_emptier_f1"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("wait_longer")
            .start()
            .wait()     
        ,
        getCanvas("shop_f6")
            .remove()
        ,
        newCanvas("shop_f8", 500, 100)
            .settings.add(  -230,100, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand_emptier_f2"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("wait_longer")
            .start()
            .wait()     
        ,
        getCanvas("shop_f8")
            .remove()
        ,
        newCanvas("shop_f9", 500, 100)
            .settings.add(  -230,100, getImage("target_old") )
            .settings.add(-75,-150, getImage("hat_stand_emptier_f2"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:HAT UPWARD-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\

        getTimer("wait")
            .start()
            .wait()     
        ,
        getCanvas("shop_f9")
            .remove()
        ,
        //---------KIPPIE PUTS ON HAT-------------------------------------------------------------------
        newCanvas("shop_f7", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()    
        ,
        newTimer("waitlonger", 1500)
            .start()
            .wait()
        ,
        newAudio("payheart", "pay_with_heart.mp3")
            .play()
        ,
        newTimer("waitagain", 1000)
            .start()
            .wait()
        ,
        getCanvas("shop_f7")
            .settings.add(-196,30, getImage("heart"))
            .print()
        ,
        getTimer("lookwait")
            .start()
            .wait()
        ,
        getCanvas("shop_f7")
            .remove()
        ,
        //---------HEART APPEARS-------------------------------------------------------------------
        newCanvas("shop_f10", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .settings.add(-196,-40, getImage("heart"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f10")
            .remove()
        ,
//////////\\\\\\\\\\/////////////MOVEMENT:HEART GOES TO CASHIER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\

        newCanvas("shop_f11", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .settings.add(-170,-80, getImage("heart"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f11")
            .remove()
        ,
        newCanvas("shop_f12", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .settings.add(-140,-90, getImage("heart"))
            .print()
        ,
//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:HEART GOES TO CASHIER-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\

        getTimer("lookwait")
            .start()
            .wait()
        ,
        newAudio("thanks", "thanks.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop_f12")
            .remove()
        ,
        newCanvas("shop_f13", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        newTimer("waitt", 150)
            .start()
            .wait()
        ,
        getCanvas("shop_f13")
            .remove()
        ,
        //---------HEART DISAPPEARS-------------------------------------------------------------------

        newAudio("happy", "happy_with_hat.mp3")
            .play()
        ,
//////////\\\\\\\\\\/////////////MOVEMENT:KIPPIE JUMPS UP AND DOWN\\\\\\\\\\\\//////////////\\\\\\\\\\\\\

        newCanvas("shop_x", 500, 100)
            .settings.add(  -228,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newTimer("lookwait22", 750)
            .start()
            .wait()
        ,
        getCanvas("shop_x")
            .remove()
        ,

        newCanvas("shop_f14", 500, 100)
            .settings.add(  -222,50, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getCanvas("shop_f14")
            .remove()
        ,
        newCanvas("shop_f15", 500, 100)
            .settings.add(  -214,10,  getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f15")
            .remove()
        ,
        newCanvas("shop_f16", 500, 100)
            .settings.add(  -206,50, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f16")
            .remove()
        ,
        newCanvas("shop_f17", 500, 100)
            .settings.add(  -198,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f17")
            .remove()
        ,
        newCanvas("shop_f18", 500, 100)
            .settings.add(  -192,50, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f18")
            .remove()
        ,
        newCanvas("shop_f19", 500, 100)
            .settings.add(    -186,10,  getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f19")
            .remove()
        ,
        newCanvas("shop_f20", 500, 100)
            .settings.add(  -180,50, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("waitt")
            .start()
            .wait()
        ,
        getCanvas("shop_f20")
            .remove()
        ,
        newCanvas("shop_f21", 500, 100)
            .settings.add(  -180,100, getImage("competitor1") )
            .settings.add(-75,-150, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
//\\\\\\\\\\/////////////\\\\\\\\\\\\\\\\MOVEMENT:KIPPIE JUMPS UP AND DOWN-OVER\\\\\\\\\\\\//////////////\\\\\\\\\\\\\
        getTimer("waitlonger")
            .start()
            .wait()
        ,
        getCanvas("shop_f21")
            .settings.add(100,200, getImage("target_old") )
        ,
        newAudio("help_second", "help_kippie.mp3")
            .play()
            .wait()
        ,
        getTimer("lookwait2")
            .start()
            .wait()
        ,
        newAudio("second_wants", "want_heart_pay_what.mp3")
            .play()
        ,
        getTimer("waitlonger")
            .start()
            .wait()     
        ,
        getCanvas("shop_f21")
            .settings.remove(100,200, getImage("target_old") )
			.settings.add(-80,-150, getImage("hat_stand_emptiest"))
			.settings.add(100,200, getImage("target"))
            //.settings.add(40,300, getImage("hat_star"))
        ,
        newTimer("suspense", 2000)
            .start()
            .wait()
        ,
        getCanvas("shop_f21")
            .settings.add(0,170, getImage("star"))
            .settings.add(150,170, getImage("heart"))
            .settings.add(300,170, getImage("circle"))
        ,
        getTimer("suspense")
            .start()
            .wait()
        ,
        newAudio("touch_item", "touch_item.mp3")
            .play()
        ,
    //***********************LOG*********************************
        newSelector("conditional_1")
            .settings.add( getImage("star") , getImage("heart"), getImage("circle") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log("all")
            .wait()
        ,
        getSelector("conditional_1")
            .test.selected(getImage("star"))
            .success( getAudio("touch_item") .stop(), newAudio("success", "good_job.mp3").play() .wait() )
            .failure( getAudio("touch_item") .stop(), newAudio("failure", "try_again.mp3").play() .wait(), getSelector("conditional_1") .unselect(),
                getSelector("conditional_1") .wait(),
                getSelector("conditional_1")
                .test.selected(getImage("star"))
                .success(  newAudio("successs", "good_job.mp3").play() .wait() )
                .failure( newAudio("correction", "try_again.mp3").play() .wait(), getSelector("conditional_1"),
                    getSelector("conditional_1") .wait(),
                    getSelector("conditional_1")
                    .test.selected(getImage("star"))
                    .success(  newAudio("successss", "good_job.mp3").play() .wait() )
                    .failure( newAudio("correctionn", "hm.mp3").play() .wait())
                ))
        ,
        //---------STAR ENLARGES-------------------------------------------------------------------
        newImage("bigstar", "star.png")
            .settings.size(120,120)
        ,
        getCanvas("shop_f21")
            .settings.add(-30,140, getImage("bigstar"))
        ,
        getTimer("lookwait")
            .start()
            .wait()
        ,
        getImage("bigstar")
            .remove()
        ,
        getImage("star")
            .remove()
        ,
        getAudio("ching")
            .play()
            .wait()
        ,
        //---------STAR DISSAPPEARS-------------------------------------------------------------------
        getCanvas("shop_f21")
            .settings.add(-330,100, getImage("target"))
        ,
        getImage("heart")
            .remove()
        ,
        getImage("circle")
            .remove()
        ,
        getImage("hat_star")
            .remove()
        ,
        getImage("target_old")
            .remove()
        ,
        // -------------- TEST Conditional 2
        getCanvas("shop_f21")
             .settings.add(100,200, getImage("target_old") )
        ,
        getAudio("help_second")
            .play()
            .wait()
        ,
        getTimer("lookwait2")
            .start()
            .wait()
        ,
        newAudio("third_wants", "want_circle_pay_what.mp3")
            .play()
        ,
        getTimer("waitlonger")
            .start()
            .wait()     
        ,
         getCanvas("shop_f21")
            .settings.remove(100,200, getImage("target_old"))
			.settings.add(-80,-150, getImage("hat_stand_empty"))
			.settings.add(100,200, getImage("last_kippie"))
           // .settings.add(40,300, getImage("hat_circle"))
        ,
        getTimer("suspense")
            .start()
            .wait()
        ,
        getCanvas("shop_f21")
            .settings.add(0,170, getImage("heart"))
            .settings.add(150,170, getImage("circle"))
            .settings.add(300,170, getImage("star"))
        ,
        getTimer("suspense")
            .start()
            .wait()
        ,
        getAudio("touch_item")
            .play()
    //**********************LOG******************************
        ,
        getSelector("conditional_1")
            .remove()
        ,
        newSelector("conditional_2")
            .settings.add( getImage("star") , getImage("heart"), getImage("circle") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log("all")
            .wait()
        ,
        getSelector("conditional_2")
            .test.selected(getImage("circle"))
            .success( getAudio("touch_item") .stop(), newAudio("success2", "good_job.mp3").play() .wait() )
            .failure( getAudio("touch_item") .stop(), newAudio("failure2", "try_again.mp3").play() .wait(), getSelector("conditional_2") .unselect(),
                getSelector("conditional_2") .wait(),
                getSelector("conditional_2")
                .test.selected(getImage("circle"))
                .success(  newAudio("successs2", "good_job.mp3").play() .wait() )
                .failure( newAudio("correction2", "try_again.mp3").play() .wait(), getSelector("conditional_2"),
                    getSelector("conditional_2") .wait(),
                    getSelector("conditional_2")
                    .test.selected(getImage("circle"))
                    .success(  newAudio("successss2", "good_job.mp3").play() .wait() )
                    .failure( newAudio("correctionn2", "hm.mp3").play() .wait())
                ))
        ,
        //---------CIRCLE ENLARGES-------------------------------------------------------------------
        newImage("bigcircle", "circle.png")
            .settings.size(120,120)
        ,
        getCanvas("shop_f21")
            .settings.add(120,140, getImage("bigcircle"))
        ,
        getTimer("lookwait")
            .start()
            .wait()
        ,
        getImage("bigcircle")
            .remove()
        ,
        getImage("circle")
            .remove()
        ,
        getAudio("ching")
            .play()
            .wait()
        ,
        //---------CIRCLE DISSAPPEARS-------------------------------------------------------------------
        getTimer("lookwait")
            .start()
            .wait()
        ,
        getImage("heart")
            .remove()
        ,
        getImage("star")
            .remove()
        ,
        newAudio("play_game", "play_game.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop_f21")
               .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button3")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
    );

//-----------------------------------------------------------------------------------
//--------------------------------CONTEXT--------------------------------------------
newTrial("Context",
		newImage("wizard_coins", "wizard_coins.png")
			.settings.size(500, 389)
		,
		newImage("wizard_loves", "wizard_loves_banana.png")
			.settings.size(500, 389)
		,
		newImage("wizard_many_f0", "wizard_many_coins_f0.png")
			.settings.size(500, 389)
		,
		newImage("wizard_many_f1", "wizard_many_coins_f1.png")
			.settings.size(500, 389)		
		,
		newImage("wizard_many_f2", "wizard_many_coins_f2.png")
			.settings.size(500, 389)
		,
		newImage("wizard_many_f3", "wizard_many_coins_f3.png")
			.settings.size(500, 389)
		,
		newImage("wizard_many_f4", "wizard_many_coins_f4.png")
			.settings.size(500, 389)
		,
		newImage("wizard_many_f5", "wizard_many_coins_f5.png")
			.settings.size(500, 389)
		,
		         //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newImage("white", "white.png")
               .settings.size(800,400)
        ,
        newCanvas("shop", 500, 100)
            .settings.add(-100, -400, getImage("white"))
            .settings.add(0,0, getImage("wizard_coins"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("likes_coins", "love_stars.mp3")
            .play()
        ,
        newTimer("long_pause", 2500)
            .start()
            .wait()
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_loves"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		getTimer("long_pause")
			.start()
			.wait()
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f0"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		newAudio("many_coins", "collect_many.mp3")
            .play()
        ,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f1"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		newTimer("wait", 400)
			.start()
			.wait()
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f2"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		getTimer("wait")
			.start()
			.wait()	
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f3"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		getTimer("wait")
			.start()
			.wait()
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f4"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		getTimer("wait")
			.start()
			.wait()
		,
		getCanvas("shop")
			.settings.add(0,0, getImage("wizard_many_f5"))
			 //.settings.add(490,350, getImage("clickme"))
            .print()
		,
		getTimer("wait")
			.start()
			.wait()
		,
		getTimer("wait")
		    .start()
		    .wait()
		//,
		//newAudio("attention", "pay_attention.mp3")
        //    .play()
		//	.wait()
		,
		getCanvas("shop")
			.settings.add(490,350, getImage("clickme"))
            .print()
		,
		newSelector("continue_button")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
	);
		
//------------------------------------------------------------------------------------
//--------------------------------INSTTRUCTION--------------------------------------

newTrial("Instruction",
      newImage("target", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
         newImage("target_coin", "kippie_heart_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
         newImage("competitor1_coin", "kippie_star_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor2", "kippie_circle_hat.png")
            .settings.size(150,275)
        ,
         newImage("competitor2_coin", "kippie_circle_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("cashier", "cashier.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand", "hat_stand_full.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_full_1", "hat_stand_circle_star_f1.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_full_3", "hat_stand_circle_star_f2.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptier", "hat_stand_circle_star.png")
            .settings.size(382, 254)
                ,
        newImage("hat_stand_emptier_1", "hat_stand_circle_f1.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptier_3", "hat_stand_circle_f2.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptiest", "hat_stand_circle.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptiest_1", "hat_stand_empty_f1.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_emptiest_3", "hat_stand_empty_f2.png")
            .settings.size(382, 254)
        ,
        newImage("hat_stand_empty", "hat_stand_empty.png")
            .settings.size(382, 254)
        ,
        newImage("blanco", "past_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco2", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco3", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("hat_star", "star_hat.png")
          .settings.size(150,150)
         ,
        newImage("hat_circle", "circle_hat.png")
          .settings.size(150,150)
         ,
        newImage("hat_heart", "heart_hat.png")
          .settings.size(150,150)
         ,
        newImage("heart", "heart.png")
          .settings.size(80,80)
         ,
        newImage("star", "star.png")
          .settings.size(80,80)
         ,
        newImage("circle", "circle.png")
          .settings.size(80,80)
         ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
//      ,
//      newCanvas("shop", 500, 100)
//            .settings.add(  -270,220, getImage("blanco"))
//          .settings.add( -270,80, getImage("target"))
//          .settings.add(  -20,220, getImage("competitor1_old"))
//          .settings.add( -20,80, getImage("competitor1"))
//          .settings.add(  240,220, getImage("competitor2_old"))
//          .settings.add( 240,80, getImage("competitor2"))
//          .settings.add(-75,-160, getImage("cashier"))
//          .settings.add(-530,105, getImage("hat_stand"))
//          .settings.add(490,350, getImage("clickme"))
//          .print()
        ,
        newCanvas("shop", 500, 100)
            .settings.add(-75,-160, getImage("hat_stand"))
            .settings.add(  -270,220, getImage("target_old"))
            //.settings.add( -270,80, getImage("target"))
            .settings.add(  -20,220, getImage("competitor1_old"))
            .settings.add(  240,220, getImage("competitor2_old"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("instruction1", "instruction1_kippie_store.mp3")
            .play()
            .wait()
        ,
        newTimer("wait", 100)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE1 CHOOSES HAT\\\\\\\//////\\\\\\\////
        newCanvas("shop_f1", 500, 100)
            .settings.add(-75,-160, getImage("hat_stand"))
            .settings.add(  -270,180, getImage("target_old"))
            //.settings.add( -270,80, getImage("target"))
            .settings.add(  -20,220, getImage("competitor1_old"))
            .settings.add(  240,220, getImage("competitor2_old"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("target_old"))
			.settings.add(  -270,130, getImage("target_old"))
            //.settings.add( -270,80, getImage("target"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
			.settings.remove(getImage("target_old"))
            .settings.add(  -270,80, getImage("target_old"))
            //.settings.add( -270,80, getImage("target"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand"))
            .print()
                ,
//\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE1 CHOOSES HAT:OVER\\\\\\\//////\\\\\\\////
        newTimer("wait2", 300)
            .start()
            .wait()
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: HAT 1 RAISES\\\\\\\//////\\\\\\\////
        getCanvas("shop_f1")
			.settings.remove(getImage("target_old"))
            .settings.add(  -270,80, getImage("target_old"))
            //.settings.add( -270,80, getImage("target"))
            .settings.add(-75,-160, getImage("hat_stand_full_1"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
                ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            //.settings.add( -270,80, getImage("target"))
            .settings.add(-75,-160, getImage("hat_stand_full_3"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
//\\\\\\\//////\\\\\\\MOVEMENT: HAT 1 RAISES:OVER\\\\\\\//////\\\\\\\////
        getTimer("wait2")
            .start()
            .wait()
        ,
        //--------------KIPPIE 1 PUTS ON HAT-----------------------------
        getCanvas("shop_f1")
            .settings.add( -270,80, getImage("target"))
            .settings.add(-75,-160, getImage("hat_stand_emptier"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        getTimer("wait2")
            .start()
            .wait()
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE2 CHOOSES HAT\\\\\\\//////\\\\\\\////
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor1_old"))
            .settings.add(  -20,180, getImage("competitor1_old"))
            //.settings.add( -20,80, getImage("competitor1"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptier"))
            .print()        
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor1_old"))
            .settings.add(  -20,130, getImage("competitor1_old"))
            //.settings.add( -20,80, getImage("competitor1"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptier"))
            .print()        
            ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor1_old"))
            .settings.add(  -20,80, getImage("competitor1_old"))
            //.settings.add( -20,80, getImage("competitor1"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptier"))
            .print()        
        ,
//\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE2 CHOOSES HAT:OVER\\\\\\\//////\\\\\\\////
        getTimer("wait2")
            .start()
            .wait()
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: HAT 2 RAISES\\\\\\\//////\\\\\\\////
        getCanvas("shop_f1")
            //.settings.add( -20,80, getImage("competitor1"))
            .settings.add(-75,-160, getImage("hat_stand_emptier_1"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.add(-75,-160, getImage("hat_stand_emptier_3"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
//\\\\\\\//////\\\\\\\MOVEMENT: HAT 2 RAISES:OVER\\\\\\\//////\\\\\\\////
        newTimer("wait3", 400)
            .start()
            .wait()
        ,
        //--------------KIPPIE 2 PUTS ON HAT-----------------------------
        getCanvas("shop_f1")
            .settings.add( -20,80, getImage("competitor1"))
            .settings.add(-75,-160, getImage("hat_stand_emptiest"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE3 CHOOSES HAT\\\\\\\//////\\\\\\\////
        getTimer("wait2")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor2_old"))
            .settings.add(  240,180, getImage("competitor2_old"))
            //.settings.add( 240,80, getImage("competitor2"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptiest"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor2_old"))
            .settings.add(  240,130, getImage("competitor2_old"))
            //.settings.add( 240,80, getImage("competitor2"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptiest"))
            .print()        
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.remove(getImage("competitor2_old"))
            .settings.add(  240,80, getImage("competitor2_old"))
            //.settings.add( 240,80, getImage("competitor2"))
            //.settings.add(490,350, getImage("clickme"))
			.settings.add(-75,-160, getImage("hat_stand_emptiest"))
            .print()        
            ,
//\\\\\\\//////\\\\\\\MOVEMENT: KIPPIE3 CHOOSES HAT:OVER\\\\\\\//////\\\\\\\////
        getTimer("wait2")
            .start()
            .wait()
        ,
///////\\\\\\\//////\\\\\\\MOVEMENT: HAT 3 RAISES\\\\\\\//////\\\\\\\////
        getCanvas("shop_f1")
            .settings.add(-75,-160, getImage("hat_stand_emptiest_1"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.add(-75,-160, getImage("hat_stand_emptiest_3"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
//\\\\\\\//////\\\\\\\MOVEMENT: HAT 3 RAISES:OVER\\\\\\\//////\\\\\\\////
        getTimer("wait3")
            .start()
            .wait()
        ,
        //--------------KIPPIE 3 PUTS ON HAT-----------------------------
        getCanvas("shop_f1")
            .settings.add( 240,80, getImage("competitor2"))
            .settings.add(-75,-160, getImage("hat_stand_empty"))
            //.settings.add(490,350, getImage("clickme"))
            .print()        
        ,
        newAudio("instruction2", "instruction2_wizard.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop_f1")
            .settings.add( -270,80, getImage("target_coin"))
            .settings.add( -20,80, getImage("competitor1_coin"))
            .settings.add( 240,80, getImage("competitor2_coin"))
			.settings.add(-75,-160, getImage("hat_stand_empty"))
            .print()        
        ,   
        getTimer("wait3")
            .start()
            .wait()
        ,   
        //-------------KIPPIE 1 PAYS---------------------------------
        getCanvas("shop_f1")
            .settings.remove(getImage("target_coin"))
			.settings.add(-75,-160, getImage("hat_stand_empty"))
			.settings.add( -330,80, getImage("heart"))
            .print()
        ,
        newTimer("wait4", 600)
            .start()
            .wait()
        ,
        getImage("heart")
            .remove()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        //-------------KIPPIE 2 PAYS---------------------------------
        getCanvas("shop_f1")
            .settings.remove(getImage("heart"))
            .settings.remove(getImage("competitor1_coin"))
			.settings.add(-75,-160, getImage("hat_stand_empty"))
			.settings.add( -90,87, getImage("star"))
            .print()
        ,
        getTimer("wait4")
            .start()
            .wait()
        ,
        getImage("star")
            .remove()
        ,
        getAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        //------------KIPPIE 3 PAYS----------------------------------
        getCanvas("shop_f1")
            .settings.remove(getImage("star"))
            .settings.remove(getImage("competitor2_coin"))
			.settings.add(-75,-160, getImage("hat_stand_empty"))
			.settings.add(180,87, getImage("circle"))
            .print()
        ,
        getTimer("wait4")
            .start()
            .wait()
        ,
        getImage("circle")
            .remove()
        ,
        getAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        newAudio("thanks", "thanks.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop_f1")
               .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button3")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        getCanvas("shop_f1")
            .remove()
        ,
   //---------------NOW TO THE WIZARD------------------------------------------
        newImage("wizard1", "imagine_f0.png")
          .settings.size(500,413)
        ,
        newImage("wizard_pretend_doggie_morph", "imagine_f3.png")
          .settings.size(500,413)
        ,
        newImage("wizard_pretend_heart", "imagine_f1.png")
          .settings.size(500,413)
        ,
        newImage("wizard_pretend_heart_morph", "imagine_f2.png")
          .settings.size(500,413)
        ,
        newImage("white", "white.png")
               .settings.size(800,400)
        ,
        newCanvas("wizard_f0", 500,100)
            .settings.add(0,0, getImage("wizard1"))
            //.settings.add(690,350, getImage("clickme"))
            .settings.add(-100, -400, getImage("white"))
            .print()
        ,
        newAudio("instruction3", "instruction3_sometimes_present.mp3")
            .play()
            .wait()
        ,
        getTimer("wait2")
            .start()
            .wait()
        ,
        newAudio("holding_heart", "has_circles.mp3")
            .play()
            .wait()
        ,
        getTimer("wait3")
            .start()
            .wait()
        ,
        newAudio("instruction4_but_different.mp3")
            .play()
            .wait()
        ,
        getCanvas("wizard_f0")
            .settings.add(0,0, getImage("wizard_pretend_heart"))
            .print()
        ,
        getTimer("wait3")
            .start()
            .wait()
        ,
        newAudio("hm","hm.mp3")
            .play()
            .wait()
        ,
        newAudio("pretend", "imagine_stars_instead.mp3")
            .play()
            .wait()
        ,
        getCanvas("wizard_f0")
            .settings.add(0,0, getImage("wizard_pretend_heart_morph"))
            .print()
        ,
        getTimer("wait4")
            .start()
            .wait()
        ,
        getCanvas("wizard_f0")
            .settings.add(0,0, getImage("wizard_pretend_doggie_morph"))
            .print()
        ,
        getTimer("wait4")
            .start()
            .wait()
        ,
        newAudio("chinge", "ching.mp3")
            .play()
        ,
        getTimer("wait3")
            .start()
            .wait()
        ,
        //newSelector("continue_button")
          //  .settings.add( getImage("clickme"))
          //  .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
          //  .wait()
        //,
        newAudio("task", "task.mp3")
            .play()
            .wait()      
        ,    
        getCanvas("wizard_f0")       
           .settings.add(490,350, getImage("clickme"))
        ,  
        newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()    
    );

//------------------------------------------------------------------------------------
//--------------------------------PRACTICE 1--------------------------------------

newTrial("Practice1",
        newImage("hat_stand", "hat_stand_full.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_1", "hat_stand_circle_star_f1.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_2", "hat_stand_circle_star_f2.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_empty", "hat_stand_circle_star.png")
            .settings.size(380, 250)
        ,
        newImage("target", "kippie_circle_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_coin", "kippie_circle_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_coin", "kippie_heart_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor2", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_coin", "kippie_heart_hat_past_f3_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_old", "kippie_circle_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_old", "kippie_heart_hat_past_f0.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_f1", "kippie_heart_hat_past_f1.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_f2", "kippie_heart_hat_past_f2.png")
            .settings.size(150,275)
        ,
        newImage("cashier", "cashier.png")
            .settings.size(380, 250)
        ,
        newImage("blanco", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco2", "past_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco3", "past_no_hat.png")
            .settings.size(150,275)
         ,
        newImage("heart", "heart.png")
          .settings.size(80,80)
         ,
        newImage("star", "star.png")
          .settings.size(80,80)
         ,
        newImage("circle", "circle.png")
          .settings.size(80,80)
         ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
      ,
      //newCanvas("shop", 500, 100)
    //      .settings.add(  -270,220, getImage("competitor1_old"))
    //      .settings.add(  -270,220, getImage("blanco"))
    //      .settings.add( -270,80, getImage("competitor1"))
    //      .settings.add(  -20,220, getImage("competitor2_old"))
    //      .settings.add(  -20,220, getImage("blanco2"))
    //      .settings.add( -20,80, getImage("competitor2"))
    //      .settings.add(  240,220, getImage("target_old"))
    //      .settings.add(  240,220, getImage("blanco3"))
    //      .settings.add( 240,80, getImage("target"))
    //      .settings.add(-75,-160, getImage("cashier"))
    //      .settings.add(-530,105, getImage("hat_stand"))
    //      .settings.add(490,350, getImage("clickme"))
    //      .print()
    //    ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("competitor1_old"))
          //.settings.add(  -270,220, getImage("blanco"))
          //.settings.add( -270,80, getImage("competitor1"))
          .settings.add(  -20,220, getImage("competitor2_old"))
          //.settings.add(  -20,220, getImage("blanco2"))
          //.settings.add( -20,80, getImage("competitor2"))
          .settings.add(  240,220, getImage("target_old"))
          //.settings.add(  240,220, getImage("blanco3"))
          //.settings.add( 240,80, getImage("target"))
          .settings.add(-75,-160, getImage("hat_stand"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
        //newSelector("continue_button3")
           // .settings.add( getImage("clickme"))
           //.settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
           //.wait()
        //,
        newAudio("begin", "some_kippies_chose.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_long", 600)
            .start()
            .wait()
////////\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("first", "first_kippie_also_want.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor1_old"))
            .settings.add( -270,180, getImage("competitor1_old"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor1_old"))
            .settings.add( -270,130, getImage("competitor1_old"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor1_old"))
            .settings.add(  -270,320, getImage("blanco"))
            .settings.add( -270,80, getImage("competitor1_old"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\

///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        ,
		getCanvas("shop")
            .settings.add(-75,-160, getImage("hat_stand_1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("hat_stand_2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("competitor1"))
            .settings.add(-75,-160, getImage("hat_stand_empty"))
        ,
        newAudio("first_pick", "pick_hearts.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("second", "second_drinking.mp3")
            .play()
            .wait()
        
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		getCanvas("shop")
            .settings.remove(getImage("competitor2_old"))
            .settings.add( -20,220, getImage("competitor2_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor2_f1"))
            .settings.add( -20,220, getImage("competitor2_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor2_f2"))
            .settings.add(  -20,330, getImage("blanco2"))
            .settings.add( -20,80, getImage("competitor2"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
		newAudio("second2", "finished_hearts.mp3")
            .play()
            .wait()
		,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("third", "third_chose.mp3")
            .play()
            .wait()
        ,
 ////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\

        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add( 240,180, getImage("target"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add( 240,130, getImage("target"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add(  240,330, getImage("blanco3"))
            .settings.add( 240,80, getImage("target"))
            .print()
         ,
        getTimer("wait")
             .start()
             .wait()
		,
        newAudio("third2", "ready_circles.mp3")
            .play()
            .wait()        
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
		,
        getCanvas("shop")
            .settings.add( 240,80, getImage("target_coin"))
            .settings.add( -20,80, getImage("competitor2_coin"))
            .settings.add( -270,80, getImage("competitor1_coin"))
            .print() 
		,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("target_sound", "give_circle.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("repeat_target", "wizard_said_give_circle.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("task", "who_wizard.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("touch_item", "touch.mp3")
            .play()
        ,
        newSelector("target_q")
            .settings.add( getImage("competitor1_coin") , getImage("competitor2_coin"), getImage("target_coin") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log("all")
            .wait()        
        ,
        getSelector("target_q")
            .test.selected(getImage("target_coin"))
            .success( getAudio("touch_item") .stop(), newAudio("success", "good_job.mp3").play() .wait() )
            .failure( getAudio("touch_item") .stop(), newAudio("failure", "try_again.mp3").play() .wait(), getSelector("target_q") .unselect(),
                getSelector("target_q") .wait(),
                getSelector("target_q")
                .test.selected(getImage("target_coin"))
                .success(  newAudio("successs", "good_job.mp3").play() .wait() )
                .failure( newAudio("correction", "try_again.mp3").play() .wait(), getSelector("target_q"),
                    getSelector("target_q") .wait(),
                    getSelector("target_q")
                    .test.selected(getImage("target_coin"))
                    .success(  newAudio("successss", "good_job.mp3").play() .wait() )
                    .failure( newAudio("correctionn", "hm.mp3").play() .wait())
                ))
        ,
        getCanvas("shop")
             .settings.add(490,350, getImage("clickme"))
        ,
        //newSelector("continue_button2")
        //    .settings.add( getImage("clickme"))
        //    .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
        //    .wait()
        //,
        getCanvas("shop")
            .remove()
  );
 
 
//----------------------PRACTICE 2----------------------------------------------
newTrial("Practice2",
        newImage("hat_stand", "hat_stand_full.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_1", "hat_stand_circle_star_f1.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_2", "hat_stand_circle_star_f2.png")
            .settings.size(380, 250)
        ,
        newImage("hat_stand_empty", "hat_stand_circle_star.png")
            .settings.size(380, 250)
        ,
        newImage("target", "kippie_heart_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor1", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_coin", "kippie_heart_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_coin", "kippie_star_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_coin", "kippie_star_hat_coin.png")
            .settings.size(150,275)
        ,
        newImage("competitor1_old", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("target_old", "kippie_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("competitor2_old", "kippie_star_hat.png")
            .settings.size(150,275)
        ,
        newImage("cashier", "cashier.png")
            .settings.size(382, 254)
        ,
        newImage("blanco", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco2", "past_no_hat.png")
            .settings.size(150,275)
        ,
        newImage("blanco3", "past_no_hat.png")
            .settings.size(150,275)
         ,
        newImage("heart", "heart.png")
          .settings.size(80,80)
         ,
        newImage("star", "star.png")
          .settings.size(80,80)
         ,
        newImage("circle", "circle.png")
          .settings.size(80,80)
         ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
      ,
      //newCanvas("shop", 500, 100)
    //      .settings.add(  -270,220, getImage("target_old"))
    //      .settings.add(  -270,220, getImage("blanco"))
    //      .settings.add( -270,80, getImage("target"))
    //      .settings.add(  -20,220, getImage("competitor1_old"))
    //      .settings.add(  -20,220, getImage("blanco2"))
    //      .settings.add( -20,80, getImage("competitor1"))
    //      .settings.add(  240,220, getImage("competitor2_old"))
    //      .settings.add(  240,220, getImage("blanco3"))
    //      .settings.add( 240,80, getImage("competitor2"))
    //      .settings.add(-75,-160, getImage("cashier"))
    //      .settings.add(-530,105, getImage("hat_stand"))
    //      .settings.add(490,350, getImage("clickme"))
    //      .print()
    //    ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("target_old"))
    //      .settings.add(  -270,220, getImage("blanco"))
    //      .settings.add( -270,80, getImage("target"))
          .settings.add(  -20,220, getImage("competitor1_old"))
    //      .settings.add(  -20,220, getImage("blanco2"))
    //      .settings.add( -20,80, getImage("competitor1"))
          .settings.add(  240,220, getImage("competitor2_old"))
    //      .settings.add(  240,220, getImage("blanco3"))
    //      .settings.add( 240,80, getImage("competitor2"))
          .settings.add(-75,-160, getImage("hat_stand"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
       newAudio("again", "again.mp3")
         .play()
         .wait()
       ,
        newTimer("wait_long", 600)
            .start()
            .wait()
        
////////\\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("first", "first_kippie_also_want.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add( -270,180, getImage("target_old"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add( -270,130, getImage("target_old"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("target_old"))
            .settings.add(  -270,220, getImage("blanco"))
            .settings.add( -270,80, getImage("target_old"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,

///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("hat_stand_1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("hat_stand_2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("target"))
            .settings.add(-75,-160, getImage("hat_stand_empty"))
        ,
        newAudio("first_pick", "pick_hearts.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("second", "second_chose.mp3")
            .play()
            .wait()
        ,
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\

        getCanvas("shop")
            .settings.remove(getImage("competitor1_old"))
            .settings.add( -20,180, getImage("competitor1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor1_old"))
            .settings.add( -20,130, getImage("competitor1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor1"))
            .settings.add(  -20,220, getImage("blanco2"))
            .settings.add( -20,80, getImage("competitor1"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        newAudio("second2", "ready_stars.mp3")
            .play()
            .wait()
		,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("third", "third_also_like.mp3")
            .play()
            .wait()
        ,
 ////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\

        getCanvas("shop")
            .settings.remove(getImage("competitor2_old"))
            .settings.add( 240,180, getImage("competitor2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor2_old"))
            .settings.add( 240,130, getImage("competitor2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("competitor2_old"))
            .settings.add(  240,220, getImage("blanco3"))
            .settings.add( 240,80, getImage("competitor2"))
            .print()
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        getTimer("wait")
            .start()
            .wait()
        ,        
        newAudio("third2", "happy_with_star.mp3")
            .play()
            .wait()
	   ,
       getCanvas("shop")
            .settings.add( -270,80, getImage("target_coin"))
            .settings.add( -20,80, getImage("competitor1_coin"))
            .settings.add( 240,80, getImage("competitor2_coin"))
		,
		getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("sound_target", "maybe_stars_instead.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_short", 300)
            .start()
            .wait()
        ,
        newAudio("silly", "wizard_distracted.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("repeat_target", "wizard_said_stars_instead.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("task", "who_wizard.mp3")
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("touch_item", "touch.mp3")
            .play()
        ,
        newSelector("target_q")
            .settings.add( getImage("competitor1_coin") , getImage("competitor2_coin"), getImage("target_coin") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log("all")
            .wait()        
        ,
        getSelector("target_q")
            .test.selected(getImage("target_coin"))
            .success( getAudio("touch_item") .stop(), newAudio("success", "good_job.mp3").play() .wait() )
            .failure( getAudio("touch_item") .stop(), newAudio("failure", "try_again.mp3").play() .wait(), getSelector("target_q") .unselect(),
                getSelector("target_q") .wait(),
                getSelector("target_q")
                .test.selected(getImage("target_coin"))
                .success(  newAudio("successs", "good_job.mp3").play() .wait() )
                .failure( newAudio("correction", "try_again.mp3").play() .wait(), getSelector("target_q"),
                    getSelector("target_q") .wait(),
                    getSelector("target_q")
                    .test.selected(getImage("target_coin"))
                    .success(  newAudio("successss", "good_job.mp3").play() .wait() )
                    .failure( newAudio("correctionn", "hm.mp3").play() .wait())
                ))
        ,
        getCanvas("shop")
               .settings.add(490,350, getImage("clickme"))
        ,
         newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        newAudio("good", "real_game.mp3")
            .play()
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
        getTimer("wait_long")
            .start()
            .wait()
  );
  
Template( defaultTable.filter( r => r.Type=="control"),
        variable => 
		newTrial("Target_control",
    //--------Kippie 1----------//
        newImage("image1_hat_stand_f0", variable.image1_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f1", variable.image1_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f2", variable.image1_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_empty", variable.image1_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image1_f0", variable.image1_f0) //220
            .settings.size(150,275)
        ,
        newImage("image1_f1", variable.image1_f1) // 180
            .settings.size(150,275)
        ,
        newImage("image1_f2", variable.image1_f2) //130
            .settings.size(150,275)
        ,
        newImage("image1_f3", variable.image1_f3) //80
            .settings.size(150,275)
        ,
        newImage("image1_f4", variable.image1_f4) //80 - reveal
            .settings.size(150,275)
        ,
        newImage("image1_f5", variable.image1_f5) //80 - coin
            .settings.size(150,275)
        ,
        newImage("blanco1", variable.blanco1)
            .settings.size(150,275)
        ,  
    //--------Kippie 2----------//
        newImage("image2_hat_stand_f0", variable.image2_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f1", variable.image2_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f2", variable.image2_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_empty", variable.image2_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image2_f0", variable.image2_f0)
            .settings.size(150,275)
        ,
        newImage("image2_f1", variable.image2_f1)
            .settings.size(150,275)
        ,
        newImage("image2_f2", variable.image2_f2)
            .settings.size(150,275)
        ,
        newImage("image2_f3", variable.image2_f3)
            .settings.size(150,275)
                ,
        newImage("image2_f4", variable.image2_f4)
            .settings.size(150,275)
        ,
        newImage("image2_f5", variable.image2_f5)
            .settings.size(150,275)
        ,
        newImage("blanco2", variable.blanco2)
            .settings.size(150,275)
        ,  
    //--------Kippie 3----------//    
        newImage("image3_hat_stand_f0", variable.image3_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f1", variable.image3_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f2", variable.image3_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_empty", variable.image3_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image3_f0", variable.image3_f0)
            .settings.size(150,275)
        ,
        newImage("image3_f1", variable.image3_f1)
            .settings.size(150,275)
        ,
        newImage("image3_f2", variable.image3_f2)
            .settings.size(150,275)
        ,
        newImage("image3_f3", variable.image3_f3)
            .settings.size(150,275)
        ,
        newImage("image3_f4", variable.image3_f4)
            .settings.size(150,275)
        ,
        newImage("image3_f5", variable.image3_f5)
            .settings.size(150,275)                      
        ,                      
        newImage("blanco3", variable.blanco3)
            .settings.size(150,275)
        ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("image1_f0"))
          .settings.add(  -20,220, getImage("image2_f0"))
          .settings.add(  240,220, getImage("image3_f0"))
          .settings.add(-75,-160, getImage("image1_hat_stand_f0"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
        newAudio("begin", "some_kippies_chose.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_long", 300)
            .start()
            .wait()
////////\\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("sound1_1", variable.sound1_1) //variable.sound1_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f0"))
            .settings.add( -270,220, getImage("image1_f1"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f1"))
            .settings.add( -270,220, getImage("image1_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f2"))
            .settings.add(  -270,330, getImage("blanco1"))
            .settings.add( -270,80, getImage("image1_f3"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f4"))
            .settings.add(-75,-160, getImage("image1_hat_stand_empty"))
        ,
        newAudio("sound1_2", variable.sound1_2) // variable.sound1_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("sound2_1", variable.sound2_1) //variable.sound2_1
            .play()
            .wait()
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f0"))
            .settings.add( -20,220, getImage("image2_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f1"))
            .settings.add( -20,220, getImage("image2_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f2"))
            .settings.add(  -20,320, getImage("blanco2"))
            .settings.add( -20,80, getImage("image2_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,        
///////////\\\\\\\\\\\\\\HAT 2 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT2 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 2 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -20,80, getImage("image2_f4"))
            .settings.add(-75,-160, getImage("image2_hat_stand_empty"))
        ,
        newAudio("sound2_2", variable.sound2_2) //variable.sound2_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        
        newAudio("sound3_1", variable.sound3_1) // variable.sound3_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f0"))
            .settings.add( 240,220, getImage("image3_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f1"))
            .settings.add( 240,220, getImage("image3_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f2"))
            .settings.add(  240,320, getImage("blanco3"))
			.settings.add( 240,80, getImage("image3_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 3 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT3 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 3 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( 240,80, getImage("image3_f4"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,
        newAudio("sound3_2", variable.sound3_2) //variable.sound3_2
            .play()
            .wait()
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,   
        
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f5"))
            .settings.add( -20,80, getImage("image2_f5"))
            .settings.add( 240,80, getImage("image3_f5"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,                      
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()

        ,                  
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("Target_sound", variable.Target_sound) //variable.Target_sound
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("Target_sound_r", variable.Target_sound_r) //variable.Target_sound_r
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newVar("Accuracy")
            .settings.global()
        ,
        newVar("RT")
            .settings.global()
            .set(v=>Date.now())
        ,
        newSelector("target_q")
            .settings.add( getImage("image1_f5") , getImage("image2_f5"), getImage("image3_f5") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log()
        ,
        newAudio("task", "who_touch.mp3")
            .play()
        ,
        newAudio("okay", "okay.mp3")
        ,
        getSelector("target_q")
            .wait()
        ,
        getVar("RT")
            .set(v=>Date.now()-v)
        ,
        getSelector("target_q")
            .test.selected(getImage(variable.Correct_Response))
            .success( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("1"))
            .failure( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("0"))
        ,
        getCanvas("shop")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
    //----------------WRAP-UP SCREEN------------------------//
        newImage("white", "white.png")
            .settings.size(800,400)
        ,
        newCanvas("wrap-up", 500,100)
            .settings.add(-300,-400, getImage("white"))
            .settings.add(-20,150, newImage("cash_up", "cash_up.png"))
            .print()
        ,
        newTimer("wait_for_ching", 75)
            .start()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(-20,150, newImage("cash_down", "cash_down.png"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.remove(getImage("cash_down"))
            .print()
        //,
        //newAudio("yay", "yay_all_paid.mp3")
        //    .play()
        //    .wait()
        ,
        newAudio("again", "again.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_buttonx")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
  )
        .log( "Group" , variable.Group ) // Value in the 'Group' column for the item's row
        .log( "Condition" , variable.Condition ) // Value in the 'Condition' column for the item's row
        .log( "trial_ID", variable.trial_id )  
        .log( "Target_sound", variable.Target_sound )
        .log( "Count", variable.Counter)
        .log( "Past", variable.Past )
        .log( "Actual", variable.Actual )
        .log( "Dominant_hat", variable.Dominant_hat)
        .log( "Second_hat", variable.Second_hat)
        .log( "Correct_Response", variable.Correct_Response )
        .log( "ParticipantID", getVar("ParticipantID") )
        .log( "Accuracy" , getVar("Accuracy") )
        .log( "RT" , getVar("RT") )
                       );
                      
 Template( defaultTable.filter( r => r.Type=="count"),
        variable => 
		newTrial("Target_count",
    //--------Kippie 1----------//
        newImage("image1_hat_stand_f0", variable.image1_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f1", variable.image1_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f2", variable.image1_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_empty", variable.image1_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image1_f0", variable.image1_f0) //220
            .settings.size(150,275)
        ,
        newImage("image1_f1", variable.image1_f1) // 180
            .settings.size(150,275)
        ,
        newImage("image1_f2", variable.image1_f2) //130
            .settings.size(150,275)
        ,
        newImage("image1_f3", variable.image1_f3) //80
            .settings.size(150,275)
        ,
        newImage("image1_f4", variable.image1_f4) //80 - reveal
            .settings.size(150,275)
        ,
        newImage("image1_f5", variable.image1_f5) //80 - coin
            .settings.size(150,275)
        ,
        newImage("blanco1", variable.blanco1)
            .settings.size(150,275)
        ,  
    //--------Kippie 2----------//
        newImage("image2_hat_stand_f0", variable.image2_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f1", variable.image2_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f2", variable.image2_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_empty", variable.image2_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image2_f0", variable.image2_f0)
            .settings.size(150,275)
        ,
        newImage("image2_f1", variable.image2_f1)
            .settings.size(150,275)
        ,
        newImage("image2_f2", variable.image2_f2)
            .settings.size(150,275)
        ,
        newImage("image2_f3", variable.image2_f3)
            .settings.size(150,275)
                ,
        newImage("image2_f4", variable.image2_f4)
            .settings.size(150,275)
        ,
        newImage("image2_f5", variable.image2_f5)
            .settings.size(150,275)
        ,
        newImage("blanco2", variable.blanco2)
            .settings.size(150,275)
        ,  
    //--------Kippie 3----------//    
        newImage("image3_hat_stand_f0", variable.image3_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f1", variable.image3_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f2", variable.image3_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_empty", variable.image3_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image3_f0", variable.image3_f0)
            .settings.size(150,275)
        ,
        newImage("image3_f1", variable.image3_f1)
            .settings.size(150,275)
        ,
        newImage("image3_f2", variable.image3_f2)
            .settings.size(150,275)
        ,
        newImage("image3_f3", variable.image3_f3)
            .settings.size(150,275)
        ,
        newImage("image3_f4", variable.image3_f4)
            .settings.size(150,275)
        ,
        newImage("image3_f5", variable.image3_f5)
            .settings.size(150,275)                      
        ,                      
        newImage("blanco3", variable.blanco3)
            .settings.size(150,275)
        ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("image1_f0"))
          .settings.add(  -20,220, getImage("image2_f0"))
          .settings.add(  240,220, getImage("image3_f0"))
          .settings.add(-75,-160, getImage("image1_hat_stand_f0"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
        newAudio("begin", "some_kippies_chose.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_long", 300)
            .start()
            .wait()
////////\\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("sound1_1", variable.sound1_1) //variable.sound1_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f0"))
            .settings.add( -270,220, getImage("image1_f1"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f1"))
            .settings.add( -270,220, getImage("image1_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f2"))
            .settings.add(  -270,330, getImage("blanco1"))
            .settings.add( -270,80, getImage("image1_f3"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f4"))
            .settings.add(-75,-160, getImage("image1_hat_stand_empty"))
        ,
        newAudio("sound1_2", variable.sound1_2) // variable.sound1_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("sound2_1", variable.sound2_1) //variable.sound2_1
            .play()
            .wait()
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f0"))
            .settings.add( -20,220, getImage("image2_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f1"))
            .settings.add( -20,220, getImage("image2_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f2"))
            .settings.add(  -20,320, getImage("blanco2"))
            .settings.add( -20,80, getImage("image2_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,        
///////////\\\\\\\\\\\\\\HAT 2 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT2 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 2 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -20,80, getImage("image2_f4"))
            .settings.add(-75,-160, getImage("image2_hat_stand_empty"))
        ,
        newAudio("sound2_2", variable.sound2_2) //variable.sound2_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        
        newAudio("sound3_1", variable.sound3_1) // variable.sound3_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f0"))
            .settings.add( 240,220, getImage("image3_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f1"))
            .settings.add( 240,220, getImage("image3_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f2"))
            .settings.add(  240,320, getImage("blanco3"))
			.settings.add( 240,80, getImage("image3_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 3 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT3 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 3 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( 240,80, getImage("image3_f4"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,
        newAudio("sound3_2", variable.sound3_2) //variable.sound3_2
            .play()
            .wait()
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,   
        
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f5"))
            .settings.add( -20,80, getImage("image2_f5"))
            .settings.add( 240,80, getImage("image3_f5"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,                      
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()

        ,                  
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("Target_sound", variable.Target_sound) //variable.Target_sound
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("Target_sound_r", variable.Target_sound_r) //variable.Target_sound_r
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newVar("Accuracy")
            .settings.global()
        ,
        newVar("RT")
            .settings.global()
            .set(v=>Date.now())
        ,
        newSelector("target_q")
            .settings.add( getImage("image1_f5") , getImage("image2_f5"), getImage("image3_f5") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log()
        ,
        newAudio("task", "who_touch.mp3")
            .play()
        ,
        newAudio("okay", "okay.mp3")
        ,
        getSelector("target_q")
            .wait()
        ,
        getVar("RT")
            .set(v=>Date.now()-v)
        ,
        getSelector("target_q")
            .test.selected(getImage(variable.Correct_Response))
            .success( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("1"))
            .failure( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("0"))
        ,
        getCanvas("shop")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
    //----------------WRAP-UP SCREEN------------------------//
        newImage("white", "white.png")
            .settings.size(800,400)
        ,
        newCanvas("wrap-up", 500,100)
            .settings.add(-300,-400, getImage("white"))
            .settings.add(-20,150, newImage("cash_up", "cash_up.png"))
            .print()
        ,
        newTimer("wait_for_ching", 75)
            .start()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(-20,150, newImage("cash_down", "cash_down.png"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.remove(getImage("cash_down"))
            .print()
        //,
        //newAudio("yay", "yay_all_paid.mp3")
        //    .play()
        //    .wait()
        ,
        newAudio("again", "again.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_buttonx")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
  )
        .log( "Group" , variable.Group ) // Value in the 'Group' column for the item's row
        .log( "Condition" , variable.Condition ) // Value in the 'Condition' column for the item's row
        .log( "trial_ID", variable.trial_id )  
        .log( "Target_sound", variable.Target_sound )
        .log( "Count", variable.Counter)
        .log( "Past", variable.Past )
        .log( "Actual", variable.Actual )
        .log( "Dominant_hat", variable.Dominant_hat)
        .log( "Second_hat", variable.Second_hat)
        .log( "Correct_Response", variable.Correct_Response )
        .log( "ParticipantID", getVar("ParticipantID") )
        .log( "Accuracy" , getVar("Accuracy") )
        .log( "RT" , getVar("RT") )
                       );

 Template( defaultTable.filter( r => r.Type=="past"),
        variable => 
		newTrial("Target_past",
    //--------Kippie 1----------//
        newImage("image1_hat_stand_f0", variable.image1_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f1", variable.image1_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f2", variable.image1_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_empty", variable.image1_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image1_f0", variable.image1_f0) //220
            .settings.size(150,275)
        ,
        newImage("image1_f1", variable.image1_f1) // 180
            .settings.size(150,275)
        ,
        newImage("image1_f2", variable.image1_f2) //130
            .settings.size(150,275)
        ,
        newImage("image1_f3", variable.image1_f3) //80
            .settings.size(150,275)
        ,
        newImage("image1_f4", variable.image1_f4) //80 - reveal
            .settings.size(150,275)
        ,
        newImage("image1_f5", variable.image1_f5) //80 - coin
            .settings.size(150,275)
        ,
        newImage("blanco1", variable.blanco1)
            .settings.size(150,275)
        ,  
    //--------Kippie 2----------//
        newImage("image2_hat_stand_f0", variable.image2_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f1", variable.image2_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f2", variable.image2_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_empty", variable.image2_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image2_f0", variable.image2_f0)
            .settings.size(150,275)
        ,
        newImage("image2_f1", variable.image2_f1)
            .settings.size(150,275)
        ,
        newImage("image2_f2", variable.image2_f2)
            .settings.size(150,275)
        ,
        newImage("image2_f3", variable.image2_f3)
            .settings.size(150,275)
                ,
        newImage("image2_f4", variable.image2_f4)
            .settings.size(150,275)
        ,
        newImage("image2_f5", variable.image2_f5)
            .settings.size(150,275)
        ,
        newImage("blanco2", variable.blanco2)
            .settings.size(150,275)
        ,  
    //--------Kippie 3----------//    
        newImage("image3_hat_stand_f0", variable.image3_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f1", variable.image3_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f2", variable.image3_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_empty", variable.image3_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image3_f0", variable.image3_f0)
            .settings.size(150,275)
        ,
        newImage("image3_f1", variable.image3_f1)
            .settings.size(150,275)
        ,
        newImage("image3_f2", variable.image3_f2)
            .settings.size(150,275)
        ,
        newImage("image3_f3", variable.image3_f3)
            .settings.size(150,275)
        ,
        newImage("image3_f4", variable.image3_f4)
            .settings.size(150,275)
        ,
        newImage("image3_f5", variable.image3_f5)
            .settings.size(150,275)                      
        ,                      
        newImage("blanco3", variable.blanco3)
            .settings.size(150,275)
        ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("image1_f0"))
          .settings.add(  -20,220, getImage("image2_f0"))
          .settings.add(  240,220, getImage("image3_f0"))
          .settings.add(-75,-160, getImage("image1_hat_stand_f0"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
        newAudio("begin", "some_kippies_chose.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_long", 300)
            .start()
            .wait()
////////\\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("sound1_1", variable.sound1_1) //variable.sound1_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f0"))
            .settings.add( -270,220, getImage("image1_f1"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f1"))
            .settings.add( -270,220, getImage("image1_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f2"))
            .settings.add(  -270,330, getImage("blanco1"))
            .settings.add( -270,80, getImage("image1_f3"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f4"))
            .settings.add(-75,-160, getImage("image1_hat_stand_empty"))
        ,
        newAudio("sound1_2", variable.sound1_2) // variable.sound1_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("sound2_1", variable.sound2_1) //variable.sound2_1
            .play()
            .wait()
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f0"))
            .settings.add( -20,220, getImage("image2_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f1"))
            .settings.add( -20,220, getImage("image2_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f2"))
            .settings.add(  -20,320, getImage("blanco2"))
            .settings.add( -20,80, getImage("image2_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,        
///////////\\\\\\\\\\\\\\HAT 2 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT2 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 2 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -20,80, getImage("image2_f4"))
            .settings.add(-75,-160, getImage("image2_hat_stand_empty"))
        ,
        newAudio("sound2_2", variable.sound2_2) //variable.sound2_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        
        newAudio("sound3_1", variable.sound3_1) // variable.sound3_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f0"))
            .settings.add( 240,220, getImage("image3_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f1"))
            .settings.add( 240,220, getImage("image3_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f2"))
            .settings.add(  240,320, getImage("blanco3"))
			.settings.add( 240,80, getImage("image3_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 3 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT3 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 3 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( 240,80, getImage("image3_f4"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,
        newAudio("sound3_2", variable.sound3_2) //variable.sound3_2
            .play()
            .wait()
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,   
        
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f5"))
            .settings.add( -20,80, getImage("image2_f5"))
            .settings.add( 240,80, getImage("image3_f5"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,                      
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()

        ,                  
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("Target_sound", variable.Target_sound) //variable.Target_sound
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("Target_sound_r", variable.Target_sound_r) //variable.Target_sound_r
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newVar("Accuracy")
            .settings.global()
        ,
        newVar("RT")
            .settings.global()
            .set(v=>Date.now())
        ,
        newSelector("target_q")
            .settings.add( getImage("image1_f5") , getImage("image2_f5"), getImage("image3_f5") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log()
        ,
        newAudio("task", "who_touch.mp3")
            .play()
        ,
        newAudio("okay", "okay.mp3")
        ,
        getSelector("target_q")
            .wait()
        ,
        getVar("RT")
            .set(v=>Date.now()-v)
        ,
        getSelector("target_q")
            .test.selected(getImage(variable.Correct_Response))
            .success( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("1"))
            .failure( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("0"))
        ,
        getCanvas("shop")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
    //----------------WRAP-UP SCREEN------------------------//
        newImage("white", "white.png")
            .settings.size(800,400)
        ,
        newCanvas("wrap-up", 500,100)
            .settings.add(-300,-400, getImage("white"))
            .settings.add(-20,150, newImage("cash_up", "cash_up.png"))
            .print()
        ,
        newTimer("wait_for_ching", 75)
            .start()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(-20,150, newImage("cash_down", "cash_down.png"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.remove(getImage("cash_down"))
            .print()
        //,
        //newAudio("yay", "yay_all_paid.mp3")
        //    .play()
        //    .wait()
        ,
        newAudio("again", "again.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_buttonx")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
  )
        .log( "Group" , variable.Group ) // Value in the 'Group' column for the item's row
        .log( "Condition" , variable.Condition ) // Value in the 'Condition' column for the item's row
        .log( "trial_ID", variable.trial_id )  
        .log( "Target_sound", variable.Target_sound )
        .log( "Count", variable.Counter)
        .log( "Past", variable.Past )
        .log( "Actual", variable.Actual )
        .log( "Dominant_hat", variable.Dominant_hat)
        .log( "Second_hat", variable.Second_hat)
        .log( "Correct_Response", variable.Correct_Response )
        .log( "ParticipantID", getVar("ParticipantID") )
        .log( "Accuracy" , getVar("Accuracy") )
        .log( "RT" , getVar("RT") )
                       );

 Template( defaultTable.filter( r => r.Type=="pres"),
        variable => 
		newTrial("Target_pres",
    //--------Kippie 1----------//
        newImage("image1_hat_stand_f0", variable.image1_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f1", variable.image1_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_f2", variable.image1_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image1_hat_stand_empty", variable.image1_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image1_f0", variable.image1_f0) //220
            .settings.size(150,275)
        ,
        newImage("image1_f1", variable.image1_f1) // 180
            .settings.size(150,275)
        ,
        newImage("image1_f2", variable.image1_f2) //130
            .settings.size(150,275)
        ,
        newImage("image1_f3", variable.image1_f3) //80
            .settings.size(150,275)
        ,
        newImage("image1_f4", variable.image1_f4) //80 - reveal
            .settings.size(150,275)
        ,
        newImage("image1_f5", variable.image1_f5) //80 - coin
            .settings.size(150,275)
        ,
        newImage("blanco1", variable.blanco1)
            .settings.size(150,275)
        ,  
    //--------Kippie 2----------//
        newImage("image2_hat_stand_f0", variable.image2_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f1", variable.image2_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_f2", variable.image2_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image2_hat_stand_empty", variable.image2_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image2_f0", variable.image2_f0)
            .settings.size(150,275)
        ,
        newImage("image2_f1", variable.image2_f1)
            .settings.size(150,275)
        ,
        newImage("image2_f2", variable.image2_f2)
            .settings.size(150,275)
        ,
        newImage("image2_f3", variable.image2_f3)
            .settings.size(150,275)
                ,
        newImage("image2_f4", variable.image2_f4)
            .settings.size(150,275)
        ,
        newImage("image2_f5", variable.image2_f5)
            .settings.size(150,275)
        ,
        newImage("blanco2", variable.blanco2)
            .settings.size(150,275)
        ,  
    //--------Kippie 3----------//    
        newImage("image3_hat_stand_f0", variable.image3_hat_stand_f0)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f1", variable.image3_hat_stand_f1)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_f2", variable.image3_hat_stand_f2)
            .settings.size(380, 250)
        ,
        newImage("image3_hat_stand_empty", variable.image3_hat_stand_empty)
            .settings.size(380, 250)
        ,
        newImage("image3_f0", variable.image3_f0)
            .settings.size(150,275)
        ,
        newImage("image3_f1", variable.image3_f1)
            .settings.size(150,275)
        ,
        newImage("image3_f2", variable.image3_f2)
            .settings.size(150,275)
        ,
        newImage("image3_f3", variable.image3_f3)
            .settings.size(150,275)
        ,
        newImage("image3_f4", variable.image3_f4)
            .settings.size(150,275)
        ,
        newImage("image3_f5", variable.image3_f5)
            .settings.size(150,275)                      
        ,                      
        newImage("blanco3", variable.blanco3)
            .settings.size(150,275)
        ,
           //Creates button press to start experiment
        newImage("clickme", "button_o.png")
            .settings.size(80,80)
        ,
        newCanvas("shop", 500, 100)
          .settings.add(  -270,220, getImage("image1_f0"))
          .settings.add(  -20,220, getImage("image2_f0"))
          .settings.add(  240,220, getImage("image3_f0"))
          .settings.add(-75,-160, getImage("image1_hat_stand_f0"))
          //.settings.add(490,350, getImage("clickme"))
          .print()
        ,
        newAudio("begin", "some_kippies_chose.mp3")
            .play()
            .wait()
        ,
        newTimer("wait_long", 300)
            .start()
            .wait()
////////\\\\\\\\\//////////FIRST KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
		newAudio("sound1_1", variable.sound1_1) //variable.sound1_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f0"))
            .settings.add( -270,220, getImage("image1_f1"))
            .print()
        ,
        newTimer("wait", 150)
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f1"))
            .settings.add( -270,220, getImage("image1_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image1_f2"))
            .settings.add(  -270,330, getImage("blanco1"))
            .settings.add( -270,80, getImage("image1_f3"))
            .print()
//\\\\\\\//////////\\\\\\\FIRST KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 1 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image1_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT1 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 1 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f4"))
            .settings.add(-75,-160, getImage("image1_hat_stand_empty"))
        ,
        newAudio("sound1_2", variable.sound1_2) // variable.sound1_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("sound2_1", variable.sound2_1) //variable.sound2_1
            .play()
            .wait()
 ////////\\\\\\\\\//////////SECOND KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f0"))
            .settings.add( -20,220, getImage("image2_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f1"))
            .settings.add( -20,220, getImage("image2_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image2_f2"))
            .settings.add(  -20,320, getImage("blanco2"))
            .settings.add( -20,80, getImage("image2_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,        
///////////\\\\\\\\\\\\\\HAT 2 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image2_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT2 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 2 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( -20,80, getImage("image2_f4"))
            .settings.add(-75,-160, getImage("image2_hat_stand_empty"))
        ,
        newAudio("sound2_2", variable.sound2_2) //variable.sound2_2
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
////////\\\\\\\\\//////////THIRD KIPPIE MOVES\\\\\\\\\\//////////\\\\\\\\\\\\\
        
        newAudio("sound3_1", variable.sound3_1) // variable.sound3_1
            .play()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f0"))
            .settings.add( 240,220, getImage("image3_f1"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f1"))
            .settings.add( 240,220, getImage("image3_f2"))
            .print()
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.remove(getImage("image3_f2"))
            .settings.add(  240,320, getImage("blanco3"))
			.settings.add( 240,80, getImage("image3_f3"))
            .print()
//\\\\\\\//////////\\\\\\\SECOND KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
///////////\\\\\\\\\\\\\\HAT 3 MOVES UP\\\\\\\\////////////////\\\\\\\\\\\\\\
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f1"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,
        getCanvas("shop")
            .settings.add(-75,-160, getImage("image3_hat_stand_f2"))
        ,
        getTimer("wait")
            .start()
            .wait()
        ,

//\\\\\\\\\\\\//////////////HAT3 MOVES UP-DONE\\\\\\\\\\\\/////////////\\\\\\\\\\
        //----------kippie 3 puts on hat-------------------------------
        getCanvas("shop")
            .settings.add( 240,80, getImage("image3_f4"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,
        newAudio("sound3_2", variable.sound3_2) //variable.sound3_2
            .play()
            .wait()
//\\\\\\\//////////\\\\\\\THIRD KIPPIE MOVES-DONE\\\\\\\\\//////////////\\\\\\\\\
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,   
        
        getCanvas("shop")
            .settings.add( -270,80, getImage("image1_f5"))
            .settings.add( -20,80, getImage("image2_f5"))
            .settings.add( 240,80, getImage("image3_f5"))
            .settings.add(-75,-160, getImage("image3_hat_stand_empty"))
        ,                      
        newAudio("question", "wizard_says.mp3")
            .play()
            .wait()

        ,                  
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("hm", "hm.mp3")
            .play()
            .wait()
        ,
        newAudio("Target_sound", variable.Target_sound) //variable.Target_sound
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newAudio("Target_sound_r", variable.Target_sound_r) //variable.Target_sound_r
            .play()
            .wait()
        ,
        getTimer("wait_long")
            .start()
            .wait()
        ,
        newVar("Accuracy")
            .settings.global()
        ,
        newVar("RT")
            .settings.global()
            .set(v=>Date.now())
        ,
        newSelector("target_q")
            .settings.add( getImage("image1_f5") , getImage("image2_f5"), getImage("image3_f5") )
            .settings.keys(            "s"    ,             "h", "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .settings.log()
        ,
        newAudio("task", "who_touch.mp3")
            .play()
        ,
        newAudio("okay", "okay.mp3")
        ,
        getSelector("target_q")
            .wait()
        ,
        getVar("RT")
            .set(v=>Date.now()-v)
        ,
        getSelector("target_q")
            .test.selected(getImage(variable.Correct_Response))
            .success( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("1"))
            .failure( getAudio("task") .stop(), getAudio("okay").play() .wait(), getVar("Accuracy").set("0"))
        ,
        getCanvas("shop")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_button2")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
        ,
        getCanvas("shop")
            .remove()
        ,
    //----------------WRAP-UP SCREEN------------------------//
        newImage("white", "white.png")
            .settings.size(800,400)
        ,
        newCanvas("wrap-up", 500,100)
            .settings.add(-300,-400, getImage("white"))
            .settings.add(-20,150, newImage("cash_up", "cash_up.png"))
            .print()
        ,
        newTimer("wait_for_ching", 75)
            .start()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(-20,150, newImage("cash_down", "cash_down.png"))
            //.settings.add(490,350, getImage("clickme"))
            .print()
        ,
        newAudio("ching", "ching.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.remove(getImage("cash_down"))
            .print()
        //,
        //newAudio("yay", "yay_all_paid.mp3")
        //    .play()
        //    .wait()
        ,
        newAudio("again", "again.mp3")
            .play()
            .wait()
        ,
        getCanvas("wrap-up")
            .settings.add(490,350, getImage("clickme"))
        ,
        newSelector("continue_buttonx")
            .settings.add( getImage("clickme"))
            .settings.keys( "c"       )   // We associate each image with a key (spacing just for clarity, only order matters)
            .wait()
  )
        .log( "Group" , variable.Group ) // Value in the 'Group' column for the item's row
        .log( "Condition" , variable.Condition ) // Value in the 'Condition' column for the item's row
        .log( "trial_ID", variable.trial_id )  
        .log( "Target_sound", variable.Target_sound )
        .log( "Count", variable.Counter)
        .log( "Past", variable.Past )
        .log( "Actual", variable.Actual )
        .log( "Dominant_hat", variable.Dominant_hat)
        .log( "Second_hat", variable.Second_hat)
        .log( "Correct_Response", variable.Correct_Response )
        .log( "ParticipantID", getVar("ParticipantID") )
        .log( "Accuracy" , getVar("Accuracy") )
        .log( "RT" , getVar("RT") )
                       );