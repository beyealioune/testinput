import { Component,OnInit, Input } from '@angular/core';
import { skill } from '../models/model.skills';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()  skills? : skill

  ngOnInit(){}
}