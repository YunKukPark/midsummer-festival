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
    id: '2',
    bandName: '물수제비',
    setLists: [
      {
        id: '1',
        title: 'Start',
        artist: 'Depapepe',
      },
      {
        id: '2',
        title: '시작',
        artist: '가호',
      },
      {
        id: '3',
        title: '꿈나라별나라',
        artist: '잔나비',
      },
      {
        id: '4',
        title: '소멸탈출',
        artist: '넬 (NELL)',
      },
      {
        id: '5',
        title: '흰수염고래',
        artist: 'YB',
      },
      {
        id: '6',
        title: 'Californication',
        artist: 'RHCP',
      },
      {
        id: '7',
        title: '풍문으로 들었소',
        artist: '장기하와 얼굴들',
      },
      {
        id: '8',
        title: '30/90',
        artist: 'Andrew',
      },
      {
        id: '9',
        title: 'We Are The One',
        artist: 'PSY',
      },
      {
        id: '10',
        title: '그대에게',
        artist: '신해철',
      },
    ],
    member: ['두두', '사진', '서진', '파도', '형빈', '레핑'],
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
    // TODO: 플레이리스트 수정
    playListSrc:
      'https://youtube.com/playlist?list=PLjfcbdZ779kOuRWjwTNOTwI3OQluG27ru&si=qLqJDs6n5x_gbOLT',
  },
  {
    id: '3',
    bandName: '버르장머리',
    setLists: [
      {
        id: '1',
        title: '밤은 짧아 걸어 아가씨야',
        artist: '로맨틱펀치',
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
        title: 'Radio',
        artist: '트랜스픽션',
      },
      {
        id: '6',
        title: 'Destiny',
        artist: 'SURL',
      },
      {
        id: '7',
        title: '촛불하나',
        artist: '칠전팔기 OST',
      },
      {
        id: '8',
        title: 'Butterfly',
        artist: '전용호',
      },
      {
        id: '9',
        title: '캐롤',
        artist: '',
      },
      {
        id: '10',
        title: '친구들과 바다에서 (가제)',
        artist: '박세하',
      },
    ],
    member: ['승', '예명', '세하', '펭수', '레이', '레아'],
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
