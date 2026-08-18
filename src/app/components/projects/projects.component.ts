import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  modalVisible = false;
  videoModalVisible = false;
  modalTitle = '';
  modalDescription = '';
  modalLanguages = '';
  videoSrc = '';

  @ViewChild('videoPlayer') videoPlayerRef: ElementRef | undefined;

  projects = [

  {
    title: 'Njabatech',
    category: 'E-commerce',
    image: 'assets/images/site.png',
    description:
      'Plateforme e-commerce permettant de présenter et commercialiser des produits en ligne.',
    languages: 'ReactJS, TypeScript, CSS',
    siteUrl: 'https://njabatech.com'
  },

  {
    title: 'Passbi',
    category: 'Application mobile',
    image: 'assets/images/passbi1.png',
    description:
      'Application mobile développée pour faciliter la gestion et l’utilisation des services liés au transport.',
    languages: 'React Native, Expo, API REST',
    appurl:
      'https://play.google.com/store/apps/details?id=com.senpassbi.app&hl=fr'
  },

  {
    title: 'Gestion des GIE',
    category: 'Application mobile',
    image: 'assets/images/nn.png',
    description:
      'Application mobile destinée à faciliter la gestion des activités et des opérations des GIE.',
    languages: 'React Native, Expo, API REST',
    appurl:
      'https://play.google.com/store/apps/details?id=com.njabatech.app&hl=fr'
  },

  {
    title: 'Réseau social des tailleurs',
    category: 'Application web',
    image: 'assets/images/tailleur.png',
    description:
      'Plateforme permettant aux tailleurs de présenter leurs créations et de développer leur présence en ligne.',
    languages: 'ReactJs, Tailwind CSS, TypeScript',
    gtihubURL:
      'https://github.com/PROJET-ODC/projet-tailleur-front'
  },

  {
    title: 'Gestion Client',
    category: 'Backend',
    image: 'assets/images/image.png',
    description:
      'Application de gestion permettant d’organiser et de centraliser les informations des clients.',
    languages: 'Node.js, Prisma, MongoDB',
    gtihubURL:
      'https://github.com/seckrama/GestClient'
  },

  {
    title: 'Gestion Hôtel',
    category: 'Application web',
    image: 'assets/images/sunuHotel.png',
    description:
      'Interface web dédiée à la gestion des opérations d’un établissement hôtelier.',
    languages: 'HTML, CSS',
    gtihubURL:
      'https://github.com/Ramaseck1/Gestion-Hotel'
  }

];

  openModal(project: any) {
    this.modalTitle = project.title;
    this.modalDescription = project.description;
    this.modalLanguages = project.languages;
    this.modalVisible = true;
  }

  
  closeModal() {
    this.modalVisible = false;
    this.videoModalVisible = false;
  }

  openVideoModal(videoUrl: string) {
    this.videoSrc = videoUrl;
    this.videoModalVisible = true;
  }
  
}
