import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from 'angular-crumbs';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public titulo?: string ;
  // public subtitulo?: string;
  // public tituloSubscription$:  Subscription;
  // breadcrumbs: MenuItem[];
  constructor(
    private router: Router,
    // private breadcrumbService: BreadcrumbService
  ) {
    // this.tituloSubscription$ = this.getArgumentos().subscribe(({titulo, subtitulo})=>{
    //   this.titulo = titulo;
    //   this.subtitulo = subtitulo;
    //   document.title = `Star Wars - ${titulo} - ${subtitulo}`;

    //   console.log(titulo, subtitulo);

    // });
  }
  ngOnInit() {
    // this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
        // this.breadcrumbs = crumbs.map(c => this.toPrimeNgMenuItem(c));
    // });
}

// private toPrimeNgMenuItem(crumb: Breadcrumb) {
//     return <MenuItem>{ label: crumb.displayName, url: `#${crumb.url}`}
// }
  // ngOnDestroy(): void {
  //   this.tituloSubscription$.unsubscribe();

  // }
  // getArgumentos(){

  //     return this.router.events.pipe(
  //     filter((event:any) => event instanceof ActivationEnd),
  //     filter((event:ActivationEnd) => event.snapshot.firstChild == null),
  //     map((event:ActivationEnd)=>event.snapshot.data)
  //     )
  //   }
}
