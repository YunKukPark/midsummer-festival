import React from 'react';

type SetListType = {
  id: string;
  title: string;
  artist: string;
};

type Session =
  | 'firstGuitar'
  | 'secondGuitar'
  | 'bass'
  | 'drum'
  | 'keyboard'
  | 'vocal';

type SessionType = Record<Session, string>;

interface ICard {
  bandName: string;
  setLists: SetListType[];
  session: SessionType;
}

const Card = (props: ICard) => {
  const { bandName, setLists, session } = props;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://picsum.photos/400" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bandName}</h2>
        {Object.entries(session)
          .filter(([, assignee]) => assignee)
          .map(([inst, assignee]) => (
            <p key={inst} className="text-sm text-gray-500">
              {inst}: {assignee}
            </p>
          ))}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
