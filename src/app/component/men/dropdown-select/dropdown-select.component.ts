import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css'],
})
export class DropdownSelectComponent implements OnInit {
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

  secQues = this.quesService.getItems();

  ans = new FormControl('');

  selectedOption!: string;

  @Output() submit = new EventEmitter<any>();

  // response: { que: string; ans: string }[] = [];

  selectChangeHandler(event: any) {
    this.selectedOption = event.target.value;
    console.log(event, 'et');
  }

  onSave() {
    this.submit.emit();
    // console.log('form saved', this.ans.value, this.selectedOption);
    this.quesService.setItems({
      que: this.selectedOption,
      ans: this.ans.value,
    });

    // console.log('submitted', this.response);
    // this.secQues = this.secQues.filter((que) => {
    //   return this.selectedOption !== que.question;
    // });
    // console.log(this.secQues);

    alert('Thanks for your response !');
  }

  constructor(private quesService: CartService) {}

  ngOnInit(): void {
    // console.log('secQues', this.quesService.getItems());
  }
}
