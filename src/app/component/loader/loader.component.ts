import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  private _loaderStateSubscription;
  public showLoader: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.showLoader = false;
    this._loaderStateSubscription = this.loaderService.loaderState.subscribe(showLoader => this.showLoader = showLoader);
  }
}
