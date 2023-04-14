const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => {
        return (
          <div key={person.id}>
            <div>
              <img
                src={person.image ? person.image.medium : 'Not-Found.png'}
                alt={person.name}
              />
            </div>
            <div>
              <p>
                {person.name} | {character.name}
                {voice && '| Voiceover'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
