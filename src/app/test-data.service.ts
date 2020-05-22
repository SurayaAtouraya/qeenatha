import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from './components/song/song-list-item/song-list-item.component';
import { Artist } from './components/artist/artist-list-item/artist-list-item.component';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {

  private albumListItemsTestData = [
    {
      albumName: 'Nishmi',
      albumArtist: 'Ashur Bet Sargis',
      albumYear: '2017',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8'
    },
    {
      albumName: 'Dashta D\'Nineveh',
      albumArtist: 'Ashur Bet Sargis',
      albumYear: '2008',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39'
    },
    {
      albumName: 'Immortal Memories',
      albumArtist: 'Ashur Bet Sargis',
      albumYear: '1998',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6'
    },
    {
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumArtist: 'Ashur Bet Sargis',
      albumYear: '1996',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5'
    },
    {
      albumName: 'Nora Aldyiana',
      albumArtist: 'Ashur Bet Sargis',
      albumYear: '1995',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189'
    }
  ];

  private albumCardsTestData = [
    {
      albumName: 'Nishmi',
      albumYear: '2017',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8'
    },
    {
      albumName: 'Dashta D\'Nineveh',
      albumYear: '2008',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39'
    },
    {
      albumName: 'Immortal Memories',
      albumYear: '1998',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6'
    },
    {
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumYear: '1996',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5'
    },
    {
      albumName: 'Nora Aldyiana',
      albumYear: '1995',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189'
    }
  ];

  private albumHeaderTestData = [
    {
      albumName: 'Nishmi',
      albumYear: '2017',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      albumArtist: 'Ashur Bet Sargis',
      songCount: 10,
      albumDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      albumName: 'Dashta D\'Nineveh',
      albumYear: '2008',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      albumArtist: 'Ashur Bet Sargis',
      songCount: 12,
      albumDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      albumName: 'Immortal Memories',
      albumYear: '1998',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      albumArtist: 'Ashur Bet Sargis',
      songCount: 10,
      albumDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumYear: '1996',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      albumArtist: 'Ashur Bet Sargis',
      songCount: 6,
      albumDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      albumName: 'Nora Aldyiana',
      albumYear: '1995',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      albumArtist: 'Ashur Bet Sargis',
      songCount: 6,
      albumDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ];

  // songName: string;
  // artistID: string;
  // artistName: string;
  // albumID: string;
  // albumName: string;
  // albumCover: string;
  // songLength: string;
  // songNumber?: string;

  private songsTestData = [
    // Nishmi
    {
      songName: 'Nishmi',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '6:59',
      songNumber: '1',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Nishmi.mp3'
    },
    // Modewa Nesha
    {
      songName: 'Modewa Nesha',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '5:38',
      songNumber: '2',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Modewa Nesha.mp3'
    },
    // Sehbota
    {
      songName: 'Sehbota',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '6:37',
      songNumber: '3',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Sehbota.mp3'
    },
    // Khoba Shapera
    {
      songName: 'Khoba Shapera',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '5:01',
      songNumber: '4',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Khoba Shapera.mp3'
    },
    // Akmaleh
    {
      songName: 'Akmaleh',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '6:06',
      songNumber: '5',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Akmaleh.mp3'
    },
    // Malikta D'Marra
    {
      songName: 'Malikta D\'Marra',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '4:09',
      songNumber: '6',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Malikta Dmarra.mp3'
    },
    // Khikwa Rama
    {
      songName: 'Khikwa Rama',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '5:16',
      songNumber: '7',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Kikhwa Rama.mp3'
    },
    // Sara Khata
    {
      songName: 'Sara Khata',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '4:04',
      songNumber: '8',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Sara Khata.mp3'
    },
    // Hala Leten
    {
      songName: 'Hala Leten',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nishmi',
      albumName: 'Nishmi',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      songLength: '4:12',
      songNumber: '9',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nishmi/Hala Leten.mp3'
    },


    // Sahda
    {
      songName: 'Sahda',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '6:27',
      songNumber: '1',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Sahda.mp3'
    },
    // Nishwa
    {
      songName: 'Nishwa',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '5:15',
      songNumber: '2',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Nishwa.mp3'
    },
    // Sehpa
    {
      songName: 'Sehpa',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '6:55',
      songNumber: '3',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Sehpa.mp3'
    },
    // Yoqra
    {
      songName: 'Yoqra',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '5:58',
      songNumber: '4',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Yoqra.mp3'
    },
    // Sip'reh
    {
      songName: 'Sip\'reh',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '6:09',
      songNumber: '5',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Sip\'reh.mp3'
    },
    // Ktawa go Shosha
    {
      songName: 'Ktawa go Shosha',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '8:12',
      songNumber: '6',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Ktawa go Shosha.mp3'
    },
    // Dashta D'Nineveh
    {
      songName: 'Dashta D\'Nineveh',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '5:39',
      songNumber: '7',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Dashta D\'Nineveh.mp3'
    },
    // Qup'pas
    {
      songName: 'Qup\'pas',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '7:11',
      songNumber: '8',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Qup\'pas.mp3'
    },
    // Tin'na
    {
      songName: 'Tin\'na',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '7:18',
      songNumber: '9',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Tin\'na.mp3'
    },
    // La Lakha Letwa
    {
      songName: 'La Lakha Letwa',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '5:29',
      songNumber: '10',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/La Lakha Letwa.mp3'
    },
    // Tda'alta
    {
      songName: 'Tda\'alta',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '6:38',
      songNumber: '11',
      audioSrc: '../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Tda\'alta.mp3'
    },
    // Yim'me
    {
      songName: 'Yim\'me',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Dashta D\'Nineveh',
      albumName: 'Dashta D\'Nineveh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      songLength: '4:39',
      songNumber: '12',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Dashta D\'Nineveh/Yim\'me.mp3'
    },

    // Tkharo Peshaneh
    {
      songName: 'Tkharo Peshaneh',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '3:22',
      songNumber: '1',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Tkharo Peshaneh.mp3'
    },
    // Lebba Chera
    {
      songName: 'Lebba Chera',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '5:48',
      songNumber: '2',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Lebba Chera.mp3'
    },
    // Alo La Meteeli
    {
      songName: 'Alo La Meteeli',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '5:22',
      songNumber: '3',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Alo La Meteeli.mp3'
    },
    // Dour Kesli
    {
      songName: 'Dour Kesli',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '5:02',
      songNumber: '4',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Dour Kesli.mp3'
    },
    // Brata D\'Shamiram
    {
      songName: 'Brata D\'Shamiram',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '7:13',
      songNumber: '5',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Brata D\'Shamiram.mp3'
    },
    // Gipta D\'Anwe
    {
      songName: 'Gipta D\'Anwe',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '4:47',
      songNumber: '6',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Gipta D\'Anwe.mp3'
    },
    // Qasra D\'Khoolma
    {
      songName: 'Qasra D\'Khoolma',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '7:32',
      songNumber: '7',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Qasra D\'Khoolma.mp3'
    },
    // Len Bekhshawa
    {
      songName: 'Len Bekhshawa',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '4:51',
      songNumber: '8',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Len Bekhshawa.mp3'
    },
    // Lenwa Bespara
    {
      songName: 'Lenwa Bespara',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '4:57',
      songNumber: '9',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Lenwa Bespara.mp3'
    },
    // Kma Qayrah Pokha
    {
      songName: 'B\' Yawinakh Khayee',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Immortal Memories',
      albumName: 'Immortal Memories',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      songLength: '5:31',
      songNumber: '10',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Immortal Memories/Kma Qayrah Pokha.mp3'
    },

    // ALBUM: Ana Lewin Min Daha Doonyeh
    // Shwoty
    {
      songName: 'Shwoty',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '6:41',
      songNumber: '1',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Shwoty.mp3'
    },
    // Khoba D'Yimma
    {
      songName: 'Khoba D\'Yimma',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '6:23',
      songNumber: '2',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Khoba D\'Yimma.mp3'
    },
    // Tdoowa
    {
      songName: 'Tdoowa',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '6:27',
      songNumber: '3',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Tdoowa.mp3'
    },
    // Gamee D'Mowta
    {
      songName: 'Gamee D\'Mowta',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '5:26',
      songNumber: '4',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Gamee D\'Mowta.mp3'
    },
    // Zareera Lojana
    {
      songName: 'Zareera Lojana',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '5:07',
      songNumber: '5',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Zareera Lojana.mp3'
    },
    // Ana Lewin Min Daha Doonyeh
    {
      songName: 'Ana Lewin Min Daha Doonyeh',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Ana Lewin Min Daha Doonyeh',
      albumName: 'Ana Lewin Min Daha Doonyeh',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      songLength: '9:04',
      songNumber: '6',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Ana Lewin Min Daha Doonyeh/Ana Lewin Min Daha Doonyeh.mp3'
    },

    // ALBUM: Nora Aldyiana
    // Malektee Tdleeta
    {
      songName: 'Malektee Tdleeta',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '5:20',
      songNumber: '1',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Malektee Tdleeta.mp3'
    },
    // Qa Moody Wat Bilyamy
    {
      songName: 'Qa Moody Wat Bilyamy',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '7:19',
      songNumber: '2',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Qa Moody Wat Bilyamy.mp3'
    },
    // Nora Aldyiana
    {
      songName: 'Nora Aldyiana',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '7:33',
      songNumber: '3',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Nora Aldyiana.mp3'
    },
    // Tarra D'khoolmany
    {
      songName: 'Tarra D\'khoolmany',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '6:27',
      songNumber: '4',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Tarra D\'khoolmany.mp3'
    },
    // Nahra d'Gazarta
    {
      songName: 'Nahra d\'Gazarta',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '5:50',
      songNumber: '5',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Nahra D\'Gazarta.mp3'
    },
    // Brata d'Bet Nahrain
    {
      songName: 'Brata d\'Bet Nahrain',
      artistID: 'Ashur Bet Sargis',
      artistName: 'Ashur Bet Sargis',
      albumID: 'Nora Aldyiana',
      albumName: 'Nora Aldyiana',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      songLength: '5:31',
      songNumber: '6',
      audioSrc: '../../../assets/Test Data/Songs/Ashur Bet Sargis/Nora Aldyiana/Brata d\'Bet Nahrain.mp3'
    },
  ];

  // private searchSongsTestData = [
  //   // Nishmi
  //   {
  //     songName: 'Nishmi',
  //     artistID: 'Ashur Bet Sargis',
  //     artistName: 'Ashur Bet Sargis',
  //     albumID: 'Nishmi',
  //     albumName: 'Nishmi',
  //     albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
  //     songLength: '6:59',
  //     songNumber: '1'
  //   },
  //   // Zareera Lojana
  //   {
  //     songName: 'Zareera Lojana',
  //     artistID: 'Ashur Bet Sargis',
  //     artistName: 'Ashur Bet Sargis',
  //     albumID: 'Ana Lewin Min Daha Doonyeh',
  //     albumName: 'Ana Lewin Min Daha Doonyeh',
  //     albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
  //     songLength: '5:07',
  //     songNumber: '5'
  //   },
  //   // Nahra d'Gazarta
  //   {
  //     songName: 'Nahra d\'Gazarta',
  //     artistID: 'Ashur Bet Sargis',
  //     artistName: 'Ashur Bet Sargis',
  //     albumID: 'Nora Aldyiana',
  //     albumName: 'Nora Aldyiana',
  //     albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
  //     songLength: '5:50',
  //     songNumber: '5'
  //   },
  // ];

  private artistTestData = [
    {
      artistName: 'Ashur Bet Sargis',
      artistCoverPhoto: 'https://www.qeenatha.com/qartistimg/1024/1024/0/0ec6d94_14photo.jpg',
      artistDescription: 'Ashur Bet Sargis (Syriac: ܐܫܘܪ ܒܝܬ ܣܪܓܝܤ‎, born 2 July 1949) is an Assyrian singer, composer, guitarist and activist. He became famous in the Assyrian communities worldwide for his nationalistic songs in the 1970s. His career peaked, and became prominent, in the 1990s with five albums released within that decade. His songs usually tend to be sentimental ballads and anthems, although he has made a number of folk dance music as well. To the contrast of his Assyrian peers in music, Ashur\'s music is slow and mellow. He is also known for incorporating Greek musical instruments such as Tambouras to his music.',
      artistSubscribers: '2.7K',
      albumCount: 5
    }
  ];

  private playlistSongData = [
    {
      playlistID: '1',
      songs: [
        this.songsTestData[0],
        this.songsTestData[15],
        this.songsTestData[23],
        this.songsTestData[24],
        this.songsTestData[25],
        this.songsTestData[26],
        this.songsTestData[29],
        this.songsTestData[30],
        this.songsTestData[34],
        this.songsTestData[35],
        this.songsTestData[38],
        this.songsTestData[40]
      ]
    }
  ];


  private playlistData = [
    {
      playlistCover: '../../../../assets/defaultPlaylistLogo.png',
      playlistName: 'Create Playlist',
      songCount: null,
      playlistID: '0'
    },
    {
      playlistCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/defaultPlaylistLogo.png?alt=media&token=491fd193-a1a2-49dd-8b73-29e88b9f23f6',
      playlistName: 'Best of Ashur Bet Sargis',
      songCount: 12,
      playlistID: '1'
    }
  ];

  // ADD HERE
  private billboardData = [
    // Immortal Memories
    {
      songName: 'B\' Yawinakh Khayee',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '1',
      lastWeekPosition: '1',
      change: '0',
      peak: '1',
      duration: '30',
    },
    // Nora Aldiyana
    {
      songName: 'Nora Aldyiana',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      position: '2',
      lastWeekPosition: '3',
      change: '1',
      peak: '1',
      duration: '41',
    },
    {
      songName: 'Nahra d\'Gazarta',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      position: '3',
      lastWeekPosition: '2',
      change: '-1',
      peak: '1',
      duration: '43',
    },
    // Ana lewin min daha doonyeh
    {
      songName: 'Shwoty',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      position: '4',
      lastWeekPosition: '6',
      change: '2',
      peak: '2',
      duration: '24',
    },
    {
      songName: 'Gipta D\'Anwe',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '5',
      lastWeekPosition: '4',
      change: '1',
      peak: '3',
      duration: '35',
    },
    {
      songName: 'Brata D\'Shamiram',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '6',
      lastWeekPosition: '5',
      change: '-1',
      peak: '5',
      duration: '18',
    },
    // Nishmi
    {
      songName: 'Nishmi',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      position: '7',
      lastWeekPosition: '10',
      change: '3',
      peak: '4',
      duration: '29',
    },
    {
      songName: 'Akmaleh',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      position: '8',
      lastWeekPosition: '15',
      change: '7',
      peak: '8',
      duration: '17',
    },
    {
      songName: 'Zareera Lojana',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      position: '9',
      lastWeekPosition: '21',
      change: '12',
      peak: '9',
      duration: '12',
    },
    {
      songName: 'Alo La Meteeli',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '10',
      lastWeekPosition: '7',
      change: '-3',
      peak: '7',
      duration: '9',
    },
    {
      songName: 'Qasra D\'Khoolma',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '11',
      lastWeekPosition: '9',
      change: '-2',
      peak: '9',
      duration: '11',
    },
    {
      songName: 'Ana Lewin Min Daha Doonyeh',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      position: '12',
      lastWeekPosition: '8',
      change: '-4',
      peak: '3',
      duration: '15',
    },
    {
      songName: 'Brata d\'Bet Nahrain',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      position: '13',
      lastWeekPosition: '12',
      change: '-1',
      peak: '7',
      duration: '9',
    },
    {
      songName: 'Sehbota',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      position: '14',
      lastWeekPosition: '11',
      change: '-3',
      peak: '10',
      duration: '6',
    },
    {
      songName: 'Brata d\'Bet Nahrain',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '15',
      lastWeekPosition: '16',
      change: '1',
      peak: '15',
      duration: '10',
    },
    // Dashta D'Nineveh
    {
      songName: 'Dashta D\'Nineveh',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      position: '16',
      lastWeekPosition: '13',
      change: '3',
      peak: '2',
      duration: '46',
    },
    {
      songName: 'Yoqra',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      position: '17',
      lastWeekPosition: '14',
      change: '-3',
      peak: '11',
      duration: '8',
    },
    {
      songName: 'Modewa Nesha',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      position: '18',
      lastWeekPosition: '20',
      change: '2',
      peak: '17',
      duration: '5',
    },
    {
      songName: 'Tdoowa',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      position: '19',
      lastWeekPosition: '17',
      change: '-2',
      peak: '15',
      duration: '8',
    },
    {
      songName: 'Lebba Chera',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/immortal.jpg?alt=media&token=a0ee5ed4-5952-4915-8255-9288e07df7d6',
      position: '20',
      lastWeekPosition: '18',
      change: '-2',
      peak: '8',
      duration: '4',
    },
    {
      songName: 'Khikwa Rama',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      position: '21',
      lastWeekPosition: '22',
      change: '1',
      peak: '21',
      duration: '6',
    },
    {
      songName: 'Tarra D\'khoolmany',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/5.jpg?alt=media&token=269c1994-054a-4f27-a083-6e76a6ba8189',
      position: '22',
      lastWeekPosition: '19',
      change: '-3',
      peak: '19',
      duration: '3',
    },
    {
      songName: 'Yim\'me',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      position: '23',
      lastWeekPosition: '23',
      change: '0',
      peak: '22',
      duration: '4',
    },
    {
      songName: 'Khoba D\'Yimma',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/3.jpg?alt=media&token=4718a7f0-4908-4d81-a479-22663583a6b5',
      position: '24',
      lastWeekPosition: null,
      change: '2',
      peak: '24',
      duration: '1',
    },
    {
      songName: 'Qup\'pas',
      artistName: 'Ashur Bet Sargis',
      albumCover: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/dashta.jpg?alt=media&token=ce441a8a-59e0-49a3-b867-4496cab07b39',
      position: '25',
      lastWeekPosition: '24',
      change: '-1',
      peak: '24',
      duration: '2',
    }
  ];

  public albumSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(this.songsTestData);
  public newestSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(this.songsTestData);
  public allSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(this.songsTestData);
  public searchSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(this.songsTestData);

  public searchAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(this.albumListItemsTestData);
  public searchArtists: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>(this.artistTestData);

  public albumHeaders: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(this.albumHeaderTestData);


  public savedAlbums: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>([]);
  public likedSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>([]);
  private likedSongsData = [];
  public playlists: BehaviorSubject<Playlist[]> = new BehaviorSubject<Playlist[]>(this.playlistData);
  public playlistSongs: BehaviorSubject<PlaylistSongs[]> = new BehaviorSubject<PlaylistSongs[]>(this.playlistSongData);
  public subscribedArtists: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>(this.artistTestData);


  // /home route, newest songs (take 8 random ones from this list)

  public newestAlbumCards: BehaviorSubject<Album[]> = new BehaviorSubject<Album[]>(this.albumCardsTestData);
  public newestArtists: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>(this.artistTestData);


  public billboardSongs: BehaviorSubject<Song[]> = new BehaviorSubject<Song[]>(this.billboardData);
  constructor() {}

    // TEMP THESE ARE ONLY FOR TEST DATA WILL REMOVE EVENTUALLY

    addToLikedSongs(song: Song) {
      this.likedSongsData.push(song);
      this.likedSongs.next(this.likedSongsData);
    }

    removeFromLikedSongs(song: Song) {
        for (var i = 0; i <= this.likedSongsData.length; i++) {
          if (this.likedSongsData[i].songName === song.songName) {
            this.likedSongsData.splice(i, 1);
            break;
          }
        }
        this.likedSongs.next(this.likedSongsData);
    }
}

export interface BillboardSong {
  songName: string;
  artistID?: string;
  artistName: string;
  albumID?: string;
  albumName?: string;
  albumCover: string;
  songNumber?: string;
  position: number;
  lastWeekPosition: number;
  change: string;
  peak: number;
  duration: number;
}

export interface Album {
  albumName: string;
  albumYear: string;
  albumCover: string;
  albumArtist?: string;
  albumDescription?: string;
  albumID?: string;
  songCount?: number;
}

export interface Playlist {
  playlistName: string;
  songCount?: number;
  playlistCover?: string;
  playlistID?: string;
}

export interface PlaylistSongs {
  songs: Song[];
  playlistID: string;
}

