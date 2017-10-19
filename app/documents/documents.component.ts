import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "pooopoooo",
      file_url: "google.com",
      updated_at: '10/19/17',
      image_url: "googol.com",
    },
    {
      title: "My First Doc",
      description: "pooopoooo",
      file_url: "google.com",
      updated_at: '10/19/17',
      image_url: "googol.com",
    },
    {
      title: "My First Doc",
      description: "pooopoooo",
      file_url: "google.com",
      updated_at: '10/19/17',
      image_url: "googol.com",
    },
  ]
}