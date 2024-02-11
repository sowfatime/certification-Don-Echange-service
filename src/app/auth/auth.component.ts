import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../authservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  name: string="";
  email: string = "";
  telephone:string="";
  photo: any;
  password: string="";
  route: any;
ngOnInit(): void {
}
constructor(private authService: AuthServiceService) { }

inscription(){
 const data = {
    name : this.name,
    telephone : this.telephone,
    email : this.email,
    photo : this.photo,
    password : this.password,
  }
  this.authService.singin(data).subscribe(
    (data) => {
      console.log(data);
    },
          this.route.navigate(['/utilisateur'])

  )
}

afficherFrmConnexion() {
throw new Error('Method not implemented.');
}
role: any;
exactRole: any;
verifRole: any;
statut: any;
getFile($event: Event) {
throw new Error('Method not implemented.');
}
// exactNomexactnomcomplet: any;
// exactnomcomplet: any;
// verifNom: any;
// exactEmail: any;
// verifEmail: any;
// email: any;
// password: any | undefined | undefined;
// exactPassword: any;
// verifPassword: any;
// onInscrire() {
// throw new Error('Method not implemented.');
// }
showFrmConnexion: any;

}

