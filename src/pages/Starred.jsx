import AppTitle from '../components/AppTitle';
import { useStarredShows } from '../lib/useStarredShows';
const Starred = () => {
  const [starredShow] = useStarredShows();
  return (
    <div>
      <AppTitle />
      <div>Starred {starredShow.length}</div>
    </div>
  );
};

export default Starred;
