import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private http = inject(HttpClient);
 private apiUrl = 'https://marketpoint-backend.onrender.com/users';

  obtenerUsuarios() {
    return this.http.get<any[]>(this.apiUrl);
  }

  cambiarEstado(id: number) {
    return this.http.patch<any>(`${this.apiUrl}/${id}/toggle-status`, {});
  }
}
