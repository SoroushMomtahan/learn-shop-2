import { Module } from "@nestjs/common";
import { AuthenticationGuard } from "./authentication.guard";
import { HttpModule } from "@nestjs/axios";
import { FetchIamService } from "./fetch/fetch-iam.service";

@Module({
  imports:[
    HttpModule
  ],
  providers:[
    FetchIamService,
    {
      provide:'APP_GUARD',
      useClass: AuthenticationGuard
    },
    {
      provide: 'IAM_URL',
      useValue: 'http://localhost:4000/token'
    }
  ],
})
export class CommonModule {
}