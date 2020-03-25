import { Component, OnInit } from '@angular/core';
import { ImgServiceService } from './img-service.service';

@Component({
  selector: 'app-curousal',
  templateUrl: './curousal.component.html',
  styleUrls: ['./curousal.component.css']
})
export class CurousalComponent implements OnInit {
 item: any;
constructor(private imgService: ImgServiceService) { }

ngOnInit() {

  this.imgService.getImages().subscribe(data => this.item = data);
  console.log(this.item)
}

}
