import React from 'react';
import Card from './Card';

const Lineup = ({ id }: { id: string }) => {
  return (
    <section id={id} className="container lineup flex flex-col gap-8 py-8">
      {LINEUP_INFO.map(({ id, ...info }) => (
        <Card key={id} {...info} />
      ))}
    </section>
  );
};

export default Lineup;

const LINEUP_INFO = [
  {
    id: '1',
    bandName: '지은진',
    setLists: [
      {
        id: '1',
        title: 'Officially missing you',
        artist: 'Tamia',
      },
      {
        id: '2',
        title: '한번만',
        artist: '이지은',
      },
      {
        id: '3',
        title: '나의 사춘기에게',
        artist: '볼빨간 사춘기',
      },
      {
        id: '4',
        title: '말해',
        artist: '은진',
      },
      {
        id: '5',
        title: '밤하늘의 별을',
        artist: '경서예지',
      },
      {
        id: '6',
        title: '아틀란티스 소녀',
        artist: '보아',
      },
      {
        id: '7',
        title: '보고싶었어',
        artist: 'WSG 워너비',
      },
      {
        id: '8',
        title: '좋은 사람 있으면 소개시켜줘',
        artist: '미도와 파라솔',
      },
      {
        id: '9',
        title: '사건의 지평선',
        artist: '윤하',
      },
    ],
    member: ['지은', '은진', '예준', '혁균', '주영'],
    images: [
      '/assets/images/jienjin/thumbnail.jpeg',
      '/assets/images/jienjin/001.jpeg',
      '/assets/images/jienjin/003.jpeg',
      '/assets/images/jienjin/004.jpeg',
    ],
    playListSrc:
      'https://youtube.com/playlist?list=PLlpU4c_oe3mtj21PkgPsc7vH-V1MugQRi',
  },
  {
    id: '2',
    bandName: '물수제비',
    setLists: [
      {
        id: '1',
        title: 'Dark Necessities',
        artist: 'Red Hot Chili Peppers',
      },
      {
        id: '2',
        title: "Can't Take My Eyes Off You",
        artist: 'MUSE',
      },
      {
        id: '3',
        title: '우리의 밤은 당신의 낮보다 아름답다',
        artist: '너도 나도 너드',
      },
      {
        id: '4',
        title: 'Shooting Stars',
        artist: '엔플라잉',
      },
      {
        id: '5',
        title: '오르트구름',
        artist: '윤하',
      },
      {
        id: '6',
        title: 'Piano Man',
        artist: 'Billy Joel',
      },
      {
        id: '7',
        title: '그대에게',
        artist: '신해철',
      },
      {
        id: '8',
        title: '예술이야',
        artist: '싸이',
      },
    ],
    member: ['두두', '사진', '서진', '파도', '팬더', '레핑'],
    images: [
      '/assets/images/waterSujebi/thumbnail.jpeg',
      '/assets/images/waterSujebi/001.jpeg',
      '/assets/images/waterSujebi/002.jpeg',
      '/assets/images/waterSujebi/003.jpeg',
      '/assets/images/waterSujebi/004.jpeg',
      '/assets/images/waterSujebi/005.jpeg',
      '/assets/images/waterSujebi/006.jpeg',
      '/assets/images/waterSujebi/007.jpeg',
      '/assets/images/waterSujebi/009.jpeg',
      '/assets/images/waterSujebi/010.jpeg',
    ],
    playListSrc:
      'https://youtube.com/playlist?list=PLlpU4c_oe3muUBGPFh2GbCbZeWHoZWgbG',
  },
  {
    id: '3',
    bandName: '버르장머리',
    setLists: [
      {
        id: '1',
        title: '좋다',
        artist: '데이브레이크',
      },
      {
        id: '2',
        title: 'Knock out',
        artist: '박세하',
      },
      {
        id: '3',
        title: 'LEON',
        artist: '박세하',
      },
      {
        id: '4',
        title: 'K.O',
        artist: '박세하',
      },
      {
        id: '5',
        title: 'See Your Eyes',
        artist: '잔나비',
      },
      {
        id: '6',
        title: 'Butterfly',
        artist: '전용호',
      },
      {
        id: '7',
        title: '내가 사랑한 모든것들은 나를 눈물짓게 할테니까',
        artist: '모브닝',
      },
      {
        id: '8',
        title: '좋지 아니한가',
        artist: '크라잉넛',
      },
    ],
    member: ['승', '세하', '펭수', '레이', '레아'],
    images: [
      '/assets/images/burzangmori/thumbnail.png',
      '/assets/images/burzangmori/001.jpeg',
      '/assets/images/burzangmori/002.jpeg',
      '/assets/images/burzangmori/004.jpeg',
      '/assets/images/burzangmori/003.jpeg',
      '/assets/images/burzangmori/005.jpeg',
    ],
    playListSrc:
      'https://youtube.com/playlist?list=PLlpU4c_oe3msSUrw2daBrpIRTzwINEEPV',
  },
];
