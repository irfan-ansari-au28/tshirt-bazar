import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css'],
})
export class DropdownSelectComponent
  implements OnInit, OnDestroy, DoCheck, OnChanges
{
  // secQues = this.quesService.getItems();
  secQues: any = [];

  // remSecQues = new BehaviorSubject<any>(this.secQues);

  ans = new FormControl('');

  selectedOption!: string;
  defaultData = [];

  // response: { que: string; ans: string }[] = [];

  selectChangeHandler(event: any) {
    console.log(this.ans.value, 'ansewerewjsdlkjfdsjflslkjlkfdsjlkflk');
    console.log(this.selectedOption, 'selected option');

    this.selectedOption = event.target.value;

    // if (this.ans.value?.length > 0 && this.selectedOption.length > 0) {

    // }
    this.secQues = this.secQues.filter((que: any) => {
      return this.selectedOption !== que.question;
    });
    this.quesService.quesList.next(this.secQues);

    // if (this.ans.value?.length > 0 && this.selectedOption.length > 0) {
    //   this.quesService.answers.next([
    //     ...this.defaultData,
    //     {
    //       que: this.selectedOption,
    //       ans: this.ans.value,
    //     },
    //   ]);
    // }
  }

  // getSelectedItem() {
  //   return this.selectedOption;
  // }

  onSave() {
    console.log('form saved', this.ans.value, this.selectedOption);
    this.quesService.answers.next([
      ...this.defaultData,
      {
        que: this.selectedOption,
        ans: this.ans.value,
      },
    ]);

    // this.quesService.setItems({
    //   que: this.selectedOption,
    //   ans: this.ans.value,
    // });
    // console.log('submitted', this.response);
    // this.secQues = this.secQues.filter((que) => {
    //   return this.selectedOption !== que.question;
    // });
    // console.log(this.secQues);
    // alert('Thanks for your response !');
  }

  constructor(
    private quesService: CartService,
    private sharedService: SharedService
  ) {
    this.clickEventsubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.onSave();
      });
  }

  ngOnInit(): void {
    this.quesService.answers.subscribe((res) => (this.defaultData = res));
    // console.log('secQues', this.quesService.getItems());
    // this.quesService.quesList.next(this.secQues);
    // this.quesService.quesList.subscribe((res) => console.log(res));
    // console.log('this.ques', this.quesList);

    this.quesService.quesList.subscribe((res) => {
      this.secQues = res;
      console.log(this.secQues, '----------------xxxxxxxx------------------');
      // this.secQues = [...this.secQues];
    });
  }

  ngOnDestroy(): void {
    // if (this.ans.value?.length > 0 && this.selectedOption.length > 0) {
    //   this.quesService.answers.next([
    //     ...this.defaultData,
    //     {
    //       que: this.selectedOption,
    //       ans: this.ans.value,
    //     },
    //   ]);
    // }
  }

  ngDoCheck(): void {
    // if (this.ans.value?.length > 0 && this.selectedOption.length > 0) {
    //   this.secQues = this.secQues.filter((que) => {
    //     return this.selectedOption !== que.question;
    //   });
    // }
  }

  clickEventsubscription: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes) {
    //   if (this.ans.value?.length > 0 && this.selectedOption.length > 0) {
    //     this.quesService.answers.next([
    //       ...this.defaultData,
    //       {
    //         que: this.selectedOption,
    //         ans: this.ans.value,
    //       },
    //     ]);
    //   }
    // }
  }
}
