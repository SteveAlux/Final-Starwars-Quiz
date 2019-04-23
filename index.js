const STORE = [
    {question:"Who created StarWars?",
    answers:['Guillermo del Toro','George Lucas','Steven Spielberg','Tim Burton'],
    solution:'George Lucas',icon:'https://cdn.images.express.co.uk/img/dynamic/36/590x/GEORGE-LUCAS-1114897.jpg?r=1555411155976',
    response: 'Got it Right! George Lucas directed the Star Wars movies.'},

    {question:"Light Side students of the force are called?",
    answers:['Siths','Legions of the Force','Jedi','Guards'],
    solution:'Jedi' ,icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4-9v2uJY5x8Jwth1swW13z88I2t0_7y527-Z0c_LbVb80Tbl',
    response:'100% Correct! Jedi are the "good guys"'},

    {question:"Dark Side students of the force are called?",
    answers:['Jedi','Siths','Dark Lords','Corrupt Warriors'],
    solution:'Siths' ,icon:'https://i.pinimg.com/originals/70/9a/4b/709a4b37ebc6c1adfe7438e6ce8d616b.jpg',
    response:'Sorry...You got it right! Siths go to the Dark Side, Dun-Dun Dunnn.'},

    {question:'What does the acronym in TIE fighter stand for?',
    answers:['Twin Ion Engines','Turbo Ion Engines','Total Imumersion Environment','Tactical Intergration Evader'],
    solution:'Twin Ion Engines',icon:'https://cdnb.artstation.com/p/assets/images/images/000/177/361/large/paul-beards-tie-fighter-final-front.jpg?1497520780',
    response:'Thats right!'},

    {question:'What statement did Darth Vader truly say to Luke to let him know that he was his father?', 
    answers:['Luke, I am your father','I am your father Luke', 'No, I am your father','I am Skywalker, your father'],
    solution:'No, I am your father', icon:'https://i2.wp.com/www.tor.com/wp-content/uploads/2015/01/sw-5.jpg?fit=800%2C%209999&crop=0%2C0%2C100%2C545px',
    response:'Correct!'},

    {question: 'When did the first Star Wars movie come out?',
     answers:['1971','1980','1975','1977'],
     solution:'1977',icon:'https://fdthird.files.wordpress.com/2014/09/image.jpg',
     response:'Feel Old Yet?'},

    {question: 'In the fourth movie "A New Hope". Who is the Evil organization that is trying to rule the galaxy?',
     answers:['The Empire','The Dark Order','The First Order','The Galactic Republic'],
     solution:'The Empire', icon:'https://staticdelivery.nexusmods.com/mods/1151/images/2534-2-1448375236.jpg',
     response:'Guys with bucket heads! Correct!'},
    
    {question: 'Who is placed as the teacher for Anakin?',
     answers:['Mace Windu','Jango Fett','Yoda','Obi-Wan Ken-Obi'],
     solution:'Obi-Wan Ken-Obi', icon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MAcsNFdFWRDfs1rpucxLC2KRYZMkj64bpDMrKqoS1_JAuBzY',
     response:'Hello There!'},

    {question: 'What planet was Luke placed to live and to be watched over by Obi-Wan as he grew up?', 
    answers:['Tatooine','Endor','Hoth','Kashyyyk'],
    solution:'Tatooine', icon:'https://lumiere-a.akamaihd.net/v1/images/databank_jabbathehuttspalace_01_169_f7f5feb6.jpeg?region=341%2C0%2C878%2C878',
    response:'A lot of Sand at this Planet. But thats right!'},

    {question:'Who Made the Kessel Run in 12 parsecs?', 
    answers:['Luke Skywalker','Han Solo','Anakin Skywalker','Jar-Jar Binks'],
     solution:'Han Solo',icon:'https://cdn.mos.cms.futurecdn.net/HHcFEcsgiokdigFsMZyiVo.jpg',
    response:`He never wants us to forget about it. Correct!`}
];


    let score = 0;
    let questionNum = 0;
   


function initGame(){
//This is where the game will place the first display of the questions.
$('.main').on('click','#js-start-game',function(event){
    console.log('game initWorks');
    const questionholder = displayQuestion(STORE,questionNum);
    console.log('Welp');
    $('#js-form').toggleClass('hidden');
    $( '#js-form').html(questionholder);
    $('#js-start-game').toggleClass('hidden');
    // $('#js-restart-game').toggleClass('hidden');
    $('#question_counter').find('li').toggleClass('hidden');
    $('#score').toggleClass('hidden');
    $('footer').toggleClass('hidden');
    $('.js-question-location').find('input').addClass('selected');
    $('.js-question-location').find('input').toggleClass('selected');
    $(document).ready(function(){
        $(`li:nth-of-type(1)`).css('border','3px solid white');
      });
});
}

function displayQuestion(list,num_l){
    
    return `
    <h5 class='Gold'>${list[num_l].question}</h5>
         <!-- This are will be placed inside of an array/object for each question.  -->
         <div class='question_style'>
            
                    <label id="l1" class='blue'><input type="radio" name="answer" required aria-pressed="false" value="${list[num_l].answers[0]}">${list[num_l].answers[0]}</label>
                   
                
                    <label id="l2" class='red'><input type="radio" name="answer" aria-pressed="false" value="${list[num_l].answers[1]}">${list[num_l].answers[1]}</label>
                   
              
            
                    <label id="l3" class='purp'><input type="radio" name="answer" aria-pressed="false" value="${list[num_l].answers[2]}">${list[num_l].answers[2]}</label>
                    
                
                    <label id="l4" class='green'><input type="radio" name="answer" aria-pressed="false" value="${list[num_l].answers[3]}">${list[num_l].answers[3]}</label>
                    
            
                    <!--------------------------------------------------------->
                <button type="submit" id="answer_sub">Submit</button>
        </div>`;

}

function radioClicked(){
    $('.js-question-location').find('#js-form').on('click','input',function(event){
        let colorholder = $('#l1').closest('label').css('background');
        let colorholder2 = $('#l2').closest('label').css('background');
        let colorholder3 = $('#l3').closest('label').css('background');
        let colorholder4 = $('#l4').closest('label').css('background');
        console.log(colorholder2);
        
        
        if ($(this).parent('label').attr('aria-pressed')=== 'true'){

        }
        else {
      const targetQ= $(this).closest('label');
      $(this).parent('label').css('color','gold');
      
      
    //   $(this).closest('label').css('background','null');
       
       console.log($(this).closest('label').attr('id'));
       if($(this).closest('label').attr('id')=== 'l1'){
           console.log('this l1 is clicked');
           $(this).closest('label').removeClass('blue');
           $('#l4').closest('label').removeClass('solidGreen');
           $('#l2').closest('label').removeClass('solidRed');
           $('#l3').closest('label').removeClass('solidPurp');

           $('#l4').closest('label').addClass('green');
           $('#l2').closest('label').addClass('red');
           $('#l3').closest('label').addClass('purp');
           
           $(this).closest('label').addClass('solidBlue');
        
     
       }
       else if($(this).closest('label').attr('id') === 'l2'){
           console.log('this l2 is clicked');
        $(this).closest('label').removeClass('red');
        $('#l1').closest('label').removeClass('solidBlue');
        $('#l4').closest('label').removeClass('solidGreen');
        $('#l3').closest('label').removeClass('solidPurp');
        $('#l1').closest('label').addClass('blue');
        $('#l4').closest('label').addClass('green');
        $('#l3').closest('label').addClass('purp');

        $('#l2').closest('label').addClass('solidRed');
       
       }
       else if($(this).closest('label').attr('id')=== 'l3'){
           console.log('this l3 is clicked');
        $(this).closest('label').removeClass('purp');
        $('#l4').closest('label').removeClass('solidGreen');
        $('#l2').closest('label').removeClass('solidRed');
        $('#l1').closest('label').removeClass('solidBlue');
        $('#l1').closest('label').addClass('blue');
        $('#l2').closest('label').addClass('red');
        $('#l4').closest('label').addClass('green');
        $(this).closest('label').addClass('solidPurp');
        
       }
       else if($(this).closest('label').attr('id')=== 'l4'){
           console.log('this l4 is clicked');
        
        $('#l1').closest('label').removeClass('solidBlue');
        $('#l2').closest('label').removeClass('solidRed');
        $('#l3').closest('label').removeClass('solidPurp');
        $('#l1').closest('label').addClass('blue');
        $('#l2').closest('label').addClass('red');
        $('#l3').closest('label').addClass('purp');
        $(this).closest('label').removeClass('green');
        $(this).closest('label').addClass('solidGreen');
        
       }
      
      
      const otherQ= $('.js-question-location').find('label').not(targetQ);
      const pressedQ=$(targetQ).attr('aria-pressed', 'true');
      
      otherQ.removeClass('selected').attr('aria-pressed',false);
      otherQ.css('color','white',);
    //   otherQ.css('background','none');
      targetQ.attr('aria-pressed',pressedQ);
      
        }
    });
}

function userAnswerSub (){
    $('#js-form').submit(function(event){
        event.preventDefault();
        let radios=document.getElementsByName('answer')
        
        for (let i = 0; i < radios.length;i++){
            if (radios[i].checked){
                let answerPicked= radios[i].value;
                console.log(answerPicked);
                let final = checkAnswer(answerPicked);
                renderResults(final);
                updateScore();
                $('.wrong').find('h5').toggleClass('wrong2');
                $('.right').find('h5').toggleClass('right2');
                changeColor(final);
                questionNum+=1;
                console.log(final);
            };
        };
        console.log('running check for answer');
        
        
    });
}
function updateScore(){
    $('#score').find('#score_num').text(score);

} 

function checkAnswer(checkval){
    
    if(checkval === STORE[questionNum].solution){
        score+=100;
       let final = 'correct'
       return final;
    }
    else{
       
        console.log(STORE[questionNum].solution);
        console.log(checkval);
        let final= 'incorrect'
        return final;
    };
}

function renderResults(results){
    if (results === 'correct'){
       let resultholder= `<div class="results right">
       <h5>Correct! (+100)</h5>
       <img src= "${STORE[questionNum].icon}" alt='iconKey'>
       <p>${STORE[questionNum].response}</p>
       <button type="button" id="js-next">Next</button>
   </div>`;
   $('.right').find('h5').addClass('right2');
       $('#js-form').html(resultholder);
    }
    else if (results === 'incorrect'){
       let resultholder= `<div class="results wrong">
       <h5>Incorrect! (+0)</h5>
       <img src= "${STORE[questionNum].icon}" alt='iconKey'>
       <p>The correct choice was: "${STORE[questionNum].solution}"</p>
       <button type="button" id="js-next">Next</button>
   </div>`;
       $('.wrong').find('h5').addClass('wrong2');
       $('#js-form').html(resultholder);
    };
}
function finishGame(){
    console.log(score);
    if (score< 500 ){
    let resultholder= `<div class= "results fix_results">
        <h4 class='center'>You have finsihed the Quiz!</h4>
        
        <p id="score_text"> You scored:  ${score}</p>
        <p> You should work on your Star War's trivia! Thank you for playing!</p>
        </div>
        `;
        $('#js-restart-game').toggleClass('hidden');
        $('.main').find('#js-form').html(resultholder);
    }
    else if (score>= 500 && score<700 ){
        let resultholder= `<div class= "results fix_results">
            <h4 class='center'>You have finsihed the Quiz!</h4>
           
            <p id='score_text'> You scored:  ${score}</p>
            <p>You did pretty good! Thank you for playing!</p>
            </div>
            `;
            $('#js-restart-game').toggleClass('hidden');
            $('.main').find('#js-form').html(resultholder);
        }
    else if (score>= 700 && score<=900 ){
        let resultholder= `<div class= "results fix_results">
            <h4 class='center'>You have finsihed the Quiz!</h4>
            
            <p id="score_text"> You scored:  ${score}</p>
            <p>Wow so close to getting all right! Thank you for playing!</p>
            </div>
            `;
            $('#js-restart-game').toggleClass('hidden');
            $('.main').find('#js-form').html(resultholder);
        }
    else if (score >= 1000){
        let resultholder= `<div class= "results fix_results">
            <h4 class='center'>You have finsihed the Quiz!</h4>
            
            <p id='score_text'> You scored:  ${score}</p>
            <p>The Force is with you! Thank you for playing!</p>
            </div>
            `;
            $('#js-restart-game').toggleClass('hidden');
            $('.main').find('#js-form').html(resultholder);
        }
}



function nextQuestion(){
    $('.main').find('.js-question-location').on('click','#js-next',function(event){
        event.preventDefault();
        console.log(questionNum);
        if (questionNum>=10){
            $('.results').remove();
            finishGame();
            $(document).ready(function(){
                $(`li:nth-of-type(${questionNum})`).css('border','none');
            });
        }
        
        else {
            const questionholder = displayQuestion(STORE,questionNum);
            console.log(`li:nth-of-type(${questionNum+1})`);
            $(document).ready(function(){
                $(`li:nth-of-type(${questionNum+1})`).css('border','2px solid white');
              });
              $(document).ready(function(){
                $(`li:nth-of-type(${questionNum})`).css('border','none');
              });
            console.log(questionholder);
            $('.results').remove();
            $('.main').find('#js-form').html(questionholder);
            }
    });
}
function resestGame(){
    $('body').on('click','#js-restart-game',function(event){
        console.log('restart()');
        if($('#js-form').hasClass('hidden') === true){
            
        }
        else {
            $('#js-form').toggleClass('hidden'); 
            $('#js-start-game').toggleClass('hidden');
            $('#js-restart-game').toggleClass('hidden');
            questionNum=0;
            score=0;
            updateScore();
            $('#score').toggleClass('hidden');
            $('footer').toggleClass('hidden');
            $('#question_counter').find('li').toggleClass('hidden');
            changeColor('reset');
            
            
        }
        
    });
  
}

function changeColor(action){
    if (action === 'correct'){
        console.log('running box fix');
        
        $(document).ready(function(){
            $(`li:nth-of-type(${questionNum})`).css('background','rgb(20, 230, 20)');
        });
    }
    else if (action === 'incorrect'){
        $(document).ready(function(){
            $(`li:nth-of-type(${questionNum})`).css('background','rgb(241, 28, 28)');
        });
    }
    else if(action === 'reset'){
        $(document).ready(function(){
            $(`#question_counter`).find('li').css('background','gray');
        });

    }
}


//Main Create;
function LoadGame(){
    //IDK what a callback function();
    initGame();
    userAnswerSub();
    resestGame();
    nextQuestion();
   renderResults();
   radioClicked();
}



$(LoadGame);