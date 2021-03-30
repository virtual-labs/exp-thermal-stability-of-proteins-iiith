/////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. The passage of folded state of a protein is opposed by: ", ///// Write the question inside double quotes
            answers: {
                a: "hydrophobic interaction", ///// Write the option 1 inside double quotes
                b: "formation of hydrogen bonds", ///// Write the option 2 inside double quotes
	        c: "conformational entropy", ///// Write the option 1 inside double quotes
                d: "Van der Waals forces", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

	{		  
            question: "2. The regular alpha helix and beta sheet structures fold rapidly because they are stabilized by:  ", ///// Write the question inside double quotes
            answers: {
                a: "intermolecular hydrogen bonding", ///// Write the option 1 inside double quotes
                b: "Van der Waals forces", ///// Write the option 2 inside double quotes
	        c: "inert pair effect", ///// Write the option 1 inside double quotes
                d: "intramolecular hydrogen bonding", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
	 },

	   {
	   
            question: "3. Denaturation midpoint is defined as that temperature (Tm) or denaturant concentration (Cm) at which:  ", ///// Write the question inside double quotes
            answers: {
                a: "both the folded and unfolded states are over populated.", ///// Write the option 1 inside double quotes
                b: "the folded state is over populated than the unfolded state.", ///// Write the option 2 inside double quotes
	        c: "the folded state is under populated than the unfolded state.", ///// Write the option 1 inside double quotes
                d: "both the folded and unfolded states are equally populated.", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },	   

         {
  
            question: "4. The helix that forms in a protein chain as a result of hydrogen bonds and other weak forces is an example of ", ///// Write the question inside double quotes
            answers: {
                a: "primary structure of protein.", ///// Write the option 1 inside double quotes
                b: "secondary structure of protein.", ///// Write the option 2 inside double quotes
	        c: "tertiary structure of protein.", ///// Write the option 1 inside double quotes
                d: "non-linear structure of protein", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

         {
            question: "5. When an egg is fried, what happens to the protein in the egg?  ", ///// Write the question inside double quotes
            answers: {
                a: "amino acids form new proteins", ///// Write the option 1 inside double quotes
                b: "the protein is denatured", ///// Write the option 2 inside double quotes
	        c: "because the heat removes water, the hydrophilic amino acids leave the pan", ///// Write the option 1 inside double quotes
                d: "the heat converts the protein into water", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


{		  
            question: "6. Denaturation of proteins doesn't involves the disruption of: ", ///// Write the question inside double quotes
            answers: {
                a: "Quaternary structure.", ///// Write the option 1 inside double quotes
                b: "Secondary structure.", ///// Write the option 2 inside double quotes
	        c: "Primary structure.", ///// Write the option 1 inside double quotes
                d: "Tertiary structure.", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
	 },


{		  
            question: "7. Heat can be used to disrupt hydrogen bonds and non-polar hydrophobic interactions because: ", ///// Write the question inside double quotes
            answers: {
                a: "increase in ionic repulsion.", ///// Write the option 1 inside double quotes
                b: "increase in kinetic energy.", ///// Write the option 2 inside double quotes
	        c: "increase in potential energy.", ///// Write the option 1 inside double quotes
                d: "none of the above.", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
	 },


{		  
            question: "8. Rhodopsin consists of the protein moiety opsin. Opsin consists of a bundle of how many transmembrane helices?  ", ///// Write the question inside double quotes
            answers: {
                a: "4", ///// Write the option 1 inside double quotes
                b: "9", ///// Write the option 2 inside double quotes
	        c: "7", ///// Write the option 1 inside double quotes
                d: "5", ///// Write the option 2 inside double quotes	
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
	 },
			  

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
