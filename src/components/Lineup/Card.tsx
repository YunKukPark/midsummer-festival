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
}

const Card = (props: ICard) => {
  const { bandName, setLists, member } = props;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://picsum.photos/400"
          alt="Album"
          width={600}
          height={600}
        />
      </figure>
      <div className="card-body gap-6">
        <div className="title-wrapper flex flex-col gap-1">
          <h2 className="card-title">{bandName}</h2>
          <ul className="flex gap-2 w-full">
            {member.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div className="title-wrapper flex flex-col gap-1">
          <h2 className="card-title">SET LIST</h2>
          <ul className="flex flex-col gap-2">
            {setLists.map(({ id, title, artist }) => (
              <li
                key={id}
                className="overflow-hidden text-ellipsis whitespace-nowrap w-full text-base-content"
              >
                <span>{title}</span> - <span>{artist}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
