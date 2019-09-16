import { AuthService } from './../auth/auth.service';
import { Injectable, Injector } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  private headers: HttpHeaders;

  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith("/assets")) {
      // serve assets directly
      return next.handle(req);
    }
    let token = this.authService.getToken();
    if (token)
      req = req.clone({
        setHeaders: {
          token: token
        }
      });
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.authService.logout();
          this.router.navigate(["/login"]);
        } else if (error.status == 403) {
          console.log("VOUS NAVEZ PAS LE DROIT");
        }
        return throwError(error);
      })
    );
  }
}
