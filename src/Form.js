import React from "react";
import ApiServices from "./services";


export default class Form extends React.Component {
  state = {
    question : "",
    answer1 : "",
    answer2 : "",
    answer3 : "",
    answer4 : "",
    isAnswer1 : true,
    isAnswer2 : false,
    isAnswer3 : false,
    isAnswer4 : false,
    level:   0
  };

  change = e => {
    if(e.target.name != "isAnswer")
    {
      this.props.onChange({ [e.target.name]: e.target.value });
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    else
    {
      var value = parseInt(e.target.value);
      this.setState({isAnswer1:false, answer2:false, isAnswer3:false, isAnswer4:false});
      switch (value) {
        case 0:
          this.setState({isAnswer1:true});
          break;
        case 1:
          this.setState({isAnswer2:true});
          break;
        case 2:
          this.setState({isAnswer3:true});
          break;
        case 3:
        this.setState({isAnswer4:true});
        break;


        default:
          break;
      }
    }

  };

  onSubmit = e => {
    e.preventDefault();

    var answers = [];

    if(this.state.answer1 != "")
    {
      answers.push({value : this.state.answer1, isCorrect : this.state.isAnswer1});
     
      if(this.state.answer2 != "")
        answers.push({value : this.state.answer2, isCorrect : this.state.isAnswer2});

      if(this.state.answer3 != "")
        answers.push({value : this.state.answer3, isCorrect : this.state.isAnswer3});
        
      if(this.state.answer4 != "")
      answers.push({value : this.state.answer4, isCorrect : this.state.isAnswer4});

    }
    else {
      console.log("ERROR.....VOID")
      return;
    };

    var quizData = {
      question : this.state.question,
      answers : answers,
      level : this.state.level
    }

    ApiServices._createQuiz(quizData).then(data=>{

      console.log(data);

      this.props.onChange(data.data);


      this.setState({
        question : "",
        answer1 : "",
        answer2 : "",
        answer3 : "",
        answer4 : "",
        level : 0
      });
    }).
    catch(err=>{
      console.log(err)
    })

    // this.props.onSubmit(this.state);
 

    // Send to home....
    // this.props.onChange({
    //   firstName: "",
    //   lastName: "",
    //   username: "",
    //   email: "",
    //   password: ""
    // });
  };

  render() {
    return (
      <form>
        <label>Question : </label>
        <input
          name="question"
          placeholder="Question"
          value={this.state.question}
          onChange={e => this.change(e)}
        />
        <br />
        {/* ANSWER BLOC */}
        <label>Reponse 1 : </label>
        <input
          name="answer1"
          placeholder="Answer 1"
          value={this.state.answer1}
          onChange={e => this.change(e)}
        />
        <input type="radio"
          name="isAnswer"
          onChange={e => this.change(e)}
          value="0"
          checked
        />
        <br />

        {/* ANSWER BLOC */}
        <label>Reponse 2 : </label>
        <input
          name="answer2"
          placeholder="Answer 2"
          value={this.state.answer2}
          onChange={e => this.change(e)}
        />
        <input type="radio"
          name="isAnswer"
          onChange={e => this.change(e)}
          value="1"
        />
        <br />


        {/* ANSWER BLOC */}
        <label>Reponse 3 : </label>
        <input
          name="answer3"
          placeholder="Answer 3"
          value={this.state.answer3}
          onChange={e => this.change(e)}
        />
        <input type="radio"
          name="isAnswer"
          onChange={e => this.change(e)}
          value="2"
        />
        <br />


        {/* ANSWER BLOC */}
        <label>Reponse 4 : </label>
        <input
          name="answer4"
          placeholder="Answer 4"
          value={this.state.answer4}
          onChange={e => this.change(e)}
        />
        <input type="radio"
          name="isAnswer"
          onChange={e => this.change(e)}
          value="3"
        />
        <br />

        <label>Niveau : </label>
        <input
          name="level"
          type="number"
          placeholder="level"
          value={this.state.level}
          onChange={e => this.change(e)}
        />

        <br />
        <button onClick={e => this.onSubmit(e)}>CREER</button>
      </form>
    );
  }
}
