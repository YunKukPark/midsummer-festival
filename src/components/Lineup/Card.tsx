import Image from 'next/image';
import React from 'react';
import css from './Card.module.css';

type SetListType = {
  id: string;
  title: string;
  artist: string;
};

interface ICard {
  bandName: string;
  setLists: SetListType[];
  member: string[];
  images: string[];
  playListSrc: string;
}

const Card = (props: ICard) => {
  const { bandName, setLists, member, images, playListSrc } = props;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="flex flex-1 justify-items-center">
        <div
          className="w-64 carousel rounded-box data-te-carousel-init
  data-te-carousel-slide md:w-full"
        >
          {images.map(image => (
            <div
              key={image}
              className={`${css.carouselImage} carousel-item w-full`}
            >
              <Image
                width={800}
                height={800}
                src={image}
                priority
                className="w-full"
                alt={`${bandName} 프로필 이미지`}
              />
            </div>
          ))}
        </div>
      </figure>
      <div className="card-body gap-6 flex-1">
        <div className="title-wrapper flex flex-col gap-1">
          <h2 className="card-title md:text-4xl">
            📍{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
              {bandName}
            </span>
          </h2>
          <hr className="my-2 border-none h-[1px] bg-gray-400" />
          <ul className="flex gap-2 w-full md:text-lg">
            {member.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="title-wrapper flex flex-col gap-1">
          <h2 className="card-title font-bold md:text-2xl">SET LIST</h2>
          <ul className="flex flex-col gap-2 md:text-lg">
            {setLists.map(({ id, title, artist }) => (
              <li
                key={id}
                className="overflow-hidden text-ellipsis whitespace-nowrap w-full text-base-content"
              >
                <span>• {title}</span> - <span>{artist}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={playListSrc} target="_blank">
            플리 예습하기 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
