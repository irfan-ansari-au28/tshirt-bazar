import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  data = {
    keyValueMetadata: [],
    securityChallenge: {
      securityChallengeItems: [
        {
          key: '100',
          orderIndex: -1,
          question: 'Where did you meet your spouse?',
        },
        {
          key: '101',
          orderIndex: -1,
          question: "What's your youngest child's nickname?",
        },
        {
          key: '102',
          orderIndex: -1,
          question: "What's your oldest child's nickname?",
        },
        {
          key: '103',
          orderIndex: -1,
          question: "What's your mother's maiden name?",
        },
        {
          key: '104',
          orderIndex: -1,
          question: "What's your favourite uncle's name?",
        },
        {
          key: '105',
          orderIndex: -1,
          question: 'What is the last name of your first boss?',
        },
        {
          key: '106',
          orderIndex: -1,
          question: 'What was the make of your first car?',
        },
        {
          key: '107',
          orderIndex: -1,
          question: 'What was the last name of your favorite teacher?',
        },
        {
          key: '108',
          orderIndex: -1,
          question: 'Who is your favorite all time movie character?',
        },
        {
          key: '109',
          orderIndex: -1,
          question: 'In which city were you born?',
        },
        {
          key: '110',
          orderIndex: -1,
          question: 'What is your favourite colour?',
        },
        {
          key: '111',
          orderIndex: -1,
          question: "What's the last name of your favourite musician?",
        },
        {
          key: '112',
          orderIndex: -1,
          question: "What's the name of your favourite sport team?",
        },
        {
          key: '113',
          orderIndex: -1,
          question: "What's the name of the street on which you grew up?",
        },
        {
          key: '114',
          orderIndex: -1,
          question: "What's your favourite car brand?",
        },
      ],
    },
  };

  secQues = this.data.securityChallenge.securityChallengeItems;

  response: any = [];

  defaultResponse = [{ que: "What's your name?", ans: 'Macbook Pro' }];

  answers = new BehaviorSubject<any>(this.defaultResponse);

  setItems(item: any) {
    this.response = [...this.response, item];
    console.log('from Service', this.response);
  }

  getItems() {
    return this.secQues;
  }

  constructor() {}
}
