import { Controller, Body, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth') //class
export class AuthController {
   constructor(private authService: AuthService) {}

   @Post('signup') //method
   signup(@Body() dto: AuthDto) {
      return this.authService.signup(dto);
   }

   @Post('signin')
   signin(@Body() dto: AuthDto) {
      return this.authService.signin(dto);
   }
}