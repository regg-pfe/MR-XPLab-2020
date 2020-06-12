// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome everyone!',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `.
            <br />
            <br />
            Hello everyone and Welcome to my first try of a key press experiment.
            This is a simple mental rotation experiment. You are in the <strong>${coin}</strong> group.
            <br />
            Thank you for your participation and maybe you'll even have a little fun. ;)
            <br />
            `,
  buttonText: 'begin the experiment'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `.
            <br />
            In this experiment you are going to be presented with two pictures of
            3-dimensional geometrical objects. Your task is to decide whether the two images display instances 
            of the same object (press q), or whether the images show different objects (press p).
            <br />
            <br />
            There is going to be a short period of practice trials where you can make yourself 
            aquainted with the experimental setup, followed by a shortly longer phase of main trials. 
            <br/>
            Feel ready? Then go!
            `,
  buttonText: 'go to practice trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

const intermediate = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'intermediate',
  title: 'Now main task starts!',
  text: 'This is the end of the practice trials - in the following the main trials will start. Are you ready? Remember: press q if the figures are the same and p if the figures are different.',
  buttonText: 'go to main trials'
});

const key_press_practice = magpieViews.view_generator("key_press", {
  trials: practice_trials.key_press.length,
  name: 'key_press_practice',
  data: _.shuffle(practice_trials.key_press),
  pause: 250
});

// Here, we initialize a key press view
const  key_press_trials = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can use a smaller value (for testing), but not a larger value
  trials: main_trials.key_press.length,
  // name should be identical to the variable name
  name: 'key_press_trials',
  data: _.shuffle(main_trials.key_press),
  pause: 250
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
