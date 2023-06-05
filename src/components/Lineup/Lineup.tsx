import React from 'react';
import Card from './Card';

const Lineup = () => {
  return (
    <section className="container lineup flex flex-col gap-8 py-8">
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
        title: '아틀란티스 소녀',
        artist: '보아',
      },
      {
        id: '3',
        title: '사랑하게 될 줄 알았어',
        artist: '전미도',
      },
      {
        id: '4',
        title: '바람',
        artist: '최유리',
      },
      {
        id: '5',
        title: '한번만',
        artist: '이지은',
      },
      {
        id: '6',
        title: '말해',
        artist: '은진',
      },
      {
        id: '7',
        title: '연주곡',
        artist: '지은진',
      },
      {
        id: '8',
        title: '나의 사춘기에게',
        artist: '볼빨간 사춘기',
      },
      {
        id: '9',
        title: 'Eight(에잇)',
        artist: '아이유',
      },
      {
        id: '10',
        title: '보고싶었어',
        artist: 'WSG 워너비',
      },
      {
        id: '11',
        title: '사건의 지평선',
        artist: '윤하',
      },
    ],
    session: {
      firstGuitar: '예준 🎸',
      secondGuitar: '혁균 🪕',
      bass: '',
      drum: '',
      keyboard: '주영 🎹',
      vocal: '지은, 은진 🎤',
    },
  },
  {
    id: '2',
    bandName: '물수제비 🌊',
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
      {
        id: '9',
        title: '좋다 좋아',
        artist: '딕펑스',
      },
    ],
    session: {
      firstGuitar: '사진 🎸',
      secondGuitar: '서진 🎸',
      bass: '파도 🎸',
      drum: '팬더 🥁',
      keyboard: '레핑 🎹',
      vocal: '두두, 사진, 서진 🎤',
    },
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
    session: {
      firstGuitar: '승 🎸',
      secondGuitar: '펭수, 세하 🎸',
      bass: '세하, 펭수 🎸',
      drum: '레이 🥁',
      keyboard: '레아 🎹',
      vocal: '승, 세하 🎤',
    },
  },
];
