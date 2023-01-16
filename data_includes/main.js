PennController.ResetPrefix(null); // Shorten command names (keep this line here)

//var number_of_experiment=2
//var number_of_experiment='_Metodi'

//var number_of_experiment_as_string=number_of_experiment.toString()

var experiment_label_indef="експеримент по фонология"
    
var experiment_label_def="експериментът по фонология"
var experiment_label_def="експеримента по фонология"
    
//var experiment_label_indef="експеримент по лингвистика"
//var experiment_label_def="експериментот по лингвистика"


var experiment_label1= experiment_label_indef

var experiment_label2=experiment_label_def

//var experiment_label=experiment_label1
var experiment_label=experiment_label2    

////experiment_label2.charAt(0).toUpperCase() + experiment_label2.slice(1)
////experiment_label2.charAt(0).toUpperCase() + experiment_label2.slice(1)

//experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/experiment"+number_of_experiment_as_string+'/';
//experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/Metodi_experiment"

experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/phonology_experiment"+'/';
    
stimuli_path=experiment_path+'stimuli/';
zip_folder_path=stimuli_path+'zip_folder/';
zip_file_path=zip_folder_path+'zipped_stimuli_mono.zip'
    
//var type_of_experiment ="test-short";
//var type_of_experiment ="test-full";
//var type_of_experiment ="test-very-long";
    
//var type_of_experiment ="pilot";
var type_of_experiment ="main";



var progressBarText = "прогрес";
var stimuli_csv_table="design_final.csv";
//Template("test_csv"
var message_for_the_type_of_experiment = "";

var Task_set = "Моля, отговорете на въпроса, като използвате изискващия се глагол. За да направите това, запишете отговора си, като натиснете копчето „Запис“, а след това – копчето „Стоп“:";

var screen_width;

var device_name;

var mobile_device_based_on_screen_width;

var mobile_device_based_on_device_name;


if (type_of_experiment=="pilot")
{
  message_for_the_type_of_experiment = "Пилотен проект на "+experiment_label1;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'pilot/';

}
else if (type_of_experiment=="test-short")
{
  message_for_the_type_of_experiment = "Кратък тест на "+experiment_label;
  stimuli_csv_table="test.csv";   
  results_path=experiment_path+'short_test/';

}

else if (type_of_experiment=="test-full")
{
  message_for_the_type_of_experiment = "Пълен тест на "+experiment_label1;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'long_test/';

}

else if (type_of_experiment=="test-very-long")
{
  message_for_the_type_of_experiment = "Много дълъг тест на "+experiment_label1;
  stimuli_csv_table="design_final_all.csv";
  results_path=experiment_path+'very_long_test/';
}

else
{
  message_for_the_type_of_experiment =experiment_label1.charAt(0).toUpperCase() + experiment_label.slice(1);
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'main_experiment/';

    
}

results_path=results_path;

////php_file_path="https://vecjezicnost.ung.si/BGexp1/mediarec.php;
php_file_path=results_path+'mediarec.php';



var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
  const r = Math.random() * 16 | 0,v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
Header(
  // void
)
.log("uniqueID", id);


///////AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
///////AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

///////AddHost("https://sabotin.ung.si/~dk0035/");
///////AddHost("https://ibexfarm.ung.si/uporabniki/dk0035/private/experiment2/stimuli/")
AddHost(stimuli_path)



//////////PreloadZip("https://sabotin.ung.si/~dk0035/zipped_stimuli_mono.zip")
//////////PreloadZip(zip_file_path)

    

//Sequence("finished");
//Sequence("bye","finished"); 
Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo_all", "expbegin", randomize("experiment"), SendResults(), "bye");
//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", randomize("experiment"), SendResults(), );

//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", "bye");
//Sequence("mobile_device_check","intro", "intro1", randomize("experiment"), "bye");


//Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo_all", "expbegin", "experiment", SendResults(), "bye");
//Sequence("mobile_device_check","intro", "intro1", "trials",  "demo_all", "expbegin", "experiment", SendResults(), "bye");

//Sequence("mobile_device_check","intro", "intro1",  "demo", "trials",  "demo1",  "demo2", "expbegin", randomize("experiment") SendResults(), "bye");



////Sequence("intro", "intro1", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye")


////Sequence("expbegin", sepWith("sendAsync", randomize("experiment")))


//Sequence("intro", "intro1", "intro2", "trials", "demo1",  "demo2","Sync", SendResults(), "bye")
////("intro", "trials")

////Sequence("intro", "intro1", "demo",  "trials", "demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")) ok
/////Sequence("intro", "intro1", "trials","demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")))
///Sequence("intro", "intro1", "trials","preload_demo_label","preload_demo" , startsWith("demo1","demo2"),  "demo1",  "demo2","preload_trials_label","preload_trials",startsWith("experiment"), "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye");


////////Sequence("intro", "intro1", "trials","preload_demo_label")
/////////InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "")
    
/////////InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
/////////InitiateRecorder("http://sabotin.ung.si/~dk0035/tests", "Това е само тест. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")


    
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")

 //InitiateRecorder(php_file_path, "Това е тест на новата ситема, който има за цел да определи дали резулттатите се записват в съответната .php директория")
//newTrial(
 //newText("Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
//)
    //.label("intro");
 

 InitiateRecorder(php_file_path, "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
    .label("intro");

UploadRecordings("sendAsync", "noblock");
UploadRecordings("Sync");

    let replaceConsentMic = ()=>{
            let consentLink = $(".PennController-PennController a.Message-continue-link");
            if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                consentLink.html("Давам съгласието си за използване на микрофона и за записване на гласа ми в този експеримент. ");
            else
                window.requestAnimationFrame( replaceConsentMic );
    };
    window.requestAnimationFrame( replaceConsentMic );



newTrial( "finished",
   exitFullscreen()
   ,
   newText("Благодарим Ви за интереса. Този експеримент приключи.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
    
    ,
   newText("В момента се провежда основната версия на експеримент 2. За да участвате, посетете линка "+"<a href=https://ibexfarm.ung.si/ibexexps/dk0035/experiment2_many_participants_main3/experiment.html>https://ibexfarm.ung.si/ibexexps/dk0035/experiment2_many_participants_main3/experiment.html</a>"+", като натиснете върху него или като го копирате в своя браузър.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       //.print()
          
    ,      
   newText("Това беше линкът към пилотния проект на експеримент 5. В момента се провежда основната версия експеримент 5. За да участвате в основната версия на експеримент 5, посетете линка "+"<a href=https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html>https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html</a>"+", като натиснете върху него или като го копирате в своя браузър.")
       //.css("width","40em")
       //.css("padding-top","10%")
       //.css("line-height","1.4")
       //.print()
       
        //,

   //newText("В момента има проблем със сървъра. Моля, върнете се към ексеперимента след 18 май. Благодаря.")
       //.css("width","40em")
       //.css("padding-top","10%")
       //.css("line-height","1.4")
       //.print()
    ,
    newButton("")
        //.print()
        .wait()
        
       )

,    
newTrial("mobile_device_check",

    newText("Проверка на устройството")
        .css("width","40em")
        .css("padding-top","10%")
        .css("line-height","1.4")
        //.print()
            ,
   screen_width=screen.width
   ,
   device_name=navigator.userAgent
   ,
   
   (window.matchMedia("(max-width: 767px)").matches?
   [mobile_device_based_on_screen_width="mobile_device"
   ]
   :
   [mobile_device_based_on_screen_width="desktop_device"]
   )
   ,
   
   (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)?
   [mobile_device_based_on_device_name="mobile_device"
   ]
   :
   [mobile_device_based_on_device_name="desktop_device"
   ]
   )
   //,
      
    //newButton("")
    //.print()
    //.wait()
   )
,
newTrial("intro1",

    newText(message_for_the_type_of_experiment)
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .center()
    .print()
    ,
     
     //newText(experiment_path+'\n'+stimuli_path+'\n'+results_path+'\n'+php_file_path+'\n'+zip_folder_path+'\n'+zip_file_path)
    //.css("width","40em")
    //.css("line-height","1.4")
    ////.css("padding-top","40px")
    //.css("padding-bottom","20px")
    //.center()
    //.print()
    //,

    newText("Здравейте! В рамките на изследователски проект в Университета в Нова Горица, Словения изследваме как носителите на езика устно обработват изречения с различна дължина и сложност.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,

    newText("Експериментът отнема между 15 и 20 минути. Предоставените от Вас данни ще бъдат използвани само за целите на това научно изследване и няма да бъдат разпространявани неправомерно.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
        
    
  newText("Ще ви бъдат предоставени писмено съобщителни изречения, които вие трябва да прочетете. Те ще включват два различни глагола – познат глагол, който съществува в българския език, и непознат глаогол, който е съставен за целите на експеримента. След всяко изречение ще последва въпрос, на който трябва да отговорите устно. В някои случаи ще трябва да използавте познатия глагол, а в други – непознатия.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
    ,

    newText(`<i>Пример</i>:<br>
Вие виждате написано съобщителното изречение:<br><i>Иван строи къща, Петър фои сграда, а Мартин и Стоян правят същото като Иван.</i><br>
Зададен е въпрос:<br><i>Какво правят Мартин и Стоян?</i></i><br>
Вие произнасяте:<br><i>Строят къща</i></i>`)
     .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,
    
    newText(`<i>Друг пример</i>:<br>

Вие виждате написано съобщителното изречение:<br><i> Иван пее песен, Петър хее опера, а Мартин и Стоян правят същото като Петър.</i><br>
Зададен е въпрос:<br><i>Какво правят Мартин и Стоян?</i></i><br>
Вие произнасяте:<br><i>Хеят опера</i></i>`)
     .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()


,
      
    newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуицията си, без да обмисляте отговора си при изпълнението на задачата и без да използвате помощ от други източници.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,
      newText("Докато произнасяте последната дума, ще трябва да запишете гласа си, като използвате микрофона на компютъра си. За да запишете отговора си, натиснете върху бутон „Запис“. За да спрете записа, натиснете върху бутона „Стоп“.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

    newText("За да можете да запишете гласа си, ще Ви е нужен работещ микрофон. Преди да продължите по-нататък с експеримента, моля, пробвайте да запишете и изслушате своя глас, за да се уверите, че всичко работи, както трябва.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

      
    

 
  newMediaRecorder("test0_recording_"+id+"_"+type_of_experiment, "audio")
          .center()
          .print()
          .log()
          
    ,
 
      newButton("continue_to_questionaire", "Продължете")
       .color("red")
       .center()
       .print()
        .wait()
        .log()
    
 
   
  ).setOption("hideProgressBar",true)

,

    
newTrial("demo",


    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберете една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
        .settings.log()
        .log("uniqueID", id)
        .print()
            
            

    ,
     newButton("continue_to_examples", "Продължете нататък")
       .color("red")
       .center()
       .print()
       .wait(
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
        .log()
       ).setOption("hideProgressBar",true)
    ,
    
  

         
        

newTrial ("trials",
    


    newText("Ще започнем с две примерни изречения, за да добиете представа за задачата. След тях започва настоящият експеримент.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

    
  newButton("continue_to_example_1", "Продължете с пример 1")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
          
          ).setOption("hideProgressBar",true)
,

    /*
    
newTrial("preload_demo_label",
      newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
        .css("width","40em")
        .css("line-height","1.4")
        //.css("padding-top","40px")
        .css("padding-bottom","20px")
        .print()
    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("demo1","demo2"))
    .label("preload_demo" );

   */

Template('train_examples.csv',
//Template("design_final.csv",
//Template("test_csv",
      variable => newTrial("demo_all",

 newText("Пример "+parseInt(variable.Index)+":")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    //.css("padding-bottom","20px")
    .print()
    
    ,
    //newButton("listen_to_example_all", "Изслушайте изречението")
    //.css("line-height","1.4")
    //.center()
    //.print()
    //.wait()
    //.log()
    //,




    //newAudio("test_audio_all", variable.Path_of_audio_files_final_name)
         //.play()
         //.wait()
    //,
    
    //newTimer("wait", 500)
    //.start()
    //.wait()
    //,

    newText("")
    .print()
    ,
    
   newText(php_file_path)
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    //.print()
    ,
    
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    //.print()
    ,
    
   newText("<p style=\"font-size:18pt\">"+variable.Final_sentence+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    .center()
    .print()
    ,
    
   newText("<p style=\"font-size:18pt\">"+variable.Question+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    .center()
    .print()
 
    ,
    
   newText("instructions", "Моля, отговорете на въпроса, като използвате изискващия се глагол. За да направите това, запишете отговора си, като натиснете копчето „Запис“, а след това – копчето „Стоп“:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
        newMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment, "audio")
          //.print()
          .log()
          .center()
          .once()
    
      ,
 

      
     newButton("Запис")
        .print()
        .wait()
        .remove()
    
    ,
        
     //newText("instructionsxx", "111111")
          //.print()
          //.center()
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
    //,

  //newText(variable.Partial_filename+"_"+id+"_"+type_of_experiment)
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      //.print()
      //,
         
    getMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment)
        .record()
        
    ,
    
        //newText("instructionsxx", "22222")
          //.print()
          //.center()
          ////.css("padding-bottom","20px")
          ////.css("padding-top","20px")
//,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
   
,
    
    getMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment)
        .stop()
    
    
        ////<p style=\"font-size:18pt\">+"</p>"
        //newController("Question", {q: Task_set, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
    //.css("width","40em")
    //.css("line-height","1.4")
    ////.css("padding-top","40px")
    //.css("padding-bottom","20px")
            //.center()
            //.print()
            //.log()
            //.wait()
            //.remove()
      )
      )
      ,

newTrial ("demo1",

 newText("Пример 1:")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
    ,
    newButton("listen_to_example_1", "Слушнете ја реченицата.")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,




    newAudio("test1_audio", "Training/mono/training_STE-001_mono.wav")
         .play()
         .wait()
    ,
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,

    newText("")
    .print()
    ,
    
    newText("<p style=\"font-size:18pt\">кон</p>")
    .css("line-height","1.4")
    .css("padding-top","5%")
    .center()
    .print()
    ,
    
        //<p style=\"font-size:18pt\">+"</p>"
        newController("Question", {q: Task_set, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
            .center()
            .print()
            .log()
            .wait()
            .remove()
      ,
    

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма, и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")


//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      //newMediaRecorder("test1_recording_"+id+"_"+type_of_experiment, "audio")
          //.print()
          //.log()
          //.center()
          //.once()
         
          
         //,
      
    //newButton("Запис")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test1_recording_"+id+"_"+type_of_experiment)
        //.record()
        
    //,

    //newButton("Стоп")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test1_recording_"+id+"_"+type_of_experiment)
        //.stop()
        
    //,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
     
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_to_example_2", "Продължете с пример 2")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

newTrial("demo2",

 newText("Пример 2:")
     .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
    
    newButton("listen_to_example_2", "Изслушайте изречението")
    .css("line-height","1.4")
    .center()
    .print()
    .wait()
    .log()
    ,


    newAudio("test2_audio", "Training/mono/training_STE-002_mono.wav")
         .play()
         .wait()
    ,
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    newText("")
    .print()
    ,
    

    newText("<p style=\"font-size:18pt\">крава</p>")
    .css("line-height","1.4")
    .center()
    .css("padding-top","5%")
    .print()
    ,


        newController("Question", {q: Task_set, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
            .css("width","40em")
            .css("line-height","1.4")
            //.css("padding-top","40px")
            .css("padding-bottom","20px")
            .center()
            .print()
            .log()
            .wait()
            .remove()
,

//  newText("instructions", "Моля, повторете и довършете изречението, като поставите думата по-горе в подходящата форма, и запишете отговора си:")
//          .print()
//          .center()
//          .css("padding-bottom","20px")
//          .css("padding-top","20px")


  newText("instructions", "Моля, довършете изречението, като поставите думата по-горе в подходящата форма, и запишете отговора си:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  
      //newMediaRecorder("test2_recording_"+id+"_"+type_of_experiment, "audio")
          //.print()
          //.log()
          //.center()
          //.once()
      //,
      
     //newButton("Запис")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test2_recording_"+id+"_"+type_of_experiment)
        //.record()
        
    //,

    //newButton("Стоп")
        //.print()
        //.wait()
        //.remove()
        
    //,

    //getMediaRecorder("test2_recording_"+id+"_"+type_of_experiment)
        //.stop()
        
    //,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      

      newButton("continue_to_experiment", "Продължете с експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()

).setOption("hideProgressBar",true)

,
/*
newTrial("preload_trials_label",
       newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
           ).setOption("hideProgressBar",true)

    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("experiment"))
    .label("preload_trials" );    

*/

newTrial ("expbegin",
    
      newText("Сега сме готови да започнем с основния експеримент.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

      newButton("begin_experiment", "Започнете експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

Template(stimuli_csv_table,
//Template("design_final.csv",
//Template("test.csv",
      variable => newTrial("experiment",

    fullscreen()
        ,
    
    newTimer(500)
        .start()
        .wait()
    ,


    //newButton("listen_to_sentence",  "Изслушайте изречението")
    //.css("line-height","1.4")
    //.center()
    //.print()
    //.wait()
    //.log()
    //,


    //newAudio("target", variable.Path_of_audio_files_final_name)
         //.play()
         //.wait()
    
    newTimer("wait", 500)
    .start()
    .wait()
    ,


    //newText(variable.Sentences)
    //.print()
    //,
    
    
    //newText(variable.All_audio_files_original_name)
    //.print()
    //,
    
    //newText(variable.Path_of_audio_files_final_name)
    //.print()
    //,
    
    newText("")
    .print()
    ,
    
    
    newText("<p style=\"font-size:18pt\">"+variable.Final_sentence+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    .center()
    .print()
    ,
    
        newText("<p style=\"font-size:18pt\">"+variable.Question+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    .center()
    .print()
    
    //newText("<p style=\"font-size:18pt\">"+variable.Target_noun_base_form+"</p>")
    //.css("line-height","1.4")
    //.css("padding-top","5%")
    //.center()
    //.print()
    //,

        //newController("Question", {q: Task_set, as: ["1","2","3","4","5","6","7"],randomOrder:false,presentHorizontally:true})
        //newController("Question", {q: "Моля довършете изречението, като поставете последната дума в подходящата форма чрез натискане с мишката върху съответната форма", as: [variable.Target_noun_base_form,variable.Target_noun_plural_form,variable.Target_noun_count_form],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt(variable.Correct_response_as_integer)})
            //.css("width","40em")
            //.css("line-height","1.4")
            ////.css("padding-top","40px")
            //.css("padding-bottom","20px")
            //.center()
            //.print()
            //.log()
            //.wait()
            //.remove()
,
    


  newText("instructions", "Моля, отговорете на въпроса, като използвате изискващия се глагол. За да направите това, запишете отговора си, като натиснете копчето „Запис“, а след това – копчето „Стоп“:")
          .print()
          .center()
          .css("padding-bottom","20px")
          .css("padding-top","20px")

//    newAudio("myAudio", "http://myserver/audio.mp3")
      ,
     //newAudio("target", variable.Path_of_audio_files_final_name)
         //.play()
         //.wait()
    
   
    
     //newAudio("target", variable.Path_of_audio_files_final_name)
         //.play()
         //.wait()


     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
  

          
        newMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment, "audio")
          //.print()
          .log()
          .center()
          .once()
      ,
      
     newButton("Запис")
        .print()
        .wait()
        .remove()
        
   ,

    getMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment)
        //.print()
        .record()
        
    ,

    newButton("Стоп")
        .print()
        .wait()
        .remove()
        
    ,

    getMediaRecorder(variable.Partial_filename+"_"+id+"_"+type_of_experiment)
        .stop()
        
      ,
      
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      ,
      
      newButton("continue_with_next_sentence", "Продължете със следващия пример")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
  
  
  ).setOption("hideProgressBar",false)
.log("Task set",Task_set)
.log("Type",variable.Type)
.log("Condition label",variable.Condition_label)
.log("Stem ending cyrillic",variable.Stem_ending_cyrillic)
.log("Stem ending IPA",variable.Stem_ending_IPA)
.log("Group",variable.Group)
.log("Partial filename",variable.Partial_filename)
.log("Form 1 sg present non existing verb",variable.Form_1_sg_present_non_existing_verb)
.log("Form 1 sg present existing verb",variable.Form_1_sg_present_existing_verb)
.log("Form 3 sg present non existing verb",variable.Form_3_sg_present_non_existing_verb)
.log("Form 3 sg present existing verb",variable.Form_3_sg_present_existing_verb)
.log("Form 3 pl present non existing verb",variable.Form_3_pl_present_non_existing_verb)
.log("Form 3 pl present existing verb",variable.Form_3_pl_present_existing_verb)
.log("Form 3 sg imperfect non existing verb",variable.Form_3_sg_imperfect_non_existing_verb)
.log("Form 3 sg imperfect existing verb",variable.Form_3_sg_imperfect_existing_verb)
.log("Form 3 pl imperfect non existing verb correct form",variable.Form_3_pl_imperfect_non_existing_verb_correct_form)
.log("Form 3 pl imperfect existing verb correct form",variable.Form_3_pl_imperfect_existing_verb_correct_form)
.log("Form 3 pl imperfect non existing verb ja form",variable.Form_3_pl_imperfect_non_existing_verb_ja_form)
.log("Form 3 pl imperfect existing verb ja form",variable.Form_3_pl_imperfect_existing_verb_ja_form)
.log("Form 3 pl imperfect non existing verb e form",variable.Form_3_pl_imperfect_non_existing_verb_e_form)
.log("Form 3 pl imperfect existing verb e form",variable.Form_3_pl_imperfect_existing_verb_e_form)
.log("Form 3 pl imperfect non existing verb a form",variable.Form_3_pl_imperfect_non_existing_verb_a_form)
.log("Form 3 pl imperfect existing verb a form",variable.Form_3_pl_imperfect_existing_verb_a_form)
.log("Form 3 pl aorist existing verb form",variable.Form_3_pl_aorist_existing_verb_form)
.log("Same past imperfective tense and past aorist tense stem",variable.Same_past_imperfective_tense_and_past_aorist_tense_stem)
.log("Presence in the corpus as a verb with past imperfective tense with multiple realizations",variable.Presence_in_the_corpus_as_a_verb_with_past_imperfective_tense_with_multiple_realizations)
.log("Presence in the corpus in general",variable.Presence_in_the_corpus_in_general)
.log("Conjugation of existing verb",variable.Conjugation_of_existing_verb)
.log("Stress on final syllable in existing verb",variable.Stress_on_final_syllable_in_existing_verb)
.log("Final conjugation vowel cyrillic",variable.Final_conjugation_vowel_cyrillic)
.log("Final conjugation vowel IPA",variable.Final_conjugation_vowel_IPA)
.log("Past imperfective tense stem ending underlying form cyrillic",variable.Past_imperfective_tense_stem_ending_underlying_form_cyrillic)
.log("Past imperfective tense stem ending underlying form IPA",variable.Past_imperfective_tense_stem_ending_underlying_form_IPA)
.log("Past imperfective tense stem ending surface form cyrillic",variable.Past_imperfective_tense_stem_ending_surface_form_cyrillic)
.log("Past imperfective tense stem ending surface form IPA",variable.Past_imperfective_tense_stem_ending_surface_form_IPA)
.log("Type of past imperfective tense realization cyrillic",variable.Type_of_past_imperfective_tense_realization_cyrillic)
.log("Type of past imperfective tense realization IPA expected",variable.Type_of_past_imperfective_tense_realization_IPA_expected)
.log("Type of stem",variable.Type_of_stem)
.log("Type of preceding or final sound",variable.Type_of_preceding_or_final_sound)
.log("Type of preceding or final consonant sound sh or non sh",variable.Type_of_preceding_or_final_consonant_sound_sh_or_non_sh)
.log("Past imperfective tense stem ending when j ignored cyrillic",variable.Past_imperfective_tense_stem_ending_when_j_ignored_cyrillic)
.log("Past imperfective tense stem ending when j ignored IPA",variable.Past_imperfective_tense_stem_ending_when_j_ignored_IPA)
.log("Form 1 sg present existing verb repeated",variable.Form_1_sg_present_existing_verb_repeated)
.log("First verb beginning",variable.First_verb_beginning)
.log("Reflexive particle before the existing verb if present",variable.Reflexive_particle_before_the_existing_verb_if_present)
.log("First verb continuation",variable.First_verb_continuation)
.log("First verb ending",variable.First_verb_ending)
.log("First comma continuation",variable.First_comma_continuation)
.log("Second verb beginning",variable.Second_verb_beginning)
.log("Reflexive particle existing verb if present",variable.Reflexive_particle_existing_verb_if_present)
.log("Second verb continuation",variable.Second_verb_continuation)
.log("Second verb ending",variable.Second_verb_ending)
.log("Second comma continuation",variable.Second_comma_continuation)
.log("Third verb beginning",variable.Third_verb_beginning)
.log("Verb make right form",variable.Verb_make_right_form)
.log("Third ending right form",variable.Third_ending_right_form)
.log("Third verb ending",variable.Third_verb_ending)
.log("Final sentence",variable.Final_sentence)
.log("Question",variable.Question)
.log("Unique id",id)
.log("Type of experiment",type_of_experiment)
.log("Screen width",screen_width)
.log("Device name",device_name)
.log("Mobile device based on screen width",mobile_device_based_on_screen_width)
.log("Mobile device based on device name",mobile_device_based_on_device_name)

  )
,
  
newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("<p>Това е краят на екперимента. Благодарим Ви за участието! Вашият номер на участник е:<\p>"+"<p>"+"completed_"+id+"<\p>"+"<p>Този номер показва, че сте достигнали успешно до края на експеримента. Моля, запазете този номер, в случай че се налага да удостоверите, че сте приключили експеримента.</p>"+"<p>Ако имате въпроси относно експеримента, може да се обърнете по електронна поща към професор Артур Степанов 'arthur.stepanov@ung.si', професор Пенка Статева 'penka.stateva@ung.si' или Данил Христов 'danil.khristov@ung.si'<\p>.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()

  //  ,  
  // newButton()
      .wait()  // Wait for a click on a non-displayed button = wait here forever
          ).setOption("hideProgressBar",true)


DebugOff();
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial
