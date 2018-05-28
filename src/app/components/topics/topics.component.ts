import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'topics-section',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  topics: any = this.form.get('topics') as FormArray;

  addTopics(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = null;
  }

  removeThisTopic(topic: FormControl) {
    var index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
