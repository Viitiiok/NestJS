import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserGuard } from 'src/auth/auth-guard/user/user.guard';


@Controller('users')
export class UserController {
   @UseGuards(UserGuard)
   @Get('me')
   getMe() {
      return 'user info'
   }
}
