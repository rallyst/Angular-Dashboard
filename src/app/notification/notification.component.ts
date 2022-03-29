import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../shared/notification-data.model';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(7px)'
        }),
        animate('250ms 150ms ease-out')
      ]),
      transition(':leave', [
        animate(325, style({
          opacity: 0,
          transform: 'scale(.8)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {

  notification!: NotificationData[] | null;

  timeout: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifications
      .subscribe((notification: NotificationData) => {
        this.notification = Array(notification);

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          this.notification = null;
        }, notification.duration)
      })
  }

}
