import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAvatarComponent {}
