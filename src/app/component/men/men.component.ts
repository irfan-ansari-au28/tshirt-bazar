import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
})
export class MenComponent implements OnInit {
  // data = {
  //   keyValueMetadata: [],
  //   securityChallenge: {
  //     securityChallengeItems: [
  //       {
  //         key: '100',
  //         orderIndex: -1,
  //         question: 'Where did you meet your spouse?',
  //       },
  //       {
  //         key: '101',
  //         orderIndex: -1,
  //         question: "What's your youngest child's nickname?",
  //       },
  //       {
  //         key: '102',
  //         orderIndex: -1,
  //         question: "What's your oldest child's nickname?",
  //       },
  //       {
  //         key: '103',
  //         orderIndex: -1,
  //         question: "What's your mother's maiden name?",
  //       },
  //       {
  //         key: '104',
  //         orderIndex: -1,
  //         question: "What's your favourite uncle's name?",
  //       },
  //       {
  //         key: '105',
  //         orderIndex: -1,
  //         question: 'What is the last name of your first boss?',
  //       },
  //       {
  //         key: '106',
  //         orderIndex: -1,
  //         question: 'What was the make of your first car?',
  //       },
  //       {
  //         key: '107',
  //         orderIndex: -1,
  //         question: 'What was the last name of your favorite teacher?',
  //       },
  //       {
  //         key: '108',
  //         orderIndex: -1,
  //         question: 'Who is your favorite all time movie character?',
  //       },
  //       {
  //         key: '109',
  //         orderIndex: -1,
  //         question: 'In which city were you born?',
  //       },
  //       {
  //         key: '110',
  //         orderIndex: -1,
  //         question: 'What is your favourite colour?',
  //       },
  //       {
  //         key: '111',
  //         orderIndex: -1,
  //         question: "What's the last name of your favourite musician?",
  //       },
  //       {
  //         key: '112',
  //         orderIndex: -1,
  //         question: "What's the name of your favourite sport team?",
  //       },
  //       {
  //         key: '113',
  //         orderIndex: -1,
  //         question: "What's the name of the street on which you grew up?",
  //       },
  //       {
  //         key: '114',
  //         orderIndex: -1,
  //         question: "What's your favourite car brand?",
  //       },
  //     ],
  //   },
  // };

  // secQues = this.data.securityChallenge.securityChallengeItems;

  // ans = new FormControl('');
  // ans1 = new FormControl('');

  // selectedOption!: string;
  // selectedOption1!: string;
  // response: { que: string; ans: string }[] = [];

  // selectChangeHandler(event: any) {
  //   this.selectedOption = event.target.value;
  //   console.log(event, 'et');
  // }

  // selectChangeHandler1(event: any) {
  //   this.selectedOption = event.target.value;
  // }

  // onSave() {
  //   // console.log('form saved', this.ans.value, this.selectedOption);
  //   this.response.push(
  //     {
  //       que: this.selectedOption,
  //       ans: this.ans.value,
  //     },
  //     {
  //       que: this.selectedOption1,
  //       ans: this.ans1.value,
  //     }
  //   );

  //   console.log('submitted', this.response);
  //   this.secQues = this.secQues.filter((que) => {
  //     return this.selectedOption !== que.question;
  //   });
  //   console.log(this.secQues);

  //   // alert('Thanks for your response !');
  // }
  constructor(
    private answerService: CartService,
    private sharedService: SharedService
  ) {}
  data = [];
  ngOnInit(): void {
    this.answerService.answers.subscribe((res) => {
      this.data = res;
      console.log(res, 'response from men component');
    });
  }
  onSave() {
    // console.log('hitting on save');

    // this.answerService.answers.next(this.data);
    // console.log('Successfully submitted the response');

    this.sharedService.sendClickEvent();
  }
}
