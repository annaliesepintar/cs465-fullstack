// Create a new file: debug.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {
  log(message: string, data?: any): void {
    console.log(`DEBUG: ${message}`, data || '');
  }
}